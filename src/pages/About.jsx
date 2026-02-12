import React from 'react';
import { Search, Settings, Zap, TrendingUp, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main className="pt-16">
      <section className="px-5 pt-16 pb-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-background-dark">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-secondary font-semibold tracking-wider uppercase text-xs">About Staffona</span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold mt-4 leading-tight text-primary dark:text-white">
            Your Strategic HR & Compliance Partner
          </h1>
          <p className="mt-8 text-slate-600 dark:text-slate-400 leading-relaxed text-lg sm:text-xl max-w-2xl mx-auto">
            Empowering businesses through specialized HR outsourcing, ensuring operational excellence and regulatory peace of mind.
          </p>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl font-bold mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
              <span className="w-1.5 h-8 bg-primary rounded-full"></span>
              Who We Are
            </h2>
            <div className="bg-white dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                Staffona is a premier business support firm specializing in comprehensive HR management. We bridge the gap between complex labor regulations and efficient business growth, serving as an extension of your leadership team.
              </p>
            </div>
          </div>
          <div className="bg-primary dark:bg-slate-900 text-white rounded-[2rem] p-10 shadow-2xl">
            <h2 className="font-display text-2xl font-bold mb-6">Our Mission</h2>
            <p className="text-blue-100 text-2xl font-light italic leading-relaxed">
              "To redefine human resource management by delivering innovative, compliant, and people-centric solutions that catalyze sustainable business success."
            </p>
            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="text-3xl font-bold">150+</div>
                <div className="text-sm text-blue-200">Clients Served</div>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-sm text-blue-200">Compliance Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 bg-slate-50 dark:bg-background-dark/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-bold mb-16 text-center text-slate-900 dark:text-white">Our Approach</h2>
          <div className="relative space-y-16 before:absolute before:left-6 md:before:left-1/2 before:top-0 before:bottom-0 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
            <ApproachItem 
              num="01" 
              title="Discovery" 
              description="We dive deep into your organizational culture and existing workflows to identify critical compliance gaps and efficiency opportunities." 
              icon={<Search size={20} />}
              isLeft={true}
            />
            <ApproachItem 
              num="02" 
              title="Strategy Design" 
              description="Crafting a bespoke HR roadmap that aligns with your specific industry requirements and long-term business objectives." 
              icon={<Settings size={20} />}
              isLeft={false}
            />
            <ApproachItem 
              num="03" 
              title="Implementation" 
              description="Deploying advanced HR technologies and streamlined processes with minimal disruption to your day-to-day operations." 
              icon={<Zap size={20} />}
              isLeft={true}
            />
            <ApproachItem 
              num="04" 
              title="Continuous Optimization" 
              description="Ongoing monitoring and adaptation to changing labor laws, ensuring your business remains agile and protected." 
              icon={<TrendingUp size={20} />}
              isLeft={false}
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="max-w-4xl mx-auto bg-slate-50 dark:bg-slate-900 rounded-[3rem] p-12 border border-slate-100 dark:border-slate-800 shadow-xl relative overflow-hidden">
           <Quote className="absolute top-10 right-10 text-slate-200 dark:text-slate-800" size={120} />
          <div className="relative z-10">
            <div className="flex items-center gap-6 mb-8">
              <img 
                alt="Managing Director" 
                className="w-24 h-24 rounded-full object-cover border-4 border-primary shadow-lg" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs_lAgEqbkDTDo_i1Q7lfEZWIfZcvJajFirbl126z4Ec2-wybVWhWg2JvmTroNALsPgbTHBUK9VwAcFRTl8TgpRs0WHUXVl_xjN5f2MdfD4c5iL1Glqi3o5yu7vxI8-L_WKYAHveKu0ECq7PHk8Btq6l0JB4WP5jGyfybt9QXyI8HsnJzkWvQaQlhFZ467v7iwBcWYkKxWOGZlC4Sz_ktBWJRqFi6qOHUhuxReCmrZiVgvcc9HzBhRf4bGxO5J6J6fQiL2ICuz2KFD" 
              />
              <div>
                <h4 className="font-display font-bold text-2xl text-slate-900 dark:text-white">Elizabeth Chen</h4>
                <p className="text-secondary uppercase tracking-widest font-bold text-sm">Managing Director</p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-2xl italic leading-relaxed pl-4 border-l-4 border-secondary">
              "In today's landscape, HR isn't just about administration—it's about building a fortress of compliance and a culture of excellence. We're here to be that foundation for you."
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 text-center">
        <h2 className="font-display text-4xl font-bold mb-6 text-slate-900 dark:text-white">Ready to elevate your HR?</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg max-w-xl mx-auto">Let's discuss how Staffona can support your business growth.</p>
        <Link 
          to="/contact"
          className="inline-block bg-primary text-white font-bold px-12 py-5 rounded-full shadow-2xl hover:scale-105 transition-all"
        >
          Book a Consultation
        </Link>
      </section>
    </main>
  );
};

const ApproachItem = ({ num, title, description, icon, isLeft }) => (
  <div className={`relative flex flex-col md:flex-row items-center gap-8 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
    <div className="md:w-1/2" />
    <div className="absolute left-0 md:left-1/2 top-0 -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white z-10 shadow-lg border-4 border-white dark:border-background-dark">
      {icon}
    </div>
    <div className={`md:w-1/2 pl-16 md:pl-0 ${isLeft ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
      <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:border-secondary transition-colors">
        <span className="text-secondary font-bold text-sm mb-2 block">{num}.</span>
        <h3 className="font-display text-xl font-bold mb-3 text-slate-900 dark:text-white">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

export default About;
