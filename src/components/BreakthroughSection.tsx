import React from 'react';
import { Lightbulb, Rocket, Sparkles, CheckCircle2, DollarSign } from 'lucide-react';
import { LEARNING_ITEMS, IMAGES } from '../data/content';
import { HealthTechCoursesGallery } from './HealthTechCoursesGallery';

export const BreakthroughSection: React.FC = () => {
  const missingElements = [
    'TƯ DUY ĐỔI MỚI',
    'CHIẾN LƯỢC TOÀN DIỆN',
    'CÔNG NGHỆ & AI',
    'CÔNG CỤ TẦM SOÁT',
    'HỆ THỐNG VẬN HÀNH',
    'NGƯỜI DẪN ĐƯỜNG',
    'CỘNG ĐỒNG CÙNG TIẾN',
  ];

  return (
    <section
      id="buoc-ngoat"
      className="py-20 sm:py-28 bg-[#172223] text-white relative overflow-hidden"
    >
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#24B7AB]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#5BEA68]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Eyebrow */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#24B7AB]/20 border border-[#24B7AB]/40 text-[#5BEA68] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#5BEA68]" />
            SECTION 03 • BƯỚC NGOẶT ĐỘT PHÁ
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            THỨ TÔI THIẾU <span className="text-[#24B7AB]">KHÔNG PHẢI CHUYÊN MÔN</span>
          </h2>
          <p className="text-base sm:text-lg text-[#AABAB7] max-w-2xl mx-auto">
            Hành trình chuyển mình vượt qua lối mòn truyền thống để ứng dụng công nghệ y dược hiện đại.
          </p>
        </div>

        {/* Story Awakening Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left: Story text & What I lacked (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#203032] p-6 sm:p-8 rounded-2xl border border-[#334546] space-y-4">
              <div className="flex items-center gap-3 text-sm sm:text-base font-semibold text-[#5BEA68]">
                <Lightbulb className="w-5 h-5" />
                <span>Bước ngoặt định mệnh năm 2025</span>
              </div>
              <p className="text-base sm:text-lg text-[#AABAB7] leading-relaxed">
                Năm 2025, tôi tham gia chương trình <strong className="text-white">“Xóa mù vi tính”</strong> của cộng đồng <strong>Y Dược Online CaniCoach</strong>.
              </p>
              <div className="pt-2">
                <p className="text-xs uppercase tracking-widest text-[#5BEA68] font-black flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#5BEA68]" />
                  <span>KHOẢNH KHẮC THỰC SỰ BỪNG TỈNH:</span>
                </p>
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#172223] via-[#128A83]/30 to-[#172223] border-2 border-[#5BEA68] shadow-lg shadow-[#5BEA68]/15 mt-2">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#5BEA68] to-[#24B7AB] tracking-wide block">
                    “ĐÂY CHÍNH LÀ THỨ MÌNH ĐANG THIẾU!”
                  </span>
                </div>
              </div>
            </div>

            {/* What I was missing: Tags grid */}
            <div className="space-y-3">
              <p className="text-sm font-extrabold uppercase tracking-wider text-white">
                Tôi <span className="text-red-400 underline decoration-red-400">không hề thiếu</span> thêm một khóa học chuyên môn lý thuyết. Thứ tôi thực sự thiếu là:
              </p>
              <div className="flex flex-wrap gap-2.5">
                {missingElements.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#24B7AB]/15 hover:bg-[#24B7AB] text-white font-extrabold text-xs sm:text-sm border border-[#24B7AB]/50 transition-all duration-200 shadow-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#5BEA68]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Decision 15 Million */}
            <div className="p-6 rounded-2xl bg-[#203032] border border-[#24B7AB]/30 space-y-3">
              <div className="flex items-center gap-2 text-[#5BEA68] font-bold text-base">
                <DollarSign className="w-5 h-5" />
                <span>QUYẾT ĐỊNH ĐẦU TƯ VÀO VIPCOACH ĐỂ CHUYỂN ĐỔI</span>
              </div>
              <p className="text-base sm:text-lg text-[#AABAB7] leading-relaxed">
                Đó không phải một quyết định nhỏ. Nhưng tôi nhận ra một chân lý sâu sắc:
              </p>
              <blockquote className="p-4 sm:p-5 rounded-xl bg-[#128A83]/20 border-l-4 border-[#5BEA68] text-base sm:text-lg font-semibold text-white leading-relaxed">
                “Chi phí cho việc học một con đường mới có thể <mark className="bg-[#5BEA68]/20 text-[#5BEA68] font-black px-2 py-0.5 rounded border border-[#5BEA68]/30">nhỏ hơn rất nhiều</mark> so với <mark className="bg-red-500/25 text-red-300 font-black px-2 py-0.5 rounded border border-red-500/40">cái giá phải trả</mark> khi tiếp tục đi theo một mô hình không còn phù hợp.”
              </blockquote>
            </div>
          </div>

          {/* Right: Real Learning Image with VIPCoach/CaniCoach (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#334546] group">
              <img
                src={IMAGES.learning}
                alt="Dược sĩ Diễm Phúc tham gia học tập cùng cộng đồng VIPCoach"
                className="w-full h-auto object-cover max-h-[460px] group-hover:scale-102 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1516] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-[#172223]/90 backdrop-blur-md border border-[#334546] text-center">
                <div className="text-xs text-[#5BEA68] font-bold uppercase tracking-wider">
                  Chuyển hóa tư duy
                </div>
                <div className="text-sm font-bold text-white">
                  Học tập thực chiến cùng Ban huấn luyện và đồng nghiệp
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* "Tôi bắt đầu học lại từ đầu" Grid */}
        <div className="bg-[#203032] rounded-2xl p-6 sm:p-10 border border-[#334546]">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#5BEA68] uppercase tracking-wider">
              <Rocket className="w-4 h-4" />
              LÀM CHỦ CÔNG CỤ HIỆN ĐẠI
            </div>
            <h3 className="text-xl sm:text-3xl font-extrabold text-white">
              Tôi bắt đầu học lại từ đầu
            </h3>
            <p className="text-xs sm:text-sm text-[#AABAB7]">
              Không ngại ngần trước công nghệ, tôi tiếp cận từng công cụ với tâm thế của một học viên chăm chỉ:
            </p>
          </div>

          {/* 11 Icon Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {LEARNING_ITEMS.map((item) => (
              <div
                key={item.id}
                className="bg-white/5 hover:bg-white/10 p-4 rounded-xl border border-white/10 hover:border-[#24B7AB]/50 transition-all text-center group cursor-default"
              >
                <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="text-sm font-bold text-white group-hover:text-[#5BEA68] transition-colors leading-snug">
                  {item.name}
                </div>
                <div className="text-[11px] text-[#AABAB7]/80 mt-1 leading-tight line-clamp-2">
                  {item.description}
                </div>
              </div>
            ))}
          </div>

          {/* Section punchline message */}
          <div className="mt-8 text-center pt-6 border-t border-white/10">
            <div className="inline-block px-6 py-3 rounded-xl bg-[#24B7AB] hover:bg-[#128A83] text-white font-extrabold text-base sm:text-xl tracking-wide shadow-md transition-all">
              ⚡ “TÔI KHÔNG HỌC ĐỂ BIẾT. TÔI HỌC ĐỂ LÀM.”
            </div>
          </div>
        </div>

        {/* 2025 HEALTH-TECH DIAGNOSTIC COURSES (HANOI & SAIGON) */}
        <HealthTechCoursesGallery />
      </div>
    </section>
  );
};
