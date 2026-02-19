import React from 'react';
import { Service } from '../types';

interface ServicesProps {
  onServiceClick: (service: Service) => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
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

  return (
    <section id="services" className="py-32 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-1.5 bg-brand/10 rounded-full mb-6">
            <span className="text-brand font-black text-sm uppercase tracking-widest">Our Solutions</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-brand-slate mb-6">Our Services</h2>
          <p className="text-slate-500 text-xl max-w-3xl mx-auto">
            A comprehensive suite of 14 bespoke services designed to empower leaders and scale global operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              onClick={() => onServiceClick(service)}
              className="group relative p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden flex flex-col h-full"
            >
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-brand/5 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 bg-brand/5 text-brand rounded-[1.2rem] flex items-center justify-center mb-8 group-hover:bg-brand group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-sm">
                  <i className={`fa-solid ${service.icon} text-2xl`}></i>
                </div>
                
                <h3 className="text-2xl font-black text-brand-slate mb-4 group-hover:text-brand transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-500 text-base leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                <div className="flex items-center gap-3 text-brand font-black text-xs uppercase tracking-widest mt-auto">
                  <span>Inquire Now</span>
                  <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-all">
                    <i className="fa-solid fa-arrow-right-long text-xs transition-transform group-hover:translate-x-1"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;