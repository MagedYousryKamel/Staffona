/* STAFFONA shared.js v3 | GA: G-BG3DEQLHJF | Formspree: xreajrkr */
'use strict';
const SF={
  GA:'G-BG3DEQLHJF',
  FP:'xreajrkr',
  CAL:'https://calendly.com/maged-staffona/free-consultation?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0f1e35&text_color=ffffff&primary_color=c8973a'
};

/* ── Dark mode — runs before paint ── */
(function(){
  var t=localStorage.getItem('sf-theme')||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');
  document.documentElement.setAttribute('data-theme',t);
})();

function sfGA(){
  if(document.getElementById('sf-ga'))return;
  var s=document.createElement('script');s.id='sf-ga';s.async=true;
  s.src='https://www.googletagmanager.com/gtag/js?id='+SF.GA;
  document.head.appendChild(s);
  window.dataLayer=window.dataLayer||[];
  function gtag(){dataLayer.push(arguments);}
  gtag('js',new Date());gtag('config',SF.GA);window.gtag=gtag;
}
if(localStorage.getItem('sf-cookies')==='1') sfGA();

document.addEventListener('DOMContentLoaded',function(){

  /* ── Nav scroll ── */
  var nav=document.getElementById('navbar');
  if(nav && !nav.classList.contains('page'))
    window.addEventListener('scroll',function(){nav.classList.toggle('solid',scrollY>24);},{passive:true});

  /* ── Hamburger ── */
  var hbg=document.getElementById('hbg'), mob=document.getElementById('mobNav');
  if(hbg&&mob){
    hbg.style.display='flex';
    hbg.addEventListener('click',function(){
      var o=mob.classList.toggle('open');
      hbg.setAttribute('aria-expanded',o);
      var sp=hbg.querySelectorAll('span');
      sp[0].style.transform=o?'translateY(7px) rotate(45deg)':'';
      sp[1].style.opacity=o?'0':'1';
      sp[2].style.transform=o?'translateY(-7px) rotate(-45deg)':'';
    });
    document.addEventListener('click',function(e){
      if(nav&&mob&&!nav.contains(e.target)&&!mob.contains(e.target)) mob.classList.remove('open');
    });
  }

  /* ── Dark mode toggle — works with class .dm-btn / .dm-moon / .dm-sun ── */
  function syncDM(){
    var dark=document.documentElement.getAttribute('data-theme')==='dark';
    document.querySelectorAll('.dm-moon').forEach(function(el){el.style.display=dark?'none':'block';});
    document.querySelectorAll('.dm-sun').forEach(function(el){el.style.display=dark?'block':'none';});
  }
  syncDM();
  document.querySelectorAll('.dm-btn').forEach(function(btn){
    btn.addEventListener('click',function(){
      var dark=document.documentElement.getAttribute('data-theme')==='dark';
      document.documentElement.setAttribute('data-theme',dark?'light':'dark');
      localStorage.setItem('sf-theme',dark?'light':'dark');
      syncDM();
    });
  });

  /* ── Scroll reveal ── */
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
  },{threshold:.07,rootMargin:'0px 0px -30px 0px'});
  document.querySelectorAll('.rv,.rvl,.rvr').forEach(function(el){io.observe(el);});

  /* ── Back to top ── */
  var btt=document.getElementById('btt');
  if(btt){
    window.addEventListener('scroll',function(){btt.classList.toggle('show',scrollY>400);},{passive:true});
    btt.addEventListener('click',function(){scrollTo({top:0,behavior:'smooth'});});
  }

  /* ── Cookie banner ── */
  if(!localStorage.getItem('sf-cookies')){
    var cb=document.getElementById('cookieBanner');
    if(cb) setTimeout(function(){cb.classList.add('show');},1400);
  }
  var ca=document.getElementById('cookieAccept'),cd=document.getElementById('cookieDecline');
  if(ca) ca.addEventListener('click',function(){
    localStorage.setItem('sf-cookies','1'); sfGA();
    document.getElementById('cookieBanner').classList.remove('show');
  });
  if(cd) cd.addEventListener('click',function(){
    localStorage.setItem('sf-cookies','0');
    document.getElementById('cookieBanner').classList.remove('show');
  });

  /* ── Calendly popup ── */
  window.openCal=function(e){
    if(e) e.preventDefault();
    if(typeof Calendly!=='undefined') Calendly.initPopupWidget({url:SF.CAL});
    else window.open('https://calendly.com/maged-staffona/free-consultation','_blank');
    return false;
  };
  document.querySelectorAll('[data-cal]').forEach(function(el){
    el.addEventListener('click',openCal);
  });

  /* ── Tab switcher — handles BOTH .tab/.pane AND .sf-tab/.sf-pane ── */
  window.swTab=function(name,btn){
    // detect which style this container uses
    var container=btn.closest('.sf-tabs,.tabs');
    var tabSel= container && container.classList.contains('sf-tabs') ? '.sf-tab' : '.tab';
    var paneSel= tabSel==='.sf-tab' ? '.sf-pane' : '.pane';
    document.querySelectorAll(tabSel).forEach(function(t){
      t.classList.remove('on'); t.setAttribute('aria-selected','false');
    });
    document.querySelectorAll(paneSel).forEach(function(p){p.classList.remove('on');});
    btn.classList.add('on'); btn.setAttribute('aria-selected','true');
    var pane=document.getElementById('p-'+name);
    if(pane) pane.classList.add('on');
    if(name==='cal'&&typeof Calendly!=='undefined') Calendly.initInlineWidgets();
  };

  /* ── Contact form (homepage #cform) ── */
  var cform=document.getElementById('cform');
  if(cform) cform.addEventListener('submit',async function(e){
    e.preventDefault();
    var btn=this.querySelector('[type=submit]');
    var orig=btn.textContent; btn.textContent='Sending…'; btn.disabled=true;
    var data={}; new FormData(this).forEach(function(v,k){data[k]=v;});
    data._subject='Staffona enquiry — '+(data.firstName||'')+' '+(data.lastName||'');
    try{
      var r=await fetch('https://formspree.io/f/'+SF.FP,{method:'POST',
        headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(data)});
      if(r.ok){this.style.display='none'; var fok=document.getElementById('fok'); if(fok) fok.style.display='block';}
      else throw new Error();
    }catch{
      var s=encodeURIComponent(data._subject),b=encodeURIComponent('Name: '+(data.firstName||'')+' '+(data.lastName||'')+'\nEmail: '+(data.email||'')+'\nCompany: '+(data.company||'')+'\nService: '+(data.service||'')+'\n\n'+(data.message||''));
      location.href='mailto:info@staffona.com?subject='+s+'&body='+b;
      btn.textContent=orig; btn.disabled=false;
    }
  });

});
