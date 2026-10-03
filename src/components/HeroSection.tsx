import React from 'react';
import { Phone, ArrowDown, Sparkles, CheckCircle2, MessageSquare, Quote, Cpu } from 'lucide-react';
import { CONTACT_INFO, IMAGES } from '../data/content';

interface HeroSectionProps {
  onOpenGift: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenGift }) => {
  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 bg-gradient-to-b from-[#F2F8F6] via-white to-[#F2F8F6]/40 overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#24B7AB]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#5BEA68]/10 rounded-full blur-3xl pointer-events-none -ml-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Story Copy & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2F8F6] border border-[#D5E4E1] text-[#128A83] text-xs sm:text-sm font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#24B7AB]" />
                <span>TÔI LÀ DƯỢC SĨ DIỄM PHÚC</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#24B7AB]/30 shadow-xs">
                <img
                  src={IMAGES.pharmacyLogo}
                  alt="Logo Nhà thuốc Minh Khôi"
                  className="w-5 h-5 object-contain"
                />
                <span className="text-xs font-bold text-[#162425]">Nhà Thuốc Minh Khôi</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#162425] leading-[1.3] tracking-tight">
              <span>Tôi không sinh ra để làm công nghệ.</span>{' '}
              <span className="block mt-2 sm:mt-2.5">
                Tôi chỉ là một dược sĩ không muốn mình và đồng nghiệp{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#128A83] to-[#24B7AB] font-black underline decoration-[#5BEA68] decoration-4 underline-offset-8">
                  bị bỏ lại phía sau
                </span>{' '}
                trong thời đại mới.
              </span>
            </h1>

            {/* Subheadline & Context */}
            <div className="space-y-4 text-base sm:text-lg text-[#5A6F6C] leading-relaxed">
              <p className="font-semibold text-[#162425] text-lg sm:text-xl border-l-4 border-[#24B7AB] pl-3.5 py-0.5">
                Tôi tin rằng tương lai của nhà thuốc <span className="text-rose-600 font-extrabold underline decoration-rose-300">không thể dừng lại</span> ở việc chỉ bán thuốc cắt liều đơn thuần.
              </p>
              <div className="p-4 sm:p-5 rounded-2xl bg-white border-2 border-[#24B7AB]/30 shadow-sm text-sm sm:text-base text-[#162425] space-y-2">
                <div className="text-xs uppercase font-extrabold tracking-wider text-[#128A83] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#24B7AB]" />
                  <span>CÔNG THỨC CHUYỂN MÌNH THỰC CHIẾN:</span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs sm:text-sm font-bold">
                  <span className="px-3 py-1 rounded-lg bg-[#E8FBF0] text-[#128A83] border border-[#24B7AB]/30">
                    🔬 Chuyên môn Dược Lâm Sàng
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-[#E8FBF0] text-[#128A83] border border-[#24B7AB]/30">
                    🌿 Chăm sóc Sức Khỏe Chủ Động
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-[#172223] text-[#5BEA68]">
                    ⚡ Đột phá Công nghệ & AI
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-[#24B7AB]/15 text-[#162425] border border-[#24B7AB]/40">
                    💎 Combo Liệu Trình Giá Trị Cao
                  </span>
                </div>
              </div>
              <p className="text-sm sm:text-base text-[#5A6F6C] leading-relaxed">
                Hiện nay tôi đang trực tiếp vận hành <strong className="text-[#162425] font-extrabold">Nhà Thuốc Minh Khôi</strong>, đồng hành xây dựng cộng đồng <strong className="text-[#128A83] font-extrabold">Y Dược Online CaniCoach – AmHapy</strong> với <span className="text-[#24B7AB] font-black underline decoration-[#5BEA68] decoration-2">hơn 20+ Dược sĩ đối tác</span> cùng phát triển mô hình kinh doanh số tinh gọn.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                id="hero-cta-primary"
                href="#ket-noi"
                className="inline-flex items-center justify-center gap-2 bg-[#24B7AB] hover:bg-[#128A83] text-white px-7 py-4 rounded-xl text-base font-bold shadow-md shadow-[#24B7AB]/20 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5 text-white" />
                <span>KẾT NỐI CÙNG DIỄM PHÚC</span>
              </a>

              <a
                id="hero-cta-secondary"
                href="#hanh-trinh"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F2F8F6] text-[#162425] px-6 py-4 rounded-xl text-base font-bold border border-[#D5E4E1] hover:border-[#24B7AB] shadow-xs transition-all"
              >
                <span>KHÁM PHÁ HÀNH TRÌNH</span>
                <ArrowDown className="w-4 h-4 text-[#24B7AB]" />
              </a>
            </div>

            {/* Direct Contact Hotline Info */}
            <div className="flex flex-wrap items-center gap-4 pt-1 text-sm font-semibold text-[#162425]">
              <div className="flex items-center gap-2 bg-[#F2F8F6] px-3.5 py-2 rounded-xl border border-[#D5E4E1]">
                <Phone className="w-4 h-4 text-[#24B7AB]" />
                <span className="text-[#5A6F6C]">Hotline/Zalo:</span>
                <a href={CONTACT_INFO.telUrl} className="font-extrabold text-[#24B7AB] hover:underline font-mono text-base">
                  {CONTACT_INFO.phoneDisplay}
                </a>
              </div>
              <button
                onClick={onOpenGift}
                className="inline-flex items-center gap-1.5 text-xs text-[#128A83] font-bold hover:underline"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#5BEA68]" />
                Nhận bộ cẩm nang quà tặng AI Dược sĩ
              </button>
            </div>
          </div>

          {/* Right Column: Portrait Photo & 3 Floating Statistic Cards (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Ambient Back Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#24B7AB]/15 via-[#5BEA68]/10 to-transparent rounded-2xl blur-xl transform rotate-2 scale-95" />

            {/* Main Portrait Frame */}
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-lg border-2 border-[#D5E4E1] bg-white group">
              <img
                src={IMAGES.hero}
                alt="Chân dung Dược sĩ Diễm Phúc – Nhà sáng lập Nhà Thuốc Minh Khôi"
                className="w-full h-auto object-cover object-top max-h-[520px] transition-transform duration-700 group-hover:scale-102"
                loading="eager"
              />

              {/* Photo Overlay Badge */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#172223]/95 via-[#172223]/75 to-transparent p-5 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white p-1 shrink-0 shadow-md border border-white/20">
                    <img
                      src={IMAGES.pharmacyLogo}
                      alt="Logo Nhà thuốc Minh Khôi"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-extrabold text-lg tracking-wide flex items-center gap-2">
                      Dược Sĩ Diễm Phúc
                      <CheckCircle2 className="w-4 h-4 text-[#5BEA68]" />
                    </div>
                    <p className="text-xs text-white/90 font-medium">
                      Đại học Y Dược TP.HCM • Sáng lập Nhà Thuốc Minh Khôi
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card 1: 20+ Dược Sĩ */}
            <div
              id="stat-card-20"
              className="absolute -top-4 -left-2 sm:-left-6 bg-white p-3.5 sm:p-4 rounded-xl shadow-md border border-[#D5E4E1] flex items-center gap-3 animate-fade-in hover:scale-105 transition-transform"
            >
              <div className="w-11 h-11 rounded-lg bg-[#F2F8F6] flex items-center justify-center text-[#24B7AB]">
                <span className="text-2xl font-black">20+</span>
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-[#162425] leading-tight">
                  Dược sĩ đang cùng
                </div>
                <div className="text-[11px] text-[#24B7AB] font-semibold">
                  học tập & chuyển đổi
                </div>
              </div>
            </div>

            {/* Floating Card 2: 100 Dược Sĩ Target */}
            <div
              id="stat-card-100"
              className="absolute top-1/2 -right-3 sm:-right-6 bg-white p-3.5 sm:p-4 rounded-xl shadow-md border border-[#D5E4E1] flex items-center gap-3 hover:scale-105 transition-transform"
            >
              <div className="w-11 h-11 rounded-lg bg-[#E8FBF0] flex items-center justify-center text-[#128A83]">
                <span className="text-2xl font-black">100</span>
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-[#162425] leading-tight">
                  Mục tiêu đồng hành
                </div>
                <div className="text-[11px] text-[#128A83] font-bold">
                  nhà thuốc hiện đại
                </div>
              </div>
            </div>

            {/* Floating Card 3: AI + Automation */}
            <div
              id="stat-card-ai"
              className="absolute -bottom-5 left-4 sm:left-8 bg-[#172223] text-white p-3.5 sm:p-4 rounded-xl shadow-lg border border-[#334546] flex items-center gap-3 hover:scale-105 transition-transform"
            >
              <div className="w-10 h-10 rounded-lg bg-[#24B7AB] flex items-center justify-center text-white">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xs font-extrabold text-[#5BEA68] tracking-wide">
                  CÔNG NGHỆ & AI
                </div>
                <div className="text-[11px] text-white/90 font-medium">
                  Ứng dụng thực chiến tại quầy thuốc
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Bottom Quote Box */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-[#D5E4E1]">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-[#D5E4E1] relative">
            <Quote className="w-10 h-10 text-[#24B7AB]/15 absolute top-4 left-4 pointer-events-none" />
            <blockquote className="text-base sm:text-xl font-bold text-[#162425] text-center italic relative z-10 leading-relaxed px-4">
              “Tôi không muốn người dược sĩ chỉ giỏi chuyên môn đơn thuần. Tôi muốn chúng ta biết sử dụng công nghệ và tư duy hiện đại để làm nghề tốt hơn, phục vụ khách hàng tốt hơn và xây dựng một tương lai chủ động hơn.”
            </blockquote>
            <div className="mt-4 text-center">
              <span className="text-xs font-extrabold text-[#24B7AB] uppercase tracking-widest">
                — DƯỢC SĨ DIỄM PHÚC —
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
