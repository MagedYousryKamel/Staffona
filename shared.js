/* ═══════════════════════════════════════════════════════════════
   STAFFONA — shared.js  v3.0
   ─────────────────────────────────────────────────────────────
   Loaded by every page. Contains:
   - Navigation (scroll state, mobile menu, active link)
   - Dark mode (system preference + manual toggle, localStorage)
   - Scroll reveal (IntersectionObserver)
   - Back-to-top button
   - Cookie consent banner
   - Calendly popup helper
   - Analytics event helpers (GA4)
   - Form submission (Formspree)
═══════════════════════════════════════════════════════════════ */

'use strict';

/* ── Dark Mode ─────────────────────────────────────────────── */
(function initDarkMode() {
  const saved = localStorage.getItem('staffona-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
})();

function toggleDarkMode() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('staffona-theme', next);
  trackEvent('dark_mode_toggle', { theme: next });
}

/* ── Navigation ────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {

  const navbar   = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobNav   = document.getElementById('mobNav');
  const dmToggle = document.querySelector('.dm-toggle');

  // Scroll state
  if (navbar) {
    const isPageHero = navbar.classList.contains('nav-page');
    if (!isPageHero) {
      function onScroll() {
        navbar.classList.toggle('nav-solid', window.scrollY > 24);
      }
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
  }

  // Mobile menu
  if (hamburger && mobNav) {
    hamburger.addEventListener('click', function () {
      const open = mobNav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
    });
    // Close on outside click
    document.addEventListener('click', function (e) {
      if (mobNav.classList.contains('open') &&
          !mobNav.contains(e.target) &&
          !hamburger.contains(e.target)) {
        mobNav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
      }
    });
  }

  // Dark mode toggle
  if (dmToggle) {
    dmToggle.addEventListener('click', toggleDarkMode);
  }

  // Active nav link (match current page)
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mob-nav a').forEach(function (a) {
    const href = a.getAttribute('href');
    if (href && (href === path || href === './' + path || href === path.replace('.html', ''))) {
      a.classList.add('active');
    }
  });

  // Scroll reveal
  initScrollReveal();

  // Back to top
  initBackToTop();

  // Cookie banner
  initCookieBanner();

});

/* ── Scroll Reveal ─────────────────────────────────────────── */
function initScrollReveal() {
  const els = document.querySelectorAll('.rv, .rv-l, .rv-r');
  if (!els.length) return;

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.07, rootMargin: '0px 0px -32px 0px' });

  els.forEach(function (el) { observer.observe(el); });
}

/* ── Back to Top ───────────────────────────────────────────── */
function initBackToTop() {
  const btn = document.querySelector('.back-top');
  if (!btn) return;

  window.addEventListener('scroll', function () {
    btn.classList.toggle('show', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ── Cookie Banner ─────────────────────────────────────────── */
function initCookieBanner() {
  if (localStorage.getItem('staffona-cookies-accepted')) return;

  const banner = document.getElementById('cookieBanner');
  if (!banner) return;

  setTimeout(function () { banner.classList.add('show'); }, 1200);

  document.getElementById('cookieAccept')?.addEventListener('click', function () {
    localStorage.setItem('staffona-cookies-accepted', '1');
    banner.classList.remove('show');
    trackEvent('cookie_accepted');
    // Load GA only after consent
    loadAnalytics();
  });

  document.getElementById('cookieDecline')?.addEventListener('click', function () {
    localStorage.setItem('staffona-cookies-accepted', 'declined');
    banner.classList.remove('show');
  });
}

/* ── Analytics (GA4) ───────────────────────────────────────── */
/* 
   SETUP INSTRUCTIONS:
   1. Go to https://analytics.google.com → create account → property
   2. Copy your Measurement ID (format: G-XXXXXXXXXX)
   3. Replace 'G-XXXXXXXXXX' below with your actual ID
   4. That's it. Events are already tracked via trackEvent() calls.
*/
const GA_ID = 'G-BG3DEQLHJF';

function loadAnalytics() {
  if (document.getElementById('ga-script')) return;

  const s = document.createElement('script');
  s.id = 'ga-script';
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function(){ window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, {
    page_title: document.title,
    page_location: window.location.href,
    send_page_view: true
  });
}

function trackEvent(eventName, params) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params || {});
  }
}

// Auto-load if consent already given
if (localStorage.getItem('staffona-cookies-accepted') === '1') {
  document.addEventListener('DOMContentLoaded', loadAnalytics);
}

/* ── Calendly Popup ────────────────────────────────────────── */
const CALENDLY_URL = 'https://calendly.com/maged-staffona/free-consultation?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0f1e35&text_color=ffffff&primary_color=c8973a';

function openCalendly(e) {
  if (e) e.preventDefault();
  if (typeof Calendly !== 'undefined') {
    Calendly.initPopupWidget({ url: CALENDLY_URL });
    trackEvent('calendly_opened', { source: e?.target?.dataset?.source || 'unknown' });
  } else {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
  return false;
}

/* ── Formspree Contact Form ────────────────────────────────── */
const FORMSPREE_ID = 'xreajrkr';

async function submitContactForm(formEl, successElId) {
  const btn = formEl.querySelector('[type="submit"]');
  const successEl = document.getElementById(successElId);
  if (!btn) return;

  const originalText = btn.textContent;
  btn.textContent = 'Sending…';
  btn.disabled = true;

  const data = {};
  new FormData(formEl).forEach(function (v, k) { data[k] = v; });
  data._subject = 'Staffona enquiry — ' + (data.firstName || '') + ' ' + (data.lastName || '');

  try {
    const res = await fetch('https://formspree.io/f/' + FORMSPREE_ID, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      formEl.style.display = 'none';
      if (successEl) successEl.style.display = 'block';
      trackEvent('form_submitted', { form: formEl.id || 'contact' });
    } else {
      throw new Error('Server error');
    }
  } catch (err) {
    // Mailto fallback
    const subj = encodeURIComponent(data._subject);
    const body = encodeURIComponent(
      'Name: ' + (data.firstName || '') + ' ' + (data.lastName || '') +
      '\nEmail: ' + (data.email || '') +
      '\nCompany: ' + (data.company || '') +
      '\nService: ' + (data.service || '') +
      '\n\n' + (data.message || '')
    );
    window.location.href = 'mailto:info@staffona.com?subject=' + subj + '&body=' + body;
    btn.textContent = originalText;
    btn.disabled = false;
  }
}

/* ── Tab switcher (contact form tabs) ──────────────────────── */
function switchTab(name, btn) {
  const container = btn.closest('[data-tabs]') || document;
  container.querySelectorAll('.tab-btn').forEach(function (t) {
    t.classList.remove('active');
    t.setAttribute('aria-selected', 'false');
  });
  container.querySelectorAll('.tab-pane').forEach(function (p) {
    p.classList.remove('active');
  });
  btn.classList.add('active');
  btn.setAttribute('aria-selected', 'true');
  const pane = container.querySelector('#pane-' + name);
  if (pane) pane.classList.add('active');

  // Init Calendly inline widget when tab activated
  if (name === 'calendly' && typeof Calendly !== 'undefined') {
    Calendly.initInlineWidgets();
  }
}
