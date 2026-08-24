import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle2, Coffee, Sparkles } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';
import { useLanguage } from '../context/LanguageContext';

export const ContactSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    contactInfo: '',
    topic: 'General Inquiry',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      contactInfo: '',
      topic: 'General Inquiry',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FDFBF7] text-[#2D1B0D] relative border-b border-[#D4C3A1]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#F5F2ED] border border-[#D4C3A1]/40 text-[#C5A059] font-sans-ui text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
            <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D1B0D] tracking-tight mb-3">
            {t.contact.title}
          </h2>
          <div className="w-12 h-px bg-[#C5A059] mx-auto mb-4" />
          <p className="font-sans-ui text-sm sm:text-base text-[#2D1B0D]/80 leading-relaxed max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start font-sans-ui">
          {/* Left Column: Direct Call & Business Information */}
          <div className="lg:col-span-5 space-y-6">
            {/* Prominent Clickable Phone Box */}
            <div className="bg-[#2D1B0D] text-[#FDFBF7] p-8 rounded-[32px] border border-[#D4C3A1]/30 shadow-xs relative overflow-hidden">
              <div className="w-12 h-12 rounded-full bg-[#C5A059] flex items-center justify-center text-[#2D1B0D] mb-6 shadow-xs">
                <Phone className="w-5 h-5" />
              </div>

              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-bold">
                {t.contact.directLine}
              </span>
              <h3 className="font-serif text-3xl font-bold text-[#FDFBF7] mt-1 mb-2">
                {CAFE_INFO.phone}
              </h3>
              <p className="text-xs text-[#D4C3A1]/80 leading-relaxed mb-6">
                {t.contact.callHoursNotice}
              </p>

              {/* Clickable Mobile / Desktop Direct Call Action */}
              <a
                id="contact-direct-dial-btn"
                href={`tel:${CAFE_INFO.phoneRaw}`}
                className="w-full py-3.5 px-6 rounded-full bg-[#C5A059] hover:bg-[#D4C3A1] text-[#2D1B0D] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-3 transition-all cursor-pointer shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{language === 'am' ? `በ ${CAFE_INFO.phone} ይደውሉ` : `Call ${CAFE_INFO.phone}`}</span>
              </a>
            </div>

            {/* Quick Details Cards */}
            <div className="bg-white p-6 rounded-[32px] border border-[#D4C3A1]/40 shadow-xs space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[#F5F2ED] text-[#C5A059] flex items-center justify-center shrink-0 border border-[#D4C3A1]/30">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#2D1B0D]">{t.contact.locationLabel}</h4>
                  <p className="text-xs text-[#2D1B0D]/70 mt-0.5">{language === 'am' ? CAFE_INFO.locationAm : CAFE_INFO.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-3 border-t border-[#F5F2ED]">
                <div className="w-9 h-9 rounded-full bg-[#F5F2ED] text-[#C5A059] flex items-center justify-center shrink-0 border border-[#D4C3A1]/30">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#2D1B0D]">{t.contact.hoursLabel}</h4>
                  <p className="text-xs text-[#2D1B0D]/70 mt-0.5">{language === 'am' ? 'በየቀኑ ከጠዋቱ 1:00 – ማታ 3:00' : 'Every day, 7:00 AM – 9:00 PM'}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-3 border-t border-[#F5F2ED]">
                <div className="w-9 h-9 rounded-full bg-[#F5F2ED] text-[#C5A059] flex items-center justify-center shrink-0 border border-[#D4C3A1]/30">
                  <Coffee className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#2D1B0D]">{t.contact.hospitalityLabel}</h4>
                  <p className="text-xs text-[#2D1B0D]/70 mt-0.5">{language === 'am' ? 'የውስጥ መቀመጫ፣ የይውሰዱ ቡና እና ልዩ መስተንግዶ' : 'Dine-in, Takeaway & Artisanal Coffee'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-[32px] border border-[#D4C3A1]/40 shadow-xs">
            <div className="mb-6">
              <h3 className="font-serif text-2xl font-bold text-[#2D1B0D]">
                {t.contact.formTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#2D1B0D]/60 mt-1">
                {t.contact.formSubtitle}
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-[24px] bg-emerald-950/5 border border-emerald-900/20 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-700 mx-auto" />
                <h4 className="font-serif text-2xl font-bold text-emerald-950">
                  {t.contact.messageDelivered}
                </h4>
                <p className="text-sm text-emerald-900/80 max-w-md mx-auto leading-relaxed">
                  {language === 'am'
                    ? `እናመሰግናለን ${formData.name}። መልእክትዎ ደርሶናል፣ በአፋጣኝ ምላሽ እንሰጣለን።`
                    : `Thank you, ${formData.name}. We have received your inquiry regarding "${formData.topic}" and will follow up shortly.`}
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-full bg-[#2D1B0D] text-[#FDFBF7] text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors cursor-pointer"
                  >
                    {t.contact.sendAnother}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-[#2D1B0D] uppercase tracking-wider mb-1.5">
                      {t.contact.yourName} <span className="text-[#C5A059]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={language === 'am' ? 'ለምሳሌ፡ ዳዊት ታደሰ' : 'e.g. Dawit Tadesse'}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#F5F2ED] border border-[#D4C3A1]/40 text-sm text-[#2D1B0D] placeholder-[#2D1B0D]/40 focus:outline-none focus:border-[#C5A059] transition-all"
                    />
                  </div>

                  {/* Phone or Email */}
                  <div>
                    <label className="block text-xs font-bold text-[#2D1B0D] uppercase tracking-wider mb-1.5">
                      {t.contact.phoneEmail} <span className="text-[#C5A059]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={language === 'am' ? 'ለምሳሌ፡ 0911... ወይም name@email.com' : 'e.g. 0911... or name@email.com'}
                      value={formData.contactInfo}
                      onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#F5F2ED] border border-[#D4C3A1]/40 text-sm text-[#2D1B0D] placeholder-[#2D1B0D]/40 focus:outline-none focus:border-[#C5A059] transition-all"
                    />
                  </div>
                </div>

                {/* Topic Selector */}
                <div>
                  <label className="block text-xs font-bold text-[#2D1B0D] uppercase tracking-wider mb-1.5">
                    {t.contact.subject}
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#F5F2ED] border border-[#D4C3A1]/40 text-sm text-[#2D1B0D] focus:outline-none focus:border-[#C5A059] transition-all"
                  >
                    <option value="General Inquiry">{t.contact.topics.general}</option>
                    <option value="Table Reservation">{t.contact.topics.reservation}</option>
                    <option value="Pre-order Takeaway">{t.contact.topics.takeaway}</option>
                    <option value="Event Catering">{t.contact.topics.catering}</option>
                    <option value="Feedback">{t.contact.topics.feedback}</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-[#2D1B0D] uppercase tracking-wider mb-1.5">
                    {t.contact.message} <span className="text-[#C5A059]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder={language === 'am' ? 'በምን ልንረዳዎ እንችላለን?' : 'How can we assist you today?'}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#F5F2ED] border border-[#D4C3A1]/40 text-sm text-[#2D1B0D] placeholder-[#2D1B0D]/40 focus:outline-none focus:border-[#C5A059] transition-all"
                  />
                </div>

                {/* Submit button */}
                <button
                  id="contact-form-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-[#2D1B0D] hover:bg-black text-[#FDFBF7] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-xs disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-[#C5A059] border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{t.contact.sendMessage}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
