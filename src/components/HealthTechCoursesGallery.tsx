import React, { useState, useEffect } from 'react';
import { Sparkles, ZoomIn, X, ChevronLeft, ChevronRight, MapPin, Activity, CheckCircle2, Award, Stethoscope, GraduationCap } from 'lucide-react';
import { HEALTH_TECH_COURSES_DATA } from '../data/content';
import { HealthTechCourseItem } from '../types';

export const HealthTechCoursesGallery: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<HealthTechCourseItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedCourse) return;
      if (e.key === 'Escape') {
        setSelectedCourse(null);
      } else if (e.key === 'ArrowRight') {
        navigateLightbox(1);
      } else if (e.key === 'ArrowLeft') {
        navigateLightbox(-1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCourse]);

  const navigateLightbox = (direction: number) => {
    if (!selectedCourse) return;
    const currentIndex = HEALTH_TECH_COURSES_DATA.findIndex((item) => item.id === selectedCourse.id);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + direction + HEALTH_TECH_COURSES_DATA.length) % HEALTH_TECH_COURSES_DATA.length;
    setSelectedCourse(HEALTH_TECH_COURSES_DATA[nextIndex]);
  };

  const filteredData = activeFilter === 'all'
    ? HEALTH_TECH_COURSES_DATA
    : HEALTH_TECH_COURSES_DATA.filter((item) => {
        if (activeFilter === 'k02-ai') return item.id.includes('k02') || item.title.includes('K02') || item.title.includes('Dược Sĩ');
        if (activeFilter === 'yhct') return item.id.includes('yhct');
        if (activeFilter === '45-chi-so') return item.id.includes('45');
        if (activeFilter === 'soi-vi-mach') return item.id.includes('capillary') || item.id.includes('soi');
        if (activeFilter === 'online') return item.id.includes('online') || item.location.toLowerCase().includes('zoom');
        return true;
      });

  return (
    <div id="khoa-hoc-cong-nghe-y-te" className="mt-14 pt-12 border-t border-white/15">
      {/* Header Banner */}
      <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#24B7AB]/20 text-[#5BEA68] text-xs font-bold uppercase tracking-wider border border-[#24B7AB]/40 backdrop-blur-sm">
          <Activity className="w-4 h-4 text-[#5BEA68]" />
          TIÊN PHONG ĐÀO TẠO • HỌC CÙNG DƯỢC SĨ • Y HỌC CỔ TRUYỀN & CÔNG NGHỆ (2025)
        </div>
        <h3 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
          CÁC KHÓA HỌC THỰC CHIẾN CÙNG CÁC DƯỢC SĨ ĐỐI TÁC
        </h3>
        <p className="text-xs sm:text-sm text-[#AABAB7] max-w-2xl mx-auto leading-relaxed">
          Dược sĩ Diễm Phúc luôn chủ động học hỏi và đồng hành cùng các đồng nghiệp: từ <strong>Khóa học K02: Xóa mù AI cùng các Dược sĩ</strong>, lớp chuyên sâu <strong>Y học cổ truyền cùng đội ngũ Y Dược AmHapy</strong>, đến các khóa thực hành đo 45 chỉ số và máy soi vi tuần hoàn mao mạch tại <strong>Sài Gòn</strong> và <strong>Khóa K04 trực tuyến qua Zoom</strong>.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2.5 flex-wrap mb-8">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeFilter === 'all'
              ? 'bg-[#24B7AB] text-white shadow-sm'
              : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
          }`}
        >
          Tất cả khóa học ({HEALTH_TECH_COURSES_DATA.length})
        </button>
        <button
          onClick={() => setActiveFilter('k02-ai')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeFilter === 'k02-ai'
              ? 'bg-[#24B7AB] text-white shadow-sm'
              : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
          }`}
        >
          Khóa K02: Xóa mù AI cùng Dược sĩ
        </button>
        <button
          onClick={() => setActiveFilter('online')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeFilter === 'online'
              ? 'bg-[#24B7AB] text-white shadow-sm'
              : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
          }`}
        >
          Khóa K04 Online qua Zoom
        </button>
        <button
          onClick={() => setActiveFilter('yhct')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeFilter === 'yhct'
              ? 'bg-[#24B7AB] text-white shadow-sm'
              : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
          }`}
        >
          Lớp Y học cổ truyền AmHapy
        </button>
        <button
          onClick={() => setActiveFilter('45-chi-so')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeFilter === '45-chi-so'
              ? 'bg-[#24B7AB] text-white shadow-sm'
              : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
          }`}
        >
          Máy đo 45 chỉ số sinh học
        </button>
        <button
          onClick={() => setActiveFilter('soi-vi-mach')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeFilter === 'soi-vi-mach'
              ? 'bg-[#24B7AB] text-white shadow-sm'
              : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
          }`}
        >
          Máy soi vi tuần hoàn mao mạch
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedCourse(item)}
            className="group bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/15 hover:border-[#5BEA68] shadow-md transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] bg-black/30 overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#172223]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <div className="text-white text-xs font-semibold flex items-center gap-1.5 bg-[#24B7AB]/90 px-3 py-1 rounded-lg backdrop-blur-sm border border-white/20">
                  <ZoomIn className="w-3.5 h-3.5 text-white" />
                  <span>Phóng to ảnh khóa học</span>
                </div>
              </div>

              {/* Location Badge */}
              <div className="absolute top-3 left-3 bg-[#172223]/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-md border border-white/20 shadow-xs flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#5BEA68]" />
                {item.location}
              </div>

              {/* Year & Badge */}
              <div className="absolute top-3 right-3 bg-[#128A83] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs uppercase tracking-wider">
                {item.badge}
              </div>
            </div>

            {/* Content Container */}
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <div className="text-[11px] font-bold text-[#5BEA68] uppercase tracking-wide flex items-center gap-1">
                  <Stethoscope className="w-3.5 h-3.5" />
                  {item.device}
                </div>
                <h4 className="font-bold text-sm sm:text-base text-white group-hover:text-[#5BEA68] transition-colors line-clamp-2 mt-1 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-[#AABAB7]/80 leading-relaxed mt-1.5 line-clamp-3">
                  {item.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="pt-3 border-t border-white/10 space-y-1">
                {item.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-[11px] font-semibold text-white/90">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5BEA68] shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Value Proposition Callout */}
      <div className="mt-8 p-4 sm:p-6 rounded-xl bg-white/5 border border-[#24B7AB]/30 text-center space-y-2">
        <div className="text-xs uppercase tracking-widest text-[#5BEA68] font-bold">
          GIÁ TRỊ KHÁC BIỆT CHO KHÁCH HÀNG & BỆNH NHÂN
        </div>
        <p className="text-sm sm:text-base text-white font-semibold max-w-3xl mx-auto leading-relaxed">
          “Khi người bệnh nhìn thấy tận mắt hình thái mao mạch máu và 45 chỉ số cơ thể của chính mình qua máy móc đo lường khách quan, việc tư vấn giải pháp sức khỏe không còn là thuyết phục, mà là <span className="text-[#5BEA68]">đồng hành thấu hiểu</span>.”
        </p>
      </div>

      {/* ================= LIGHTBOX MODAL ================= */}
      {selectedCourse && (
        <div
          id="health-tech-course-lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedCourse(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[92vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCourse(null)}
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
                src={selectedCourse.imageUrl}
                alt={selectedCourse.title}
                className="max-h-[72vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
              />
            </div>

            {/* Bottom Caption Bar */}
            <div className="w-full mt-3 p-4 rounded-xl bg-white text-[#162425] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xl">
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#24B7AB] text-white font-bold text-xs flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {selectedCourse.location}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-[#128A83] text-white font-bold text-xs">
                    {selectedCourse.badge}
                  </span>
                  <span className="text-xs font-bold text-[#5A6F6C]">
                    {selectedCourse.device}
                  </span>
                </div>
                <h4 className="font-extrabold text-sm sm:text-base text-[#162425]">
                  {selectedCourse.title}
                </h4>
                <p className="text-xs text-[#5A6F6C]">
                  {selectedCourse.description}
                </p>
              </div>

              <div className="shrink-0 text-xs font-bold text-[#24B7AB]">
                Dược sĩ Diễm Phúc • 2025
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
