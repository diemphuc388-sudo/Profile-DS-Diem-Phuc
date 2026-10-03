import React from 'react';
import { ArrowDown, Check, GraduationCap, Award, Building2, Package, Sparkles } from 'lucide-react';
import { TIMELINE_DATA, IMAGES } from '../data/content';
import { PharmacyHistoryGallery } from './PharmacyHistoryGallery';

export const TimelineSection: React.FC = () => {
  const getTimelineIcon = (year: string) => {
    switch (year) {
      case '2007':
        return <GraduationCap className="w-5 h-5 text-white" />;
      case '2012':
        return <Award className="w-5 h-5 text-white" />;
      case '2016':
        return <Building2 className="w-5 h-5 text-white" />;
      case '2019':
        return <Package className="w-5 h-5 text-white" />;
      default:
        return <Check className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="hanh-trinh" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2F8F6] border border-[#D5E4E1] text-[#128A83] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#24B7AB]" />
            SECTION 02 • CÂU CHUYỆN KHỞI NGUỒN
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#162425] tracking-tight">
            TÔI TỪNG NGHĨ: <span className="text-[#24B7AB]">CHỈ CẦN GIỎI CHUYÊN MÔN LÀ ĐỦ</span>
          </h2>
          <div className="p-5 rounded-xl bg-[#F2F8F6]/80 text-[#162425] text-base sm:text-lg leading-relaxed space-y-2 border border-[#D5E4E1]">
            <p>Tôi sinh năm 1988 trong một gia đình bình thường. Ba làm thợ mộc, mẹ làm nội trợ.</p>
            <p>Con đường tôi đi không bắt đầu bằng kinh doanh hay công nghệ hào nhoáng.</p>
            <p className="font-bold text-[#128A83]">
              Nó bắt đầu từ một lý tưởng y đức thuần túy: Trở thành một dược sĩ có chuyên môn vững vàng.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Visual Timeline (7 cols) */}
          <div className="lg:col-span-7 relative">
            {/* Timeline Line */}
            <div className="absolute top-4 bottom-4 left-6 sm:left-8 w-1 bg-gradient-to-b from-[#24B7AB] via-[#5BEA68] to-[#128A83] rounded-full" />

            <div className="space-y-8 relative">
              {TIMELINE_DATA.map((item) => (
                <div
                  key={item.year}
                  className="relative flex items-start gap-4 sm:gap-6 pl-2 sm:pl-3 group"
                >
                  {/* Timeline Badge */}
                  <div className="w-9 sm:w-11 h-9 sm:h-11 rounded-full bg-[#24B7AB] flex items-center justify-center shadow-sm shadow-[#24B7AB]/30 shrink-0 z-10 group-hover:scale-110 transition-transform">
                    {getTimelineIcon(item.year)}
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white group-hover:bg-[#F2F8F6]/60 p-5 sm:p-6 rounded-xl border border-[#D5E4E1] group-hover:border-[#24B7AB] shadow-xs group-hover:shadow-md transition-all">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-[#172223] text-white font-extrabold text-sm tracking-wider font-mono">
                        {item.year}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-[#162425]">
                        {item.title}
                      </h3>
                      {item.year === '2019' && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-[#24B7AB]/40 shadow-xs text-xs font-bold text-[#128A83]">
                          <img src={IMAGES.pharmacyLogo} alt="Logo Nhà thuốc Minh Khôi" className="w-4 h-4 object-contain" />
                          <span>Logo Minh Khôi</span>
                        </div>
                      )}
                    </div>

                    <p className="text-sm sm:text-base text-[#5A6F6C] leading-relaxed mb-3">
                      {item.description}
                    </p>

                    {item.details && item.details.length > 0 && (
                      <div className="space-y-1.5 pt-2 border-t border-[#D5E4E1]">
                        {item.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-[#128A83]">
                            <Check className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#5BEA68]" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Highlight Box + Story Image (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Story Image */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-[#D5E4E1] group">
              <img
                src={IMAGES.journey}
                alt="Dược sĩ Diễm Phúc – Quá trình học tập và tích lũy kinh nghiệm"
                className="w-full h-auto object-cover max-h-[380px] group-hover:scale-102 transition-transform duration-500"
                loading="lazy"
              />
              <div className="p-3.5 bg-[#172223] text-white text-xs font-semibold text-center">
                “Từng bước đi kiên trì từ giảng đường Y Dược đến nhà thuốc thực tế”
              </div>
            </div>

            {/* Highlight Box: Tôi từng nghĩ mình đã có đủ */}
            <div
              id="highlight-box-hanh-trinh"
              className="bg-gradient-to-br from-[#172223] to-[#203032] text-white rounded-2xl p-6 sm:p-7 shadow-md border border-[#334546] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#24B7AB]/10 rounded-full blur-2xl" />

              <h4 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>Tôi từng nghĩ mình đã có đủ:</span>
              </h4>

              <div className="grid grid-cols-2 gap-2.5 mb-5 text-sm font-medium">
                {[
                  'Bằng cấp chính quy',
                  'Chuyên môn vững vàng',
                  'Kinh nghiệm thực tế',
                  'Nhà thuốc Minh Khôi',
                  'Kho 2.000+ sản phẩm',
                  'Hệ thống đại lý phân phối',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg text-xs sm:text-sm">
                    <span className="text-[#5BEA68] font-bold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-3 border-t border-white/15 text-sm text-white/90">
                <p className="italic text-white/80">Nhưng rồi thị trường thay đổi nhanh chóng...</p>
                <div className="p-4 rounded-xl bg-white/10 border border-[#24B7AB]/30">
                  <p className="text-xs uppercase tracking-wider text-[#5BEA68] font-bold mb-1">
                    Và tôi nhận ra:
                  </p>
                  <blockquote className="font-semibold text-sm sm:text-base text-white leading-relaxed">
                    “Có chuyên môn chưa chắc đồng nghĩa với việc đã biết cách xây dựng một nhà thuốc thích nghi được với thị trường mới.”
                  </blockquote>
                </div>
              </div>

              {/* Small CTA to Section 3 */}
              <div className="mt-6 text-center">
                <a
                  href="#buoc-ngoat"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider bg-[#24B7AB] hover:bg-[#128A83] px-5 py-2.5 rounded-xl transition-all shadow-xs"
                >
                  <span>XEM BƯỚC NGOẶT CỦA TÔI</span>
                  <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* REAL PHARMACY PHOTO JOURNEY (2019 - 2023 - 2025) */}
        <PharmacyHistoryGallery />
      </div>
    </section>
  );
};
