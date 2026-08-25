import React, { useState, useEffect } from 'react';
import { Coffee, Phone, Menu as MenuIcon, X, Clock, MapPin, Globe } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';
import { useLanguage } from '../context/LanguageContext';
import { NuCafeLogo } from './NuCafeLogo';

interface NavbarProps {
  activeSection: string;
  onOpenBrandModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onOpenBrandModal }) => {
  const { language, setLanguage, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(false);

  // Check if cafe is open in Addis Ababa time (UTC+3)
  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      // Addis Ababa is UTC+3
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const addisTime = new Date(utc + 3600000 * 3);
      const hours = addisTime.getHours();
      const isOpen = hours >= CAFE_INFO.openingHours.openHour24 && hours < CAFE_INFO.openingHours.closeHour24;
      setIsOpenNow(isOpen);
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, id: 'hero', href: '#hero' },
    { name: t.nav.about, id: 'about', href: '#about' },
    { name: t.nav.menu, id: 'menu', href: '#menu' },
    { name: t.nav.gallery, id: 'gallery', href: '#gallery' },
    { name: t.nav.hours, id: 'hours', href: '#hours' },
    { name: t.nav.location, id: 'location', href: '#location' },
    { name: t.nav.contact, id: 'contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top micro-bar for quick details & Language switcher */}
      <div id="top-announcement-bar" className="bg-[#2D1B0D] text-[#D4C3A1] text-xs py-2 px-4 border-b border-[#D4C3A1]/20 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-sans-ui text-[11px] uppercase tracking-wider">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-[#F5F2ED]/80">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              {language === 'am' ? CAFE_INFO.locationAm : CAFE_INFO.location}
            </span>
            <span className="flex items-center gap-1.5 text-[#F5F2ED]/80">
              <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
              {language === 'am' ? 'በየቀኑ፡ ከጠዋቱ 1:00 – ማታ 3:00' : 'Every day: 7:00 AM – 9:00 PM'}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-2">
              <span className="gold-accent font-bold text-xs">2.8</span>
              <div className="flex gap-0.5" title="2.8 out of 5 stars">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4C3A1] opacity-40"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4C3A1] opacity-40"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4C3A1] opacity-40"></div>
              </div>
              <span className="text-[10px] text-[#D4C3A1]/60">{language === 'am' ? '(4 አስተያየቶች)' : '(4 Reviews)'}</span>
            </div>

            <span className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[10px] uppercase tracking-widest font-medium ${
              isOpenNow ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-700/40' : 'bg-amber-950/80 text-amber-300 border border-amber-700/40'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full ${isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              {isOpenNow
                ? (language === 'am' ? 'አሁን ክፍት ነው' : 'Open Now')
                : (language === 'am' ? 'ይከፈታል 1:00 ሰዓት' : 'Opens 7:00 AM')}
            </span>

            {/* Language Switcher in Top Bar */}
            <div className="flex items-center bg-[#1F1209] rounded-full p-0.5 border border-[#D4C3A1]/30">
              <button
                id="lang-toggle-en-top"
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-colors cursor-pointer ${
                  language === 'en'
                    ? 'bg-[#C5A059] text-[#2D1B0D]'
                    : 'text-[#D4C3A1]/70 hover:text-[#FDFBF7]'
                }`}
                title="Switch to English"
              >
                EN
              </button>
              <button
                id="lang-toggle-am-top"
                onClick={() => setLanguage('am')}
                className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-colors cursor-pointer ${
                  language === 'am'
                    ? 'bg-[#C5A059] text-[#2D1B0D]'
                    : 'text-[#D4C3A1]/70 hover:text-[#FDFBF7]'
                }`}
                title="ወደ አማርኛ ቀይር"
              >
                አማ
              </button>
            </div>

            <a
              id="top-bar-phone-link"
              href={`tel:${CAFE_INFO.phoneRaw}`}
              className="flex items-center gap-1 text-[#C5A059] hover:text-[#FDFBF7] transition-colors font-semibold"
            >
              <Phone className="w-3 h-3 text-[#C5A059]" />
              {CAFE_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        id="main-navbar"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#2D1B0D]/95 backdrop-blur-md shadow-lg py-3 border-b border-[#D4C3A1]/20'
            : 'bg-[#2D1B0D]/90 backdrop-blur-sm py-4 border-b border-[#D4C3A1]/15'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            id="brand-logo-link"
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-0.5 shadow-md border border-[#D4C3A1]/40 group-hover:scale-105 transition-transform shrink-0">
              <NuCafeLogo size="sm" variant="emblem" theme="original" />
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif text-2xl font-bold tracking-tight text-[#FDFBF7] group-hover:text-[#C5A059] transition-colors">
                  Nu Café
                </span>
                <span className="font-serif text-sm font-bold text-[#34D399]">
                  (ኑ ካፌ)
                </span>
              </div>
              <p className="font-sans-ui text-[9px] uppercase tracking-[0.25em] text-[#D4C3A1]/70 -mt-0.5">
                {language === 'am' ? 'አዲስ አበባ፣ ኢትዮጵያ' : 'Addis Ababa, Ethiopia'}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-links" className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-full font-sans-ui text-xs uppercase tracking-wider transition-all ${
                    isActive
                      ? 'text-[#2D1B0D] bg-[#C5A059] font-bold'
                      : 'text-[#F5F2ED]/85 hover:text-[#C5A059] hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Action Buttons & Language Switcher */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Selector Pill */}
            <div className="flex items-center bg-[#1F1209] rounded-full p-1 border border-[#D4C3A1]/30">
              <Globe className="w-3.5 h-3.5 text-[#C5A059] ml-1.5 mr-1" />
              <button
                id="lang-btn-en"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-[#C5A059] text-[#2D1B0D] shadow-xs'
                    : 'text-[#D4C3A1]/70 hover:text-[#FDFBF7]'
                }`}
              >
                English
              </button>
              <button
                id="lang-btn-am"
                onClick={() => setLanguage('am')}
                className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  language === 'am'
                    ? 'bg-[#C5A059] text-[#2D1B0D] shadow-xs'
                    : 'text-[#D4C3A1]/70 hover:text-[#FDFBF7]'
                }`}
              >
                አማርኛ
              </button>
            </div>

            {/* Brand Logo & Kit Modal Trigger */}
            {onOpenBrandModal && (
              <button
                id="navbar-brand-kit-btn"
                onClick={onOpenBrandModal}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-sans-ui text-[11px] font-bold uppercase tracking-wider bg-[#1F1209] text-[#34D399] hover:text-white border border-[#279847]/40 hover:border-[#34D399] transition-all cursor-pointer shadow-xs"
                title="View Nu Café Official Brand Identity & Logo Kit"
              >
                <NuCafeLogo size="xs" variant="emblem" theme="original" className="w-3.5 h-3.5" />
                <span>{language === 'am' ? 'የካፌው አርማ' : 'Brand Logo'}</span>
              </button>
            )}

            <a
              id="navbar-call-btn"
              href={`tel:${CAFE_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-sans-ui text-[11px] font-bold uppercase tracking-wider bg-[#C5A059] text-[#2D1B0D] hover:bg-[#FDFBF7] active:scale-95 transition-all shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{t.nav.callNow}</span>
            </a>
          </div>

          {/* Mobile Menu & Language Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Language Toggle */}
            <button
              id="mobile-language-toggle-btn"
              onClick={toggleLanguage}
              className="px-2.5 py-1 rounded-full bg-[#1F1209] text-[#C5A059] border border-[#D4C3A1]/30 text-xs font-bold font-sans-ui flex items-center gap-1"
              aria-label="Toggle language between English and Amharic"
            >
              <Globe className="w-3 h-3" />
              <span>{language === 'en' ? 'አማ' : 'EN'}</span>
            </button>

            <a
              id="mobile-quick-call-btn"
              href={`tel:${CAFE_INFO.phoneRaw}`}
              className="p-2 rounded-full bg-[#C5A059] text-[#2D1B0D]"
              aria-label="Call Nu Café"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#F5F2ED] hover:text-[#C5A059] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-overlay"
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm lg:hidden flex justify-end transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            id="mobile-drawer-content"
            className="w-4/5 max-w-sm bg-[#2D1B0D] text-[#FDFBF7] h-full shadow-2xl p-6 flex flex-col justify-between border-l border-[#D4C3A1]/30 font-sans-ui overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-[#D4C3A1]/20">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center p-0.5 shadow-md border border-[#D4C3A1]/40 shrink-0">
                    <NuCafeLogo size="xs" variant="emblem" theme="original" />
                  </div>
                  <div>
                    <span className="font-serif text-xl font-bold text-[#FDFBF7]">Nu Café</span>
                    <p className="text-[9px] tracking-[0.2em] uppercase text-[#34D399] font-bold">
                      {language === 'am' ? 'ኑ ካፌ · አዲስ አበባ' : 'NU CAFÉ · ADDIS ABABA'}
                    </p>
                  </div>
                </div>
                <button
                  id="mobile-drawer-close-btn"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-md text-[#F5F2ED] hover:text-[#C5A059]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Language Switcher in Mobile Drawer */}
              <div className="mt-4 p-3 rounded-[20px] bg-[#1F1209] border border-[#D4C3A1]/20 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-[#D4C3A1]">
                  <Globe className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{t.nav.language}</span>
                </div>
                <div className="flex gap-1">
                  <button
                    id="drawer-lang-en"
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                      language === 'en'
                        ? 'bg-[#C5A059] text-[#2D1B0D]'
                        : 'bg-white/5 text-[#D4C3A1]'
                    }`}
                  >
                    English
                  </button>
                  <button
                    id="drawer-lang-am"
                    onClick={() => setLanguage('am')}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                      language === 'am'
                        ? 'bg-[#C5A059] text-[#2D1B0D]'
                        : 'bg-white/5 text-[#D4C3A1]'
                    }`}
                  >
                    አማርኛ
                  </button>
                </div>
              </div>

              {/* Status indicator in mobile menu */}
              <div className="mt-3 p-3.5 rounded-[20px] bg-[#1F1209] border border-[#D4C3A1]/20 flex items-center justify-between text-xs">
                <span className="text-[#D4C3A1] uppercase tracking-wider text-[10px]">
                  {language === 'am' ? 'ሁኔታ' : 'Status'}
                </span>
                <span className={`inline-flex items-center gap-1.5 font-medium ${isOpenNow ? 'text-emerald-400' : 'text-amber-400'}`}>
                  <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                  {isOpenNow
                    ? (language === 'am' ? 'አሁን ክፍት ነው (1:00 – 3:00)' : 'Open Now (7 AM – 9 PM)')
                    : (language === 'am' ? 'ዝግ ነው (1:00 ሰዓት ይከፈታል)' : 'Closed (Opens 7 AM)')}
                </span>
              </div>

              {/* Nav links */}
              <nav id="mobile-nav-list" className="mt-5 space-y-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      id={`mobile-link-${link.id}`}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`block px-4 py-2.5 rounded-full text-xs uppercase tracking-wider font-medium transition-colors ${
                        isActive
                          ? 'bg-[#C5A059] text-[#2D1B0D] font-bold'
                          : 'text-[#F5F2ED]/80 hover:bg-white/5 hover:text-[#C5A059]'
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Footer action */}
            <div className="pt-5 border-t border-[#D4C3A1]/20 space-y-3 mt-4">
              {onOpenBrandModal && (
                <button
                  id="mobile-drawer-brand-kit-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBrandModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#1F1209] text-[#34D399] border border-[#279847]/40 font-bold text-xs uppercase tracking-wider hover:bg-black transition-colors"
                >
                  <NuCafeLogo size="xs" variant="emblem" theme="original" className="w-4 h-4" />
                  <span>{language === 'am' ? 'የኑ ካፌ ይፋዊ አርማ እና መለያ' : 'Brand Identity & Logo Kit'}</span>
                </button>
              )}

              <a
                id="mobile-drawer-call-btn"
                href={`tel:${CAFE_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#C5A059] text-[#2D1B0D] font-bold text-xs uppercase tracking-wider hover:bg-[#FDFBF7] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{language === 'am' ? `በ ${CAFE_INFO.phone} ይደውሉ` : `Call ${CAFE_INFO.phone}`}</span>
              </a>
              <p className="text-center text-[10px] text-[#D4C3A1]/60 uppercase tracking-wider">
                {language === 'am' ? CAFE_INFO.locationAm : CAFE_INFO.location}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
