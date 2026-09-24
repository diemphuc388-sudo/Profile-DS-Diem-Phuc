import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, ZoomIn, X, ChevronLeft, ChevronRight, CheckCircle2, TrendingUp, MessageCircle, Phone, Award } from 'lucide-react';
import { SALES_PROOF_DATA, CONTACT_INFO } from '../data/content';
import { SalesProofItem } from '../types';

export const SalesProofGallery: React.FC = () => {
  const [selectedProof, setSelectedProof] = useState<SalesProofItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Handle keyboard navigation in lightbox and carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProof) {
        if (e.key === 'Escape') {
          setSelectedProof(null);
        } else if (e.key === 'ArrowRight') {
          navigateLightbox(1);
        } else if (e.key === 'ArrowLeft') {
          navigateLightbox(-1);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProof]);

  const filteredData = activeFilter === 'all'
    ? SALES_PROOF_DATA
    : SALES_PROOF_DATA.filter((item) => {
        if (activeFilter === 'combo') return item.tag.includes('quầy') || item.tag.includes('Liệu trình') || item.badge.includes('Combo') || item.tag.includes('AmHapy');
        if (activeFilter === 'customers') return item.tag.includes('Khách hàng') || item.tag.includes('gia đình') || item.badge.includes('Tin Cậy') || item.badge.includes('Lâm Sàng');
        if (activeFilter === 'growth') return item.tag.includes('Giao hàng') || item.tag.includes('Tăng trưởng') || item.tag.includes('chiến lược') || item.tag.includes('đo lường');
        return true;
      });

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [activeFilter]);

  const scrollToIndex = (index: number) => {
    const container = carouselRef.current;
    if (!container) return;
    const cards = container.querySelectorAll<HTMLElement>('.sales-proof-card');
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
    const cards = container.querySelectorAll<HTMLElement>('.sales-proof-card');
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
    if (!selectedProof) return;
    const currentLightboxIndex = SALES_PROOF_DATA.findIndex((item) => item.id === selectedProof.id);
    if (currentLightboxIndex === -1) return;
    const nextLightboxIndex = (currentLightboxIndex + direction + SALES_PROOF_DATA.length) % SALES_PROOF_DATA.length;
    setSelectedProof(SALES_PROOF_DATA[nextLightboxIndex]);
  };

  return (
    <div id="ket-qua-thuc-te" className="my-16 sm:my-24">
      {/* Proof Section Banner */}
      <div className="bg-[#172223] text-white rounded-2xl p-6 sm:p-10 border border-[#334546] relative overflow-hidden mb-10 shadow-lg">
        {/* Glow decoration */}
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#24B7AB]/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#24B7AB]/20 text-[#5BEA68] text-xs font-bold uppercase tracking-wider border border-[#24B7AB]/30">
            <Award className="w-4 h-4 text-[#5BEA68]" />
            THỰC CHIẾN TẠI NHÀ THUỐC • ĐỒNG HÀNH CÙNG Y DƯỢC ONLINE AMHAPY
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            HÌNH ẢNH BÁN HÀNG THỰC TẾ: BẮT ĐẦU BÁN COMBO & LIỆU TRÌNH HIỆU QUẢ
          </h3>
          <p className="text-sm sm:text-base text-[#AABAB7] leading-relaxed">
            Những hình ảnh thực tế tại quầy thuốc Minh Khôi sau khi tôi đồng hành cùng <strong>Y Dược Online AmHapy</strong> và áp dụng nhiều công cụ, chiến lược mới. Thay vì chỉ cắt liều bán lẻ nhỏ giọt, tôi bắt đầu tự tin tư vấn và bán trọn gói <strong>combo liệu trình</strong> chăm sóc sức khỏe chủ động, giúp khách hàng phục hồi nhanh hơn và doanh số tăng trưởng vượt bậc.
          </p>
        </div>

        {/* Quick Achievement Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-white/10 relative z-10">
          <div className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-xs text-[#AABAB7]/70">Chuyển đổi mô hình</div>
            <div className="text-base sm:text-lg font-bold text-[#5BEA68]">Bán Trọn Combo</div>
            <div className="text-[11px] text-[#AABAB7]/80">Thay vì bán lẻ cắt liều</div>
          </div>
          <div className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-xs text-[#AABAB7]/70">Ứng dụng công cụ</div>
            <div className="text-base sm:text-lg font-bold text-[#5BEA68]">Đo 45 Chỉ Số & Soi Vi Mạch</div>
            <div className="text-[11px] text-[#AABAB7]/80">Khách tin vì thấy tận mắt</div>
          </div>
          <div className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-xs text-[#AABAB7]/70">Chiến lược AmHapy</div>
            <div className="text-base sm:text-lg font-bold text-[#5BEA68]">Tư Vấn Đúng Phác Đồ</div>
            <div className="text-[11px] text-[#AABAB7]/80">Khách sẵn sàng dùng đủ ngày</div>
          </div>
          <div className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-xs text-[#AABAB7]/70">Kết quả thực tế</div>
            <div className="text-base sm:text-lg font-bold text-[#5BEA68]">Tái Mua Định Kỳ</div>
            <div className="text-[11px] text-[#AABAB7]/80">Gắn bó lâu dài, doanh thu bền</div>
          </div>
        </div>
      </div>

      {/* Filter Tabs & Top Controls */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeFilter === 'all'
                ? 'bg-[#24B7AB] text-white shadow-xs'
                : 'bg-white text-[#162425] hover:bg-[#F2F8F6] border border-[#D5E4E1]'
            }`}
          >
            Tất cả minh chứng bán hàng ({SALES_PROOF_DATA.length})
          </button>
          <button
            onClick={() => setActiveFilter('combo')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeFilter === 'combo'
                ? 'bg-[#24B7AB] text-white shadow-xs'
                : 'bg-white text-[#162425] hover:bg-[#F2F8F6] border border-[#D5E4E1]'
            }`}
          >
            Bán combo & Liệu trình tại quầy
          </button>
          <button
            onClick={() => setActiveFilter('customers')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeFilter === 'customers'
                ? 'bg-[#24B7AB] text-white shadow-xs'
                : 'bg-white text-[#162425] hover:bg-[#F2F8F6] border border-[#D5E4E1]'
            }`}
          >
            Khách hàng tin cậy & Tái mua
          </button>
          <button
            onClick={() => setActiveFilter('growth')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeFilter === 'growth'
                ? 'bg-[#24B7AB] text-white shadow-xs'
                : 'bg-white text-[#162425] hover:bg-[#F2F8F6] border border-[#D5E4E1]'
            }`}
          >
            Giao hàng & Bứt phá doanh số
          </button>
        </div>

        {/* Counter and Mini Next/Prev Buttons */}
        <div className="flex items-center gap-3">
          <div className="text-xs text-[#5A6F6C] font-semibold bg-white px-3 py-1.5 rounded-lg border border-[#D5E4E1]">
            Ảnh <span className="font-bold text-[#128A83]">{currentIndex + 1}</span> / {filteredData.length}
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrev}
              className="w-9 h-9 rounded-xl bg-white border border-[#D5E4E1] hover:border-[#24B7AB] hover:bg-[#F2F8F6] text-[#162425] flex items-center justify-center transition-all shadow-xs"
              aria-label="Xem ảnh trước"
              title="Xem ảnh trước"
            >
              <ChevronLeft className="w-5 h-5 text-[#162425]" />
            </button>
            <button
              onClick={handleNext}
              className="px-3.5 h-9 rounded-xl bg-[#128A83] hover:bg-[#0C1516] text-white font-bold text-xs flex items-center gap-1 transition-all shadow-sm"
              aria-label="Xem ảnh tiếp theo"
              title="Xem ảnh tiếp theo"
            >
              <span>Tiếp theo</span>
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
          className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-[#162425] hover:text-[#128A83] border border-[#D5E4E1] hover:border-[#24B7AB] items-center justify-center transition-all shadow-md hover:scale-105"
          aria-label="Ảnh trước"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Floating Right Button (Desktop) */}
        <button
          onClick={handleNext}
          className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#128A83] hover:bg-[#0C1516] text-white items-center justify-center transition-all shadow-lg hover:scale-105"
          aria-label="Ảnh tiếp theo (Next)"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Horizontal Scrolling Track */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth py-3 px-1 no-scrollbar [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {filteredData.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedProof(item)}
              className={`sales-proof-card shrink-0 w-[85vw] sm:w-[360px] md:w-[390px] snap-start bg-white rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1 shadow-xs hover:shadow-lg ${
                index === currentIndex ? 'border-[#24B7AB] ring-2 ring-[#24B7AB]/30' : 'border-[#D5E4E1]'
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#172223]/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="text-white text-xs font-bold flex items-center gap-1.5 bg-[#24B7AB]/90 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Phóng to xem chi tiết</span>
                  </div>
                </div>

                {/* Tag pill */}
                <div className="absolute top-3 left-3 bg-[#172223]/85 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-md border border-white/20">
                  {item.tag}
                </div>

                {item.badge && (
                  <div className="absolute top-3 right-3 bg-[#128A83] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                    {item.badge}
                  </div>
                )}

                {/* Index badge */}
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[10px] font-mono px-2 py-0.5 rounded">
                  {index + 1} / {filteredData.length}
                </div>
              </div>

              {/* Content Box */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-[#162425] hover:text-[#128A83] transition-colors line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#5A6F6C] leading-relaxed mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D5E4E1] flex items-center justify-between text-[11px] font-bold text-[#128A83]">
                  <span>Y Dược Online AmHapy</span>
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
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-[#D5E4E1] shadow-xs">
        {/* Pagination Dots */}
        <div className="flex items-center gap-2 overflow-x-auto max-w-full py-1">
          {filteredData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-8 bg-[#128A83]' : 'w-2.5 bg-[#D5E4E1] hover:bg-[#24B7AB]/60'
              }`}
              aria-label={`Chuyển đến ảnh ${idx + 1}`}
              title={`Ảnh ${idx + 1}`}
            />
          ))}
        </div>

        {/* Large Navigation Action Buttons */}
        <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
          <button
            onClick={handlePrev}
            className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-[#D5E4E1] hover:border-[#24B7AB] bg-white hover:bg-[#F2F8F6] text-[#162425] font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all shadow-xs"
          >
            <ChevronLeft className="w-4 h-4 text-[#162425]" />
            <span>Ảnh trước</span>
          </button>
          <button
            onClick={handleNext}
            className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-[#128A83] hover:bg-[#0C1516] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all shadow-sm"
          >
            <span>Bấm Next xem ảnh tiếp theo</span>
            <ChevronRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* Sub-Banner CTA */}
      <div className="mt-8 p-6 rounded-2xl bg-[#F2F8F6] border border-[#D5E4E1] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#24B7AB] text-white flex items-center justify-center shrink-0 shadow-xs">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <h5 className="font-bold text-sm sm:text-base text-[#162425]">
              Bạn muốn biết cách tư vấn combo liệu trình và tối ưu vận hành như Dược sĩ Diễm Phúc?
            </h5>
            <p className="text-xs text-[#5A6F6C] mt-0.5">
              Tham gia ngay Nhóm Zalo để nhận kịch bản tư vấn liệu trình và bộ công cụ đo lường từ Y Dược Online AmHapy.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0">
          <a
            href={CONTACT_INFO.zaloGroupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-[#128A83] hover:bg-[#0C1516] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-all"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span>THAM GIA NHÓM ZALO NGAY</span>
          </a>
          <a
            href={CONTACT_INFO.telUrl}
            className="px-4 py-3 rounded-xl bg-white border border-[#24B7AB] hover:bg-[#E8FBF0] text-[#128A83] font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all"
          >
            <Phone className="w-4 h-4 text-[#128A83]" />
            <span className="hidden sm:inline">Gọi:</span> {CONTACT_INFO.phoneDisplay}
          </a>
        </div>
      </div>

      {/* ================= LIGHTBOX MODAL ================= */}
      {selectedProof && (
        <div
          id="sales-proof-lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedProof(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[92vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProof(null)}
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
                src={selectedProof.imageUrl}
                alt={selectedProof.title}
                className="max-h-[72vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
              />
            </div>

            {/* Bottom Caption Bar */}
            <div className="w-full mt-3 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#D5E4E1] text-[#162425] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg">
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#24B7AB] text-white text-[10px] font-bold">
                    {selectedProof.tag}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#5A6F6C]">
                    Y Dược Online AmHapy • Quầy thuốc Minh Khôi
                  </span>
                </div>
                <h4 className="font-bold text-sm sm:text-base text-[#162425]">
                  {selectedProof.title}
                </h4>
                <p className="text-xs text-[#5A6F6C]">
                  {selectedProof.description}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2">
                <a
                  href={CONTACT_INFO.zaloGroupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#128A83] hover:bg-[#0C1516] text-white font-bold text-xs flex items-center gap-1.5 shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-white" />
                  <span>Tham gia nhóm Zalo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
