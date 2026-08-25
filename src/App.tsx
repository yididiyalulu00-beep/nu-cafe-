import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { HoursSection } from './components/HoursSection';
import { LocationSection } from './components/LocationSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { BrandShowcaseModal } from './components/BrandShowcaseModal';

function MainContent() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isBrandModalOpen, setIsBrandModalOpen] = useState<boolean>(false);

  // Track active section for navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'menu', 'gallery', 'hours', 'location', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#2D1B0D]">
      {/* 1. Header & Navigation */}
      <Navbar
        activeSection={activeSection}
        onOpenBrandModal={() => setIsBrandModalOpen(true)}
      />

      {/* Main Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Nu Café */}
        <About />

        {/* 3. Menu Section */}
        <MenuSection />

        {/* 4. Photo Gallery */}
        <GallerySection />

        {/* 5. Opening Hours */}
        <HoursSection />

        {/* 6. Location & Map */}
        <LocationSection />

        {/* 7. Customer Reviews & Ratings */}
        <ReviewsSection />

        {/* 8. Contact Section */}
        <ContactSection />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* 10. Floating Actions */}
      <FloatingActions
        onOpenBrandModal={() => setIsBrandModalOpen(true)}
      />

      {/* 11. Brand Identity & Logo Kit Modal */}
      <BrandShowcaseModal
        isOpen={isBrandModalOpen}
        onClose={() => setIsBrandModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}
