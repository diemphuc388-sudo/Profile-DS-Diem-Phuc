import React from 'react';
import {
  PackageX,
  Truck,
  Coins,
  ShieldCheck,
  Factory,
  Leaf,
  Sparkles,
  HeartHandshake,
  TrendingUp,
  Percent,
  Plane,
  Crown,
  ArrowRight,
  MessageCircle,
  Users,
  CheckCircle2,
  Award
} from 'lucide-react';
import { AMHAPY_AFFILIATE_DATA, CONTACT_INFO, IMAGES } from '../data/content';

interface WhyAmHapySectionProps {
  onOpenGift?: () => void;
  onOpenShare?: () => void;
}

export const WhyAmHapySection: React.FC<WhyAmHapySectionProps> = ({ onOpenGift, onOpenShare }) => {
  return (
    <section id="mo-hinh-amhapy" className="py-20 sm:py-28 bg-[#FFFFFF] relative overflow-hidden">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#E8FBF0]/40 to-transparent pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#24B7AB]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#5BEA68]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= SECTION HEADER ================= */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#24B7AB]/10 text-[#128A83] text-xs font-bold uppercase tracking-wider border border-[#24B7AB]/25">
            <Sparkles className="w-4 h-4 text-[#24B7AB]" />
            MÔ HÌNH KINH DOANH SỐ • ĐỒNG HÀNH BỀN VỮNG
          </div>
          
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#162425] leading-tight">
            VÌ SAO TÔI LỰA CHỌN <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#128A83] via-[#24B7AB] to-[#128A83]">
              MÔ HÌNH AFFILIATE AMHAPY?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#5A6F6C] leading-relaxed">
            Giải pháp kinh doanh nhẹ vốn, tối ưu vận hành và giải phóng áp lực ôm kho cho người dược sĩ trong thời đại số.
          </p>
        </div>

        {/* ================= OPENING PERSONAL STORY CALLOUT ================= */}
        <div className="mb-14 bg-gradient-to-r from-[#F2F8F6] via-white to-[#F2F8F6] rounded-2xl p-6 sm:p-8 border border-[#D5E4E1] shadow-xs">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#24B7AB] shadow-md">
                <img
                  src={IMAGES.hero}
                  alt="Dược sĩ Diễm Phúc"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-[#24B7AB] text-white flex items-center justify-center shadow-sm">
                <Award className="w-4 h-4" />
              </div>
            </div>

            <div className="space-y-2 text-center md:text-left flex-grow">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <span className="text-sm font-bold text-[#162425]">DƯỢC SĨ DIỄM PHÚC CHIA SẺ:</span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#E8FBF0] text-[#128A83] text-xs font-semibold">
                  Trải nghiệm thực chiến
                </span>
              </div>
              <blockquote className="text-base sm:text-xl font-medium text-[#162425] leading-relaxed italic">
                “{AMHAPY_AFFILIATE_DATA.introStory}”
              </blockquote>
              <p className="text-xs sm:text-sm text-[#5A6F6C]">
                Chính từ nỗi trăn trở quản lý kho hàng hơn 2.000 sản phẩm trước năm 2025, tôi nhận ra người dược sĩ cần một con đường thông minh và thanh thoát hơn.
              </p>
            </div>
          </div>
        </div>

        {/* ================= CORE PILLAR 1: NGUYÊN TẮC "4 KHÔNG" VÀNG ================= */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#172223] text-[#5BEA68] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              NGUYÊN TẮC VÀNG TÔI ĐẶC BIỆT CHÚ Ý
            </div>
            <h3 className="text-xl sm:text-3xl font-extrabold text-[#162425]">
              Nguyên Tắc “4 KHÔNG” Đột Phá
            </h3>
            <p className="text-xs sm:text-sm text-[#5A6F6C]">
              Khi biết đến mô hình Affiliate AmHapy, đây là điều đầu tiên khiến tôi chú ý và quyết định tìm hiểu sâu.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {AMHAPY_AFFILIATE_DATA.fourNoPrinciples.map((principle, index) => {
              const icons = [PackageX, Truck, Coins, ShieldCheck];
              const IconComponent = icons[index % icons.length];

              return (
                <div
                  key={index}
                  className="bg-white hover:bg-[#F2F8F6] p-6 rounded-2xl border border-[#D5E4E1] hover:border-[#24B7AB] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-lg group-hover:bg-[#24B7AB] group-hover:text-white transition-colors">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-black text-red-500 bg-red-50 px-2.5 py-1 rounded-md border border-red-100 uppercase group-hover:bg-[#E8FBF0] group-hover:text-[#128A83] group-hover:border-[#5BEA68]/30 transition-colors">
                        KHÔNG 0{index + 1}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-[#162425] group-hover:text-[#128A83] transition-colors">
                      {principle.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#5A6F6C] leading-relaxed">
                      {principle.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-xs font-semibold text-[#128A83]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#5BEA68]" />
                    <span>Giải phóng áp lực vận hành</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Core Takeaway Highlight Box */}
          <div className="mt-8 bg-[#172223] text-white p-6 sm:p-8 rounded-2xl shadow-md border border-[#334546] text-center space-y-3">
            <div className="text-xs text-[#5BEA68] font-bold uppercase tracking-wider flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-[#5BEA68]" />
              GIÁ TRỊ CỐT LÕI TẠO NÊN SỰ KHÁC BIỆT
            </div>
            <p className="text-base sm:text-xl font-bold max-w-4xl mx-auto leading-relaxed text-[#F3F7F5]">
              “{AMHAPY_AFFILIATE_DATA.coreFocusQuote}”
            </p>
            <div className="pt-2 text-xs sm:text-sm text-[#AABAB7]">
              Người dược sĩ quay trở lại đúng vị trí danh dự: Người thầy thuốc tư vấn tận tâm và chăm sóc người bệnh từ tâm.
            </div>
          </div>
        </div>

        {/* ================= CORE PILLAR 2: NHƯNG ĐÓ CHƯA PHẢI LÀ TẤT CẢ (4 YẾU TỐ NỀN TẢNG) ================= */}
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8FBF0] text-[#128A83] text-xs font-bold uppercase tracking-wider border border-[#5BEA68]/30">
              NHƯNG ĐÓ CHƯA PHẢI LÀ TẤT CẢ
            </div>
            <h3 className="text-xl sm:text-3xl font-extrabold text-[#162425]">
              4 Nền Tảng Vững Chắc Khiến Tôi Lựa Chọn Đồng Hành
            </h3>
            <p className="text-xs sm:text-sm text-[#5A6F6C]">
              Theo những thông tin và chính sách tôi được tiếp cận khi tìm hiểu AmHapy, tôi lựa chọn đồng hành bởi nhiều yếu tố then chốt:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {AMHAPY_AFFILIATE_DATA.corePillars.map((pillar, index) => {
              const icons = [Factory, Leaf, Sparkles, HeartHandshake];
              const IconComp = icons[index % icons.length];

              return (
                <div
                  key={index}
                  className="bg-white p-6 sm:p-7 rounded-2xl border border-[#D5E4E1] hover:border-[#24B7AB] shadow-xs hover:shadow-sm transition-all space-y-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F2F8F6] text-[#128A83] flex items-center justify-center shrink-0 border border-[#D5E4E1]">
                      <IconComp className="w-6 h-6 text-[#24B7AB]" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#E8FBF0] text-[#128A83] text-xs font-bold border border-[#5BEA68]/30">
                      {pillar.highlight}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-lg sm:text-xl font-bold text-[#162425]">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5A6F6C] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= CORE PILLAR 3: QUYỀN LỢI & CƠ CHẾ THU NHẬP ĐA DẠNG ================= */}
        <div className="mb-16 bg-[#F2F8F6] rounded-2xl p-6 sm:p-10 border border-[#D5E4E1]">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#24B7AB]/10 text-[#128A83] text-xs font-bold uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5 text-[#24B7AB]" />
              CHÍNH SÁCH ĐỐI TÁC MINH BẠCH
            </div>
            <h3 className="text-xl sm:text-3xl font-extrabold text-[#162425]">
              Hệ Thống Quyền Lợi & Cơ Chế Thu Nhập Đa Dạng
            </h3>
            <p className="text-xs sm:text-sm text-[#5A6F6C]">
              Các chính sách tôi được giới thiệu mang đến sự chủ động và tưởng thưởng xứng đáng cho người làm chuyên môn nghiêm túc:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {AMHAPY_AFFILIATE_DATA.benefitsAndIncome.map((benefit, index) => {
              const icons = [TrendingUp, Percent, Plane, Crown];
              const IconComp = icons[index % icons.length];

              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-[#D5E4E1] shadow-xs flex flex-col justify-between space-y-4 hover:border-[#24B7AB] transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-[#E8FBF0] text-[#128A83] flex items-center justify-center font-bold">
                        <IconComp className="w-5 h-5 text-[#24B7AB]" />
                      </div>
                      <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#172223] text-[#5BEA68]">
                        {benefit.badge}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-[#162425]">
                      {benefit.title}
                    </h4>

                    <p className="text-xs text-[#5A6F6C] leading-relaxed">
                      {benefit.detail}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 text-[11px] text-[#128A83] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#5BEA68]" />
                    <span>Chính sách minh bạch</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Deep Reflection Box */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border-l-4 border-[#24B7AB] shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#128A83] uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#24B7AB]" />
              GIẢI PHÁP ĐÚNG NỖI ĐAU TỪNG TRẢI QUA
            </div>
            <p className="text-base sm:text-lg font-bold text-[#162425]">
              “{AMHAPY_AFFILIATE_DATA.deepReflection.quote}”
            </p>
            <p className="text-xs sm:text-sm text-[#5A6F6C] leading-relaxed">
              {AMHAPY_AFFILIATE_DATA.deepReflection.solution}
            </p>
          </div>
        </div>

        {/* ================= CORE PILLAR 4: SỰ THAY ĐỔI RẤT LỚN TRONG TƯ DUY ================= */}
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#172223] text-[#5BEA68] text-xs font-bold uppercase tracking-wider">
              BƯỚC CHUYỂN HÓA MẠNH MẼ
            </div>
            <h3 className="text-xl sm:text-3xl font-extrabold text-[#162425]">
              Đó Là Một Sự Thay Đổi Rất Lớn Trong Tư Duy Của Tôi
            </h3>
            <p className="text-xs sm:text-sm text-[#5A6F6C]">
              4 bước chuyển hóa từ lối mòn tư duy truyền thống sang tầm nhìn của người Dược sĩ thời đại số:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {AMHAPY_AFFILIATE_DATA.mindsetShifts.map((shift, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-[#D5E4E1] hover:border-[#24B7AB] shadow-xs hover:shadow-sm transition-all space-y-3"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#172223] text-white flex items-center justify-center font-bold text-xs shrink-0 font-mono">
                    0{idx + 1}
                  </span>
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-bold">
                    <span className="text-[#5A6F6C] bg-gray-100 px-2 py-0.5 rounded-md line-through decoration-red-400">
                      {shift.from}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#24B7AB] shrink-0" />
                    <span className="text-[#128A83] bg-[#E8FBF0] px-2.5 py-0.5 rounded-md font-extrabold">
                      {shift.to}
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#5A6F6C] leading-relaxed pl-10">
                  {shift.note}
                </p>
              </div>
            ))}
          </div>

          {/* Closing Personal Vision Quote */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-[#172223] to-[#203032] text-white text-center space-y-2 border border-[#334546]">
            <HeartHandshake className="w-8 h-8 text-[#5BEA68] mx-auto" />
            <p className="text-base sm:text-lg font-bold text-[#F3F7F5] max-w-3xl mx-auto leading-relaxed italic">
              “{AMHAPY_AFFILIATE_DATA.closingVision}”
            </p>
            <p className="text-xs text-[#AABAB7]">
              Cùng nhau xây dựng một cộng đồng dược sĩ hạnh phúc, tự chủ và phụng sự vững vàng.
            </p>
          </div>
        </div>

        {/* ================= CALL TO ACTION CONNECT BOX ================= */}
        <div className="text-center bg-white p-8 sm:p-10 rounded-2xl border-2 border-[#24B7AB] shadow-md space-y-6">
          <div className="space-y-2 max-w-2xl mx-auto">
            <span className="text-xs uppercase font-extrabold tracking-wider text-[#128A83] bg-[#E8FBF0] px-3 py-1 rounded-full border border-[#5BEA68]/30">
              KẾT NỐI VÀ TÌM HIỂU MÔ HÌNH CÙNG DS. DIỄM PHÚC
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#162425]">
              Bạn Cũng Muốn Giải Phóng Áp Lực Ôm Kho & Chuyển Đổi Sang Mô Hình Số?
            </h3>
            <p className="text-xs sm:text-sm text-[#5A6F6C]">
              Hãy nhắn tin hoặc tham gia nhóm Zalo để cùng trao đổi chuyên môn, kinh nghiệm thực chiến và tìm hiểu cách thức đồng hành cùng AmHapy.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href={CONTACT_INFO.zaloGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#24B7AB] text-white font-bold text-sm shadow-md hover:bg-[#128A83] hover:shadow-lg transition-all"
            >
              <Users className="w-4 h-4" />
              <span>Tham gia nhóm Zalo Dược sĩ</span>
            </a>

            <a
              href={CONTACT_INFO.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#172223] text-white font-bold text-sm hover:bg-[#203032] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#5BEA68]" />
              <span>Nhắn tin Zalo với DS. Diễm Phúc</span>
            </a>

            {onOpenGift && (
              <button
                type="button"
                onClick={onOpenGift}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#F2F8F6] text-[#128A83] font-bold text-sm border border-[#D5E4E1] hover:bg-[#E8FBF0] transition-colors"
              >
                <Sparkles className="w-4 h-4 text-[#24B7AB]" />
                <span>Nhận bộ quà tặng chuyển đổi số</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
