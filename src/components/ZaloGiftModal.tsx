import React from 'react';
import { X, Gift, CheckCircle2, ArrowRight, Sparkles, MessageCircle, Phone } from 'lucide-react';
import { CONTACT_INFO, GIFT_LIST, IMAGES } from '../data/content';
import confetti from 'canvas-confetti';

interface ZaloGiftModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ZaloGiftModal: React.FC<ZaloGiftModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleJoinZalo = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    window.open(CONTACT_INFO.zaloGroupUrl, '_blank');
  };

  return (
    <div
      id="zalo-gift-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#172223]/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        id="zalo-gift-modal-content"
        className="bg-white rounded-3xl w-full max-w-[min(92vw,560px)] aspect-square max-h-[92vh] p-5 sm:p-7 shadow-2xl border-2 border-[#D5E4E1] relative overflow-hidden text-left flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Decorative Banner */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#5BEA68] via-[#24B7AB] to-[#128A83]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors z-20"
          aria-label="Đóng popup"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Modal Header */}
        <div className="shrink-0 space-y-1.5 sm:space-y-2 pt-1 pr-9">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F2F8F6] text-[#128A83] text-[11px] sm:text-xs font-bold uppercase border border-[#24B7AB]/20">
              <Gift className="w-3.5 h-3.5 text-[#24B7AB]" />
              TÀI LIỆU CHUYÊN MÔN MIỄN PHÍ
            </div>
            <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-[#24B7AB]/30 shadow-2xs">
              <img
                src={IMAGES.pharmacyLogo}
                alt="Logo Nhà thuốc Minh Khôi"
                className="w-4 h-4 object-contain"
              />
              <span className="text-[11px] font-bold text-[#162425]">Nhà Thuốc Minh Khôi</span>
            </div>
          </div>
          <h3 className="text-base sm:text-2xl font-extrabold text-[#162425] leading-tight">
            Nhận Trọn Bộ Cẩm Nang <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#128A83] to-[#24B7AB]">
              Ứng Dụng AI & Chuyển Đổi Số Nhà Thuốc
            </span>
          </h3>
          <p className="text-[11px] sm:text-xs text-[#5A6F6C] leading-snug line-clamp-2">
            Dược sĩ Diễm Phúc thân tặng đồng nghiệp trọn bộ tài liệu thực chiến trong nhóm chia sẻ chuyên môn:
          </p>
        </div>

        {/* Gift Items List & Host Note (Scrollable inside 1:1 square) */}
        <div className="flex-1 min-h-0 my-2 sm:my-3 overflow-y-auto pr-1 space-y-2 sm:space-y-2.5">
          {GIFT_LIST.map((gift, idx) => (
            <div
              key={idx}
              className="p-2 sm:p-2.5 rounded-xl bg-[#F2F8F6] border border-[#D5E4E1] flex items-start gap-2.5 hover:border-[#24B7AB] transition-colors"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#24B7AB] text-white flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                0{idx + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs sm:text-sm font-bold text-[#162425] flex items-center justify-between gap-1">
                  <span className="truncate">{gift.title}</span>
                  <span className="shrink-0 text-[9px] sm:text-[10px] font-bold text-[#128A83] bg-[#24B7AB]/15 px-1.5 py-0.5 rounded">
                    {gift.tag}
                  </span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-[#5A6F6C] mt-0.5 leading-snug line-clamp-2">
                  {gift.desc}
                </p>
              </div>
            </div>
          ))}

          {/* Host Avatar / Personal Note */}
          <div className="flex items-center gap-2.5 p-2 sm:p-2.5 rounded-xl bg-gray-50 border border-gray-100">
            <img
              src={IMAGES.hero}
              alt="Dược sĩ Diễm Phúc"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border-2 border-[#24B7AB] shrink-0"
            />
            <div className="text-[10px] sm:text-[11px] text-[#162425] leading-tight">
              <span className="font-bold text-[#128A83]">Dược Sĩ Diễm Phúc: </span>
              <span className="text-[#5A6F6C]">“Không cần thủ tục phức tạp. Bạn chỉ cần bấm vào nhóm Zalo để giao lưu và tải tài liệu ngay!”</span>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="shrink-0 pt-2 border-t border-[#D5E4E1]/60 space-y-2">
          <button
            id="modal-join-zalo-btn"
            onClick={handleJoinZalo}
            className="w-full py-2.5 sm:py-3.5 px-4 rounded-xl bg-[#128A83] hover:bg-[#0C1516] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all group"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform" />
            <span className="tracking-wide">THAM GIA NHÓM ZALO NHẬN TÀI LIỆU</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>

          <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-[#5A6F6C]">
            <span>Hoặc gọi trao đổi trực tiếp:</span>
            <a href={CONTACT_INFO.telUrl} className="font-bold text-[#128A83] hover:underline flex items-center gap-1 font-mono">
              <Phone className="w-3 h-3 text-[#24B7AB]" />
              {CONTACT_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
