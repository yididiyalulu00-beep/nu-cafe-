import React, { useState, useMemo } from 'react';
import { 
  Coffee, 
  CupSoda, 
  Citrus, 
  Cookie, 
  Egg, 
  Utensils, 
  Search, 
  Sparkles, 
  Info,
  Phone
} from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, CAFE_INFO } from '../data/cafeData';
import { MenuCategory } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const MenuSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'coffee':
        return <Coffee className="w-4 h-4" />;
      case 'tea':
        return <CupSoda className="w-4 h-4" />;
      case 'juice':
        return <Citrus className="w-4 h-4" />;
      case 'pastries':
        return <Cookie className="w-4 h-4" />;
      case 'breakfast':
        return <Egg className="w-4 h-4" />;
      case 'snacks':
        return <Utensils className="w-4 h-4" />;
      default:
        return <Coffee className="w-4 h-4" />;
    }
  };

  const filteredItems = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = 
        !q ||
        item.name.toLowerCase().includes(q) ||
        (item.nameAm && item.nameAm.toLowerCase().includes(q)) ||
        item.description.toLowerCase().includes(q) ||
        (item.descriptionAm && item.descriptionAm.toLowerCase().includes(q)) ||
        (item.tags && item.tags.some(t => t.toLowerCase().includes(q))) ||
        (item.tagsAm && item.tagsAm.some(t => t.toLowerCase().includes(q)));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="py-20 md:py-28 bg-[#F5F2ED] text-[#2D1B0D] relative border-b border-[#D4C3A1]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FDFBF7] border border-[#D4C3A1]/40 text-[#C5A059] font-sans-ui text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{t.menu.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D1B0D] tracking-tight mb-3">
            {t.menu.title}
          </h2>
          <div className="w-12 h-px bg-[#C5A059] mx-auto mb-4" />
          <p className="font-sans-ui text-sm sm:text-base text-[#2D1B0D]/80 leading-relaxed max-w-2xl mx-auto">
            {t.menu.subtitle}
          </p>

          {/* Price Policy Notice */}
          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FDFBF7] border border-[#D4C3A1]/40 text-xs font-sans-ui text-[#2D1B0D]/80 shadow-xs">
            <Info className="w-4 h-4 text-[#C5A059] shrink-0" />
            <span>{t.menu.chefNoteText}</span>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="mb-10 space-y-4">
          {/* Search bar */}
          <div className="max-w-md mx-auto relative font-sans-ui">
            <Search className="w-4 h-4 text-[#C5A059] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              id="menu-search-input"
              type="text"
              placeholder={t.menu.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-[#FDFBF7] border border-[#D4C3A1]/50 text-xs sm:text-sm text-[#2D1B0D] placeholder-[#2D1B0D]/50 focus:outline-none focus:ring-1 focus:ring-[#C5A059] shadow-xs transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs uppercase tracking-wider text-[#2D1B0D]/60 hover:text-[#2D1B0D] px-1.5 py-0.5"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 pt-2 font-sans-ui">
            <button
              id="category-btn-all"
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeCategory === 'all'
                  ? 'bg-[#2D1B0D] text-[#FDFBF7] shadow-sm'
                  : 'bg-[#FDFBF7] hover:bg-white text-[#2D1B0D]/80 border border-[#D4C3A1]/40'
              }`}
            >
              <span>{t.menu.allCategories}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                activeCategory === 'all' ? 'bg-[#C5A059] text-[#2D1B0D]' : 'bg-[#F5F2ED] text-[#2D1B0D]'
              }`}>
                {MENU_ITEMS.length}
              </span>
            </button>

            {MENU_CATEGORIES.map((category) => {
              const count = MENU_ITEMS.filter((i) => i.category === category.id).length;
              const isSelected = activeCategory === category.id;
              const catName = language === 'am' ? category.nameAm : category.name;
              return (
                <button
                  key={category.id}
                  id={`category-btn-${category.id}`}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? 'bg-[#2D1B0D] text-[#FDFBF7] shadow-sm'
                      : 'bg-[#FDFBF7] hover:bg-white text-[#2D1B0D]/80 border border-[#D4C3A1]/40'
                  }`}
                >
                  <span className={isSelected ? 'text-[#C5A059]' : 'text-[#C5A059]'}>
                    {getCategoryIcon(category.id)}
                  </span>
                  <span>{catName}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    isSelected ? 'bg-[#C5A059] text-[#2D1B0D]' : 'bg-[#F5F2ED] text-[#2D1B0D]'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#FDFBF7] rounded-[32px] border border-[#D4C3A1]/40 p-8 max-w-md mx-auto shadow-xs font-sans-ui">
            <Coffee className="w-10 h-10 text-[#C5A059] mx-auto mb-3" />
            <h3 className="font-serif text-lg font-bold text-[#2D1B0D]">{t.menu.emptyTitle}</h3>
            <p className="text-xs text-[#2D1B0D]/70 mt-1">{t.menu.emptySubtitle}</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-5 py-2 rounded-full bg-[#2D1B0D] text-[#FDFBF7] text-xs font-bold uppercase tracking-wider hover:bg-black cursor-pointer"
            >
              {t.menu.viewAllItems}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const displayName = language === 'am' && item.nameAm ? item.nameAm : item.name;
              const displayDesc = language === 'am' && item.descriptionAm ? item.descriptionAm : item.description;
              const displayPrice = language === 'am' && item.priceTextAm ? item.priceTextAm : item.priceText;
              const displayTags = language === 'am' && item.tagsAm ? item.tagsAm : item.tags;

              return (
                <div
                  key={item.id}
                  id={`menu-card-${item.id}`}
                  className="bg-white rounded-[32px] overflow-hidden border border-[#D4C3A1]/35 shadow-xs hover:shadow-md hover:border-[#C5A059] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Card Image if available */}
                    {item.image && (
                      <div className="relative h-44 w-full overflow-hidden bg-[#F5F2ED]">
                        <img
                          src={item.image}
                          alt={displayName}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        {item.isPopular && (
                          <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#2D1B0D]/90 backdrop-blur-sm text-[#C5A059] text-[9px] font-bold tracking-wider uppercase border border-[#D4C3A1]/40 shadow-xs">
                            {t.menu.popularBadge}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <div>
                          <h3 className="font-serif font-bold text-lg text-[#2D1B0D] group-hover:text-[#C5A059] transition-colors leading-snug">
                            {displayName}
                          </h3>
                        </div>
                      </div>

                      <p className="font-sans-ui text-xs text-[#2D1B0D]/70 leading-relaxed mt-2 line-clamp-2">
                        {displayDesc}
                      </p>

                      {/* Tags */}
                      {displayTags && displayTags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3.5 font-sans-ui">
                          {displayTags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#F5F2ED] border border-[#D4C3A1]/30 text-[#2D1B0D]/70 font-semibold"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Footer: "Ask for price" */}
                  <div className="px-6 py-3.5 bg-[#FDFBF7] border-t border-[#D4C3A1]/30 flex items-center justify-between font-sans-ui">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#2D1B0D]">{displayPrice}</span>
                    </div>
                    <a
                      href={`tel:${CAFE_INFO.phoneRaw}`}
                      className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#C5A059] hover:text-[#2D1B0D] transition-colors"
                      title="Call to ask about availability"
                    >
                      <Phone className="w-3 h-3" />
                      <span>{language === 'am' ? 'ይጠይቁ' : 'Inquire'}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-12 p-8 rounded-[32px] bg-[#2D1B0D] text-[#FDFBF7] flex flex-col md:flex-row items-center justify-between gap-6 border border-[#D4C3A1]/30 shadow-lg font-sans-ui">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-full bg-[#C5A059] flex items-center justify-center text-[#2D1B0D] shrink-0 mx-auto md:mx-0">
              <Coffee className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-[#FDFBF7]">
                {t.menu.chefNoteTitle}
              </h4>
              <p className="text-xs text-[#D4C3A1]/80 mt-1">
                {t.menu.chefNoteText}
              </p>
            </div>
          </div>
          <a
            id="menu-banner-call-btn"
            href={`tel:${CAFE_INFO.phoneRaw}`}
            className="px-6 py-3 rounded-full bg-[#C5A059] hover:bg-[#FDFBF7] text-[#2D1B0D] text-xs font-bold uppercase tracking-wider shrink-0 transition-colors"
          >
            {language === 'am' ? `በ ${CAFE_INFO.phone} ይደውሉ` : `Call ${CAFE_INFO.phone}`}
          </a>
        </div>
      </div>
    </section>
  );
};
