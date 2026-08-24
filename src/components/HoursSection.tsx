import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle2, Calendar, Sparkles, Coffee, AlertCircle } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';
import { useLanguage } from '../context/LanguageContext';

export const HoursSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [currentAddisTime, setCurrentAddisTime] = useState<string>('');
  const [isOpenNow, setIsOpenNow] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>('');

  useEffect(() => {
    const updateTimeAndStatus = () => {
      const now = new Date();
      // Addis Ababa is East Africa Time (EAT), UTC+3
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const addisDate = new Date(utc + 3600000 * 3);

      const timeStr = addisDate.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setCurrentAddisTime(timeStr);

      const hour = addisDate.getHours();
      const open = hour >= CAFE_INFO.openingHours.openHour24 && hour < CAFE_INFO.openingHours.closeHour24;
      setIsOpenNow(open);

      if (open) {
        const remainingHours = CAFE_INFO.openingHours.closeHour24 - hour;
        if (language === 'am') {
          setStatusMessage(`አሁን ክፍት ነው • ማታ 3:00 ይዘጋል (ወደ ${remainingHours} ሰዓት ይቀራል)`);
        } else {
          setStatusMessage(`Open now • Closes at 9:00 PM (approx. ${remainingHours} hr${remainingHours > 1 ? 's' : ''} left today)`);
        }
      } else {
        if (hour < CAFE_INFO.openingHours.openHour24) {
          const hoursUntilOpen = CAFE_INFO.openingHours.openHour24 - hour;
          if (language === 'am') {
            setStatusMessage(`አሁን ዝግ ነው • ዛሬ ጠዋት 1:00 ይከፈታል (${hoursUntilOpen} ሰዓት ይቀራል)`);
          } else {
            setStatusMessage(`Currently closed • Opens today at 7:00 AM (${hoursUntilOpen} hr${hoursUntilOpen > 1 ? 's' : ''} to go)`);
          }
        } else {
          if (language === 'am') {
            setStatusMessage('ለዛሬ ማታ ተዘግቷል • ነገ ጠዋት 1:00 ሰዓት ይከፈታል');
          } else {
            setStatusMessage('Currently closed for the night • Re-opens tomorrow at 7:00 AM');
          }
        }
      }
    };

    updateTimeAndStatus();
    const timer = setInterval(updateTimeAndStatus, 10000);
    return () => clearInterval(timer);
  }, [language]);

  const daysOfWeek = [
    { day: 'Monday', dayAm: 'ሰኞ', hours: '7:00 AM – 9:00 PM', hoursAm: 'ከጠዋቱ 1:00 – ማታ 3:00' },
    { day: 'Tuesday', dayAm: 'ማክሰኞ', hours: '7:00 AM – 9:00 PM', hoursAm: 'ከጠዋቱ 1:00 – ማታ 3:00' },
    { day: 'Wednesday', dayAm: 'ረቡዕ', hours: '7:00 AM – 9:00 PM', hoursAm: 'ከጠዋቱ 1:00 – ማታ 3:00' },
    { day: 'Thursday', dayAm: 'ሐሙስ', hours: '7:00 AM – 9:00 PM', hoursAm: 'ከጠዋቱ 1:00 – ማታ 3:00' },
    { day: 'Friday', dayAm: 'አርብ', hours: '7:00 AM – 9:00 PM', hoursAm: 'ከጠዋቱ 1:00 – ማታ 3:00' },
    { day: 'Saturday', dayAm: 'ቅዳሜ', hours: '7:00 AM – 9:00 PM', hoursAm: 'ከጠዋቱ 1:00 – ማታ 3:00' },
    { day: 'Sunday', dayAm: 'እሑድ', hours: '7:00 AM – 9:00 PM', hoursAm: 'ከጠዋቱ 1:00 – ማታ 3:00' },
  ];

  // Get current day of week in Addis
  const getTodayAddisDayIndex = () => {
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const addisDate = new Date(utc + 3600000 * 3);
    return addisDate.getDay(); // 0 is Sunday, 1 is Monday, etc.
  };

  const dayIndex = getTodayAddisDayIndex();
  // Map index: Sunday=0 -> dayOfWeek[6], Monday=1 -> dayOfWeek[0], ...
  const daysListOrder = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayName = daysListOrder[dayIndex];

  return (
    <section id="hours" className="py-20 md:py-28 bg-[#FDFBF7] text-[#2D1B0D] relative border-b border-[#D4C3A1]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#F5F2ED] border border-[#D4C3A1]/40 text-[#C5A059] font-sans-ui text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
            <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{t.hours.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D1B0D] tracking-tight mb-3">
            {t.hours.title}
          </h2>
          <div className="w-12 h-px bg-[#C5A059] mx-auto mb-4" />
          <p className="font-sans-ui text-sm sm:text-base text-[#2D1B0D]/80 leading-relaxed max-w-2xl mx-auto">
            {t.hours.subtitle}
          </p>
        </div>

        {/* Main Hours Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-[32px] overflow-hidden shadow-xs border border-[#D4C3A1]/40 font-sans-ui">
          {/* Header Banner */}
          <div className="bg-[#2D1B0D] text-[#FDFBF7] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#D4C3A1]/20">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-full bg-[#C5A059] flex items-center justify-center text-[#2D1B0D] shrink-0 mx-auto sm:mx-0 shadow-xs">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-bold">
                  {t.hours.weeklySchedule}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#FDFBF7]">
                  {t.hours.openEveryDay}
                </h3>
              </div>
            </div>

            {/* Live Open Status Pill */}
            <div className="flex flex-col items-center sm:items-end">
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                isOpenNow
                  ? 'bg-emerald-950/90 text-emerald-300 border border-emerald-700/50'
                  : 'bg-amber-950/90 text-amber-300 border border-amber-700/50'
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full ${isOpenNow ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}`} />
                <span>{isOpenNow ? t.hours.openNow : t.hours.closed}</span>
              </div>
              {currentAddisTime && (
                <span className="text-[10px] text-[#D4C3A1]/70 mt-1 uppercase tracking-wider">
                  {language === 'am' ? `አዲስ አበባ ሰዓት፡ ${currentAddisTime}` : `Addis Ababa: ${currentAddisTime} (UTC+3)`}
                </span>
              )}
            </div>
          </div>

          {/* Realtime Status Sub-bar */}
          <div className={`px-6 py-3 border-b text-xs flex items-center justify-between gap-2 ${
            isOpenNow ? 'bg-emerald-950/10 text-emerald-900 border-emerald-900/10' : 'bg-amber-950/10 text-amber-900 border-amber-900/10'
          }`}>
            <div className="flex items-center gap-2">
              {isOpenNow ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
              )}
              <span className="font-medium">{statusMessage}</span>
            </div>
            <span className="text-[11px] font-semibold text-[#2D1B0D]/70 hidden sm:inline uppercase tracking-wider">
              {language === 'am' ? 'ዛሬ ክፍት ነው' : `Today is ${todayName}`}
            </span>
          </div>

          {/* Daily Schedule List */}
          <div className="p-6 sm:p-8 divide-y divide-[#F5F2ED]">
            {daysOfWeek.map((item) => {
              const isToday = item.day === todayName;
              const displayDay = language === 'am' ? item.dayAm : item.day;
              const displayHours = language === 'am' ? item.hoursAm : item.hours;

              return (
                <div
                  key={item.day}
                  className={`py-3.5 flex items-center justify-between px-3 rounded-2xl transition-colors ${
                    isToday ? 'bg-[#F5F2ED] font-semibold text-[#2D1B0D]' : 'text-[#2D1B0D]/80'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${isToday ? 'bg-[#C5A059]' : 'bg-[#D4C3A1]'}`} />
                    <span className="text-sm">{displayDay}</span>
                    {isToday && (
                      <span className="text-[9px] px-2.5 py-0.5 rounded-full bg-[#2D1B0D] text-[#FDFBF7] font-bold uppercase tracking-wider">
                        {t.hours.today}
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-semibold text-[#2D1B0D]">
                    {displayHours}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick note */}
          <div className="px-6 py-4 bg-[#FDFBF7] border-t border-[#D4C3A1]/30 text-center text-xs text-[#2D1B0D]/60 italic">
            <p>
              {t.hours.holidayNotice}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
