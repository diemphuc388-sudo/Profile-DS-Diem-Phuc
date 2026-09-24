import React, { useState, useEffect, useCallback } from 'react';
import { 
  MapPin, 
  Calendar, 
  Heart, 
  Users, 
  Compass, 
  Sparkles, 
  ZoomIn, 
  X, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Camera, 
  Plane,
  Globe2,
  Check
} from 'lucide-react';
import { TRAVEL_TRIPS_DATA } from '../data/content';
import { TravelTripItem } from '../types';

export const SapaTripHighlight: React.FC = () => {
  const [selectedTripId, setSelectedTripId] = useState<string>('chongqing-trip-2026');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  // Current active trip
  const activeTrip: TravelTripItem = TRAVEL_TRIPS_DATA.find((t) => t.id === selectedTripId) || TRAVEL_TRIPS_DATA[0];
  const photos = activeTrip.images || [];

  // Reset photo index when trip switches
  const handleSelectTrip = (tripId: string) => {
    setSelectedTripId(tripId);
    setActivePhotoIndex(0);
  };

  const handlePrev = useCallback(() => {
    setActivePhotoIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  }, [photos.length]);

  const handleNext = useCallback(() => {
    setActivePhotoIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  }, [photos.length]);

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
      <div className="bg-gradient-to-br from-[#172223] via-[#1E2E2F] to-[#121B1C] rounded-3xl p-6 sm:p-10 border border-[#24B7AB]/30 shadow-xl relative overflow-hidden text-white">
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

                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md shrink-0 ${
                    isSelected ? 'bg-[#5BEA68] text-[#162425]' : 'bg-white/10 text-white/80'
                  }`}>
                    {isSelected ? 'Đang xem' : 'Bấm xem'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Heading & Intro */}
        <div className="relative z-10 max-w-3xl space-y-3 mb-8">
          <div className="flex items-center gap-2 text-[#5BEA68] text-xs font-bold uppercase tracking-wider">
            <Plane className="w-4 h-4" />
            <span>{activeTrip.badge}</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            {activeTrip.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#AABAB7] leading-relaxed">
            {activeTrip.description}
          </p>
        </div>

        {/* Main Grid: Interactive Photo Showcase (7 cols) + Story & Highlights (5 cols) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Featured Image Box & Thumbnails (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Primary Featured Viewport */}
            <div className="relative rounded-2xl overflow-hidden border border-[#334546] shadow-2xl bg-slate-900 group">
              <div
                className="aspect-[16/10] sm:aspect-[16/9] w-full relative overflow-hidden cursor-pointer"
                onClick={() => setIsLightboxOpen(true)}
              >
                <img
                  key={activePhoto.url}
                  src={activePhoto.url}
                  alt={activePhoto.caption || activeTrip.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-103"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badges */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2 z-10">
                  <span className="bg-[#24B7AB] text-white text-[11px] font-bold px-3 py-1 rounded-md shadow-sm">
                    {activePhoto.tag || activeTrip.tag}
                  </span>
                  <span className="bg-black/60 backdrop-blur-md text-[#5BEA68] text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border border-white/20">
                    Ảnh {activePhotoIndex + 1} / {photos.length}
                  </span>
                </div>

                {/* Center Hover Zoom Prompt */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                  <div className="bg-[#128A83]/90 text-white font-bold text-xs sm:text-sm px-4 py-2 rounded-xl backdrop-blur-md flex items-center gap-2 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <ZoomIn className="w-4 h-4" />
                    <span>Bấm phóng to chi tiết</span>
                  </div>
                </div>

                {/* Bottom Caption on Image */}
                <div className="absolute bottom-3 inset-x-3 sm:bottom-4 sm:inset-x-4 p-3 sm:p-3.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/15 z-10">
                  <div className="flex items-center justify-between text-xs text-white/90 gap-2">
                    <span className="font-bold flex items-center gap-1.5 text-[#5BEA68] line-clamp-1">
                      <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 shrink-0" />
                      {activePhoto.caption}
                    </span>
                    <span className="text-[11px] text-white/70 shrink-0">{activeTrip.destination} • {activeTrip.time}</span>
                  </div>
                </div>
              </div>

              {/* Prev / Next Buttons on Featured Viewport */}
              {photos.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-[#24B7AB] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all opacity-80 group-hover:opacity-100 z-20"
                    aria-label="Ảnh trước"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-[#24B7AB] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all opacity-80 group-hover:opacity-100 z-20"
                    aria-label="Ảnh kế tiếp"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails Gallery Strip */}
            <div className={`grid gap-2.5 ${photos.length > 4 ? 'grid-cols-3 sm:grid-cols-5' : 'grid-cols-3 sm:grid-cols-4'}`}>
              {photos.map((photo, idx) => {
                const isActive = idx === activePhotoIndex;
                return (
                  <button
                    key={photo.url}
                    onClick={() => setActivePhotoIndex(idx)}
                    className={`relative rounded-xl overflow-hidden aspect-[4/3] border transition-all group/thumb text-left ${
                      isActive
                        ? 'border-[#5BEA68] ring-2 ring-[#5BEA68]/80 shadow-lg scale-102'
                        : 'border-[#334546] opacity-70 hover:opacity-100 hover:border-[#24B7AB]'
                    }`}
                  >
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover/thumb:bg-black/10 transition-colors" />
                    
                    {/* Active Indicator Badge */}
                    <div className="absolute top-1.5 left-1.5">
                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                        isActive ? 'bg-[#5BEA68] text-[#162425]' : 'bg-black/70 text-white'
                      }`}>
                        #{idx + 1}
                      </span>
                    </div>

                    {isActive && (
                      <div className="absolute inset-0 border-2 border-[#5BEA68] rounded-xl pointer-events-none" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Hint & Navigation status */}
            <div className="flex items-center justify-between text-xs text-[#AABAB7] px-1">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#5BEA68]" />
                Bấm từng ảnh nhỏ để đổi ảnh, hoặc bấm ảnh lớn để phóng to toàn màn hình.
              </span>
              <span className="font-mono text-[11px] text-[#24B7AB]">
                {activePhotoIndex + 1} / {photos.length}
              </span>
            </div>
          </div>

          {/* Right: Highlights & Personal Story (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* 4 Key Takeaway Highlights */}
            <div className="space-y-2.5">
              {activeTrip.highlights.map((text, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-[#24B7AB]/20 text-[#5BEA68] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-[#24B7AB]/30">
                    <Check className="w-3.5 h-3.5 text-[#5BEA68]" />
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white/95 leading-snug">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Heartfelt Quote Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#128A83]/25 to-[#24B7AB]/10 border-l-4 border-[#5BEA68] border-y border-r border-white/10 space-y-2.5 relative">
              <Quote className="w-6 h-6 text-[#5BEA68]/40 absolute top-3 right-3 pointer-events-none" />
              <div className="text-xs font-bold text-[#5BEA68] uppercase tracking-wider flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
                <span>CHIA SẺ TỪ TÂM DƯỢC SĨ:</span>
              </div>
              <p className="text-xs sm:text-sm italic text-white/90 leading-relaxed">
                {activeTrip.quote}
              </p>
              <div className="pt-2 text-right text-xs font-bold text-white">
                — Dược sĩ Diễm Phúc • Nhà Thuốc Minh Khôi
              </div>
            </div>

            {/* Community Connection Box */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs text-[#AABAB7]">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#24B7AB]" />
                <span className="text-white font-medium">Đồng hành cùng Y Dược Online AmHapy</span>
              </div>
              <span className="text-[#5BEA68] font-bold">{activeTrip.destination} • {activeTrip.time}</span>
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
                  {activeTrip.destination} ({activeTrip.time}) • Ảnh {activePhotoIndex + 1}/{photos.length}
                </span>
              </div>

              <button
                onClick={() => setIsLightboxOpen(false)}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors shadow-lg"
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
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 hover:bg-[#24B7AB] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all shadow-xl"
                    aria-label="Ảnh trước"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 hover:bg-[#24B7AB] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all shadow-xl"
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
                    className={`w-12 h-9 rounded-lg overflow-hidden border shrink-0 transition-all ${
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
