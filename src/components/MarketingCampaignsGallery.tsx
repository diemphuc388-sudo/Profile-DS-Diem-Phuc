import React, { useState, useEffect, useRef } from 'react';
import { Gift, Sparkles, ZoomIn, X, ChevronLeft, ChevronRight, Award, Palette, HeartHandshake, Tag, ArrowRight } from 'lucide-react';
import { MARKETING_CAMPAIGNS_DATA } from '../data/content';
import { MarketingCampaignItem } from '../types';

export const MarketingCampaignsGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<MarketingCampaignItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'minigame' | 'voucher' | 'poster' | 'event'>('all');
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
    ? MARKETING_CAMPAIGNS_DATA
    : MARKETING_CAMPAIGNS_DATA.filter((item) => item.category === activeFilter);

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
    const cards = container.querySelectorAll<HTMLElement>('.mkt-campaign-card');
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
    const cards = container.querySelectorAll<HTMLElement>('.mkt-campaign-card');
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

  const countMinigame = MARKETING_CAMPAIGNS_DATA.filter((i) => i.category === 'minigame').length;
  const countVoucher = MARKETING_CAMPAIGNS_DATA.filter((i) => i.category === 'voucher').length;
  const countPoster = MARKETING_CAMPAIGNS_DATA.filter((i) => i.category === 'poster').length;
  const countEvent = MARKETING_CAMPAIGNS_DATA.filter((i) => i.category === 'event').length;

  return (
    <div id="chuong-trinh-khuyen-mai" className="mt-16 pt-10 border-t border-[#D5E4E1] scroll-mt-24">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-[#128A83] via-[#1F5F5B] to-[#172223] text-white rounded-2xl p-6 sm:p-9 border border-[#24B7AB]/30 relative overflow-hidden mb-8 shadow-md">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#5BEA68]/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-[#5BEA68] text-xs font-bold uppercase tracking-wider border border-white/20">
            <Gift className="w-4 h-4 text-[#5BEA68]" />
            ỨNG DỤNG THỰC CHIẾN • MARKETING ĐIỂM BÁN & TRUYỀN THÔNG SỐ
          </div>
          <h3 className="text-xl sm:text-3xl font-extrabold text-white leading-tight">
            TỰ THIẾT KẾ & TỔ CHỨC CÁC CHƯƠNG TRÌNH KHUYẾN MÃI, ƯU ĐÃI CHO NHÀ THUỐC
          </h3>
          <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
            Thay vì ngồi chờ khách hay phụ thuộc vào các chương trình rập khuôn của hãng, tôi đã tự làm chủ công cụ thiết kế Canva, sáng tạo minigame Vòng Quay May Mắn, voucher tri ân độc quyền và tự tay tổ chức các sự kiện ưu đãi tại Nhà Thuốc Minh Khôi. Khách hàng hào hứng tham gia, tỷ lệ quay lại tăng vọt và doanh số combo liệu trình bứt phá mạnh mẽ.
          </p>
        </div>

        {/* 4 Key Pillars */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-white/15 relative z-10">
          <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-start gap-2.5">
            <Palette className="w-5 h-5 text-[#5BEA68] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-white">Tự thiết kế Canva</div>
              <div className="text-[11px] text-white/80">Banner, poster chuẩn nhận diện thương hiệu.</div>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-start gap-2.5">
            <Award className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-white">Vòng Quay May Mắn</div>
              <div className="text-[11px] text-white/80">Minigame 100% trúng quà, kéo khách check-in.</div>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-start gap-2.5">
            <Tag className="w-5 h-5 text-emerald-300 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-white">Voucher Ưu Đãi</div>
              <div className="text-[11px] text-white/80">Giữ chân khách hàng và kích cầu tái mua.</div>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-start gap-2.5">
            <HeartHandshake className="w-5 h-5 text-cyan-300 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-white">Tổ chức tại quầy</div>
              <div className="text-[11px] text-white/80">Gắn kết tình cảm, tư vấn phác đồ tận tâm.</div>
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
                ? 'bg-[#128A83] text-white shadow-xs'
                : 'bg-white text-[#162425] hover:bg-gray-50 border border-[#D5E4E1]'
            }`}
          >
            Tất cả hoạt động ({MARKETING_CAMPAIGNS_DATA.length})
          </button>
          <button
            onClick={() => setActiveFilter('minigame')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeFilter === 'minigame'
                ? 'bg-[#128A83] text-white shadow-xs'
                : 'bg-white text-[#162425] hover:bg-gray-50 border border-[#D5E4E1]'
            }`}
          >
            🎡 Vòng quay & Minigame ({countMinigame})
          </button>
          <button
            onClick={() => setActiveFilter('voucher')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeFilter === 'voucher'
                ? 'bg-[#128A83] text-white shadow-xs'
                : 'bg-white text-[#162425] hover:bg-gray-50 border border-[#D5E4E1]'
            }`}
          >
            🎟️ Voucher & Phiếu ưu đãi ({countVoucher})
          </button>
          <button
            onClick={() => setActiveFilter('poster')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeFilter === 'poster'
                ? 'bg-[#128A83] text-white shadow-xs'
                : 'bg-white text-[#162425] hover:bg-gray-50 border border-[#D5E4E1]'
            }`}
          >
            🎨 Poster & Banner Canva ({countPoster})
          </button>
          <button
            onClick={() => setActiveFilter('event')}
            className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeFilter === 'event'
                ? 'bg-[#128A83] text-white shadow-xs'
                : 'bg-white text-[#162425] hover:bg-gray-50 border border-[#D5E4E1]'
            }`}
          >
            🏬 Tổ chức tại nhà thuốc ({countEvent})
          </button>
        </div>

        {/* Counter and Mini Next/Prev Buttons */}
        <div className="flex items-center gap-2.5">
          <div className="text-xs text-[#5A6F6C] font-semibold bg-white px-3 py-1.5 rounded-lg border border-[#D5E4E1]">
            Ảnh <span className="font-bold text-[#128A83]">{currentIndex + 1}</span> / {filteredData.length}
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrev}
              className="w-9 h-9 rounded-xl bg-white border border-[#D5E4E1] hover:border-[#24B7AB] hover:bg-[#F2F8F6] text-[#162425] flex items-center justify-center transition-all shadow-xs"
              aria-label="Xem ảnh trước"
              title="Ảnh trước"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="px-3.5 h-9 rounded-xl bg-[#24B7AB] hover:bg-[#128A83] text-white font-bold text-xs flex items-center gap-1 transition-all shadow-xs"
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
          className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-[#162425] hover:text-[#128A83] border border-[#D5E4E1] hover:border-[#24B7AB] items-center justify-center transition-all shadow-md hover:scale-105"
          aria-label="Ảnh trước"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Floating Right Button (Desktop) */}
        <button
          onClick={handleNext}
          className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#24B7AB] hover:bg-[#128A83] text-white items-center justify-center transition-all shadow-md hover:scale-105"
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
              className={`mkt-campaign-card shrink-0 w-[82vw] sm:w-[320px] md:w-[350px] snap-start bg-white rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1 shadow-xs hover:shadow-md ${
                index === currentIndex ? 'border-[#24B7AB] ring-2 ring-[#24B7AB]/20' : 'border-[#D5E4E1]'
              }`}
            >
              {/* Image Box */}
              <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden flex items-center justify-center">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-contain object-center group-hover:scale-103 transition-transform duration-500 bg-white"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-3.5">
                  <div className="text-white text-xs font-bold flex items-center gap-1.5 bg-[#24B7AB]/90 px-3 py-1 rounded-lg backdrop-blur-sm">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Phóng to xem chi tiết</span>
                  </div>
                </div>

                {/* Tag pill */}
                <div className="absolute top-2.5 left-2.5 bg-black/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-0.5 rounded-md border border-white/20">
                  {item.tag}
                </div>

                {/* Badge */}
                <div className="absolute top-2.5 right-2.5 bg-[#128A83] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
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
                  <h4 className="font-bold text-xs sm:text-sm text-[#162425] hover:text-[#128A83] transition-colors line-clamp-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#5A6F6C] leading-relaxed mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px] font-bold text-[#128A83]">
                  <span>Nhà Thuốc Minh Khôi</span>
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
                idx === currentIndex ? 'w-6 bg-[#24B7AB]' : 'w-2 bg-gray-200 hover:bg-[#24B7AB]/40'
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
            className="flex-1 sm:flex-none px-3.5 py-2 rounded-xl border border-[#D5E4E1] hover:border-[#24B7AB] bg-white hover:bg-[#F2F8F6] text-[#162425] font-bold text-xs flex items-center justify-center gap-1 transition-all shadow-xs"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Ảnh trước</span>
          </button>
          <button
            onClick={handleNext}
            className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-[#24B7AB] hover:bg-[#128A83] text-white font-bold text-xs flex items-center justify-center gap-1 transition-all shadow-xs"
          >
            <span>Bấm Next xem ảnh tiếp theo</span>
            <ChevronRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          id="mkt-campaign-lightbox"
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
                className="max-h-[72vh] w-auto max-w-full object-contain rounded-xl shadow-2xl bg-white"
              />
            </div>

            {/* Bottom Caption Bar */}
            <div className="w-full mt-3 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#D5E4E1] text-[#162425] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg">
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#24B7AB] text-white text-[10px] font-bold">
                    {selectedPhoto.tag}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#128A83]">
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

              <div className="shrink-0 text-xs font-bold text-[#128A83] bg-[#E8FBF0] px-3 py-1.5 rounded-lg border border-[#5BEA68]/30">
                Nhà Thuốc Minh Khôi
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
