import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Gift, Share2, ArrowUp } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

interface FloatingActionsProps {
  onOpenGift: () => void;
  onOpenShare: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenGift, onOpenShare }) => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      id="floating-action-dock"
      className="fixed bottom-20 sm:bottom-8 right-4 sm:right-6 z-40 flex flex-col items-center gap-2.5"
    >
      {/* Scroll To Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="w-11 h-11 rounded-full bg-white/95 text-[#162425] hover:text-[#24B7AB] border border-[#D5E4E1] shadow-md flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          aria-label="Lên đầu trang"
          title="Lên đầu trang"
        >
          <ArrowUp className="w-5 h-5 text-[#24B7AB]" />
        </button>
      )}

      {/* Share Button */}
      <button
        onClick={onOpenShare}
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[#162425] hover:text-[#24B7AB] border border-[#D5E4E1] shadow-md flex items-center justify-center transition-all hover:scale-110 active:scale-95 group relative"
        title="Chia sẻ trang"
      >
        <Share2 className="w-5 h-5 text-[#24B7AB]" />
        <span className="hidden sm:group-hover:block absolute right-14 whitespace-nowrap bg-[#172223] text-white text-xs px-2.5 py-1 rounded-lg shadow-md font-semibold">
          Chia sẻ trang
        </span>
      </button>

      {/* Gift Button */}
      <button
        onClick={onOpenGift}
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#128A83] text-white shadow-md shadow-[#128A83]/30 flex items-center justify-center transition-all hover:scale-110 active:scale-95 group relative"
        title="Nhận tài liệu & quà tặng"
      >
        <Gift className="w-5 h-5 text-white" />
        <span className="hidden sm:group-hover:block absolute right-14 whitespace-nowrap bg-[#172223] text-white text-xs px-2.5 py-1 rounded-lg shadow-md font-semibold">
          Nhận quà Zalo
        </span>
      </button>

      {/* Zalo Group Link */}
      <a
        href={CONTACT_INFO.zaloGroupUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#24B7AB] hover:bg-[#128A83] text-white shadow-md shadow-[#24B7AB]/30 flex items-center justify-center transition-all hover:scale-110 active:scale-95 group relative"
        title="Nhóm Zalo Dược Sĩ"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden sm:group-hover:block absolute right-14 whitespace-nowrap bg-[#172223] text-white text-xs px-2.5 py-1 rounded-lg shadow-md font-semibold">
          Nhóm Zalo chuyên môn
        </span>
      </a>

      {/* Direct Phone Call */}
      <a
        href={CONTACT_INFO.telUrl}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#128A83] hover:bg-[#0C1516] text-white shadow-lg shadow-[#128A83]/30 flex items-center justify-center transition-all hover:scale-110 active:scale-95 group relative ring-4 ring-[#24B7AB]/20"
        title="Gọi cho DS. Diễm Phúc"
      >
        <Phone className="w-6 h-6 text-white" />
        <span className="hidden sm:group-hover:block absolute right-16 whitespace-nowrap bg-[#172223] text-white text-xs px-2.5 py-1 rounded-lg shadow-md font-semibold">
          Gọi {CONTACT_INFO.phoneDisplay}
        </span>
      </a>
    </div>
  );
};
