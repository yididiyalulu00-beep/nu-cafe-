import React from 'react';
import { Coffee, MapPin, Phone, Clock, Heart, Instagram, Facebook, Send, ArrowUp } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';
import { useLanguage } from '../context/LanguageContext';
import { NuCafeLogo } from './NuCafeLogo';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: t.nav.home, href: '#hero' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.menu, href: '#menu' },
    { name: t.nav.gallery, href: '#gallery' },
    { name: t.nav.hours, href: '#hours' },
    { name: t.nav.location, href: '#location' },
    { name: t.nav.reviews, href: '#reviews' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#2D1B0D] text-[#FDFBF7] border-t border-[#D4C3A1]/20 relative overflow-hidden font-sans-ui">
      {/* Decorative top gold hairline */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-1 shadow-md border border-[#D4C3A1]/40 shrink-0">
                <NuCafeLogo size="sm" variant="emblem" theme="original" />
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-2xl font-bold tracking-tight text-[#FDFBF7]">
                    Nu Café
                  </span>
                  <span className="font-serif text-sm font-bold text-[#34D399]">
                    (ኑ ካፌ)
                  </span>
                </div>
                <span className="block text-[9px] tracking-[0.2em] uppercase text-[#C5A059] font-bold">
                  {language === 'am' ? 'አዲስ አበባ፣ ኢትዮጵያ' : 'Addis Ababa, Ethiopia'}
                </span>
              </div>
            </div>

            <p className="font-serif italic text-base text-[#C5A059]">
              {language === 'am' ? '«ጥሩ ቡና። መልካም ጊዜያት።»' : '“Good Coffee. Good Moments.”'}
            </p>

            <p className="text-xs text-[#FDFBF7]/70 leading-relaxed max-w-sm">
              {t.footer.description}
            </p>

            {/* Social placeholders with accessible labels */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="#contact"
                className="w-8 h-8 rounded-full bg-[#3D2513] text-[#C5A059] hover:bg-[#C5A059] hover:text-[#2D1B0D] flex items-center justify-center transition-colors border border-[#D4C3A1]/30"
                title="Connect via Phone/Telegram"
                aria-label="Connect with Nu Café"
              >
                <Send className="w-3.5 h-3.5" />
              </a>
              <span className="text-[10px] uppercase tracking-wider text-[#D4C3A1]/60">
                {language === 'am' ? 'በአዲስ አበባ ቀጥታ መስመር' : 'Direct in Addis Ababa'}
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-bold text-[#FDFBF7] uppercase tracking-[0.2em] text-xs">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-[#FDFBF7]/70 hover:text-[#C5A059] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span className="text-[#C5A059]">›</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Hours */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-serif text-sm font-bold text-[#FDFBF7] uppercase tracking-[0.2em] text-xs">
              {t.footer.businessInfo}
            </h4>

            <div className="space-y-3 text-xs text-[#FDFBF7]/70">
              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#FDFBF7] block font-medium">{t.footer.location}:</strong>
                  <span>{language === 'am' ? CAFE_INFO.locationAm : CAFE_INFO.location}</span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#FDFBF7] block font-medium">{t.footer.phone}:</strong>
                  <a
                    href={`tel:${CAFE_INFO.phoneRaw}`}
                    className="text-[#C5A059] hover:underline"
                  >
                    {CAFE_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#FDFBF7] block font-medium">{t.footer.hours}:</strong>
                  <span>{language === 'am' ? 'በየቀኑ ከጠዋቱ 1:00 – ማታ 3:00' : 'Every day, 7:00 AM – 9:00 PM'}</span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-start gap-3 pt-2">
                <div className="px-3 py-1 rounded-full bg-[#3D2513] border border-[#D4C3A1]/30 text-[#C5A059] text-[10px] font-bold uppercase tracking-wider flex items-center gap-2">
                  <span>{t.footer.ratingLabel}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar with copyright and back to top */}
        <div className="mt-12 pt-6 border-t border-[#D4C3A1]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FDFBF7]/50">
          <p>
            © {new Date().getFullYear()} Nu Café. Addis Ababa, Ethiopia. {t.footer.rights}
          </p>

          <button
            id="footer-back-to-top-btn"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#C5A059] hover:text-[#D4C3A1] transition-colors cursor-pointer text-[10px] font-bold uppercase tracking-wider"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
