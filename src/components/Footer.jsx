import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Globe, Share2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 pt-16 pb-10 px-5 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img 
                alt="Logo Icon" 
                className="h-6 w-6 rounded bg-primary p-1" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDycQ67PqDRHe9irbddSxPx7bdwtxrJSm4263NUEHdXCZjQLJymcbDUOQ8jqSEprl2aErDNRiWvjvaNdeyKuCzdSHLGMYAc-v_lOjXjhJwx_5Y8wQI5AO0r7xTr6d7CHc6uz6W3EyPeeoQmxo7xmE7-z5sf8V5hE1OjSGIGsPgtN9dv6kLN-E7FKiWxsEldQzEQ5yAP4Q5mhKAuQNttAbwJ3jV-N1Rz2eIGe2oLBy___Hg2P38ppaaMGEGXWIylEuH3biQFq5aN8XJu" 
              />
              <span className="font-display font-bold text-lg tracking-tight text-primary dark:text-white">Staffona</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              Excellence in HR and business process outsourcing for enterprises worldwide. Built on trust, delivered with precision.
            </p>
            <div className="flex gap-4">
               <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-primary dark:text-white hover:bg-secondary hover:text-white transition-all">
                  <Globe size={18} />
               </a>
               <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-primary dark:text-white hover:bg-secondary hover:text-white transition-all">
                  <Share2 size={18} />
               </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/insights" className="hover:text-primary transition-colors">Insights</Link></li>
              <li><Link to="/portal" className="hover:text-primary transition-colors">Client Portal</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-secondary shrink-0" />
                <span>Financial District, Tower B, HQ Central</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-secondary shrink-0" />
                <span>hello@staffona.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">© 2024 Staffona Inc. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-slate-400">
            <a className="hover:text-primary" href="#">Privacy Policy</a>
            <a className="hover:text-primary" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
