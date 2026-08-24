import React, { useState } from 'react';
import { Camera, Sparkles, Maximize2, Coffee, Layers } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/cafeData';
import { GalleryItem } from '../types';
import { ImageLightbox } from './ImageLightbox';
import { useLanguage } from '../context/LanguageContext';

export const GallerySection: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: t.gallery.allPhotos },
    { id: 'coffee', label: t.gallery.coffeeDrinks },
    { id: 'pastries', label: t.gallery.pastriesBakes },
    { id: 'ambiance', label: t.gallery.atmosphere },
    { id: 'food', label: t.gallery.foodBreakfast },
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#FDFBF7] text-[#2D1B0D] relative border-b border-[#D4C3A1]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#F5F2ED] border border-[#D4C3A1]/40 text-[#C5A059] font-sans-ui text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
            <Camera className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{t.gallery.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D1B0D] tracking-tight mb-3">
            {t.gallery.title}
          </h2>
          <div className="w-12 h-px bg-[#C5A059] mx-auto mb-4" />
          <p className="font-sans-ui text-sm sm:text-base text-[#2D1B0D]/80 leading-relaxed max-w-2xl mx-auto">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Gallery Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10 font-sans-ui">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`gallery-filter-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#2D1B0D] text-[#FDFBF7] shadow-xs'
                  : 'bg-[#F5F2ED] text-[#2D1B0D]/80 border border-[#D4C3A1]/40 hover:bg-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item) => {
            const displayTitle = language === 'am' && item.titleAm ? item.titleAm : item.title;
            const displayCaption = language === 'am' && item.captionAm ? item.captionAm : item.caption;

            return (
              <div
                key={item.id}
                id={`gallery-item-${item.id}`}
                onClick={() => setActiveLightboxItem(item)}
                className="group relative rounded-[28px] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-500 cursor-pointer bg-[#2D1B0D] h-72 border border-[#D4C3A1]/35"
              >
                <img
                  src={item.imageUrl}
                  alt={displayTitle}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B0D]/90 via-[#2D1B0D]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Hover Zoom Icon */}
                <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-[#2D1B0D]/60 backdrop-blur-md flex items-center justify-center text-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity border border-[#D4C3A1]/30">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform font-sans-ui">
                  <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#C5A059] block mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-base font-bold text-[#FDFBF7] leading-snug drop-shadow-xs">
                    {displayTitle}
                  </h4>
                  <p className="text-[11px] text-[#D4C3A1]/80 line-clamp-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {displayCaption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Authenticity */}
        <div className="mt-8 text-center text-xs font-sans-ui text-[#2D1B0D]/60">
          <span>{t.gallery.clickHint}</span>
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        item={activeLightboxItem}
        items={filteredItems}
        onClose={() => setActiveLightboxItem(null)}
        onSelect={(item) => setActiveLightboxItem(item)}
      />
    </section>
  );
};
