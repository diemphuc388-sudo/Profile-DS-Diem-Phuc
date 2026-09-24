import React from 'react';
import { Phone, MessageCircle, Gift } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

interface MobileStickyBarProps {
  onOpenGift: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenGift }) => {
  return (
    <div
      id="mobile-sticky-bottom-bar"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#D5E4E1] p-2.5 px-4 shadow-[0_-4px_15px_rgba(0,0,0,0.06)] flex items-center justify-between gap-2.5"
    >
      {/* Call Button */}
      <a
        id="mobile-sticky-call"
        href={CONTACT_INFO.telUrl}
        className="flex-1 min-h-[46px] rounded-xl bg-[#24B7AB] active:bg-[#128A83] text-white flex items-center justify-center gap-2 font-bold text-sm shadow-xs"
      >
        <Phone className="w-4 h-4 text-white" />
        <span>GỌI NGAY</span>
      </a>

      {/* Zalo Group Link */}
      <a
        id="mobile-sticky-zalo"
        href={CONTACT_INFO.zaloGroupUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 min-h-[46px] rounded-xl bg-[#128A83] active:bg-[#0C1516] text-white flex items-center justify-center gap-2 font-bold text-sm shadow-xs"
      >
        <MessageCircle className="w-4 h-4 text-white" />
        <span>KẾT NỐI ZALO</span>
      </a>

      {/* Gift Trigger Button */}
      <button
        onClick={onOpenGift}
        className="w-12 min-h-[46px] rounded-xl bg-[#F2F8F6] border border-[#D5E4E1] text-[#128A83] flex items-center justify-center"
        aria-label="Nhận quà"
        title="Nhận tài liệu"
      >
        <Gift className="w-5 h-5 text-[#128A83]" />
      </button>
    </div>
  );
};
