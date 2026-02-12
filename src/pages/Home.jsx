import React from 'react';
import { ArrowRight, CheckCircle, Users, Gavel, Database as Hub, Headset as SupportAgent } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-gradient pt-16 pb-20 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-100 dark:border-blue-800">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Trusted Global HR Partner
          </div>
          <h1 className="font-display text-4xl sm:text-6xl leading-[1.1] font-extrabold text-slate-900 dark:text-white mb-6">
            Empowering Businesses with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary dark:from-secondary-bright dark:to-accent">Seamless HR & Outsourcing</span> Solutions
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
            Tailored business support services designed to streamline your operations, ensure full compliance, and fuel sustainable growth for your enterprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/contact" 
              className="bg-primary hover:bg-opacity-90 text-white py-4 px-8 rounded-xl font-bold text-base shadow-xl transition-all active:scale-[0.98] text-center"
            >
              Request Consultation
            </Link>
            <Link 
              to="/services" 
              className="flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-700 py-4 px-8 rounded-xl font-bold text-base bg-white/50 dark:bg-slate-800 transition-all hover:bg-slate-50 text-slate-900 dark:text-white"
            >
              Explore Services
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="mt-16 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-[6px] border-white dark:border-slate-800">
              <img 
                alt="Professional Business Meeting" 
                className="w-full h-[400px] object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuABQO_HVt8mNls9--QjRbVokFv-EOUKQldUGW_OtsfOvBSoi_sVbowcGlWR3uyz3OogJ2kTtgd2hVYKBs1nQEbOOnbSF4Bm_Mnev_Aetean83cLbxPiDx1pRg_1LajD3GRfJ5x09P2w1xuyTx3aNeEL4GyP8TzTNsVQU7nX5JpijBsjCX4K7HKFIVdDD4HIp7L9hI7J9FrFzB97Zs45Jf5a6YlfZ5e1R2qiRe8ImGknGf9anGLrm__adF69D8N53rakusV-SGloB4GS" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 right-4 sm:right-10 bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-2xl flex items-center gap-4 border border-slate-100 dark:border-slate-700">
              <div className="h-12 w-12 bg-green-50 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <CheckCircle className="text-green-600 dark:text-green-400" size={24} />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Compliance Rate</p>
                <p className="text-xl font-extrabold text-slate-900 dark:text-white">100% Secure</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-5 bg-white dark:bg-background-dark/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Core Services</h2>
            <div className="w-16 h-1.5 bg-secondary mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-lg">
              End-to-end support ecosystems built for the modern enterprise demands.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard 
              icon={<Users size={32} />} 
              title="HR Outsourcing" 
              description="Full-lifecycle human resource management from talent acquisition to payroll and retention strategies."
            />
            <ServiceCard 
              icon={<Gavel size={32} />} 
              title="Compliance" 
              description="Mitigate risks with our exhaustive legal and regulatory compliance frameworks tailored to your industry."
            />
            <ServiceCard 
              icon={<Hub size={32} />} 
              title="ERP Systems" 
              description="Implementation and management of world-class Enterprise Resource Planning systems for data-driven decisions."
            />
            <ServiceCard 
              icon={<SupportAgent size={32} />} 
              title="Back-Office Support" 
              description="Operational excellence through administrative, clerical, and technical support teams at your service."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-5">
        <div className="max-w-7xl mx-auto bg-primary rounded-[2.5rem] p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" fill="none" viewBox="0 0 400 400">
              <path d="M0 0h400v400H0z" fill="url(#a)"></path>
              <defs>
                <pattern height="40" id="a" patternUnits="userSpaceOnUse" width="40">
                  <circle cx="2" cy="2" fill="#fff" r="1"></circle>
                </pattern>
              </defs>
            </svg>
          </div>
          <div className="relative z-10">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-6">Ready to transform your business?</h2>
            <p className="text-blue-100 mb-10 max-w-xl mx-auto text-lg">
              Join hundreds of successful companies that have optimized their operations with Staffona.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/contact"
                className="bg-white text-primary px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-xl"
              >
                Book a Free Audit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <div className="group p-10 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 hover:border-secondary transition-all duration-300">
    <div className="w-16 h-16 bg-white dark:bg-slate-700 rounded-xl flex items-center justify-center shadow-sm mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all text-primary dark:text-accent">
      {icon}
    </div>
    <h3 className="font-display text-2xl font-bold mb-4 text-slate-900 dark:text-white">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8">
      {description}
    </p>
    <Link to="/services" className="text-secondary font-bold text-sm inline-flex items-center group/link">
      LEARN MORE
      <ArrowRight size={18} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
    </Link>
  </div>
);

export default Home;
