/* STAFFONA shared.js v3 | GA: G-BG3DEQLHJF | Formspree: xreajrkr */
'use strict';
const SF={
  GA:'G-BG3DEQLHJF',
  FP:'xreajrkr',
  CAL:'https://calendly.com/maged-staffona/free-consultation?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0f1e35&text_color=ffffff&primary_color=c8973a'
};

/* Dark mode — runs immediately before paint */
(function(){
  const t=localStorage.getItem('sf-theme')||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');
  document.documentElement.setAttribute('data-theme',t);
})();

/* GA4 */
function loadGA(){
  if(document.getElementById('ga-s'))return;
  const s=document.createElement('script');s.id='ga-s';s.async=true;
  s.src='https://www.googletagmanager.com/gtag/js?id='+SF.GA;
  document.head.appendChild(s);
  window.dataLayer=window.dataLayer||[];
  function gtag(){dataLayer.push(arguments);}
  gtag('js',new Date());gtag('config',SF.GA);window.gtag=gtag;
}
if(localStorage.getItem('sf-cookies')==='1')loadGA();

document.addEventListener('DOMContentLoaded',function(){
  /* Nav scroll */
  const nav=document.getElementById('navbar');
  if(nav){
    if(nav.classList.contains('page')){/* already solid */}
    else window.addEventListener('scroll',function(){nav.classList.toggle('solid',scrollY>24);},{passive:true});
  }

  /* Hamburger */
  const hbg=document.getElementById('hbg'),mob=document.getElementById('mobNav');
  if(hbg&&mob){
    hbg.style.display='flex';
    hbg.addEventListener('click',function(){
      const o=mob.classList.toggle('open');
      hbg.setAttribute('aria-expanded',o);
      const sp=hbg.querySelectorAll('span');
      sp[0].style.transform=o?'translateY(7px) rotate(45deg)':'';
      sp[1].style.opacity=o?'0':'1';
      sp[2].style.transform=o?'translateY(-7px) rotate(-45deg)':'';
    });
  }

  /* Dark mode toggle */
  const dmBtn=document.getElementById('dmBtn');
  if(dmBtn)dmBtn.addEventListener('click',function(){
    const d=document.documentElement.getAttribute('data-theme')==='dark';
    document.documentElement.setAttribute('data-theme',d?'light':'dark');
    localStorage.setItem('sf-theme',d?'light':'dark');
    const moon=document.getElementById('dmMoon'),sun=document.getElementById('dmSun');
    if(moon)moon.style.display=d?'block':'none';
    if(sun)sun.style.display=d?'none':'block';
  });
  /* Sync icon on load */
  (function(){
    const d=document.documentElement.getAttribute('data-theme')==='dark';
    const moon=document.getElementById('dmMoon'),sun=document.getElementById('dmSun');
    if(moon)moon.style.display=d?'none':'block';
    if(sun)sun.style.display=d?'block':'none';
  })();

  /* Scroll reveal */
  const io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
  },{threshold:.07,rootMargin:'0px 0px -30px 0px'});
  document.querySelectorAll('.rv,.rv-l,.rv-r').forEach(function(el){io.observe(el);});

  /* Back to top */
  const btt=document.getElementById('btt');
  if(btt){
    window.addEventListener('scroll',function(){btt.classList.toggle('show',scrollY>400);},{passive:true});
    btt.addEventListener('click',function(){scrollTo({top:0,behavior:'smooth'});});
  }

  /* Cookie banner */
  if(!localStorage.getItem('sf-cookies')){
    const cb=document.getElementById('cookieBanner');
    if(cb)setTimeout(function(){cb.classList.add('show');},1400);
  }
  const ca=document.getElementById('cookieAccept'),cd=document.getElementById('cookieDecline');
  if(ca)ca.addEventListener('click',function(){localStorage.setItem('sf-cookies','1');loadGA();document.getElementById('cookieBanner').classList.remove('show');});
  if(cd)cd.addEventListener('click',function(){localStorage.setItem('sf-cookies','0');document.getElementById('cookieBanner').classList.remove('show');});

  /* Calendly popup */
  window.openCal=function(e){if(e)e.preventDefault();if(typeof Calendly!=='undefined')Calendly.initPopupWidget({url:SF.CAL});else{document.getElementById('contact')?.scrollIntoView({behavior:'smooth'});}return false;};
  document.querySelectorAll('[data-cal]').forEach(function(el){el.addEventListener('click',openCal);});

  /* Tab switcher */
  window.swTab=function(name,btn){
    document.querySelectorAll('.tab').forEach(function(t){t.classList.remove('on');});
    document.querySelectorAll('.pane').forEach(function(p){p.classList.remove('on');});
    btn.classList.add('on');
    document.getElementById('p-'+name).classList.add('on');
    if(name==='cal'&&typeof Calendly!=='undefined')Calendly.initInlineWidgets();
  };

  /* Contact form (homepage) */
  const cform=document.getElementById('cform');
  if(cform)cform.addEventListener('submit',async function(e){
    e.preventDefault();
    const btn=this.querySelector('[type=submit]');
    btn.textContent='Sending…';btn.disabled=true;
    const data={};new FormData(this).forEach(function(v,k){data[k]=v;});
    data._subject='Staffona enquiry — '+(data.firstName||'')+' '+(data.lastName||'');
    try{
      const r=await fetch('https://formspree.io/f/'+SF.FP,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(data)});
      if(r.ok){this.style.display='none';document.getElementById('fok').style.display='block';}
      else throw new Error();
    }catch{
      const s=encodeURIComponent(data._subject),b=encodeURIComponent('Name: '+data.firstName+' '+data.lastName+'\nEmail: '+data.email+'\nCompany: '+data.company+'\nService: '+data.service+'\n\n'+data.message);
      location.href='mailto:info@staffona.com?subject='+s+'&body='+b;
      btn.textContent='Send Message';btn.disabled=false;
    }
  });
});
