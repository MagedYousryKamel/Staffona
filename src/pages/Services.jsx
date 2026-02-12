import React from 'react';
import { Users, Gavel, Database, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <main className="pt-16">
      <header className="px-5 pt-16 pb-20 text-center bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold text-primary dark:text-white mb-6">Services Overview</h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg sm:text-xl leading-relaxed">
            Empowering your business with integrated HR solutions and expert back-office support.
          </p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-5 py-24 space-y-12">
        <ServiceSection 
          icon={<Users size={28} />}
          title="HR Outsourcing & Payroll"
          description="End-to-end management of your human capital and payroll processing to ensure operational efficiency."
          features={[
            "Full lifecycle payroll administration",
            "Employee benefits management",
            "Strategic talent acquisition",
            "Performance management frameworks"
          ]}
          color="blue"
        />
        <ServiceSection 
          icon={<Gavel size={28} />}
          title="Compliance & Advisory"
          description="Navigating complex labor laws and regulatory requirements to keep your business fully protected."
          features={[
            "Labor law & statutory compliance",
            "Policy development & audits",
            "Risk mitigation strategies",
            "Contractual legal support"
          ]}
          color="teal"
        />
        <ServiceSection 
          icon={<Database size={28} />}
          title="ERP & Workforce Systems"
          description="Modernizing your workforce with cloud-based enterprise solutions and automated workflows."
          features={[
            "Custom ERP implementation",
            "Time & attendance automation",
            "Digital employee self-service",
            "Data analytics & reporting"
          ]}
          color="indigo"
        />
        <ServiceSection 
          icon={<Briefcase size={28} />}
          title="Back-Office Support"
          description="Optimizing administrative overhead so you can focus on core business growth and innovation."
          features={[
            "Managed administrative services",
            "Accounting & bookkeeping",
            "Procurement & vendor management",
            "Customer experience outsourcing"
          ]}
          color="slate"
        />

        <div className="mt-20 text-center">
           <div className="bg-primary rounded-3xl p-12 shadow-2xl relative overflow-hidden">
             <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-6">Need a custom solution?</h3>
                <p className="text-blue-100 mb-10 max-w-xl mx-auto text-lg">
                  Talk to our experts to design a service package that fits your unique business needs.
                </p>
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-secondary hover:bg-secondary/90 text-white font-bold px-10 py-4 rounded-xl shadow-lg transition-all"
                >
                  Talk to an Expert
                  <ArrowRight size={20} />
                </Link>
             </div>
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
           </div>
           <p className="mt-8 text-sm text-slate-500 dark:text-slate-500">
             Trusted by 50+ regional enterprises.
           </p>
        </div>
      </div>
    </main>
  );
};

const ServiceSection = ({ icon, title, description, features, color }) => {
  const colorMap = {
    blue: "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    teal: "bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400",
    indigo: "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
    slate: "bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300",
  };

  return (
    <section className="bg-white dark:bg-slate-800 p-10 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all group">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/3">
          <div className={`w-16 h-16 ${colorMap[color]} rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
            {icon}
          </div>
          <h2 className="text-3xl font-bold text-primary dark:text-white leading-tight mb-4">{title}</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            {description}
          </p>
        </div>
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
              <CheckCircle className="text-secondary shrink-0 mt-1" size={18} />
              <span className="text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
