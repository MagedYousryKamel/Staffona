import React from 'react';
import { Globe, Gavel, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyUs = () => {
  return (
    <main className="pt-16">
      <section className="px-5 pt-20 pb-16 max-w-7xl mx-auto">
        <span className="text-secondary font-bold text-sm tracking-widest uppercase mb-4 block">Differentiators</span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
          Why Industry Leaders Choose <span className="text-primary dark:text-secondary-bright">Staffona</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-xl leading-relaxed max-w-3xl">
          Empowering businesses with strategic HR outsourcing and seamless operational support tailored for global growth.
        </p>
      </section>

      <section className="px-5 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto mb-20">
        <div className="bg-primary p-10 rounded-[2rem] text-white shadow-2xl relative overflow-hidden group">
          <div className="relative z-10">
            <div className="text-6xl font-bold mb-4 group-hover:scale-110 transition-transform inline-block">15+</div>
            <div className="text-lg uppercase tracking-widest font-bold opacity-80">Years Experience</div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        <div className="bg-secondary p-10 rounded-[2rem] text-white shadow-2xl relative overflow-hidden group">
          <div className="relative z-10">
            <div className="text-6xl font-bold mb-4 group-hover:scale-110 transition-transform inline-block">500+</div>
            <div className="text-lg uppercase tracking-widest font-bold opacity-80">Global Clients</div>
          </div>
           <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      <div className="space-y-24 max-w-7xl mx-auto px-5 pb-24">
        <Differentiator 
          icon={<Globe size={40} />}
          title="Cross-Border Operations"
          description="Navigate international markets with ease. Our expertise in local labor laws and compliance ensures your global expansion is risk-free."
          points={["Global Compliance Audits", "Multi-currency Payroll Systems"]}
          image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
        />

        <Differentiator 
          icon={<Gavel size={40} />}
          title="Structured Governance"
          description="We implement rigorous quality controls and reporting standards that mirror top-tier corporate governance frameworks."
          image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
          reverse
        />

        <section className="bg-slate-50 dark:bg-slate-800/50 rounded-[3rem] p-12 border border-slate-100 dark:border-slate-700">
           <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="bg-white dark:bg-slate-700 p-4 rounded-2xl shadow-xl mb-8 inline-block">
                  <Sparkles className="text-primary" size={40} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Technology-Driven</h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                  Proprietary AI-powered HR platforms that streamline recruitment, attendance, and employee engagement metrics.
                </p>
                <div className="bg-white dark:bg-slate-700 p-6 rounded-2xl border border-slate-200 dark:border-slate-600 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-slate-400">DASHBOARD PREVIEW</span>
                    <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">LIVE</span>
                  </div>
                  <div className="h-3 w-full bg-slate-100 dark:bg-slate-600 rounded-full mb-4">
                    <div className="h-3 bg-primary rounded-full w-[75%]"></div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Processing Efficiency</span>
                    <span className="font-bold text-primary dark:text-accent">98.2%</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                 <img 
                    alt="Technology Platform" 
                    className="rounded-2xl shadow-2xl" 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                 />
              </div>
           </div>
        </section>
      </div>

      <section className="px-5 py-24 bg-primary text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to scale?</h2>
          <p className="text-blue-100 text-xl mb-10">Book a discovery call with our consultants today and see the difference.</p>
          <Link 
            to="/contact"
            className="inline-flex items-center justify-center gap-3 bg-white text-primary font-bold px-12 py-5 rounded-xl shadow-2xl hover:bg-blue-50 transition-all"
          >
            Contact Us
            <ArrowRight size={20} />
          </Link>
        </div>
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
      </section>
    </main>
  );
};

const Differentiator = ({ icon, title, description, points, image, reverse }) => (
  <section className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center`}>
    <div className="md:w-1/2">
      <div className="bg-primary/10 dark:bg-primary/20 p-5 rounded-2xl inline-block mb-8 text-primary dark:text-accent">
        {icon}
      </div>
      <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">{title}</h2>
      <p className="text-slate-600 dark:text-slate-400 text-xl leading-relaxed mb-8">
        {description}
      </p>
      {points && (
        <div className="space-y-4">
          {points.map((point, index) => (
            <div key={index} className="flex items-center gap-4 text-lg font-medium text-slate-700 dark:text-slate-300">
              <CheckCircle className="text-green-500" size={24} />
              {point}
            </div>
          ))}
        </div>
      )}
    </div>
    <div className="md:w-1/2">
      <img alt={title} className="rounded-[2rem] shadow-2xl w-full h-[400px] object-cover" src={image} />
    </div>
  </section>
);

export default WhyUs;
