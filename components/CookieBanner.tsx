
import React from 'react';

interface CookieBannerProps {
  onAccept: () => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ onAccept }) => {
  return (
    <div className="fixed bottom-6 left-6 right-6 z-[100] sm:left-auto sm:max-w-md animate-in slide-in-from-bottom duration-700">
      <div className="bg-white/80 backdrop-blur-xl p-6 rounded-[2rem] shadow-2xl border border-white shadow-brand/10">
        <div className="flex gap-5">
          <div className="w-14 h-14 bg-brand rounded-2xl flex items-center justify-center shrink-0 text-white shadow-lg shadow-brand/20">
            <i className="fa-solid fa-cookie-bite text-2xl"></i>
          </div>
          <div>
            <h4 className="text-brand-slate font-black text-lg mb-1">Privacy First</h4>
            <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">
              We use essential cookies to ensure you get the best experience on our website.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={onAccept}
                className="flex-1 py-3 bg-brand text-white font-black rounded-xl hover:bg-brand-dark transition-all"
              >
                Accept All
              </button>
              <button 
                onClick={onAccept}
                className="px-6 py-3 bg-slate-100 text-brand-slate font-black rounded-xl hover:bg-slate-200 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
