import React from 'react';

interface FooterProps {
  onPolicyClick: (type: 'privacy' | 'terms') => void;
  onCookieSettingsClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onPolicyClick, onCookieSettingsClick }) => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: 'fa-tiktok', url: 'https://www.tiktok.com/@ingeniumva?_r=1&_t=ZN-91uq8zcL9eg' },
    { icon: 'fa-linkedin', url: 'https://www.linkedin.com/company/innocent-ezike/' },
    { icon: 'fa-facebook', url: 'https://www.facebook.com/share/1A8me9Wgi9/' },
    { icon: 'fa-youtube', url: 'https://www.youtube.com/@IngeniumVirtualAssistant' },
    { icon: 'fa-telegram', url: 'https://t.me/Ingeniumva' },
    { icon: 'fa-instagram', url: 'https://www.instagram.com/ingeniumvirtualassistant?igsh=Z3FmaWMwdmhubGI5' },
  ];

  const scrollToSection = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    } else if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleAction = (e: React.MouseEvent, action: () => void) => {
    e.preventDefault();
    action();
  };

  return (
    <footer id="footer" className="bg-brand-slate pt-16 sm:pt-24 pb-8 sm:pb-12 text-white overflow-hidden relative">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand opacity-5 rounded-full blur-[100px] translate-y-1/2 translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 sm:gap-16 mb-16 sm:mb-20">
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shrink-0">
                {/* Initial format: Div with background-image instead of <img> */}
                <div 
                  className="w-full h-full bg-contain bg-center bg-no-repeat"
                  style={{ backgroundImage: "url('logo.png')" }}
                  role="img"
                  aria-label="Ingenium Logo"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl sm:text-2xl tracking-tight leading-none text-brand">Ingenium</span>
                <span className="text-[9px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-white/50 mt-1">Virtual Assistant</span>
              </div>
            </div>
            <p className="text-white/40 leading-relaxed mb-6 sm:mb-8 font-medium text-base pr-4">
              Where Talent Meets Inventive Thought. Executive virtual assistance and digital operations for global leaders.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {socialLinks.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand hover:text-white border border-white/5 transition-all duration-300"
                >
                  <i className={`fa-brands ${link.icon} text-lg sm:text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] mb-6 sm:mb-8 text-brand">Explore</h4>
            <ul className="space-y-3 sm:space-y-4 font-bold text-white/50 text-base">
              <li><button onClick={(e) => scrollToSection(e, '#home')} className="hover:text-brand transition-colors text-left">Home</button></li>
              <li><button onClick={(e) => scrollToSection(e, '#about')} className="hover:text-brand transition-colors text-left">Our Mission</button></li>
              <li><button onClick={(e) => scrollToSection(e, '#process')} className="hover:text-brand transition-colors text-left">How it Works</button></li>
              <li><button onClick={(e) => scrollToSection(e, '#services')} className="hover:text-brand transition-colors text-left">Our Services</button></li>
              <li><button onClick={(e) => scrollToSection(e, '#testimonials')} className="hover:text-brand transition-colors text-left">Testimonials</button></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] mb-6 sm:mb-8 text-brand">Legal</h4>
            <ul className="space-y-3 sm:space-y-4 font-bold text-white/50 text-base">
              <li><button onClick={(e) => handleAction(e, () => onPolicyClick('privacy'))} className="hover:text-brand transition-colors text-left">Privacy Policy</button></li>
              <li><button onClick={(e) => handleAction(e, () => onPolicyClick('terms'))} className="hover:text-brand transition-colors text-left">Terms of Service</button></li>
              <li><button onClick={(e) => handleAction(e, onCookieSettingsClick)} className="hover:text-brand transition-colors text-left">Cookie Settings</button></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] mb-6 sm:mb-8 text-brand">Reach Out</h4>
            <div className="space-y-4 sm:space-y-6 font-bold text-white/50">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-location-dot text-brand text-sm"></i>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed">Aberdeen, Scotland, UK & Abuja, Nigeria</p>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand/10 transition-colors">
                  <i className="fa-solid fa-phone text-brand text-sm"></i>
                </div>
                <a 
                  href="tel:+447526596522" 
                  className="text-sm sm:text-base font-black text-white hover:text-brand transition-all duration-300"
                >
                  +44 7526 596522
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 sm:pt-12 text-center">
          <p className="text-white/20 text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.3em] px-4">
            © {currentYear} Ingenium Virtual Assistant Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;