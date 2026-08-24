import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ImageLightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({ item, items, onClose, onSelect }) => {
  const { language } = useLanguage();

  useEffect(() => {
    if (!item) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        const currentIndex = items.findIndex((i) => i.id === item.id);
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        onSelect(items[prevIndex]);
      }
      if (e.key === 'ArrowRight') {
        const currentIndex = items.findIndex((i) => i.id === item.id);
        const nextIndex = (currentIndex + 1) % items.length;
        onSelect(items[nextIndex]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, items, onClose, onSelect]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIndex]);
  };
  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % items.length;
    onSelect(items[nextIndex]);
  };

  const displayTitle = language === 'am' && item.titleAm ? item.titleAm : item.title;
  const displayCaption = language === 'am' && item.captionAm ? item.captionAm : item.caption;

  return (
    <div
      id="gallery-lightbox-modal"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        id="lightbox-close-btn"
        onClick={onClose}
        className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-20 cursor-pointer"
        aria-label="Close image modal"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        id="lightbox-prev-btn"
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-20 cursor-pointer hidden sm:block"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        id="lightbox-next-btn"
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-20 cursor-pointer hidden sm:block"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Modal Container */}
      <div
        className="relative max-w-4xl w-full bg-[#2D1B0D] rounded-[28px] overflow-hidden shadow-2xl border border-[#D4C3A1]/30 font-sans-ui"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-h-[70vh] flex items-center justify-center bg-black">
          <img
            src={item.imageUrl}
            alt={displayTitle}
            referrerPolicy="no-referrer"
            className="w-full h-auto max-h-[70vh] object-contain"
          />
        </div>
        <div className="p-6 bg-[#2D1B0D] text-[#FDFBF7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#D4C3A1]/20">
          <div>
            <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-[#C5A059]">
              {item.category} • {language === 'am' ? `${currentIndex + 1} ከ ${items.length}` : `${currentIndex + 1} of ${items.length}`}
            </span>
            <h4 className="font-serif text-xl font-bold text-[#FDFBF7] mt-0.5">{displayTitle}</h4>
            <p className="text-xs text-[#D4C3A1]/80 mt-1 max-w-xl">{displayCaption}</p>
          </div>
          <div className="flex sm:hidden items-center gap-3 w-full justify-between pt-2 border-t border-[#D4C3A1]/20">
            <button
              onClick={handlePrev}
              className="px-4 py-2 rounded-full bg-[#F5F2ED]/10 text-xs text-[#FDFBF7]"
            >
              {language === 'am' ? 'ቀዳሚ' : 'Previous'}
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 rounded-full bg-[#F5F2ED]/10 text-xs text-[#FDFBF7]"
            >
              {language === 'am' ? 'ቀጣይ' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
