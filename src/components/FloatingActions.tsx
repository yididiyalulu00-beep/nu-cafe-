import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, Sparkles } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';
import { useLanguage } from '../context/LanguageContext';
import { NuCafeLogo } from './NuCafeLogo';

interface FloatingActionsProps {
  onOpenBrandModal?: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBrandModal }) => {
  const { language } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3 pointer-events-none">
      {/* Brand Identity & Logo Kit launcher */}
      {onOpenBrandModal && (
        <button
          id="floating-brand-kit-btn"
          onClick={onOpenBrandModal}
          className="pointer-events-auto flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#2D1B0D]/95 hover:bg-[#1F1209] text-white border border-[#279847]/50 shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer font-sans-ui group"
          title="Inspect Nu Café Brand Logo & Kit"
        >
          <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center p-0.5 shadow-xs">
            <NuCafeLogo size="xs" variant="emblem" theme="original" className="w-3.5 h-3.5" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#34D399] group-hover:text-white transition-colors">
            {language === 'am' ? 'አርማ' : 'Logo Kit'}
          </span>
        </button>
      )}

      {/* Mobile Floating Quick Call Button */}
      <a
        id="floating-call-btn"
        href={`tel:${CAFE_INFO.phoneRaw}`}
        className="pointer-events-auto sm:hidden flex items-center gap-2 px-5 py-3 rounded-full bg-[#2D1B0D] text-[#FDFBF7] border border-[#D4C3A1]/40 shadow-2xl active:scale-95 transition-transform font-sans-ui"
        aria-label="Call Nu Café directly"
      >
        <Phone className="w-4 h-4 text-[#C5A059]" />
        <span className="text-xs font-bold uppercase tracking-wider">
          {language === 'am' ? `ይደውሉ ${CAFE_INFO.phone}` : `Call ${CAFE_INFO.phone}`}
        </span>
      </a>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          id="floating-back-to-top-btn"
          onClick={scrollToTop}
          className="pointer-events-auto p-3 rounded-full bg-[#2D1B0D]/95 hover:bg-[#2D1B0D] text-[#C5A059] border border-[#D4C3A1]/40 shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer font-sans-ui"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4 text-[#C5A059]" />
        </button>
      )}
    </div>
  );
};
