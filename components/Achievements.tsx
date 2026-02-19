import React, { useState, useEffect, useCallback, useRef } from 'react';

interface Achievement {
  stat: string;
  label: string;
  description: string;
  icon: string;
}

interface Category {
  id: string;
  label: string;
  achievements: Achievement[];
}

const Achievements: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ops');
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const timerRef = useRef<number | null>(null);

  const categories: Category[] = [
    {
      id: 'ops',
      label: 'Operations',
      achievements: [
        {
          stat: '45%',
          label: 'Efficiency Gains',
          description: 'Achieved through streamlined digital transformations and automated workflows.',
          icon: 'fa-chart-line'
        },
        {
          stat: '60%',
          label: 'Cost Reduction',
          description: 'Significant reduction in operational overhead for customer success teams.',
          icon: 'fa-vault'
        },
        {
          stat: '12+',
          label: 'Time Zones',
          description: 'Seamless coordination for global operations across continents.',
          icon: 'fa-globe'
        }
      ]
    },
    {
      id: 'sectors',
      label: 'Sectors',
      achievements: [
        {
          stat: '22%',
          label: 'Yield Increase',
          description: 'Growth in crop yields across sustainable agri-supply chains.',
          icon: 'fa-leaf'
        },
        {
          stat: '$50M+',
          label: 'Portfolio Value',
          description: 'Successful management of high-value global real estate assets.',
          icon: 'fa-building-circle-check'
        }
      ]
    },
    {
      id: 'growth',
      label: 'Growth',
      achievements: [
        {
          stat: '3x',
          label: 'Higher Engagement',
          description: 'Triple the engagement from refreshed, data-driven digital marketing strategies.',
          icon: 'fa-rocket'
        },
        {
          stat: '$8M+',
          label: 'Project Delivery',
          description: 'On-time, on-budget delivery of multi-million-dollar global projects.',
          icon: 'fa-briefcase'
        }
      ]
    }
  ];

  const cycleTab = useCallback(() => {
    setActiveTab((prev) => {
      const currentIndex = categories.findIndex(c => c.id === prev);
      const nextIndex = (currentIndex + 1) % categories.length;
      setDirection('next');
      return categories[nextIndex].id;
    });
  }, [categories]);

  // Auto-switch logic
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = window.setInterval(cycleTab, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, cycleTab]);

  const handleTabClick = (id: string) => {
    const currentIndex = categories.findIndex(c => c.id === activeTab);
    const nextIndex = categories.findIndex(c => c.id === id);
    setDirection(nextIndex > currentIndex ? 'next' : 'prev');
    setActiveTab(id);
  };

  return (
    <section 
      id="achievements" 
      className="py-20 sm:py-32 bg-white overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle background light sweep */}
      <div className="section-light-beam opacity-[0.4]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-4 py-1.5 bg-brand/10 rounded-full mb-6">
            <span className="text-brand font-black text-xs sm:text-sm uppercase tracking-widest">Our Impact</span>
          </div>
          <h2 className="text-3xl sm:text-6xl font-black text-brand-slate mb-4 sm:mb-6 heading-shimmer cursor-default">Measurable Outcomes</h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-slate-400 text-lg sm:text-xl font-bold">
              We partner with leaders worldwide to deliver tangible, data-driven growth.
            </p>
          </div>
        </div>

        {/* Tabs - Responsive layout */}
        <div className="flex flex-row justify-center gap-2 sm:gap-4 mb-10 sm:mb-16 overflow-x-auto pb-4 sm:pb-0 no-scrollbar relative">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleTabClick(cat.id)}
              className={`relative px-5 py-2.5 sm:px-8 sm:py-3 rounded-xl sm:rounded-2xl font-black text-[11px] sm:text-base uppercase tracking-widest whitespace-nowrap transition-all transform active:scale-95 overflow-hidden ${
                activeTab === cat.id 
                ? 'bg-brand text-white shadow-xl shadow-brand/30 -translate-y-1' 
                : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
              }`}
            >
              <span className="relative z-10">{cat.label}</span>
              {/* Progress Bar for Active Tab */}
              {activeTab === cat.id && !isPaused && (
                <div 
                  className="absolute bottom-0 left-0 h-1 bg-white/30 transition-all linear"
                  style={{ 
                    width: '100%', 
                    animation: 'shimmer 5s linear forwards',
                    animationKeyframes: 'shimmer'
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Achievement Grid with Entrance Animation */}
        <div 
          key={activeTab} // Using key triggers re-render animation when tab changes
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 min-h-[300px]"
        >
          {categories.find(c => c.id === activeTab)?.achievements.map((item, idx) => (
            <div 
              key={`${activeTab}-${idx}`}
              className={`group p-8 sm:p-10 rounded-[2rem] sm:rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 relative overflow-hidden opacity-0 translate-y-8 animate-in fade-in slide-in-from-bottom-8 fill-mode-forwards`}
              style={{ animationDelay: `${idx * 150}ms`, animationDuration: '800ms' }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand opacity-0 group-hover:opacity-[0.03] rounded-full blur-2xl transition-opacity"></div>
              
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 shadow-sm group-hover:bg-brand group-hover:text-white transition-all duration-500">
                <i className={`fa-solid ${item.icon} text-xl sm:text-2xl text-brand group-hover:text-white`}></i>
              </div>
              <div className="text-4xl sm:text-5xl font-black text-brand-slate mb-2 group-hover:text-brand transition-colors">
                {item.stat}
              </div>
              <h3 className="text-lg sm:text-xl font-black text-brand-slate mb-3 sm:mb-4 uppercase tracking-tight">
                {item.label}
              </h3>
              <p className="text-slate-500 text-base leading-relaxed font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Footnote */}
        <div className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-[2rem] sm:rounded-[3rem] bg-brand-slate text-center relative overflow-hidden shadow-2xl shadow-brand-slate/20 group">
          <div className="absolute inset-0 bg-brand/5 group-hover:bg-brand/10 transition-colors duration-1000"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
          <p className="relative z-10 text-white/70 text-base sm:text-xl font-bold max-w-5xl mx-auto px-4 leading-relaxed italic group-hover:text-white transition-colors">
            * These results represent average client outcomes across our portfolio of global partnerships.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-in {
          animation: enter 0.6s ease-out forwards;
        }
        @keyframes enter {
          from { opacity: 0; transform: translateY(2rem); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fill-mode-forwards {
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  );
};

export default Achievements;