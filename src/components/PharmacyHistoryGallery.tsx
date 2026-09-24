import React, { useState, useEffect } from 'react';
import { Sparkles, ZoomIn, X, ChevronLeft, ChevronRight, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PHARMACY_HISTORY_DATA } from '../data/content';
import { PharmacyHistoryItem } from '../types';

export const PharmacyHistoryGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<PharmacyHistoryItem | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowRight') {
        navigateLightbox(1);
      } else if (e.key === 'ArrowLeft') {
        navigateLightbox(-1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  const navigateLightbox = (direction: number) => {
    if (!selectedImage) return;
    const currentIndex = PHARMACY_HISTORY_DATA.findIndex((item) => item.id === selectedImage.id);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + direction + PHARMACY_HISTORY_DATA.length) % PHARMACY_HISTORY_DATA.length;
    setSelectedImage(PHARMACY_HISTORY_DATA[nextIndex]);
  };

  return (
    <div id="lich-su-nha-thuoc" className="mt-16 sm:mt-20 pt-12 border-t border-[#D5E4E1]">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2F8F6] border border-[#D5E4E1] text-[#128A83] text-xs font-bold uppercase tracking-wider">
          <Calendar className="w-3.5 h-3.5 text-[#24B7AB]" />
          HÌNH ẢNH THỰC TẾ NHÀ THUỐC MINH KHÔI
        </div>
        <h3 className="text-xl sm:text-3xl font-extrabold text-[#162425] tracking-tight">
          HÀNH TRÌNH TỪ KHI MỚI HÌNH THÀNH ĐẾN NAY <br />
          <span className="text-[#24B7AB] font-mono">(2019 – 2023 – 2025)</span>
        </h3>
        <p className="text-xs sm:text-sm text-[#5A6F6C] max-w-2xl mx-auto leading-relaxed">
          Từng góc quầy, từng kệ thuốc là minh chứng chân thật cho sự nỗ lực vươn lên: từ điểm khởi đầu đơn sơ năm 2019, mở rộng hàng ngàn sản phẩm năm 2023, đến diện mạo khang trang, chuẩn hóa hiện đại năm 2025.
        </p>
      </div>

      {/* 4-Card Timeline Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PHARMACY_HISTORY_DATA.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className="group bg-white hover:bg-[#F2F8F6]/40 rounded-xl overflow-hidden border border-[#D5E4E1] hover:border-[#24B7AB] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
          >
            {/* Image Box */}
            <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <div className="text-white text-xs font-semibold flex items-center gap-1.5 bg-[#24B7AB]/90 px-3 py-1 rounded-lg backdrop-blur-sm">
                  <ZoomIn className="w-3.5 h-3.5 text-white" />
                  <span>Phóng to xem chi tiết</span>
                </div>
              </div>

              {/* Year Badge */}
              <div className="absolute top-3 left-3 bg-[#172223]/90 backdrop-blur-md text-white font-mono font-bold text-xs px-2.5 py-1 rounded-md border border-white/20 shadow-xs flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#5BEA68]" />
                {item.year}
              </div>

              {/* Step indicator */}
              <div className="absolute top-3 right-3 bg-white/95 text-[#24B7AB] text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                0{index + 1}/04
              </div>
            </div>

            {/* Content Box */}
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <div className="text-[11px] font-bold text-[#24B7AB] uppercase tracking-wide">
                  {item.stage}
                </div>
                <h4 className="font-bold text-sm sm:text-base text-[#162425] group-hover:text-[#24B7AB] transition-colors line-clamp-2 mt-1 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-[#5A6F6C] leading-relaxed mt-1.5 line-clamp-3">
                  {item.description}
                </p>
              </div>

              {item.highlights && (
                <div className="pt-3 border-t border-[#D5E4E1] space-y-1">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[11px] font-semibold text-[#162425]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#5BEA68] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{h}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Progress Flow Banner */}
      <div className="mt-8 p-4 rounded-xl bg-[#F2F8F6]/60 border border-[#D5E4E1] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#162425]">
        <div className="flex items-center gap-2 font-bold text-[#128A83]">
          <span className="px-2.5 py-1 rounded-md bg-[#24B7AB] text-white">HÀNH TRÌNH 7 NĂM</span>
          <span>Từ nhà thuốc truyền thống đến mô hình dược sĩ số hiện đại</span>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2 font-semibold text-[#5A6F6C]">
            <span>2019 (Khởi đầu)</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#24B7AB]" />
            <span>2023 (Mở rộng)</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#24B7AB]" />
            <span className="text-[#128A83] font-bold">2025 (Chuyển đổi số)</span>
          </div>
          <a
            href="#hinh-anh-kieu-cu"
            className="inline-flex items-center gap-1 font-bold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 border border-red-200 px-2.5 py-1 rounded-lg transition-colors"
          >
            <span>Ảnh kiểu cũ trước 2025</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* ================= LIGHTBOX MODAL ================= */}
      {selectedImage && (
        <div
          id="pharmacy-history-lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[92vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 sm:top-2 sm:right-2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors shadow-lg"
              aria-label="Đóng phóng to"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateLightbox(-1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all border border-white/20"
              aria-label="Ảnh trước"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => navigateLightbox(1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all border border-white/20"
              aria-label="Ảnh kế tiếp"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Viewer */}
            <div className="w-full flex items-center justify-center overflow-hidden rounded-2xl max-h-[72vh] bg-black/40">
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="max-h-[72vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
              />
            </div>

            {/* Bottom Caption Bar */}
            <div className="w-full mt-3 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/20 text-[#123B57] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xl">
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#123B57] text-white font-mono font-bold text-xs">
                    {selectedImage.year}
                  </span>
                  <span className="text-xs font-bold text-[#087F73]">
                    {selectedImage.stage}
                  </span>
                </div>
                <h4 className="font-extrabold text-sm sm:text-base text-[#123B57]">
                  {selectedImage.title}
                </h4>
                <p className="text-xs text-gray-600">
                  {selectedImage.description}
                </p>
              </div>

              <div className="shrink-0 text-xs font-semibold text-gray-400">
                Nhà Thuốc Minh Khôi
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
