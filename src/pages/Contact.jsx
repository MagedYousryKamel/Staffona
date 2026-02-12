import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  if (formState === 'success') {
    return (
      <main className="pt-32 pb-24 px-5">
        <div className="max-w-xl mx-auto text-center bg-white dark:bg-slate-800 p-12 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-slate-700">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-8 text-green-600">
            <CheckCircle2 size={48} />
          </div>
          <h1 className="text-3xl font-bold mb-4">Message Sent!</h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-8">
            Thank you for reaching out. One of our HR specialists will contact you within 24 hours.
          </p>
          <button 
            onClick={() => setFormState('idle')}
            className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all"
          >
            Send Another Message
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-24 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <span className="text-primary font-bold text-sm tracking-wider uppercase mb-4 block">Contact Us</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
            Let’s Discuss Your Business Needs
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-xl leading-relaxed mb-12">
            Our HR specialists and business advisors are ready to help you scale your operations with expert support.
          </p>

          <div className="space-y-10">
            <ContactInfo 
              icon={<Mail size={24} />}
              title="Email Us"
              content="solutions@staffona.com"
              link="mailto:solutions@staffona.com"
            />
            <ContactInfo 
              icon={<Phone size={24} />}
              title="Phone"
              content="+1 (555) 000-0000"
              link="tel:+15550000000"
            />
            <ContactInfo 
              icon={<MapPin size={24} />}
              title="Office"
              content="Financial District, Tower B, HQ Central"
            />
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 sm:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2" htmlFor="name">Full Name</label>
                <input 
                  className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary dark:text-white" 
                  id="name" placeholder="John Doe" type="text" required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2" htmlFor="company">Company</label>
                <input 
                  className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary dark:text-white" 
                  id="company" placeholder="Acme Corp" type="text" required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2" htmlFor="email">Work Email</label>
              <input 
                className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary dark:text-white" 
                id="email" placeholder="john@company.com" type="email" required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2" htmlFor="subject">Subject</label>
              <select className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary dark:text-white" id="subject">
                <option>HR Outsourcing</option>
                <option>Business Support</option>
                <option>Recruitment Services</option>
                <option>General Inquiry</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2" htmlFor="message">Message</label>
              <textarea 
                className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary dark:text-white" 
                id="message" placeholder="How can we help your business?" rows="4" required
              ></textarea>
            </div>
            <button 
              disabled={formState === 'sending'}
              className="w-full bg-primary hover:bg-opacity-90 text-white font-bold py-5 rounded-xl shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-70" 
              type="submit"
            >
              {formState === 'sending' ? 'Sending...' : (
                <>
                  Send Message
                  <Send size={20} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

const ContactInfo = ({ icon, title, content, link }) => (
  <div className="flex items-start gap-6 group">
    <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary dark:text-secondary-bright shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
      {icon}
    </div>
    <div>
      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{title}</h3>
      {link ? (
        <a className="text-xl font-bold text-slate-900 dark:text-white hover:text-primary transition-colors" href={link}>{content}</a>
      ) : (
        <p className="text-xl font-bold text-slate-900 dark:text-white">{content}</p>
      )}
    </div>
  </div>
);

export default Contact;
