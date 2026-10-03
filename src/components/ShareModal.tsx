import React, { useState } from 'react';
import { X, Copy, Check, Share2, MessageCircle, Send } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';
import confetti from 'canvas-confetti';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://diemphuc.vn';
  const fullShareText = `${CONTACT_INFO.shareMessage}\n\n👉 Xem chi tiết tại: ${currentUrl}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullShareText);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const handleFacebookShare = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const handleTelegramShare = () => {
    const url = `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(CONTACT_INFO.shareMessage)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const handleTwitterShare = () => {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(CONTACT_INFO.shareMessage)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const handleZaloShare = () => {
    handleCopy();
    window.open(`https://chat.zalo.me/`, '_blank');
  };

  return (
    <div
      id="share-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#172223]/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        id="share-modal-content"
        className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-xl border border-[#D5E4E1] relative overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Decorative Banner */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#5BEA68] via-[#24B7AB] to-[#128A83]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors"
          aria-label="Đóng chia sẻ"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1 mb-4 pt-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#24B7AB]/10 text-[#128A83] text-xs font-bold uppercase">
            <Share2 className="w-3.5 h-3.5 text-[#24B7AB]" />
            LAN TỎA CÂU CHUYỆN NGHỀ Y
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#162425]">
            Chia Sẻ Thông Tin
          </h3>
          <p className="text-xs text-[#5A6F6C]">
            Xem trước ảnh đại diện và nội dung sẽ hiển thị khi bạn gửi link qua Zalo, Facebook, Telegram.
          </p>
        </div>

        {/* Social Card Thumbnail Preview */}
        <div className="mb-4 rounded-2xl border border-[#D5E4E1] overflow-hidden bg-white shadow-xs">
          <div className="relative w-full h-48 sm:h-56 bg-gradient-to-br from-[#0C1516] via-[#172223] to-[#0C1516] flex items-center justify-center p-2">
            <img
              src="https://i.postimg.cc/Jh34TsCx/Chat-GPT-Image-08-42-24-17-thg-9-2026-(1).png"
              alt="Thumbnail Dược Sĩ Diễm Phúc"
              className="max-w-full max-h-full object-contain rounded-lg shadow-md"
            />
          </div>
          <div className="p-3.5 sm:p-4 bg-[#F2F8F6] border-t border-[#D5E4E1]">
            <div className="text-[11px] font-bold text-[#128A83] uppercase tracking-wider mb-1">
              DUOCSIDIEMPHUC.VN • NHÀ THUỐC MINH KHÔI
            </div>
            <h4 className="font-bold text-sm sm:text-base text-[#162425] leading-snug">
              Dược Sĩ Diễm Phúc – Đồng Hành Xây Dựng Nhà Thuốc Hiện Đại
            </h4>
            <p className="text-xs text-[#5A6F6C] mt-1.5 leading-relaxed">
              Tôi đồng hành cùng các dược sĩ nhà thuốc truyền thống ứng dụng công cụ công nghệ đưa nhà thuốc lên online tự động hoá và hiện đại
            </p>
          </div>
        </div>

        {/* Pre-formatted Message Preview */}
        <div className="space-y-2 mb-4">
          <label className="text-xs font-bold text-[#162425] flex items-center justify-between">
            <span>Nội dung chia sẻ kèm link:</span>
            {copied && <span className="text-[#128A83] font-bold text-xs flex items-center gap-1">✓ Đã sao chép!</span>}
          </label>
          <div className="p-3 rounded-xl bg-[#F2F8F6] border border-[#D5E4E1] text-xs text-[#162425] leading-relaxed relative">
            <p className="font-medium whitespace-pre-wrap select-all">
              {fullShareText}
            </p>
          </div>
        </div>

        {/* Copy Button */}
        <button
          id="copy-share-btn"
          onClick={handleCopy}
          className={`w-full py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all mb-6 ${
            copied
              ? 'bg-[#128A83] text-white shadow-xs'
              : 'bg-[#24B7AB] hover:bg-[#128A83] text-white shadow-xs'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-white" />
              <span>ĐÃ SAO CHÉP THÀNH CÔNG VÀO BỘ NHỚ TẠM!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-white" />
              <span>SAO CHÉP TOÀN BỘ NỘI DUNG ĐỂ GỬI TIN NHẮN</span>
            </>
          )}
        </button>

        {/* Quick Social Buttons */}
        <div className="space-y-2 pt-2 border-t border-gray-100">
          <div className="text-xs font-bold text-[#5A6F6C] uppercase tracking-wide">
            Hoặc chia sẻ trực tiếp qua mạng xã hội:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <button
              onClick={handleFacebookShare}
              className="p-2.5 rounded-xl bg-[#24B7AB] hover:bg-[#128A83] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Facebook</span>
            </button>
            <button
              onClick={handleZaloShare}
              className="p-2.5 rounded-xl bg-[#128A83] hover:bg-[#0C1516] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Zalo</span>
            </button>
            <button
              onClick={handleTelegramShare}
              className="p-2.5 rounded-xl bg-[#3792D3] hover:bg-[#2c78af] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Telegram</span>
            </button>
            <button
              onClick={handleTwitterShare}
              className="p-2.5 rounded-xl bg-[#172223] hover:bg-[#0C1516] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>X (Twitter)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
