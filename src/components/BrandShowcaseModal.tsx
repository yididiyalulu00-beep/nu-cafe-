import React, { useState } from 'react';
import { X, Download, Copy, Check, Sparkles, Layers, Coffee, Share2 } from 'lucide-react';
import { NuCafeLogo } from './NuCafeLogo';
import { useLanguage } from '../context/LanguageContext';

interface BrandShowcaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandShowcaseModal: React.FC<BrandShowcaseModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const [selectedTheme, setSelectedTheme] = useState<'original' | 'light' | 'dark' | 'gold'>('original');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const rawSvgCode = `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="94" fill="#FFFFFF" stroke="#5E3821" stroke-width="1.5" stroke-opacity="0.15" />
  <!-- Steam Wisps -->
  <g stroke="#A88B72" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round">
    <path d="M92 24 C 95 32, 88 40, 94 48 C 96 51, 98 54, 98 57" />
    <path d="M102 20 C 108 30, 96 38, 104 50 C 107 54, 108 58, 107 62" />
    <path d="M112 28 C 114 34, 108 40, 112 48" stroke-width="2" opacity="0.6" />
  </g>
  <!-- Amharic 'ኑ' Handle (Green) -->
  <path d="M 52 48 C 44 48, 38 54, 38 64 C 38 73, 46 80, 56 80 L 78 80 C 66 94, 60 112, 60 132 C 60 148, 66 162, 78 172" stroke="#279847" stroke-width="6.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
  <path d="M 54 116 L 88 126" stroke="#279847" stroke-width="6" stroke-linecap="round" />
  <!-- Coffee Cup Body (Mocha Brown) -->
  <path d="M 72 82 C 66 96, 64 114, 67 132 C 71 152, 85 168, 102 172 C 124 176, 148 160, 154 136 C 158 118, 152 98, 142 84 C 126 104, 98 108, 78 92" stroke="#5E3821" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
  <path d="M 86 68 L 72 82 C 66 98, 66 122, 74 142 C 84 164, 104 174, 126 172 C 146 168, 158 150, 162 130 C 165 110, 158 88, 146 72" stroke="#422413" stroke-width="4" stroke-linecap="round" fill="none" />
  <path d="M 80 88 C 98 106, 130 102, 144 82" stroke="#A88B72" stroke-width="3.5" stroke-linecap="round" fill="none" />
  <!-- Saucer Base -->
  <path d="M 38 152 C 48 174, 68 184, 80 186" stroke="#5E3821" stroke-width="5" stroke-linecap="round" fill="none" />
  <path d="M 152 152 C 168 158, 182 170, 186 182" stroke="#5E3821" stroke-width="4" stroke-linecap="round" fill="none" />
  <path d="M 86 184 C 106 188, 132 184, 150 178" stroke="#5E3821" stroke-width="4.5" stroke-linecap="round" fill="none" />
</svg>`;

  const handleCopySvg = () => {
    navigator.clipboard.writeText(rawSvgCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadSvg = () => {
    const blob = new Blob([rawSvgCode], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'nu-cafe-official-logo.svg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      id="brand-identity-modal-overlay"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        id="brand-identity-modal-card"
        className="bg-[#FDFBF7] text-[#2D1B0D] w-full max-w-4xl rounded-[32px] border border-[#D4C3A1]/50 shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#2D1B0D] text-[#FDFBF7] p-6 sm:p-8 flex items-center justify-between border-b border-[#D4C3A1]/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1 shadow-md">
              <NuCafeLogo size="xs" variant="emblem" theme="original" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight">
                {language === 'am' ? 'የኑ ካፌ ይፋዊ አርማ እና ምስላዊ መለያ' : 'Nu Café Official Brand Identity & Logo Kit'}
              </h3>
              <p className="text-xs text-[#34D399] font-sans-ui font-semibold uppercase tracking-wider">
                {language === 'am' ? 'ባህላዊ የኢትዮጵያ ቡና ጥበብ ከዘመናዊ ዲዛይን ጋር' : 'Ethiopian Heritage Harmonized with Modern Minimalism'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#D4C3A1] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close Brand Identity Modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto font-sans-ui">
          {/* Main Logo Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Interactive Preview Canvas */}
            <div className={`md:col-span-6 rounded-[28px] p-8 sm:p-10 flex flex-col items-center justify-center border transition-all duration-300 ${
              selectedTheme === 'dark'
                ? 'bg-[#2D1B0D] border-[#D4C3A1]/30 text-white'
                : selectedTheme === 'gold'
                ? 'bg-[#1F1209] border-[#C5A059]/40 text-[#C5A059]'
                : 'bg-white border-[#D4C3A1]/40 text-[#2D1B0D] shadow-sm'
            }`}>
              <NuCafeLogo
                size="2xl"
                variant="full"
                theme={selectedTheme}
                showSubtitle={true}
              />

              {/* Theme Selector Pills */}
              <div className="mt-8 flex items-center gap-2 bg-[#F5F2ED] p-1.5 rounded-full border border-[#D4C3A1]/30">
                {(['original', 'light', 'dark', 'gold'] as const).map((tMode) => (
                  <button
                    key={tMode}
                    onClick={() => setSelectedTheme(tMode)}
                    className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      selectedTheme === tMode
                        ? 'bg-[#2D1B0D] text-[#FDFBF7] shadow-xs'
                        : 'text-[#2D1B0D]/70 hover:text-[#2D1B0D]'
                    }`}
                  >
                    {tMode}
                  </button>
                ))}
              </div>
            </div>

            {/* Design Language Details */}
            <div className="md:col-span-6 space-y-4">
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#279847] bg-[#279847]/10 px-2.5 py-1 rounded-full border border-[#279847]/20">
                  {language === 'am' ? 'የአርማው ፅንሰ ሀሳብ' : 'Concept & Anatomy'}
                </span>
                <h4 className="font-serif text-2xl font-bold text-[#2D1B0D]">
                  {language === 'am' ? 'የ "ኑ" ፊደል እና የቡና ኩባያ ውህደት' : 'Harmonious "Nu" (ኑ) & Coffee Vessel'}
                </h4>
                <p className="text-xs text-[#2D1B0D]/80 leading-relaxed">
                  {language === 'am'
                    ? 'የካፌው አርማ የኢትዮጵያ ፊደል የሆነውን "ኑ" በአረንጓዴ የቡና ቅጠል ቀለም ከቡና ኩባያ እጀታ ጋር በማዋሃድ እንግዳ ተቀባይነትንና የቡና ጥበብን በደመቀ ሁኔታ ይገልጻል።'
                    : 'The logo gracefully merges the Amharic glyph "Nu" (ኑ - meaning "Come / Welcome") in vibrant coffee-leaf green with a sculpted mocha espresso cup and rising aromatic steam.'}
                </p>
              </div>

              {/* Color Palette Spec */}
              <div className="pt-2">
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#2D1B0D]/70 mb-2.5">
                  {language === 'am' ? 'የቀለም ቤተ-ስዕል' : 'Official Color Palette'}
                </h5>
                <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-mono font-medium">
                  <div className="p-2 rounded-[16px] bg-[#279847] text-white">
                    <span>#279847</span>
                    <span className="block text-[8px] font-sans opacity-90">Nu Leaf Green</span>
                  </div>
                  <div className="p-2 rounded-[16px] bg-[#5E3821] text-white">
                    <span>#5E3821</span>
                    <span className="block text-[8px] font-sans opacity-90">Mocha Roast</span>
                  </div>
                  <div className="p-2 rounded-[16px] bg-[#C5A059] text-[#2D1B0D]">
                    <span>#C5A059</span>
                    <span className="block text-[8px] font-sans font-bold">Warm Gold</span>
                  </div>
                  <div className="p-2 rounded-[16px] bg-[#2D1B0D] text-white">
                    <span>#2D1B0D</span>
                    <span className="block text-[8px] font-sans opacity-90">Espresso Dark</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Copy & Download */}
              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  id="copy-logo-svg-btn"
                  onClick={handleCopySvg}
                  className="px-4 py-2.5 rounded-full bg-[#2D1B0D] hover:bg-black text-[#FDFBF7] text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#C5A059]" />}
                  <span>{copied ? (language === 'am' ? 'ተቀድቷል!' : 'Copied SVG!') : (language === 'am' ? 'SVG ቅዳ' : 'Copy Vector SVG')}</span>
                </button>

                <button
                  id="download-logo-svg-btn"
                  onClick={handleDownloadSvg}
                  className="px-4 py-2.5 rounded-full bg-[#F5F2ED] hover:bg-white text-[#2D1B0D] border border-[#D4C3A1]/50 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <Download className="w-4 h-4 text-[#279847]" />
                  <span>{language === 'am' ? 'SVG አውርድ' : 'Download SVG'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Real World Mockup Applications */}
          <div className="pt-4 border-t border-[#D4C3A1]/30">
            <h4 className="font-serif text-lg font-bold text-[#2D1B0D] mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
              <span>{language === 'am' ? 'የአርማው ተግባራዊ አጠቃቀም' : 'Brand Application in Real Life'}</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Cup Mockup */}
              <div className="bg-white rounded-[24px] p-5 border border-[#D4C3A1]/40 text-center flex flex-col items-center justify-center">
                <div className="w-20 h-28 bg-[#F5F2ED] rounded-t-lg rounded-b-2xl border-2 border-[#D4C3A1]/50 flex items-center justify-center relative shadow-inner mb-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-xs">
                    <NuCafeLogo size="xs" variant="emblem" theme="original" />
                  </div>
                </div>
                <h5 className="font-serif font-bold text-xs text-[#2D1B0D]">
                  {language === 'am' ? 'የቡና መጠጫ ኩባያ' : 'Takeaway Coffee Cup'}
                </h5>
                <p className="text-[10px] text-[#2D1B0D]/60 mt-0.5">
                  {language === 'am' ? 'ለሞቅ ያለ እና ለቀዝቃዛ ቡና' : 'For hot & iced drinks'}
                </p>
              </div>

              {/* Takeaway Bag */}
              <div className="bg-white rounded-[24px] p-5 border border-[#D4C3A1]/40 text-center flex flex-col items-center justify-center">
                <div className="w-24 h-28 bg-[#E6D7C3] rounded-lg border-2 border-[#CBB8A1] flex flex-col items-center justify-center relative shadow-inner mb-3 p-2">
                  <div className="w-4 h-6 border-2 border-[#8A684C] rounded-t-full -mt-6 mb-1"></div>
                  <NuCafeLogo size="xs" variant="emblem" theme="original" />
                  <span className="font-serif text-[8px] font-black text-[#5E3821] mt-1">NU CAFÉ</span>
                </div>
                <h5 className="font-serif font-bold text-xs text-[#2D1B0D]">
                  {language === 'am' ? 'የእሽግ ከረጢት' : 'Bakery & Bean Bags'}
                </h5>
                <p className="text-[10px] text-[#2D1B0D]/60 mt-0.5">
                  {language === 'am' ? 'ለዳቦ እና የተቆላ ቡና' : 'Artisanal craft paper'}
                </p>
              </div>

              {/* Exterior Signboard */}
              <div className="bg-white rounded-[24px] p-5 border border-[#D4C3A1]/40 text-center flex flex-col items-center justify-center">
                <div className="w-28 h-20 bg-[#2D1B0D] rounded-xl border border-[#C5A059]/60 flex items-center justify-center shadow-md mb-3 px-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
                      <NuCafeLogo size="xs" variant="emblem" theme="original" />
                    </div>
                    <div className="text-left">
                      <span className="font-serif text-[10px] font-bold text-white block leading-tight">NU CAFÉ</span>
                      <span className="font-serif text-[7px] text-[#34D399] block leading-none">ኑ ካፌ</span>
                    </div>
                  </div>
                </div>
                <h5 className="font-serif font-bold text-xs text-[#2D1B0D]">
                  {language === 'am' ? 'የበር ላይ ቦርድ' : 'Storefront Signage'}
                </h5>
                <p className="text-[10px] text-[#2D1B0D]/60 mt-0.5">
                  {language === 'am' ? 'የተቀረጸ የጎዳና ቦርድ' : 'Premium backlit sign'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#F5F2ED] border-t border-[#D4C3A1]/30 flex items-center justify-between font-sans-ui text-xs">
          <span className="text-[#2D1B0D]/70 text-[11px]">
            {language === 'am' ? 'የኑ ካፌ ይፋዊ የንግድ ምልክት' : 'Nu Café Addis Ababa · Official Visual Identity'}
          </span>
          <button
            onClick={onClose}
            className="px-5 py-1.5 rounded-full bg-[#2D1B0D] text-[#FDFBF7] font-bold uppercase tracking-wider text-[10px] hover:bg-black transition-colors cursor-pointer"
          >
            {language === 'am' ? 'ዝጋ' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
