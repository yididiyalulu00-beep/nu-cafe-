import React from 'react';
import { Coffee, MapPin, Clock, Phone, ChevronDown, Sparkles } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';
import { useLanguage } from '../context/LanguageContext';
import heroBg from '../assets/images/hero_cafe_ambiance_1787606108294.jpg';

export const Hero: React.FC = () => {
  const { language, t } = useLanguage();

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] md:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#2D1B0D]">
      {/* Background Image with Warm Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt={language === 'am' ? 'የኑ ካፌ ውብና ሰላማዊ ከባቢ በአዲስ አበባ' : 'Nu Café cozy and elegant interior in Addis Ababa'}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform animate-fade-in transition-transform duration-1000 opacity-30"
        />
        {/* Multi-layered dark espresso gradient for high legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B0D] via-[#2D1B0D]/85 to-[#2D1B0D]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#2D1B0D]/60 to-[#2D1B0D]" />
      </div>

      {/* Decorative ambient coffee bean glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Subtle Editorial Pill Tag */}
        <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#1F1209]/80 border border-[#D4C3A1]/30 text-[#D4C3A1] font-sans-ui text-xs font-medium uppercase tracking-[0.2em] mb-6 backdrop-blur-md shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>{t.hero.cityBadge}</span>
        </div>

        {/* Cafe Title */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-[#FDFBF7] drop-shadow-md mb-3">
          {language === 'am' ? 'ኑ ካፌ' : 'Nu Café'}
        </h1>

        {/* Short Tagline */}
        <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#C5A059] font-normal tracking-wide max-w-2xl mb-4">
          “{t.hero.tagline.replace(/[“”"']/g, '')}”
        </p>

        {/* Hairline Divider */}
        <div className="w-16 h-px bg-[#C5A059] my-4 opacity-80" />

        {/* Concise Description */}
        <p className="font-sans-ui text-sm sm:text-base text-[#F5F2ED]/85 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          {t.hero.subtitle}
        </p>

        {/* Action Buttons: "View Menu" and "Contact Us" */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-md mb-12 font-sans-ui">
          <button
            id="hero-view-menu-btn"
            onClick={() => handleScrollTo('#menu')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#C5A059] hover:bg-[#FDFBF7] text-[#2D1B0D] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Coffee className="w-4 h-4 text-[#2D1B0D]" />
            <span>{t.hero.viewMenuBtn}</span>
          </button>

          <button
            id="hero-contact-us-btn"
            onClick={() => handleScrollTo('#contact')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent hover:bg-[#FDFBF7] hover:text-[#2D1B0D] text-[#FDFBF7] border border-[#D4C3A1] font-bold text-xs uppercase tracking-wider backdrop-blur-md transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Phone className="w-4 h-4 text-[#C5A059]" />
            <span>{t.hero.contactBtn}</span>
          </button>
        </div>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl pt-8 border-t border-[#D4C3A1]/20 text-[#D4C3A1] font-sans-ui text-xs">
          <div className="flex items-center justify-center sm:justify-start gap-3 p-4 rounded-[24px] bg-[#1F1209]/70 border border-[#D4C3A1]/25 backdrop-blur-sm">
            <div className="w-8 h-8 rounded-full bg-[#C5A059]/15 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4 text-[#C5A059]" />
            </div>
            <div className="text-left">
              <p className="font-bold uppercase tracking-wider text-[#FDFBF7] text-[11px]">
                {language === 'am' ? 'የስራ ሰዓት' : 'Open Daily'}
              </p>
              <p className="text-xs text-[#D4C3A1]/80">
                {language === 'am' ? 'ከጠዋቱ 1:00 – ማታ 3:00' : '7:00 AM – 9:00 PM'}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3 p-4 rounded-[24px] bg-[#1F1209]/70 border border-[#D4C3A1]/25 backdrop-blur-sm">
            <div className="w-8 h-8 rounded-full bg-[#C5A059]/15 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 text-[#C5A059]" />
            </div>
            <div className="text-left">
              <p className="font-bold uppercase tracking-wider text-[#FDFBF7] text-[11px]">
                {language === 'am' ? 'አዲስ አበባ' : 'Addis Ababa'}
              </p>
              <p className="text-xs text-[#D4C3A1]/80">
                {language === 'am' ? 'VQWC+MMQ፣ ኢትዮጵያ' : 'VQWC+MMQ, Ethiopia'}
              </p>
            </div>
          </div>

          <a
            href={`tel:${CAFE_INFO.phoneRaw}`}
            className="flex items-center justify-center sm:justify-start gap-3 p-4 rounded-[24px] bg-[#1F1209]/70 border border-[#D4C3A1]/25 backdrop-blur-sm hover:bg-[#1F1209] transition-colors group"
          >
            <div className="w-8 h-8 rounded-full bg-[#C5A059]/15 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Phone className="w-4 h-4 text-[#C5A059]" />
            </div>
            <div className="text-left">
              <p className="font-bold uppercase tracking-wider text-[#FDFBF7] group-hover:text-[#C5A059] transition-colors text-[11px]">
                {language === 'am' ? 'ስልክ' : 'Direct Phone'}
              </p>
              <p className="text-xs text-[#D4C3A1]/80">{CAFE_INFO.phone}</p>
            </div>
          </a>
        </div>
      </div>

      {/* Down arrow scroll helper */}
      <button
        id="hero-scroll-indicator"
        onClick={() => handleScrollTo('#about')}
        aria-label={t.hero.scrollHint}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[#D4C3A1]/70 hover:text-[#C5A059] transition-colors animate-bounce p-2 cursor-pointer"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
};
