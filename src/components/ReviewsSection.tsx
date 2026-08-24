import React, { useState } from 'react';
import { Star, StarHalf, MessageSquare, ShieldCheck, ThumbsUp, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';
import { useLanguage } from '../context/LanguageContext';

export const ReviewsSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [userRating, setUserRating] = useState<number>(5);
  const [feedbackName, setFeedbackName] = useState<string>('');
  const [feedbackComment, setFeedbackComment] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackName.trim() || !feedbackComment.trim()) return;
    setSubmitted(true);
  };

  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#FDFBF7] text-[#2D1B0D] relative border-b border-[#D4C3A1]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#F5F2ED] border border-[#D4C3A1]/40 text-[#C5A059] font-sans-ui text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{t.reviews.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D1B0D] tracking-tight mb-3">
            {t.reviews.title}
          </h2>
          <div className="w-12 h-px bg-[#C5A059] mx-auto mb-4" />
          <p className="font-sans-ui text-sm sm:text-base text-[#2D1B0D]/80 leading-relaxed max-w-2xl mx-auto">
            {t.reviews.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start font-sans-ui">
          {/* Left Column: Official Rating Summary Card */}
          <div className="md:col-span-6 bg-white p-8 rounded-[32px] border border-[#D4C3A1]/40 shadow-xs flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-[#F5F2ED] border border-[#D4C3A1]/40 flex items-center justify-center text-[#C5A059] mb-4">
              <Star className="w-7 h-7 fill-[#C5A059] text-[#C5A059]" />
            </div>

            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C5A059]">
              {t.reviews.overallRating}
            </span>

            {/* Score Big Display */}
            <div className="flex items-baseline justify-center gap-2 my-2">
              <span className="font-serif text-6xl font-bold text-[#2D1B0D]">
                {CAFE_INFO.rating}
              </span>
              <span className="text-2xl text-[#2D1B0D]/50 font-serif">/ 5.0</span>
            </div>

            {/* Star Icons */}
            <div className="flex items-center justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => {
                if (i <= Math.floor(CAFE_INFO.rating)) {
                  return <Star key={i} className="w-5 h-5 fill-[#C5A059] text-[#C5A059]" />;
                } else if (i === Math.ceil(CAFE_INFO.rating) && CAFE_INFO.rating % 1 !== 0) {
                  return <StarHalf key={i} className="w-5 h-5 fill-[#C5A059] text-[#C5A059]" />;
                } else {
                  return <Star key={i} className="w-5 h-5 text-[#D4C3A1]/60 fill-[#F5F2ED]" />;
                }
              })}
            </div>

            {/* Required Verification Count Notice */}
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#F5F2ED] border border-[#D4C3A1]/40 text-xs font-semibold text-[#2D1B0D] mb-6">
              <MessageSquare className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{t.reviews.basedOnReviews}</span>
            </div>

            {/* Transparency Note */}
            <div className="w-full text-left p-5 rounded-[24px] bg-[#F5F2ED] border border-[#D4C3A1]/35 space-y-2 text-xs text-[#2D1B0D]/80">
              <div className="flex items-center gap-2 text-[#2D1B0D] font-bold uppercase tracking-wider text-[10px]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{t.reviews.qualityCommitment}</span>
              </div>
              <p className="leading-relaxed">
                {t.reviews.commitmentText}
              </p>
            </div>
          </div>

          {/* Right Column: Share Your Experience Card */}
          <div className="md:col-span-6 bg-white p-8 rounded-[32px] border border-[#D4C3A1]/40 shadow-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-full bg-[#F5F2ED] text-[#C5A059] border border-[#D4C3A1]/40">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#2D1B0D]">
                  {t.reviews.formTitle}
                </h3>
                <p className="text-xs text-[#2D1B0D]/60">
                  {t.reviews.formSubtitle}
                </p>
              </div>
            </div>

            {submitted ? (
              <div className="p-6 rounded-[24px] bg-emerald-950/5 border border-emerald-900/20 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-700 mx-auto" />
                <h4 className="font-serif text-lg font-bold text-emerald-950">
                  {t.reviews.thankYou}
                </h4>
                <p className="text-xs text-emerald-900/80 leading-relaxed">
                  {language === 'am' 
                    ? `እናመሰግናለን ${feedbackName}፣ አስተያየትዎ ለአዲስ አበባ ባሪስታዎቻችን እና ሰራተኞቻችን ይደርሳል።`
                    : `Thank you, ${feedbackName}. Your notes are shared with our Addis Ababa barista and hospitality staff.`}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFeedbackName('');
                    setFeedbackComment('');
                  }}
                  className="px-4 py-2 rounded-full bg-[#2D1B0D] text-[#FDFBF7] text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors cursor-pointer"
                >
                  {t.reviews.submitAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitFeedback} className="space-y-4">
                {/* Rating selection */}
                <div>
                  <label className="block text-xs font-bold text-[#2D1B0D] uppercase tracking-wider mb-2">
                    {t.reviews.yourRating}
                  </label>
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setUserRating(star)}
                        className="p-1 text-[#C5A059] hover:scale-110 transition-transform cursor-pointer focus:outline-none"
                        aria-label={`Rate ${star} star`}
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= userRating ? 'fill-[#C5A059] text-[#C5A059]' : 'text-[#D4C3A1]/50 fill-[#F5F2ED]'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-semibold text-[#2D1B0D]/70 ml-2">
                      {userRating} / 5
                    </span>
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-[#2D1B0D] uppercase tracking-wider mb-1.5">
                    {t.reviews.yourName}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={language === 'am' ? 'ለምሳሌ፡ ዳዊት / ሰላም' : 'e.g. Dawit / Selam'}
                    value={feedbackName}
                    onChange={(e) => setFeedbackName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#F5F2ED] border border-[#D4C3A1]/40 text-sm text-[#2D1B0D] placeholder-[#2D1B0D]/40 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                {/* Feedback Comment */}
                <div>
                  <label className="block text-xs font-bold text-[#2D1B0D] uppercase tracking-wider mb-1.5">
                    {t.reviews.yourReview}
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder={language === 'am' ? 'ስለ ቡናችን፣ ኬኮቻችን፣ ድባቡ ወይም ስለ አገልግሎታችን ያጋሩን...' : 'Tell us about the coffee, pastries, atmosphere, or service...'}
                    value={feedbackComment}
                    onChange={(e) => setFeedbackComment(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#F5F2ED] border border-[#D4C3A1]/40 text-sm text-[#2D1B0D] placeholder-[#2D1B0D]/40 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#2D1B0D] hover:bg-black text-[#FDFBF7] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{t.reviews.sendReview}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
