import React, { useState } from 'react';
import { MapPin, Navigation, Compass, ExternalLink, Copy, Check, Car, Phone } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';
import { useLanguage } from '../context/LanguageContext';

export const LocationSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  // Google Maps URL with Plus Code and location query
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'VQWC+MMQ, Addis Ababa, Ethiopia'
  )}`;

  const handleCopyPlusCode = () => {
    navigator.clipboard.writeText(CAFE_INFO.plusCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-20 md:py-28 bg-[#FDFBF7] text-[#2D1B0D] relative border-b border-[#D4C3A1]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#F5F2ED] border border-[#D4C3A1]/40 text-[#C5A059] font-sans-ui text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{t.location.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D1B0D] tracking-tight mb-3">
            {t.location.title}
          </h2>
          <div className="w-12 h-px bg-[#C5A059] mx-auto mb-4" />
          <p className="font-sans-ui text-sm sm:text-base text-[#2D1B0D]/80 leading-relaxed max-w-2xl mx-auto">
            {t.location.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch font-sans-ui">
          {/* Left Column: Details & Directions Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-white p-6 sm:p-8 rounded-[32px] border border-[#D4C3A1]/40 shadow-xs">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5F2ED] text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.2em] mb-4 border border-[#D4C3A1]/30">
                <Compass className="w-3.5 h-3.5" />
                <span>{language === 'am' ? 'አዲስ አበባ፣ ኢትዮጵያ' : 'Addis Ababa, Ethiopia'}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D1B0D] mb-2">
                {language === 'am' ? 'ኑ ካፌ አዲስ አበባ' : 'Nu Café Addis Ababa'}
              </h3>

              {/* Exact Location String */}
              <div className="mt-4 p-5 rounded-[24px] bg-[#F5F2ED] border border-[#D4C3A1]/35 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#2D1B0D] text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#2D1B0D]/60 uppercase tracking-wider font-bold">{t.location.addressTitle}</p>
                    <p className="font-semibold text-sm sm:text-base text-[#2D1B0D]">
                      {language === 'am' ? CAFE_INFO.locationAm : CAFE_INFO.location}
                    </p>
                  </div>
                </div>

                {/* Plus Code copy widget */}
                <div className="flex items-center justify-between pt-3 border-t border-[#D4C3A1]/30 text-xs">
                  <div className="flex items-center gap-1.5 text-[#2D1B0D]/80">
                    <span className="text-[11px] font-semibold">{t.location.plusCodeTitle}:</span>
                    <code className="px-2.5 py-0.5 rounded-md bg-white border border-[#D4C3A1]/40 font-mono text-xs text-[#2D1B0D] font-bold">
                      {CAFE_INFO.plusCode}
                    </code>
                  </div>
                  <button
                    id="copy-plus-code-btn"
                    onClick={handleCopyPlusCode}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white hover:bg-[#FDFBF7] text-[#2D1B0D] border border-[#D4C3A1]/40 text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    title={t.location.copyCode}
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-700">{t.location.copied}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-[#C5A059]" />
                        <span>{t.location.copyCode}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Quick visit info bullets */}
              <div className="mt-6 space-y-3 text-xs sm:text-sm text-[#2D1B0D]/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#C5A059]/20 text-[#2D1B0D] font-bold flex items-center justify-center shrink-0 text-[10px]">
                    ✓
                  </div>
                  <span>{language === 'am' ? 'ምቹ የውስጥ መቀመጫና ሰላማዊ ድባብ' : 'Indoor seating with calm café ambiance'}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#C5A059]/20 text-[#2D1B0D] font-bold flex items-center justify-center shrink-0 text-[10px]">
                    ✓
                  </div>
                  <span>{language === 'am' ? 'የትዕዛዝ መውሰጃ ቡናና ትኩስ ኬኮች' : 'Takeaway coffee cups & freshly boxed pastries'}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#C5A059]/20 text-[#2D1B0D] font-bold flex items-center justify-center shrink-0 text-[10px]">
                    ✓
                  </div>
                  <span>{language === 'am' ? 'በየቀኑ ክፍት፡ ከጠዋቱ 1:00 – ማታ 3:00' : 'Open 7 days a week: 7:00 AM – 9:00 PM'}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-[#D4C3A1]/30 space-y-3">
              <a
                id="get-directions-btn"
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-full bg-[#2D1B0D] hover:bg-black text-[#FDFBF7] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-sm transition-all"
              >
                <Navigation className="w-4 h-4 text-[#C5A059]" />
                <span>{t.location.openInMaps}</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#C5A059]" />
              </a>

              <a
                id="location-call-btn"
                href={`tel:${CAFE_INFO.phoneRaw}`}
                className="w-full py-3 px-6 rounded-full bg-transparent hover:bg-[#F5F2ED] text-[#2D1B0D] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors border border-[#D4C3A1]"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{language === 'am' ? `በ ${CAFE_INFO.phone} ይደውሉ` : `Call ${CAFE_INFO.phone}`}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Map Section */}
          <div className="lg:col-span-7 bg-white rounded-[32px] overflow-hidden border border-[#D4C3A1]/40 shadow-xs flex flex-col">
            {/* Map Header Bar */}
            <div className="p-4 bg-[#2D1B0D] text-[#FDFBF7] flex items-center justify-between border-b border-[#D4C3A1]/20">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                  {language === 'am' ? 'የአዲስ አበባ ካርታ እይታ' : 'Addis Ababa Map View'}
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-wider text-[#D4C3A1]/70">
                Code: {CAFE_INFO.plusCode}
              </span>
            </div>

            {/* Embedded Map Frame */}
            <div className="relative flex-1 min-h-[350px] sm:min-h-[420px] bg-[#F5F2ED]">
              <iframe
                id="interactive-location-map"
                title="Nu Café Location Map in Addis Ababa"
                src="https://www.openstreetmap.org/export/embed.html?bbox=38.7180%2C8.9950%2C38.7800%2C9.0450&amp;layer=mapnik&amp;marker=9.0200%2C38.7500"
                className="w-full h-full border-0 absolute inset-0"
                loading="lazy"
              />

              {/* Overlay Marker Card */}
              <div className="absolute top-4 left-4 bg-[#2D1B0D]/95 text-[#FDFBF7] p-4 rounded-[20px] backdrop-blur-md shadow-xl border border-[#D4C3A1]/30 max-w-xs pointer-events-auto">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#C5A059] text-[#2D1B0D] flex items-center justify-center font-bold text-xs">
                    NU
                  </div>
                  <div>
                    <p className="font-serif font-bold text-sm text-[#FDFBF7]">Nu Café</p>
                    <p className="text-[9px] uppercase tracking-wider text-[#D4C3A1]">VQWC+MMQ, Addis Ababa</p>
                  </div>
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2.5 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#C5A059] hover:underline"
                >
                  <span>{t.location.openInMaps}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Footer notice */}
            <div className="p-3.5 bg-[#FDFBF7] text-center text-xs text-[#2D1B0D]/60 border-t border-[#D4C3A1]/30 italic">
              <span>
                {language === 'am'
                  ? `ምክር፡ ለትክክለኛ አቅጣጫ ${CAFE_INFO.plusCode} በጎግል ካርታ ወይም በትራንስፖርት መተግበሪያዎች ይጠቀሙ።`
                  : `Tip: Enter ${CAFE_INFO.plusCode} in Google Maps or local ride apps for precise arrival.`
                }
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
