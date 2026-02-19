import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Results', href: '#achievements' },
    { name: 'Services', href: '#services' },
    { name: 'Clients', href: '#testimonials' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -80% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    navLinks.forEach(link => {
      const id = link.href.replace('#', '');
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(targetId);
    } else if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white shadow-lg py-2 sm:py-3' : 'bg-transparent py-4 sm:py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, '#home')}
              className="flex items-center gap-2 sm:gap-3 group"
            >
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-transform group-hover:scale-105 shrink-0">
                {/* Initial format: Div with background-image instead of <img> */}
                <div 
                  className="w-full h-full bg-contain bg-center bg-no-repeat"
                  style={{ backgroundImage: "url('logo.png')" }}
                  role="img"
                  aria-label="Ingenium Logo"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-brand leading-none">
                  Ingenium
                </span>
                <span className={`text-[8px] sm:text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-500 mt-1 ${isScrolled ? 'text-brand-slate' : 'text-brand-light'}`}>
                  Virtual Assistant
                </span>
              </div>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {navLinks.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`group relative py-2 font-bold text-sm tracking-wide transition-all duration-300 ${
                    isScrolled 
                      ? (isActive ? 'text-brand' : 'text-brand-slate hover:text-brand') 
                      : (isActive ? 'text-brand' : 'text-white hover:text-brand-light')
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  <div className={`absolute -bottom-1 left-0 h-1 bg-brand transition-all duration-500 ease-out rounded-full ${
                    isActive ? 'w-full opacity-100' : 'w-0 opacity-0'
                  } group-hover:w-full group-hover:opacity-100`}></div>
                </a>
              );
            })}
            <a 
              href="#services"
              onClick={(e) => scrollToSection(e, '#services')}
              className="px-5 py-2 sm:px-6 sm:py-2.5 bg-brand text-white font-bold rounded-full hover:bg-brand-dark transition-all hover:shadow-lg hover:shadow-brand/30 transform hover:-translate-y-0.5"
            >
              Get Started
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isScrolled || isMenuOpen ? 'text-brand-slate bg-brand/5' : 'text-white bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-xl sm:text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden absolute w-full bg-white border-b border-slate-100 transition-all duration-500 ease-in-out ${
        isMenuOpen ? 'opacity-100 translate-y-0 visible shadow-2xl' : 'opacity-0 -translate-y-4 invisible'
      }`}>
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => {
            const targetId = link.href.replace('#', '');
            const isActive = activeSection === targetId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`flex items-center justify-between px-4 py-3.5 text-base font-bold rounded-xl transition-all ${
                  isActive ? 'text-brand bg-brand/5' : 'text-brand-slate hover:text-brand hover:bg-brand/5'
                }`}
              >
                <span>{link.name}</span>
                {isActive && <div className="w-1.5 h-6 bg-brand rounded-full"></div>}
              </a>
            );
          })}
          <div className="px-4 pt-4">
            <a 
              href="#services"
              onClick={(e) => scrollToSection(e, '#services')}
              className="block w-full text-center py-4 bg-brand text-white font-bold rounded-xl shadow-lg shadow-brand/20"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;