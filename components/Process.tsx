import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Initial Briefing',
      description: 'We start by understanding your unique operational challenges and goals through a deep-dive consultation.',
      icon: 'fa-comments-dollar'
    },
    {
      number: '02',
      title: 'Talent Pairing',
      description: 'We match your project with a dedicated specialist who possesses the exact skills and creative edge needed.',
      icon: 'fa-user-gear'
    },
    {
      number: '03',
      title: 'Seamless Execution',
      description: 'Your project comes to life with regular updates and a focus on exceeding your quality expectations.',
      icon: 'fa-rocket'
    }
  ];

  return (
    <section id="process" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Left Column: Stylized Image Side */}
          <div className="relative animate-float">
            <div className="relative z-10 bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200 group">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=75&w=800&auto=format&fit=crop" 
                alt="Talent Collaboration" 
                loading="lazy"
                decoding="async"
                width="800"
                height="800"
                className="w-full h-full object-cover aspect-square grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand/5 mix-blend-multiply group-hover:opacity-0 transition-opacity"></div>
            </div>
            {/* Artistic accents */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-brand/10 rounded-full blur-3xl animate-pulse-soft"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 border-[12px] border-brand/10 rounded-full"></div>
            
            <div className="absolute -bottom-12 left-10 right-10 bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-50 z-20 group">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center text-brand text-3xl group-hover:bg-brand group-hover:text-white transition-all">
                  <i className="fa-solid fa-gears"></i>
                </div>
                <div>
                  <h4 className="font-black text-brand-slate text-xl">The Method</h4>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Inventive Thought</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Steps Side */}
          <div>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-brand/10 rounded-full mb-6">
                <span className="text-brand font-black text-sm uppercase tracking-widest">Our Methodology</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-black text-brand-slate mb-6 heading-shimmer cursor-default">How We Work</h2>
              <p className="text-slate-500 text-xl leading-relaxed font-medium">
                A streamlined approach to virtual assistance that ensures precision, quality, and peace of mind.
              </p>
            </div>

            <div className="space-y-10">
              {steps.map((step, idx) => (
                <div key={idx} className="group flex gap-8">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center text-brand font-black text-xl shadow-sm group-hover:bg-brand group-hover:text-white group-hover:border-brand transition-all duration-500">
                      <i className={`fa-solid ${step.icon}`}></i>
                    </div>
                    {idx < steps.length - 1 && (
                      <div className="w-0.5 h-full bg-slate-100 mt-4"></div>
                    )}
                  </div>
                  
                  <div className="pb-8">
                    <span className="text-sm font-black text-brand uppercase tracking-widest mb-2 block">{step.number}</span>
                    <h3 className="text-2xl font-black text-brand-slate mb-3 group-hover:text-brand transition-colors">{step.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-base max-w-md font-medium">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; export default Process;