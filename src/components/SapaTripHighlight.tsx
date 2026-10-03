import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  MapPin, 
  Calendar, 
  Heart, 
  Users, 
  Compass, 
  ZoomIn, 
  X, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Camera, 
  Plane, 
  Globe2, 
  Check, 
  Play, 
  Film
} from 'lucide-react';
import { TRAVEL_TRIPS_DATA } from '../data/content';
import { TravelTripItem } from '../types';

export const SapaTripHighlight: React.FC = () => {
  const [selectedTripId, setSelectedTripId] = useState<string>('sapa-trip-2026');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const reelRef = useRef<HTMLDivElement>(null);

  // Current active trip
  const activeTrip: TravelTripItem = 
    TRAVEL_TRIPS_DATA.find((t) => t.id === selectedTripId) || TRAVEL_TRIPS_DATA[0];
  const photos = activeTrip.images || [];

  // Scroll active thumbnail / video reel card into center view
  const scrollToReelItem = (index: number) => {
    if (!reelRef.current) return;
    const items = reelRef.current.querySelectorAll<HTMLElement>('.reel-item');
    if (items[index]) {
      const item = items[index];
      const container = reelRef.current;
      const left = item.offsetLeft - container.offsetLeft - (container.clientWidth / 2) + (item.clientWidth / 2);
      container.scrollTo({ left: Math.max(0, left), behavior: 'smooth' });
    }
  };

  // Reset photo index when trip switches
  const handleSelectTrip = (tripId: string) => {
    setSelectedTripId(tripId);
    setActivePhotoIndex(0);
    setTimeout(() => scrollToReelItem(0), 60);
  };

  const handleSelectPhoto = (idx: number) => {
    setActivePhotoIndex(idx);
    scrollToReelItem(idx);
  };

  const handlePrev = useCallback(() => {
    setActivePhotoIndex((prev) => {
      const next = prev === 0 ? photos.length - 1 : prev - 1;
      scrollToReelItem(next);
      return next;
    });
  }, [photos.length]);

  const handleNext = useCallback(() => {
    setActivePhotoIndex((prev) => {
      const next = (prev + 1) % photos.length;
      scrollToReelItem(next);
      return next;
    });
  }, [photos.length]);

  // Auto-advance photos every 2 seconds without needing to click next
  useEffect(() => {
    if (isLightboxOpen || isPaused || photos.length <= 1) return;

    const timer = setInterval(() => {
      setActivePhotoIndex((prev) => {
        const next = (prev + 1) % photos.length;
        scrollToReelItem(next);
        return next;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, [isLightboxOpen, isPaused, photos.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setIsLightboxOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, handlePrev, handleNext]);

  const activePhoto = photos[activePhotoIndex] || {
    url: activeTrip.imageUrl,
    caption: activeTrip.title,
    tag: activeTrip.tag
  };

  return (
    <div id="du-lich-amhapy" className="my-14 scroll-mt-24">
      <div className="bg-gradient-to-br from-[#172223] via-[#1E2E2F] to-[#121B1C] rounded-3xl p-5 sm:p-8 md:p-10 border border-[#24B7AB]/30 shadow-xl relative overflow-hidden text-white">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#24B7AB]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5BEA68]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header: Pill & Live Tags */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#24B7AB]/20 text-[#5BEA68] text-xs font-bold uppercase tracking-wider border border-[#24B7AB]/30">
            <Compass className="w-4 h-4 text-[#5BEA68]" />
            HÀNH TRÌNH TRẢI NGHIỆM • GẮN KẾT ĐỒNG ĐỘI & GIA ĐÌNH CÙNG AMHAPY
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold backdrop-blur-sm border border-white/10">
              <Calendar className="w-3.5 h-3.5 text-[#5BEA68]" />
              <span>{activeTrip.time}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold backdrop-blur-sm border border-white/10">
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              <span>{activeTrip.destination}</span>
            </div>
            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#24B7AB]/20 text-[#5BEA68] text-xs font-mono font-bold border border-[#24B7AB]/40">
              <Camera className="w-3.5 h-3.5" />
              <span>{photos.length} ảnh thực tế</span>
            </div>
          </div>
        </div>

        {/* Trip Switcher Tabs */}
        <div className="relative z-10 mb-8">
          <div className="text-xs uppercase tracking-wider text-[#AABAB7] font-semibold mb-2.5 flex items-center gap-2">
            <Globe2 className="w-3.5 h-3.5 text-[#5BEA68]" />
            <span>Chọn chuyến hành trình bạn muốn xem:</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
            {TRAVEL_TRIPS_DATA.map((trip) => {
              const isSelected = trip.id === selectedTripId;
              return (
                <button
                  key={trip.id}
                  onClick={() => handleSelectTrip(trip.id)}
                  className={`p-3.5 rounded-2xl text-left border transition-all duration-300 relative flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#128A83]/50 to-[#24B7AB]/30 border-[#5BEA68] shadow-lg ring-1 ring-[#5BEA68]/50'
                      : 'bg-white/5 hover:bg-white/10 border-white/10 opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-2xl shrink-0">{trip.flag}</span>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm font-extrabold text-white truncate flex items-center gap-1.5">
                        <span>{trip.destination}</span>
                        <span className="text-[11px] font-normal text-white/70">({trip.time})</span>
                      </div>
                      <div className="text-[11px] text-[#AABAB7] truncate">
                        {trip.tag} • {trip.images.length} ảnh
                      </div>
                    </div>
                  </div>

                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md shrink-0 ${
                    isSelected ? 'bg-[#5BEA68] text-[#162425]' : 'bg-white/10 text-white/80'
                  }`}>
                    {isSelected ? 'Đang xem' : 'Bấm xem'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Heading & Intro (Full width) */}
        <div className="relative z-10 max-w-4xl space-y-3 mb-6">
          <div className="flex items-center gap-2 text-[#5BEA68] text-xs font-bold uppercase tracking-wider">
            <Plane className="w-4 h-4" />
            <span>{activeTrip.badge}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
            {activeTrip.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#AABAB7] leading-relaxed">
            {activeTrip.description}
          </p>
        </div>

        {/* ================= UNIFIED FULL-WIDTH SLIDE PRESENTATION (KHÔNG PHÂN CHIA 2 CỘT) ================= */}
        <div className="relative z-10 space-y-5">
          {/* Main Slide Presentation Stage */}
          <div 
            className="relative rounded-2xl overflow-hidden border border-[#334546] shadow-2xl bg-black/80 group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {/* Top Bar: Story Progress Bar (2s per slide) */}
            <div className="absolute top-0 inset-x-0 z-30 p-3 sm:p-4 bg-gradient-to-b from-black/90 via-black/50 to-transparent">
              {/* 2-Second Segmented Progress Bars */}
              <div className="flex items-center gap-1.5 mb-3">
                {photos.map((_, idx) => {
                  const isPast = idx < activePhotoIndex;
                  const isCurrent = idx === activePhotoIndex;
                  return (
                    <div
                      key={idx}
                      onClick={() => handleSelectPhoto(idx)}
                      className="h-1.5 flex-1 bg-white/20 rounded-full overflow-hidden cursor-pointer relative hover:h-2 transition-all"
                      title={`Chuyển đến Slide ${idx + 1}`}
                    >
                      {isPast && <div className="h-full w-full bg-[#5BEA68] rounded-full" />}
                      {isCurrent && (
                        <div
                          key={`current-${activePhotoIndex}-${isPaused}`}
                          className={`h-full bg-[#5BEA68] rounded-full ${
                            isPaused ? 'w-full' : 'animate-progress-2s'
                          }`}
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Top Controls Row */}
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="bg-[#24B7AB] text-white text-[11px] sm:text-xs font-bold px-3 py-1 rounded-md shadow-sm">
                    {activePhoto.tag || activeTrip.tag}
                  </span>
                  <span className="bg-black/60 backdrop-blur-md text-[#5BEA68] text-[11px] font-mono font-bold px-2.5 py-1 rounded-md border border-white/20">
                    Slide {activePhotoIndex + 1} / {photos.length}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Auto-run Toggle Button */}
                  <button
                    onClick={() => setIsPaused(!isPaused)}
                    className="inline-flex items-center gap-1.5 bg-black/60 hover:bg-black/80 backdrop-blur-md text-[#5BEA68] text-[11px] font-bold px-2.5 py-1 rounded-md border border-[#5BEA68]/30 transition-all cursor-pointer"
                    title={isPaused ? "Bấm để tiếp tục tự chạy 2s" : "Bấm để tạm dừng"}
                  >
                    {isPaused ? (
                      <>
                        <Play className="w-3 h-3 text-[#5BEA68] fill-[#5BEA68]" />
                        <span>Tạm dừng (Bấm để phát)</span>
                      </>
                    ) : (
                      <>
                        <span className="w-2 h-2 rounded-full bg-[#5BEA68] animate-pulse" />
                        <span>Tự chạy 2s</span>
                      </>
                    )}
                  </button>

                  {/* Zoom Lightbox Trigger */}
                  <button
                    onClick={() => setIsLightboxOpen(true)}
                    className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-md border border-white/20 transition-all"
                  >
                    <ZoomIn className="w-3.5 h-3.5 text-[#5BEA68]" />
                    <span className="hidden sm:inline">Phóng to</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Slide Image Stage (Cinematic Aspect Ratio) */}
            <div 
              className="w-full h-[320px] sm:h-[460px] md:h-[520px] lg:h-[580px] relative overflow-hidden cursor-pointer"
              onClick={() => setIsLightboxOpen(true)}
            >
              <img
                key={activePhoto.url}
                src={activePhoto.url}
                alt={activePhoto.caption || activeTrip.title}
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-102"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/30 pointer-events-none" />

              {/* Prev / Next Buttons */}
              {photos.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-black/60 hover:bg-[#24B7AB] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all shadow-xl z-20 hover:scale-105"
                    aria-label="Slide trước"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-black/60 hover:bg-[#24B7AB] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all shadow-xl z-20 hover:scale-105"
                    aria-label="Slide kế tiếp"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Bottom Caption on Slide */}
              <div className="absolute bottom-3 inset-x-3 sm:bottom-5 sm:inset-x-6 p-4 sm:p-5 rounded-2xl bg-black/80 backdrop-blur-md border border-white/20 z-20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-[#24B7AB]/30 border border-[#24B7AB]/40 text-[#5BEA68] text-[10px] font-bold uppercase tracking-wider">
                        {activePhoto.tag || activeTrip.tag}
                      </span>
                      <span className="text-xs text-white/70">
                        {activeTrip.destination} • {activeTrip.time}
                      </span>
                    </div>
                    <h4 className="font-bold text-sm sm:text-base md:text-lg text-white leading-snug flex items-center gap-2">
                      <Heart className="w-4 h-4 text-rose-500 fill-rose-500 shrink-0" />
                      <span>{activePhoto.caption}</span>
                    </h4>
                  </div>
                  <div className="shrink-0 flex items-center gap-2 pt-1 sm:pt-0">
                    <span className="text-xs font-mono font-bold text-[#5BEA68] px-3 py-1 rounded-lg bg-white/10 border border-white/15">
                      Slide #{activePhotoIndex + 1}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= SẮP XẾP ẢNH DẠNG CUỘN VIDEO TỰ CHẠY SAU 2 GIÂY ================= */}
          <div className="space-y-2.5 pt-2">
            <div className="flex items-center justify-between text-xs text-[#AABAB7] px-1">
              <div className="flex items-center gap-2">
                <Film className="w-4 h-4 text-[#5BEA68]" />
                <span className="font-bold text-white uppercase tracking-wider text-xs sm:text-sm">
                  CUỘN VIDEO REEL CÁC ẢNH HÀNH TRÌNH ({photos.length} ẢNH • TỰ CUỘN MỖI 2 GIÂY)
                </span>
              </div>
              <span className="text-[11px] text-[#AABAB7] hidden sm:inline">
                Bấm vào slide bất kỳ để chuyển nhanh
              </span>
            </div>

            {/* Horizontal Video Reel Track (Auto-scrolling every 2 seconds) */}
            <div
              ref={reelRef}
              className="flex gap-3 sm:gap-4 overflow-x-auto py-2 px-1 snap-x snap-mandatory no-scrollbar scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {photos.map((photo, idx) => {
                const isActive = idx === activePhotoIndex;
                return (
                  <button
                    key={photo.url}
                    onClick={() => handleSelectPhoto(idx)}
                    className={`reel-item shrink-0 w-[170px] sm:w-[210px] md:w-[240px] snap-start relative rounded-xl overflow-hidden aspect-[16/10] border transition-all duration-300 text-left cursor-pointer group/reel ${
                      isActive
                        ? 'border-[#5BEA68] ring-2 ring-[#5BEA68] scale-[1.03] shadow-xl shadow-[#5BEA68]/20 z-10'
                        : 'border-[#334546] bg-slate-900/60 opacity-75 hover:opacity-100 hover:border-[#24B7AB]'
                    }`}
                  >
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      className="w-full h-full object-cover group-hover/reel:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40 group-hover/reel:opacity-80 transition-opacity" />

                    {/* Top Tags on Reel Card */}
                    <div className="absolute top-2 inset-x-2 flex items-center justify-between text-[10px] z-10">
                      <span className={`px-1.5 py-0.5 rounded font-bold ${
                        isActive ? 'bg-[#5BEA68] text-[#162425]' : 'bg-black/70 text-white'
                      }`}>
                        Slide #{idx + 1}
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-black/60 text-[#5BEA68] font-mono flex items-center gap-1 border border-white/10">
                        <Play className="w-2.5 h-2.5 fill-[#5BEA68]" />
                        2s
                      </span>
                    </div>

                    {/* Bottom Caption snippet */}
                    <div className="absolute bottom-2 inset-x-2 z-10">
                      <p className="text-[11px] font-semibold text-white/95 line-clamp-1 group-hover/reel:text-[#5BEA68] transition-colors">
                        {photo.caption}
                      </p>
                    </div>

                    {/* Active Pulse Border Overlay */}
                    {isActive && (
                      <div className="absolute inset-0 border-2 border-[#5BEA68] rounded-xl pointer-events-none" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ================= FULL-WIDTH TAKEAWAYS & QUOTE (KHÔNG PHÂN CHIA 2 CỘT) ================= */}
          {/* 4 Key Takeaway Highlights (Full-width 4 cols grid) */}
          <div className="pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {activeTrip.highlights.map((text, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-start gap-3 shadow-xs hover:border-[#24B7AB]/40"
                >
                  <span className="w-7 h-7 rounded-full bg-[#24B7AB]/20 text-[#5BEA68] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-[#24B7AB]/30">
                    <Check className="w-4 h-4 text-[#5BEA68]" />
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white/95 leading-snug">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Heartfelt Quote Banner (Full-width) */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#128A83]/30 via-[#24B7AB]/15 to-[#172223] border-l-4 border-[#5BEA68] border-y border-r border-white/10 space-y-3 relative shadow-lg">
            <Quote className="w-8 h-8 text-[#5BEA68]/30 absolute top-4 right-4 pointer-events-none" />
            <div className="text-xs sm:text-sm font-bold text-[#5BEA68] uppercase tracking-wider flex items-center gap-2">
              <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
              <span>CHIA SẺ TỪ TÂM DƯỢC SĨ:</span>
            </div>
            <p className="text-sm sm:text-base italic text-white/95 leading-relaxed max-w-4xl">
              "{activeTrip.quote}"
            </p>
            <div className="pt-1 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-white/80 border-t border-white/10">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#24B7AB]" />
                <span className="text-white font-medium">Đồng hành cùng Đại gia đình Y Dược Online AmHapy</span>
              </div>
              <div className="font-bold text-[#5BEA68]">
                — Dược sĩ Diễm Phúc • Nhà Thuốc Minh Khôi
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal with Full-Screen Navigation */}
      {isLightboxOpen && (
        <div
          id="travel-trip-lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md animate-fade-in"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[94vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Counter and Close Button */}
            <div className="w-full flex items-center justify-between text-white pb-3 px-1">
              <div className="flex items-center gap-2">
                <span className="bg-[#24B7AB] text-white text-xs font-bold px-2.5 py-1 rounded-md">
                  {activePhoto.tag || activeTrip.tag}
                </span>
                <span className="text-xs text-[#AABAB7] font-mono">
                  {activeTrip.destination} ({activeTrip.time}) • Slide {activePhotoIndex + 1}/{photos.length}
                </span>
              </div>

              <button
                onClick={() => setIsLightboxOpen(false)}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors shadow-lg cursor-pointer"
                aria-label="Đóng phóng to"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Lightbox Image Viewport with Nav Arrows */}
            <div className="w-full relative flex items-center justify-center overflow-hidden rounded-2xl max-h-[72vh] bg-black/60 border border-white/10">
              <img
                src={activePhoto.url}
                alt={activePhoto.caption}
                className="max-h-[72vh] w-auto max-w-full object-contain rounded-xl shadow-2xl transition-all duration-300"
              />

              {photos.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 hover:bg-[#24B7AB] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all shadow-xl cursor-pointer"
                    aria-label="Ảnh trước"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 hover:bg-[#24B7AB] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all shadow-xl cursor-pointer"
                    aria-label="Ảnh kế tiếp"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Bottom Caption and Mini Thumbnails Strip */}
            <div className="w-full mt-3 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#D5E4E1] text-[#162425] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-[#24B7AB] text-white text-[10px] font-bold">
                    {activePhoto.tag || activeTrip.tag}
                  </span>
                  <span className="text-xs font-semibold text-gray-500">
                    📍 {activeTrip.destination} • {activeTrip.time}
                  </span>
                </div>
                <h4 className="font-bold text-sm sm:text-base text-[#162425]">
                  {activePhoto.caption}
                </h4>
              </div>

              {/* Thumbnails in Lightbox */}
              <div className="flex items-center gap-2 shrink-0 overflow-x-auto max-w-xs py-1">
                {photos.map((p, idx) => (
                  <button
                    key={p.url}
                    onClick={() => setActivePhotoIndex(idx)}
                    className={`w-12 h-9 rounded-lg overflow-hidden border shrink-0 transition-all cursor-pointer ${
                      idx === activePhotoIndex
                        ? 'border-[#24B7AB] ring-2 ring-[#24B7AB]'
                        : 'border-gray-300 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={p.url} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
