import React, { useState } from 'react';
import { Service, ServiceRequest } from '../types';

interface ModalProps {
  service: Service;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ service, onClose }) => {
  const [formData, setFormData] = useState<ServiceRequest>({
    name: '',
    phone: '',
    email: '',
    serviceType: service.title,
    need: '',
    projectContext1: '',
    projectContext2: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  let label1 = 'Industry Focus';
  let placeholder1 = 'e.g. Finance, Healthcare, Retail';
  let label2 = 'Required Timeline';
  let placeholder2 = 'e.g. Immediate, Next Month';
  let needPlaceholder = 'What is the primary objective?';

  switch (service.id) {
    case 'exec-assist':
      label1 = 'Daily Commitments';
      placeholder1 = 'e.g. Calendar, Travel, Email';
      label2 = 'Support Scale';
      placeholder2 = 'e.g. Full-time, Dedicated Hours';
      needPlaceholder = 'e.g. Streamlining executive communications';
      break;
    case 'business-ops':
      label1 = 'Operations Focus';
      placeholder1 = 'e.g. Strategy Alignment, HR Management';
      label2 = 'Team Size';
      placeholder2 = 'e.g. 10-50 Employees';
      needPlaceholder = 'e.g. Managing cross-border business workflows';
      break;
    case 'marketing-excellence':
      label1 = 'Primary Platform';
      placeholder1 = 'e.g. LinkedIn, Instagram, Omni-channel';
      label2 = 'Campaign Goal';
      placeholder2 = 'e.g. Brand Awareness, Lead Gen';
      needPlaceholder = 'e.g. Scaling digital presence across Europe';
      break;
    case 'ai-automation':
      label1 = 'Current Systems';
      placeholder1 = 'e.g. Excel, Legacy CRM, Google Workspace';
      label2 = 'Automation Goal';
      placeholder2 = 'e.g. Weekly Reporting, AI Content';
      needPlaceholder = 'e.g. Reducing manual data entry time';
      break;
    case 'property-consulting':
      label1 = 'Portfolio Scale';
      placeholder1 = 'e.g. $10M+ Residential, Commercial';
      label2 = 'Property Location';
      placeholder2 = 'e.g. London, Abuja, New York';
      needPlaceholder = 'e.g. Investment analysis for new acquisitions';
      break;
    case 'real-estate-mgmt':
      label1 = 'Investment Budget';
      placeholder1 = 'e.g. $500k - $2M+';
      label2 = 'Property Category';
      placeholder2 = 'e.g. Residential, Commercial, Land';
      needPlaceholder = 'e.g. Full management and leasing support';
      break;
    case 'software-dev':
      label1 = 'Preferred Tech Stack';
      placeholder1 = 'e.g. React, Python, Mobile App';
      label2 = 'Core Functionality';
      placeholder2 = 'e.g. CRM, Payment Integration';
      needPlaceholder = 'e.g. Building a custom internal dashboard';
      break;
    case 'agri-cocoa':
      label1 = 'Cultivation Capacity';
      placeholder1 = 'e.g. 100+ Hectares, Single Estate';
      label2 = 'Target Export Market';
      placeholder2 = 'e.g. EU (Amsterdam), North America';
      needPlaceholder = 'e.g. Scaling production yield or managing export logistics';
      break;
    case 'graphic-design':
      label1 = 'Design Type';
      placeholder1 = 'e.g. Branding, Social Assets';
      label2 = 'Brand Guidelines';
      placeholder2 = 'e.g. Existing, Needed from scratch';
      needPlaceholder = 'e.g. Designing a new premium brand kit';
      break;
    case 'video-editing':
      label1 = 'Content Style';
      placeholder1 = 'e.g. Documentary, Social Shorts';
      label2 = 'Video Quantity';
      placeholder2 = 'e.g. Single project, Monthly retainer';
      needPlaceholder = 'e.g. Professional editing for marketing campaign';
      break;
    case 'visa-support':
      label1 = 'Visa Category';
      placeholder1 = 'e.g. Student, Work, Tourist, Residence';
      label2 = 'Destination Country';
      placeholder2 = 'e.g. UK, Canada, USA, Europe';
      needPlaceholder = 'e.g. Securing a work visa for the UK';
      break;
    case 'device-upgrades':
      label1 = 'Current Device';
      placeholder1 = 'e.g. iPhone 11, iPhone 12 Pro';
      label2 = 'Target Upgrade';
      placeholder2 = 'e.g. iPhone 16 Pro, iPhone 17';
      needPlaceholder = 'e.g. Trading in my old device and transferring data';
      break;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi Ingenium Team,%0a%0aInquiry for: ${formData.serviceType}%0aName: ${formData.name}%0aPhone: ${formData.phone}%0aEmail: ${formData.email}%0aPrimary Need: ${formData.need}%0a${label1}: ${formData.projectContext1}%0a${label2}: ${formData.projectContext2}%0aDetails: ${formData.description}%0a%0aSent from Ingenium Website.`;
    const whatsappUrl = `https://wa.me/447526596522?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-white/20">
        <div className="px-8 py-10 bg-brand-slate text-white flex justify-between items-center relative overflow-hidden shrink-0">
          <div className="absolute top-0 right-0 w-40 h-40 bg-brand opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-black mb-1">{service.title}</h3>
            <p className="text-white/60 font-bold uppercase tracking-widest text-xs">Consultation Inquiry</p>
          </div>
          <button 
            onClick={onClose} 
            className="relative z-10 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-all hover:rotate-90"
          >
            <i className="fa-solid fa-xmark text-2xl"></i>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 overflow-y-auto space-y-6 scrollbar-hide">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-black text-brand-slate uppercase tracking-widest">Full Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand transition-all font-medium"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black text-brand-slate uppercase tracking-widest">Phone Number *</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+44..."
                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand transition-all font-medium"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black text-brand-slate uppercase tracking-widest">Core Project Need</label>
            <input 
              type="text" 
              name="need"
              value={formData.need}
              onChange={handleChange}
              placeholder={needPlaceholder}
              className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand transition-all font-medium"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-black text-brand-slate uppercase tracking-widest">{label1}</label>
              <input 
                type="text" 
                name="projectContext1"
                value={formData.projectContext1}
                onChange={handleChange}
                placeholder={placeholder1}
                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand transition-all font-medium"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black text-brand-slate uppercase tracking-widest">{label2}</label>
              <input 
                type="text" 
                name="projectContext2"
                value={formData.projectContext2}
                onChange={handleChange}
                placeholder={placeholder2}
                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand transition-all font-medium"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black text-brand-slate uppercase tracking-widest">Brief Description</label>
            <textarea 
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              placeholder="Tell us a bit more about how we can help..."
              className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-brand/10 focus:border-brand transition-all font-medium resize-none"
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full py-5 bg-brand hover:bg-brand-dark text-white font-black rounded-2xl shadow-xl shadow-brand/20 transition-all flex items-center justify-center gap-4 group"
          >
            <i className="fa-brands fa-whatsapp text-2xl group-hover:scale-110 transition-transform"></i>
            <span>Send via WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;