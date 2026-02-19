import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative bg-brand-slate min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Animated Light Orbs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand opacity-10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 animate-aurora"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 animate-aurora" style={{ animationDelay: '-5s' }}></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 border border-white/10 rounded-full mb-6 sm:mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-brand"></span>
            </span>
            <span className="text-white/80 text-[11px] sm:text-base font-bold tracking-wide">Beyond Limits, Across Continents</span>
          </div>

          <h1 className="text-3xl xs:text-4xl sm:text-7xl lg:text-8xl font-black text-white mb-6 sm:mb-8 leading-[1.2] sm:leading-[1.1] tracking-tight px-2">
            <span className="text-brand">Ingenium</span> <span className="text-shimmer">Virtual Assistant</span>
          </h1>
          
          <p className="text-lg xs:text-xl sm:text-4xl font-medium text-white/60 mb-8 sm:mb-10 max-w-4xl mx-auto px-4 leading-relaxed">
            Beyond Limits, Across Continents. <br className="hidden sm:block" />
            Where Talent Meets Inventive Thought.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16 sm:mb-20 px-6 sm:px-0">
            <button 
              onClick={(e) => scrollToSection(e, '#services')}
              className="relative overflow-hidden group px-8 py-4 sm:px-10 sm:py-5 bg-brand text-white font-black rounded-2xl shadow-2xl shadow-brand/30 hover:bg-brand-dark transition-all transform hover:-translate-y-1 active:translate-y-0 w-full sm:w-auto text-base sm:text-xl"
            >
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
            </button>
            <button 
              onClick={(e) => scrollToSection(e, '#about')}
              className="px-8 py-4 sm:px-10 sm:py-5 bg-white/10 text-white font-black rounded-2xl border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all w-full sm:w-auto text-base sm:text-xl"
            >
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 py-8 sm:py-10 border-t border-white/10 mx-auto max-w-4xl">
            {[
              { val: '100+', label: 'Global Clients' },
              { val: '50+', label: 'Countries' },
              { val: '24/7', label: 'Support' },
              { val: '99%', label: 'Satisfaction' }
            ].map((stat, i) => (
              <div key={i} className="text-center group cursor-default">
                <p className="text-brand text-2xl sm:text-4xl font-black mb-1 group-hover:scale-110 transition-transform duration-300">{stat.val}</p>
                <p className="text-white/40 text-[9px] sm:text-[11px] font-bold uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;