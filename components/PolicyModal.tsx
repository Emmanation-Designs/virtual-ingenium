
import React from 'react';

interface PolicyModalProps {
  type: 'privacy' | 'terms';
  onClose: () => void;
}

const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  const today = new Date().toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });
  const currentYear = new Date().getFullYear();

  const content = {
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: today,
      body: [
        {
          heading: '1. Information We Collect',
          text: 'We collect information you provide directly to us through our inquiry forms and WhatsApp communication, including your name, email address, phone number, and project details.'
        },
        {
          heading: '2. How We Use Your Information',
          text: 'We use the information we collect to provide, maintain, and improve our services, communicate with you about project requirements, and send you technical notices and support messages.'
        },
        {
          heading: '3. Data Sharing and Security',
          text: 'Ingenium Virtual Assistant Limited does not sell your personal data. We implement reasonable security measures to help protect your information from loss, theft, and unauthorized access.'
        },
        {
          heading: '4. WhatsApp Integration',
          text: 'Our service uses WhatsApp for streamlined communication. Please note that when you initiate a chat with us, your phone number and profile information may be visible to us as per WhatsApp standard protocols.'
        }
      ]
    },
    terms: {
      title: 'Terms of Service',
      lastUpdated: today,
      body: [
        {
          heading: '1. Service Agreement',
          text: 'By accessing or using our services, you agree to be bound by these terms. Our services include but are not limited to graphic design, video editing, and digital marketing support.'
        },
        {
          heading: '2. Project Inquiries',
          text: 'Initial inquiries made through this website do not constitute a binding contract. A formal project agreement will be provided following the initial WhatsApp consultation.'
        },
        {
          heading: '3. Intellectual Property',
          text: 'Unless otherwise agreed in writing, all preliminary designs remain the property of Ingenium Virtual Assistant Limited until final payment is received, at which point ownership of final assets is transferred to the client.'
        },
        {
          heading: '4. Limitation of Liability',
          text: 'Ingenium Virtual Assistant Limited shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our services or this website.'
        }
      ]
    }
  };

  const activeContent = content[type];

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-3xl rounded-[2.5rem] shadow-2xl overflow-hidden max-h-[85vh] flex flex-col border border-white/20">
        <div className="px-8 py-8 border-b border-slate-100 flex justify-between items-center shrink-0">
          <div>
            <h3 className="text-2xl font-black text-brand-slate">{activeContent.title}</h3>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Last Updated: {activeContent.lastUpdated}</p>
          </div>
          <button 
            onClick={onClose} 
            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-all"
          >
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>
        </div>

        <div className="p-8 overflow-y-auto space-y-8 text-slate-600">
          {activeContent.body.map((section, idx) => (
            <div key={idx}>
              <h4 className="font-black text-brand-slate mb-3">{section.heading}</h4>
              <p className="leading-relaxed text-sm">{section.text}</p>
            </div>
          ))}
          <div className="pt-8 border-t border-slate-100">
            <p className="text-xs text-slate-400 text-center">
              © {currentYear} Ingenium Virtual Assistant Limited. If you have questions about these documents, please contact us via WhatsApp.
            </p>
          </div>
        </div>

        <div className="p-6 bg-slate-50 text-center shrink-0">
          <button 
            onClick={onClose}
            className="px-8 py-3 bg-brand text-white font-black rounded-xl hover:bg-brand-dark transition-all"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};

export default PolicyModal;
