import React, { useState, useEffect, useRef } from 'react';
import { Package, Truck, Box, ZoomIn, X, ChevronLeft, ChevronRight, AlertCircle, Clock, ShieldAlert } from 'lucide-react';
import { OLD_BUSINESS_DATA } from '../data/content';
import { OldBusinessPhotoItem } from '../types';

export const OldWayBusinessGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<OldBusinessPhotoItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'kho-hang' | 'dong-hang' | 'ship-hang'>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedPhoto) return;
      if (e.key === 'Escape') {
        setSelectedPhoto(null);
      } else if (e.key === 'ArrowRight') {
        navigateLightbox(1);
      } else if (e.key === 'ArrowLeft') {
        navigateLightbox(-1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto]);

  const filteredData = activeFilter === 'all'
    ? OLD_BUSINESS_DATA
    : OLD_BUSINESS_DATA.filter((item) => item.category === activeFilter);

  // Reset slider index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [activeFilter]);

  const scrollToIndex = (index: number) => {
    const container = carouselRef.current;
    if (!container) return;
    const cards = container.querySelectorAll<HTMLElement>('.old-biz-card');
    if (cards[index]) {
      const card = cards[index];
      const left = card.offsetLeft - container.offsetLeft - 16;
      container.scrollTo({ left: Math.max(0, left), behavior: 'smooth' });
    }
    setCurrentIndex(index);
  };

  const handleNext = () => {
    if (filteredData.length === 0) return;
    const next = (currentIndex + 1) % filteredData.length;
    scrollToIndex(next);
  };

  const handlePrev = () => {
    if (filteredData.length === 0) return;
    const prev = (currentIndex - 1 + filteredData.length) % filteredData.length;
    scrollToIndex(prev);
  };

  const handleScroll = () => {
    const container = carouselRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    const cards = container.querySelectorAll<HTMLElement>('.old-biz-card');
    if (!cards.length) return;

    let closestIndex = 0;
    let minDiff = Infinity;
    cards.forEach((card, idx) => {
      const diff = Math.abs((card.offsetLeft - container.offsetLeft - 16) - scrollLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = idx;
      }
    });
    setCurrentIndex(closestIndex);
  };

  const navigateLightbox = (direction: number) => {
    if (!selectedPhoto) return;
    const currentIdx = filteredData.findIndex((item) => item.id === selectedPhoto.id);
    if (currentIdx === -1) return;
    const nextIdx = (currentIdx + direction + filteredData.length) % filteredData.length;
    setSelectedPhoto(filteredData[nextIdx]);
  };

  const countKho = OLD_BUSINESS_DATA.filter((item) => item.category === 'kho-hang').length;
  const countDong = OLD_BUSINESS_DATA.filter((item) => item.category === 'dong-hang').length;
  const countShip = OLD_BUSINESS_DATA.filter((item) => item.category === 'ship-hang').length;

  return (
    <div id="hinh-anh-kieu-cu" className="my-14 pt-6 border-t border-red-200/70 scroll-mt-24">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-[#1E292B] via-[#172223] to-[#121A1B] text-white rounded-2xl p-6 sm:p-8 border border-red-500/20 relative overflow-hidden mb-8 shadow-md">
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/20 text-red-300 text-xs font-bold uppercase tracking-wider border border-red-500/30">
            <AlertCircle className="w-4 h-4 text-red-400" />
            HÌNH ẢNH THỰC TẾ TRƯỚC NĂM 2025 • KINH DOANH THEO KIỂU CŨ
          </div>
          <h3 className="text-xl sm:text-3xl font-extrabold text-white leading-tight">
            ÔM 1 KHO HÀNG, LOAY HOAY ĐÓNG HÀNG & SHIP HÀNG CẢ NGÀY
          </h3>
          <p className="text-xs sm:text-sm text-[#AABAB7] leading-relaxed">
            Những góc máy chân thật ghi lại giai đoạn kinh doanh truyền thống đầy nhọc nhằn trước năm 2025. Người dược sĩ kiêm nhiệm đủ mọi vai: từ kiểm đếm tồn kho, cắt dán thùng carton, đóng hàng đến vội vã bốc xếp hàng giao xe khách, chành xe... Biên lợi nhuận mỏng, áp lực vốn đọng và nguy cơ hàng cận date luôn là nỗi lo âu thường trực.
          </p>
        </div>

        {/* 3 Real Problem Summary Tags */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-white/10 relative z-10">
          <div className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-start gap-2.5">
            <Box className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-white">Ôm 1 kho hàng lớn</div>
              <div className="text-[11px] text-[#AABAB7]">Hàng chất cao chạm trần, áp lực chôn vốn và hạn sử dụng.</div>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-start gap-2.5">
            <Package className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-white">Loay hoay đóng hàng</div>
              <div className="text-[11px] text-[#AABAB7]">Cả ngày cặm cụi băng keo, thùng hộp, chiếm hết thời gian chuyên môn.</div>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-start gap-2.5">
            <Truck className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-white">Ship hàng cả ngày</div>
              <div className="text-[11px] text-[#AABAB7]">Hối hả giao hàng ra chành xe, bến bãi, vừa mệt thể lực vừa rủi ro công nợ.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs & Quick Slider Action */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeFilter === 'all'
                ? 'bg-[#172223] text-white shadow-xs'
                : 'bg-white text-[#162425] hover:bg-gray-50 border border-[#D5E4E1]'
            }`}
          >
            Tất cả ảnh kiểu cũ ({OLD_BUSINESS_DATA.length})
          </button>
          <button
            onClick={() => setActiveFilter('kho-hang')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeFilter === 'kho-hang'
                ? 'bg-[#172223] text-white shadow-xs'
                : 'bg-white text-[#162425] hover:bg-gray-50 border border-[#D5E4E1]'
            }`}
          >
            Ôm 1 kho hàng ({countKho})
          </button>
          <button
            onClick={() => setActiveFilter('dong-hang')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeFilter === 'dong-hang'
                ? 'bg-[#172223] text-white shadow-xs'
                : 'bg-white text-[#162425] hover:bg-gray-50 border border-[#D5E4E1]'
            }`}
          >
            Loay hoay đóng hàng ({countDong})
          </button>
          <button
            onClick={() => setActiveFilter('ship-hang')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeFilter === 'ship-hang'
                ? 'bg-[#172223] text-white shadow-xs'
                : 'bg-white text-[#162425] hover:bg-gray-50 border border-[#D5E4E1]'
            }`}
          >
            Ship hàng cả ngày ({countShip})
          </button>
        </div>

        {/* Counter and Mini Next/Prev Buttons */}
        <div className="flex items-center gap-2.5">
          <div className="text-xs text-[#5A6F6C] font-semibold bg-white px-3 py-1.5 rounded-lg border border-[#D5E4E1]">
            Ảnh <span className="font-bold text-red-600">{currentIndex + 1}</span> / {filteredData.length}
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrev}
              className="w-9 h-9 rounded-xl bg-white border border-[#D5E4E1] hover:border-red-400 hover:bg-red-50 text-[#162425] flex items-center justify-center transition-all shadow-xs"
              aria-label="Xem ảnh trước"
              title="Ảnh trước"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="px-3.5 h-9 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center gap-1 transition-all shadow-xs"
              aria-label="Xem ảnh tiếp theo"
              title="Ảnh tiếp theo"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* ================= CAROUSEL VIEWPORT ================= */}
      <div className="relative group/carousel">
        {/* Floating Left Button (Desktop) */}
        <button
          onClick={handlePrev}
          className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-[#162425] hover:text-red-600 border border-[#D5E4E1] hover:border-red-400 items-center justify-center transition-all shadow-md hover:scale-105"
          aria-label="Ảnh trước"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Floating Right Button (Desktop) */}
        <button
          onClick={handleNext}
          className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-red-600 hover:bg-red-700 text-white items-center justify-center transition-all shadow-md hover:scale-105"
          aria-label="Ảnh tiếp theo (Next)"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Horizontal Scrolling Track */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth py-2 px-1 no-scrollbar [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {filteredData.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className={`old-biz-card shrink-0 w-[82vw] sm:w-[320px] md:w-[350px] snap-start bg-white rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1 shadow-xs hover:shadow-md ${
                index === currentIndex ? 'border-red-400 ring-2 ring-red-400/20' : 'border-[#D5E4E1]'
              }`}
            >
              {/* Image Box */}
              <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-3.5">
                  <div className="text-white text-xs font-bold flex items-center gap-1.5 bg-red-600/90 px-3 py-1 rounded-lg backdrop-blur-sm">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Phóng to xem chi tiết</span>
                  </div>
                </div>

                {/* Tag pill */}
                <div className="absolute top-2.5 left-2.5 bg-black/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-0.5 rounded-md border border-white/20">
                  {item.tag}
                </div>

                {/* Badge */}
                <div className="absolute top-2.5 right-2.5 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                  {item.badge}
                </div>

                {/* Index badge */}
                <div className="absolute bottom-2.5 right-2.5 bg-black/60 backdrop-blur-sm text-white text-[10px] font-mono px-2 py-0.5 rounded">
                  {index + 1} / {filteredData.length}
                </div>
              </div>

              {/* Content Box */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#162425] hover:text-red-600 transition-colors line-clamp-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#5A6F6C] leading-relaxed mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px] font-bold text-red-600">
                  <span>Mô hình cũ trước 2025</span>
                  <span className="flex items-center gap-1">
                    Bấm phóng to →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= BOTTOM CAROUSEL CONTROLS ================= */}
      <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3.5 rounded-xl border border-[#D5E4E1] shadow-xs">
        {/* Pagination Dots */}
        <div className="flex items-center gap-1.5 overflow-x-auto max-w-full py-1">
          {filteredData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-6 bg-red-600' : 'w-2 bg-gray-200 hover:bg-red-300'
              }`}
              aria-label={`Chuyển đến ảnh ${idx + 1}`}
              title={`Ảnh ${idx + 1}`}
            />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <button
            onClick={handlePrev}
            className="flex-1 sm:flex-none px-3.5 py-2 rounded-xl border border-[#D5E4E1] hover:border-red-400 bg-white hover:bg-red-50 text-[#162425] font-bold text-xs flex items-center justify-center gap-1 transition-all shadow-xs"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Ảnh trước</span>
          </button>
          <button
            onClick={handleNext}
            className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center justify-center gap-1 transition-all shadow-xs"
          >
            <span>Bấm Next xem ảnh tiếp theo</span>
            <ChevronRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          id="old-biz-lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[92vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
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
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                className="max-h-[72vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
              />
            </div>

            {/* Bottom Caption Bar */}
            <div className="w-full mt-3 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#D5E4E1] text-[#162425] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg">
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-red-600 text-white text-[10px] font-bold">
                    {selectedPhoto.tag}
                  </span>
                  <span className="text-xs font-mono font-bold text-red-700">
                    {selectedPhoto.badge}
                  </span>
                </div>
                <h4 className="font-bold text-sm sm:text-base text-[#162425]">
                  {selectedPhoto.title}
                </h4>
                <p className="text-xs text-[#5A6F6C]">
                  {selectedPhoto.description}
                </p>
              </div>

              <div className="shrink-0 text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1.5 rounded-lg">
                Ảnh thực tế trước năm 2025
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
