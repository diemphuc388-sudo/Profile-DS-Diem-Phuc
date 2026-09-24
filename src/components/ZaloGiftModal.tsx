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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#172223]/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        id="zalo-gift-modal-content"
        className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-xl border border-[#D5E4E1] relative overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Decorative Banner */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#5BEA68] via-[#24B7AB] to-[#128A83]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors"
          aria-label="Đóng popup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 mb-6 pt-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2F8F6] text-[#128A83] text-xs font-bold uppercase border border-[#24B7AB]/20">
            <Gift className="w-3.5 h-3.5 text-[#24B7AB]" />
            TÀI LIỆU CHUYÊN MÔN MIỄN PHÍ
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#162425] leading-tight">
            Nhận Trọn Bộ Cẩm Nang <br />
            <span className="text-[#24B7AB]">Ứng Dụng AI & Chuyển Đổi Số Nhà Thuốc</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#5A6F6C]">
            Dược sĩ Diễm Phúc thân tặng đồng nghiệp trọn bộ tài liệu thực chiến trong nhóm chia sẻ chuyên môn:
          </p>
        </div>

        {/* Gift Items List */}
        <div className="space-y-3 mb-6 max-h-60 overflow-y-auto pr-1">
          {GIFT_LIST.map((gift, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-[#F2F8F6] border border-[#D5E4E1] flex items-start gap-3"
            >
              <div className="w-7 h-7 rounded-lg bg-[#24B7AB] text-white flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                0{idx + 1}
              </div>
              <div className="flex-1">
                <div className="text-xs sm:text-sm font-bold text-[#162425] flex items-center justify-between">
                  <span>{gift.title}</span>
                </div>
                <p className="text-[11px] text-[#5A6F6C] mt-0.5 leading-snug">
                  {gift.desc}
                </p>
                <span className="inline-block mt-1 text-[10px] font-bold text-[#128A83] bg-[#24B7AB]/15 px-2 py-0.5 rounded">
                  {gift.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Host Avatar / Personal Note */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 mb-6">
          <img
            src={IMAGES.hero}
            alt="Dược sĩ Diễm Phúc"
            className="w-11 h-11 rounded-full object-cover border-2 border-[#24B7AB]"
          />
          <div className="text-xs text-[#162425]">
            <span className="font-bold block">Dược Sĩ Diễm Phúc:</span>
            <span className="text-[#5A6F6C]">“Không cần thủ tục phức tạp. Bạn chỉ cần bấm vào nhóm Zalo để giao lưu và tải tài liệu ngay!”</span>
          </div>
        </div>

        {/* Main Action Button */}
        <div className="space-y-3">
          <button
            id="modal-join-zalo-btn"
            onClick={handleJoinZalo}
            className="w-full py-3.5 px-6 rounded-xl bg-[#128A83] hover:bg-[#0C1516] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all"
          >
            <MessageCircle className="w-5 h-5 text-white" />
            <span>THAM GIA NHÓM ZALO NHẬN TÀI LIỆU</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="flex items-center justify-between text-[11px] text-[#5A6F6C] pt-1">
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
