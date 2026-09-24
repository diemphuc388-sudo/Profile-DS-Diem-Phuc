import React, { useState, useEffect } from 'react';
import { UserCheck, X } from 'lucide-react';
import { SAMPLE_NOTIFICATIONS } from '../data/content';
import { LiveNotification } from '../types';

export const PharmacistToasts: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Initial delay before first toast appears (3 seconds)
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Toast rotation interval
    const interval = setInterval(() => {
      if (!isDismissed) {
        setIsVisible(false);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % SAMPLE_NOTIFICATIONS.length);
          setIsVisible(true);
        }, 600);
      }
    }, 9000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [isDismissed]);

  if (isDismissed) return null;

  const current: LiveNotification = SAMPLE_NOTIFICATIONS[currentIndex];

  return (
    <div
      id="pharmacist-live-toast"
      className={`fixed top-20 left-4 z-40 max-w-xs sm:max-w-sm transition-all duration-500 transform ${
        isVisible
          ? 'translate-y-0 opacity-100 scale-100'
          : '-translate-y-4 opacity-0 scale-95 pointer-events-none'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-lg border border-[#D5E4E1] flex items-start gap-3 relative">
        <div className="w-9 h-9 rounded-lg bg-[#24B7AB] text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5 font-bold text-xs">
          <UserCheck className="w-4 h-4 text-white" />
        </div>

        <div className="flex-1 pr-4">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-bold text-xs text-[#162425]">
              {current.name}
            </span>
            <span className="px-1.5 py-0.2 rounded bg-[#F2F8F6] text-[10px] text-[#128A83] font-medium">
              {current.location}
            </span>
          </div>

          <p className="text-[11px] text-[#128A83] font-semibold mt-0.5 leading-snug">
            {current.action}
          </p>

          <span className="text-[10px] text-[#5A6F6C] block mt-1">
            {current.timeAgo} • Hoạt động thực tế
          </span>
        </div>

        <button
          onClick={() => setIsDismissed(true)}
          className="text-[#5A6F6C] hover:text-[#162425] p-1"
          aria-label="Đóng thông báo"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
