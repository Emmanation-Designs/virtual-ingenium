import React from 'react';

const Aim: React.FC = () => {
  return (
    <section id="aim" className="py-24 sm:py-32 bg-brand-slate relative overflow-hidden beam-effect">
      {/* Dynamic Background Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-brand opacity-[0.03] rounded-full blur-[150px] animate-aurora"></div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full border-x border-white/5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Visual Side - Matching About Section Style */}
          <div className="relative order-2 lg:order-1 animate-float">
            <div className="relative z-10 bg-white/5 rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=75&w=800&auto=format&fit=crop" 
                alt="Operational Strategy" 
                loading="lazy"
                decoding="async"
                width="800"
                height="800"
                className="w-full h-full object-cover aspect-square grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-100 scale-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand/10 mix-blend-multiply pointer-events-none opacity-40 group-hover:opacity-0 transition-opacity duration-700"></div>
              
              {/* Inner light glint on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)' }}></div>
            </div>
            
            {/* Artistic accents */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-8 border-brand/30 rounded-full"></div>
            
            <div className="absolute -bottom-10 right-10 left-10 bg-brand-slate/90 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/10 z-20">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-brand rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg shadow-brand/20 group">
                  <i className="fa-solid fa-bullseye group-hover:rotate-12 transition-transform"></i>
                </div>
                <div>
                  <h4 className="font-black text-white text-lg uppercase tracking-widest leading-tight">Our Core Target</h4>
                  <p className="text-[10px] font-bold text-brand uppercase tracking-widest mt-1">Global Precision</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2">
            <div className="mb-8">
              <div className="inline-block px-4 py-1.5 bg-brand/20 rounded-full mb-6 border border-brand/30">
                <span className="text-brand font-black text-sm uppercase tracking-widest">Our Vision</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight italic">
                Empowering global leaders to focus on <span className="text-brand">growth</span> while we deliver <span className="underline decoration-brand decoration-8 underline-offset-8">operational excellence</span> across time zones.
              </h2>
            </div>
            
            <p className="text-white/50 text-xl leading-relaxed font-medium">
              We bridges the gap between ambitious vision and flawless execution, providing the specialized talent required to scale without borders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aim;