import React, { useState, useEffect } from 'react';
import { Service } from '../types';

interface ServicesProps {
  onServiceClick: (service: Service) => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  const [activeCategory, setActiveCategory] = useState<'operations' | 'specialized'>('operations');

  // Load Calendly script on mount
  useEffect(() => {
    const scriptId = 'calendly-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleBookNow = (e: React.MouseEvent, title: string) => {
    e.stopPropagation();
    const calendlyUrl = `https://calendly.com/trelvixai/30min?a1=Interested%20in%3A%20${encodeURIComponent(title)}`;
    
    if ((window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({ url: calendlyUrl });
    } else {
      window.open(calendlyUrl, '_blank');
    }
  };

  const services: Service[] = [
    {
      id: 'exec-assist',
      title: 'Premium Executive Assistance',
      description: 'High-level support for global leaders, managing complex calendars and strategic alignment.',
      icon: 'fa-user-tie',
    },
    {
      id: 'business-ops',
      title: 'Strategic Business Operations',
      description: 'Alignment of business strategy with seamless operational management and executive oversight.',
      icon: 'fa-chess-knight',
    },
    {
      id: 'marketing-excellence',
      title: 'Digital Marketing Excellence',
      description: 'High-impact marketing campaigns and brand engagement strategies for global growth.',
      icon: 'fa-bullhorn',
    },
    {
      id: 'customer-success',
      title: 'Customer Success Management',
      description: 'Optimizing relationship operations and support frameworks to drive long-term client loyalty.',
      icon: 'fa-handshake-angle',
    },
    {
      id: 'ai-automation',
      title: 'AI-Powered Automation',
      description: 'Implementing cutting-edge tools and reporting frameworks that save hundreds of operational hours.',
      icon: 'fa-microchip',
    },
    {
      id: 'property-consulting',
      title: 'Property Consulting Services',
      description: 'Expert portfolio management and investment-related support for high-value real estate assets.',
      icon: 'fa-building-shield',
    },
    {
      id: 'project-delivery',
      title: 'Project Delivery Excellence',
      description: 'Global project management and logistics coordination across multiple time zones.',
      icon: 'fa-gears',
    },
    {
      id: 'software-dev',
      title: 'Software Development',
      description: 'Custom web applications, automation tools, and scalable software solutions built with modern tech.',
      icon: 'fa-code',
    },
    {
      id: 'agri-cocoa',
      title: 'Agri Production & Export (Cocoa)',
      description: 'End-to-end oversight of premium cocoa cultivation and global fair-trade export logistics.',
      icon: 'fa-leaf',
    },
    {
      id: 'real-estate-mgmt',
      title: 'Real Estate Investment & Management',
      description: 'Comprehensive support for property acquisition, leasing, and high-yield portfolio management.',
      icon: 'fa-house-lock',
    },
    {
      id: 'graphic-design',
      title: 'Graphic Design',
      description: 'Bespoke brand identity, logos, and marketing collateral designed to captivate global audiences.',
      icon: 'fa-wand-magic-sparkles',
    },
    {
      id: 'video-editing',
      title: 'Video Editing',
      description: 'Professional cinematic editing and motion graphics for social media and corporate storytelling.',
      icon: 'fa-clapperboard',
    },
    {
      id: 'visa-support',
      title: 'Visa and Immigration Support',
      description: 'We process Tourist, Student, Work, and Residence Visas for countries of your choice, handling full documentation, applications, and follow-ups for efficient approvals.',
      icon: 'fa-passport',
    },
    {
      id: 'device-upgrades',
      title: 'Device Upgrade Services',
      description: 'We handle seamless iPhone upgrades from older models (starting from iPhone 7) to the latest (up to iPhone 17), including data transfer, secure setup, and performance optimization.',
      icon: 'fa-mobile-screen-button',
    },
  ];

  const operationsGroup = ['exec-assist', 'business-ops', 'marketing-excellence', 'customer-success', 'ai-automation', 'project-delivery', 'software-dev', 'graphic-design', 'video-editing'];
  const operationsServices = services.filter(service => operationsGroup.includes(service.id));
  
  const specializedGroup = ['property-consulting', 'agri-cocoa', 'real-estate-mgmt', 'visa-support', 'device-upgrades'];
  const specializedServices = services.filter(service => specializedGroup.includes(service.id));

  const renderServiceCard = (service: Service) => (
    <div 
      key={service.id}
      className="group relative p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col h-full"
    >
      <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-brand/5 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700"></div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="w-16 h-16 bg-brand/5 text-brand rounded-[1.2rem] flex items-center justify-center mb-8 group-hover:bg-brand group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-sm">
          <i className={`fa-solid ${service.icon} text-2xl`}></i>
        </div>
        
        <h3 className="text-2xl font-black text-brand-slate mb-4 group-hover:text-brand transition-colors leading-tight">
          {service.title}
        </h3>
        
        <p className="text-slate-500 text-base leading-relaxed mb-8 flex-grow">
          {service.description}
        </p>

        <div className="mt-auto flex flex-col sm:flex-row gap-3 pt-2 w-full">
          <button 
            onClick={(e) => { e.stopPropagation(); onServiceClick(service); }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl border-2 border-brand/20 text-brand font-bold text-sm hover:bg-brand hover:text-white hover:border-brand transition-all outline-none"
          >
            Inquire Now
          </button>
          <button 
            onClick={(e) => handleBookNow(e, service.title)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-brand text-white font-bold text-sm shadow-md shadow-brand/20 hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand/30 transition-all outline-none"
          >
            Book Now <i className="fa-solid fa-calendar-check"></i>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section id="services" className="py-32 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-brand/10 rounded-full mb-6">
            <span className="text-brand font-black text-sm uppercase tracking-widest">Our Solutions</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-brand-slate mb-6">Our Services</h2>
          <p className="text-slate-500 text-xl max-w-3xl mx-auto">
            A comprehensive suite of 14 bespoke services designed to empower leaders and scale global operations.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-16 bg-slate-200/50 p-2 rounded-3xl sm:rounded-full w-fit mx-auto">
          <button
            onClick={() => setActiveCategory('operations')}
            className={`px-6 sm:px-8 py-4 sm:py-3.5 rounded-2xl sm:rounded-full font-bold text-sm sm:text-base transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 ${
              activeCategory === 'operations' 
                ? 'bg-brand text-white shadow-lg shadow-brand/20 scale-100' 
                : 'text-slate-500 hover:text-brand hover:bg-white/50 scale-95'
            }`}
          >
            Operations & Digital
            <span className={`px-2 py-0.5 rounded-full text-[10px] uppercase font-black transition-colors ${
              activeCategory === 'operations' ? 'bg-white/20 text-white' : 'bg-slate-300 text-slate-600'
            }`}>9</span>
          </button>
          <button
            onClick={() => setActiveCategory('specialized')}
            className={`px-6 sm:px-8 py-4 sm:py-3.5 rounded-2xl sm:rounded-full font-bold text-sm sm:text-base transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 ${
              activeCategory === 'specialized' 
                ? 'bg-brand text-white shadow-lg shadow-brand/20 scale-100' 
                : 'text-slate-500 hover:text-brand hover:bg-white/50 scale-95'
            }`}
          >
            Specialized Consulting
            <span className={`px-2 py-0.5 rounded-full text-[10px] uppercase font-black transition-colors ${
              activeCategory === 'specialized' ? 'bg-white/20 text-white' : 'bg-slate-300 text-slate-600'
            }`}>5</span>
          </button>
        </div>

        <div className="relative overflow-hidden min-h-[600px]">
          <div className={`transition-all duration-500 ease-in-out absolute w-full ${
            activeCategory === 'operations' ? 'opacity-100 translate-x-0 relative z-10' : 'opacity-0 translate-x-[-100%] pointer-events-none'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {operationsServices.map(renderServiceCard)}
            </div>
          </div>

          <div className={`transition-all duration-500 ease-in-out absolute top-0 w-full ${
            activeCategory === 'specialized' ? 'opacity-100 translate-x-0 relative z-10' : 'opacity-0 translate-x-[100%] pointer-events-none'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specializedServices.map(renderServiceCard)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;