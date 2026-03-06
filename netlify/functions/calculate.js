// netlify/functions/calculate.js
// Staffona Payroll Calculator — server-side engine
// Formula: exact replica of EGPayslip calculate_progressive_tax SQL
// ⚠️  Do NOT expose this file or commit to a public repo without protection

const D = {
  // Tax formula hardcoded in progressiveTax() — exact replica of EGPayslip calculate_progressive_tax SQL
  si_emp:    0.11,    // employee: pension 9% + health 1% + EOS 1%
  si_er:     0.1875,  // employer: pension 10% + health 3.25% + injury 2% + unemployment 1% + EOS 2.5%
  si_min:    2700,
  si_max:    16700,
  ex_std:    20000,   // annual personal exemption (standard)
  ex_dis:    30000,   // annual personal exemption (disabled)
  martyrs:   0.0005,  // Martyrs & Victims Fund: 0.05% of gross
  med_er_multiplier: 1, // employer passes monthly premium (1x) as entered
  disc: "Calculations are indicative and based on current Egyptian tax and social insurance regulations. Powered by EGPayslip. For official payroll processing, consult a licensed payroll provider."
};

function progressiveTax(t) {
    if (t <= 0)          return 0;
    if (t <= 40000)      return 0;
    if (t <= 55000)      return (t - 40000) * 0.10;
    if (t <= 70000)      return (t - 55000) * 0.15 + 1500;
    if (t <= 200000)     return (t - 70000) * 0.20 + 1500 + 2250;
    if (t <= 400000)     return (t - 200000) * 0.225 + 1500 + 2250 + 26000;
    if (t <= 600000)     return (t - 400000) * 0.25 + 1500 + 2250 + 26000 + 45000;
    // HIGH-INCOME BRACKET ADJUSTMENTS (bracket merging)
    if (t <= 700000)     return (t - 400000) * 0.25 + 1500 + 2250 + 26000 + 45000 + 4000;
    if (t <= 800000)     return (t - 400000) * 0.25 + 1500 + 2250 + 26000 + 45000 + 6750;
    if (t <= 900000)     return (t - 400000) * 0.25 + 1500 + 2250 + 26000 + 45000 + 10250;
    if (t <= 1200000)    return (t - 400000) * 0.25 + 1500 + 2250 + 26000 + 45000 + 15250;
    return (t - 1200000) * 0.275 + 300000;
}

function bracketRows(taxableA) {
  const brackets = [
    {min:0,       max:40000,    rate:0.00, label:'0%'},
    {min:40000,   max:55000,    rate:0.10, label:'10%'},
    {min:55000,   max:70000,    rate:0.15, label:'15%'},
    {min:70000,   max:200000,   rate:0.20, label:'20%'},
    {min:200000,  max:400000,   rate:0.225,label:'22.5%'},
    {min:400000,  max:600000,   rate:0.25, label:'25%'},
    {min:600000,  max:1200000,  rate:0.25, label:'25%+'},
    {min:1200000, max:Infinity, rate:0.275,label:'27.5%'},
  ];
  return brackets
    .filter(b => taxableA > b.min && b.rate > 0)
    .map(b => {
      const inB = Math.min(taxableA, b.max) - b.min;
      return { rate:b.rate, label:b.label, inB, taxM_month: inB * b.rate / 12 };
    });
}

function calcGross(grossM, medM, withSI, isDisabled) {
  // 1. Social Insurance (exact SQL: GREATEST(min, LEAST(gross, max)))
  const ins    = Math.min(Math.max(grossM, D.si_min), D.si_max);
  const si_emp = withSI ? Math.round(ins * D.si_emp * 100) / 100 : 0;
  const si_er  = withSI ? Math.round(ins * D.si_er  * 100) / 100 : 0;

  // 2. Annual figures
  const grossA    = grossM * 12;
  const siA       = si_emp * 12;
  const exemption = isDisabled ? D.ex_dis : D.ex_std;

  // 3. Medical tax deduction: annual premium paid, capped at EGP 10,000/yr (per tax law)
  const medAnnual    = medM * 12;
  const medDeduction = Math.min(medAnnual, 10000);

  // 4. Annual taxable income
  const taxableA = Math.max(0, grossA - siA - exemption - medDeduction);

  // 5. Annual tax — exact EGPayslip formula
  const taxA  = progressiveTax(taxableA);
  const taxM  = Math.round(taxA / 12 * 100) / 100;

  // 6. Martyrs & Emergency
  const martyrs  = Math.round(grossM * D.martyrs  * 100) / 100;
  const emergency= Math.round(Math.min(grossM, 2540) * 0.01 * 100) / 100;

  // 7. Net salary (medical is NOT deducted from net — it's an employer in-kind benefit)
  const totalDed = si_emp + taxM + martyrs;
  const net      = Math.round((grossM - totalDed) * 100) / 100;

  // 8. Total employer cost: gross + SI(18.75%) + emergency + monthly medical premium (1x)
  const er_med  = medM;  // monthly premium as entered — employer bears this cost
  const erTotal = Math.round((grossM + si_er + emergency + er_med) * 100) / 100;

  // 9. Effective tax rate & top bracket for display
  const etr  = grossA > 0 ? taxA / grossA * 100 : 0;
  const bRows_display = bracketRows(taxableA);
  const topB = bRows_display.length ? bRows_display[bRows_display.length - 1] : null;

  return { grossM, net, si_emp, si_er, ins, taxM, taxA, taxableA,
           medDeduction, medAnnual, exemption, martyrs, emergency,
           er_med, erTotal, totalDed,
           bRows: bRows_display, etr, topB };
}

function calcNet(targetNetM, medM, withSI, isDisabled) {
  let lo = Math.max(targetNetM, 1), hi = Math.max(targetNetM * 4, 50000);
  while (calcGross(hi, medM, withSI, isDisabled).net < targetNetM) hi *= 2;
  for (let i = 0; i < 80; i++) {
    const mid = (lo + hi) / 2;
    const res = calcGross(mid, medM, withSI, isDisabled);
    if (Math.abs(res.net - targetNetM) < 0.05) break;
    if (res.net < targetNetM) lo = mid; else hi = mid;
  }
  return calcGross((lo + hi) / 2, medM, withSI, isDisabled);
}

exports.handler = async function(event) {
  // CORS headers
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://staffona.com',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const { grossM, medM = 0, withSI = true, isDisabled = false, mode = 'gtn' } = body;

    // Validate inputs
    if (!grossM || typeof grossM !== 'number' || grossM <= 0 || grossM > 5000000) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid grossM' }) };
    }
    if (medM < 0 || medM > 100000) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid medM' }) };
    }

    let result;
    if (mode === 'gtn') {
      result = calcGross(grossM, medM, withSI, isDisabled);
    } else {
      result = calcNet(grossM, medM, withSI, isDisabled);
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(result),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Calculation error' }),
    };
  }
};
