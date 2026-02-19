import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="relative z-10 bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=75&w=800&auto=format&fit=crop" 
                alt="Our Team" 
                loading="lazy"
                decoding="async"
                width="800"
                height="800"
                className="w-full h-full object-cover aspect-square grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand/5 mix-blend-multiply group-hover:opacity-0 transition-opacity"></div>
            </div>
            {/* Artistic accents with pulsing light */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand/5 rounded-full blur-3xl animate-pulse-soft"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-8 border-brand/20 rounded-full animate-float"></div>
            
            <div className="absolute -bottom-10 left-10 right-10 bg-white p-8 rounded-3xl shadow-xl border border-slate-50 z-20 group">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-brand rounded-2xl flex items-center justify-center text-white text-2xl group-hover:rotate-12 transition-transform">
                  <i className="fa-solid fa-quote-left"></i>
                </div>
                <div>
                  <h4 className="font-black text-brand-slate text-lg">Innocent M. Ezike</h4>
                  <p className="text-xs font-bold text-brand uppercase tracking-widest">Visionary Founder</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-block px-4 py-1.5 bg-brand/10 rounded-full mb-6">
              <span className="text-brand font-black text-sm uppercase tracking-widest">Our Legacy</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-brand-slate mb-8 leading-tight heading-shimmer cursor-default">
              Scaling Excellence Across <span className="text-brand">Continents.</span>
            </h2>
            <p className="text-slate-600 text-xl leading-relaxed mb-10 font-medium">
              Ingenium Virtual Assistant Limited is a global leader in executive virtual assistance and sustainable agri-consulting. With offices in Scotland, UK and Abuja, Nigeria, we deliver operational excellence to forward-thinking organizations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="group">
                <div className="w-12 h-1.5 bg-brand mb-4 group-hover:w-20 transition-all duration-300"></div>
                <h3 className="text-2xl font-black text-brand-slate mb-3 group-hover:text-brand transition-colors">The Vision</h3>
                <p className="text-slate-500 text-base leading-relaxed">
                  Revolutionizing global team operations through intelligent, responsive virtual assistance that scales excellence.
                </p>
              </div>
              <div className="group">
                <div className="w-12 h-1.5 bg-brand/30 group-hover:bg-brand mb-4 group-hover:w-20 transition-all duration-300"></div>
                <h3 className="text-2xl font-black text-brand-slate mb-3 group-hover:text-brand transition-colors">The Mission</h3>
                <p className="text-slate-500 text-base leading-relaxed">
                  Providing premium operational support that empowers leaders to focus on growth while we handle the details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;