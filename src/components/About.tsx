import React from 'react';
import { Coffee, Heart, Users, Sparkles, MapPin } from 'lucide-react';
import coffeeImg from '../assets/images/ethiopian_coffee_cup_1787606122439.jpg';
import pastryImg from '../assets/images/cafe_pastries_fresh_1787606141139.jpg';
import { CAFE_INFO } from '../data/cafeData';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-28 bg-[#FDFBF7] text-[#2D1B0D] relative overflow-hidden border-b border-[#D4C3A1]/30">
      {/* Decorative editorial watermark text */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pr-2 opacity-[0.03] select-none pointer-events-none hidden xl:block">
        <span className="vertical-text font-sans-ui font-black text-9xl tracking-tighter uppercase leading-none text-[#2D1B0D]">
          {language === 'am' ? 'ባህል' : 'CRAFTED'}
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#F5F2ED] border border-[#D4C3A1]/40 text-[#C5A059] font-sans-ui text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
            <Coffee className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{t.about.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D1B0D] tracking-tight mb-3">
            {t.about.title}
          </h2>
          <div className="w-12 h-px bg-[#C5A059] mx-auto mb-4" />
          <p className="font-serif italic text-lg sm:text-xl text-[#2D1B0D]/80 leading-relaxed max-w-2xl mx-auto">
            “{language === 'am' ? 'ጥሩ ቡና። መልካም ጊዜያት።' : 'Welcoming Addis Ababa’s finest seekers of coffee and calm.'}”
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Primary Image */}
              <div className="relative rounded-[32px] overflow-hidden shadow-xl border border-[#D4C3A1]/40 bg-[#2D1B0D]">
                <img
                  src={coffeeImg}
                  alt={language === 'am' ? 'ትኩስ የኢትዮጵያ ቡና በኑ ካፌ' : 'Freshly brewed Ethiopian coffee at Nu Café'}
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B0D]/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white font-sans-ui">
                  <p className="font-serif text-xl font-bold text-[#FDFBF7] drop-shadow-md">
                    {language === 'am' ? 'ልዩ የደጋ ቡና' : 'Artisanal Brews'}
                  </p>
                  <p className="text-xs text-[#D4C3A1] mt-0.5 uppercase tracking-wider text-[11px]">
                    {language === 'am' ? 'ከተመረጡ የኢትዮጵያ የደጋ ቡናዎች የተዘጋጀ' : 'Brewed with pride from highland Ethiopian beans'}
                  </p>
                </div>
              </div>

              {/* Secondary Overlapping Card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 w-48 sm:w-60 rounded-[24px] overflow-hidden shadow-2xl border border-[#D4C3A1]/50 hidden sm:block bg-white">
                <img
                  src={pastryImg}
                  alt={language === 'am' ? 'ትኩስ የዳቦና ኬክ ምርቶች' : 'Fresh bakery treats at Nu Café'}
                  referrerPolicy="no-referrer"
                  className="w-full h-36 sm:h-44 object-cover"
                />
                <div className="p-3 bg-[#2D1B0D] text-white font-sans-ui">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                    {language === 'am' ? 'ትኩስ ኬክና ዳቦ' : 'Daily Pastries'}
                  </p>
                  <p className="text-[10px] text-[#D4C3A1]/70">
                    {language === 'am' ? 'በየጠዋቱ ትኩስ የሚጋገር' : 'Baked fresh every morning'}
                  </p>
                </div>
              </div>

              {/* Experience badge */}
              <div className="absolute -top-4 -left-4 bg-[#2D1B0D] text-[#FDFBF7] p-4 rounded-[20px] shadow-lg border border-[#D4C3A1]/40 max-w-[150px] text-center font-sans-ui">
                <Sparkles className="w-4 h-4 text-[#C5A059] mx-auto mb-1" />
                <p className="font-serif text-xs font-bold text-[#FDFBF7]">
                  {language === 'am' ? 'ጥሩ ጊዜያት' : 'Good Moments'}
                </p>
                <p className="text-[9px] text-[#D4C3A1]/70 uppercase tracking-widest mt-0.5">
                  {language === 'am' ? 'በየቀኑ' : 'Every visit'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4 font-sans-ui text-sm sm:text-base text-[#2D1B0D]/85 leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-sans-ui">
              <div className="p-5 rounded-[24px] bg-[#F5F2ED] border border-[#D4C3A1]/40 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#2D1B0D] text-[#C5A059] flex items-center justify-center shrink-0">
                  <Coffee className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sm text-[#2D1B0D]">{t.about.featureCoffeeTitle}</h3>
                  <p className="text-xs text-[#2D1B0D]/70 mt-0.5">{t.about.featureCoffeeDesc}</p>
                </div>
              </div>

              <div className="p-5 rounded-[24px] bg-[#F5F2ED] border border-[#D4C3A1]/40 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#2D1B0D] text-[#C5A059] flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sm text-[#2D1B0D]">{t.about.featureAmbianceTitle}</h3>
                  <p className="text-xs text-[#2D1B0D]/70 mt-0.5">{t.about.featureAmbianceDesc}</p>
                </div>
              </div>

              <div className="p-5 rounded-[24px] bg-[#F5F2ED] border border-[#D4C3A1]/40 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#2D1B0D] text-[#C5A059] flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sm text-[#2D1B0D]">{t.about.featureBakeryTitle}</h3>
                  <p className="text-xs text-[#2D1B0D]/70 mt-0.5">{t.about.featureBakeryDesc}</p>
                </div>
              </div>

              <div className="p-5 rounded-[24px] bg-[#F5F2ED] border border-[#D4C3A1]/40 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#2D1B0D] text-[#C5A059] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sm text-[#2D1B0D]">{t.about.featureHoursTitle}</h3>
                  <p className="text-xs text-[#2D1B0D]/70 mt-0.5">{t.about.featureHoursDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
