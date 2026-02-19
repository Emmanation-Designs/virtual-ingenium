import React from 'react';
import AutoCarousel from './AutoCarousel';

interface Testimonial {
  quote: string;
  author: string;
  avatar: string;
  role: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Ingenium has completely transformed how our executive team operates. Their design work is world-class and their responsiveness is unmatched.",
      author: "Alex Rivera",
      avatar: "https://i.pravatar.cc/150?u=alex",
      role: "CEO, TechFlow Systems"
    },
    {
      quote: "The level of detail they bring to project management and digital marketing is incredible. It feels like having an in-house expert at half the cost.",
      author: "Jordan Smith",
      avatar: "https://i.pravatar.cc/150?u=jordan",
      role: "Director, Global Logistics"
    },
    {
      quote: "Professional, creative, and highly efficient. They handled our rebranding and video production with absolute brilliance.",
      author: "Taylor Wong",
      avatar: "https://i.pravatar.cc/150?u=taylor",
      role: "Founder, Creative Pulse"
    },
    {
      quote: "The efficiency and creativity they bring to our social media campaigns is outstanding. Our engagement has tripled since we started working with them.",
      author: "Morgan Lee",
      avatar: "https://i.pravatar.cc/150?u=morgan",
      role: "Marketing Head, AgriScale"
    },
    {
      quote: "I was skeptical about remote assistance at first, but Ingenium proved me wrong. They are more reliable than many on-site teams I've worked with.",
      author: "Casey Jordan",
      avatar: "https://i.pravatar.cc/150?u=casey",
      role: "Operations Manager"
    },
    {
      quote: "The video editing quality is absolutely top-tier. They captured our brand voice perfectly and delivered way ahead of schedule.",
      author: "Riley Chen",
      avatar: "https://i.pravatar.cc/150?u=riley",
      role: "Content Strategist"
    },
    {
      quote: "Managing a global portfolio requires precision. Ingenium provides the operational backbone we need to scale without friction.",
      author: "Julian Vance",
      avatar: "https://i.pravatar.cc/150?u=julian",
      role: "Real Estate Investor"
    },
    {
      quote: "Their agricultural supply chain expertise coupled with virtual support is a game-changer for our export business.",
      author: "Sarah Ebuka",
      avatar: "https://i.pravatar.cc/150?u=sarah",
      role: "COO, GreenField Exports"
    },
    {
      quote: "The software tools they built for our team saved us over 20 hours a week. Truly inventive thought in action.",
      author: "Marcus Thorne",
      avatar: "https://i.pravatar.cc/150?u=marcus",
      role: "Product Lead, InnovateHQ"
    }
  ];

  const renderCard = (t: Testimonial, idx: number) => (
    <div 
      className="bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-100 shadow-md flex flex-col hover:border-brand/20 transition-all duration-300 group select-none h-full min-h-[380px]"
    >
      <div className="flex gap-1 text-brand mb-6 text-sm">
        {[...Array(5)].map((_, i) => (
          <i key={i} className="fa-solid fa-star"></i>
        ))}
      </div>
      
      <p className="text-brand-slate text-base sm:text-lg italic mb-8 leading-relaxed flex-grow font-medium">
        "{t.quote}"
      </p>
      
      <div className="flex items-center gap-4 pt-6 border-t border-slate-100 mt-auto">
        <img 
          src={t.avatar} 
          alt={t.author} 
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover shadow-sm group-hover:scale-105 transition-transform" 
        />
        <div>
          <h4 className="font-black text-brand-slate text-base leading-tight group-hover:text-brand transition-colors">{t.author}</h4>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.role}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-brand/10 rounded-full mb-6">
            <span className="text-brand font-black text-xs uppercase tracking-widest">Global Feedback</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-brand-slate mb-6">Voices of Success</h2>
          <p className="text-slate-500 text-lg font-bold max-w-2xl mx-auto">
            Experience the impact of Ingenium through the words of our global partners.
          </p>
        </div>

        <div className="w-full">
          <AutoCarousel 
            items={testimonials} 
            renderItem={renderCard}
            autoPlayInterval={5000}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;