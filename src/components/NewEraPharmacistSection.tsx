import React from 'react';
import { Phone, Users, Sparkles, CheckCircle2, MessageSquare, Gift, HeartHandshake, ShieldAlert, Store } from 'lucide-react';
import { CONTACT_INFO, PILLARS, IMAGES } from '../data/content';
import { SalesProofGallery } from './SalesProofGallery';
import { SapaTripHighlight } from './SapaTripHighlight';

interface NewEraPharmacistSectionProps {
  onOpenGift: () => void;
  onOpenShare: () => void;
}

export const NewEraPharmacistSection: React.FC<NewEraPharmacistSectionProps> = ({ onOpenGift, onOpenShare }) => {
  return (
    <section id="thanh-qua" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#24B7AB]/10 text-[#128A83] text-xs font-bold uppercase tracking-wider border border-[#24B7AB]/20">
            <Sparkles className="w-4 h-4 text-[#24B7AB]" />
            SECTION 05 • PHIÊN BẢN DƯỢC SĨ TÔI ĐANG XÂY DỰNG
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#162425] leading-tight">
            THÀNH QUẢ LỚN NHẤT <span className="text-[#24B7AB]">KHÔNG CHỈ LÀ DOANH SỐ</span>
          </h2>
          <p className="text-base sm:text-lg text-[#5A6F6C]">
            Từ bán lẻ đơn thuần đến sứ mệnh đồng hành chăm sóc sức khỏe dài hạn và phát triển cộng đồng dược sĩ thế hệ mới.
          </p>
        </div>

        {/* Story Evolution & Team Growth */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left Story (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#F2F8F6] p-6 sm:p-8 rounded-2xl border border-[#D5E4E1] space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-xs">
                  <div className="text-xs font-bold text-[#5A6F6C] uppercase">Tư duy ngày trước</div>
                  <div className="font-semibold text-sm text-[#162425] mt-1">
                    “Khách cần mua sản phẩm gì?”
                  </div>
                  <p className="text-xs text-[#5A6F6C] mt-1">Tập trung bán từng sản phẩm & từng đơn hàng nhỏ lẻ</p>
                </div>

                <div className="p-4 rounded-xl bg-white border-2 border-[#24B7AB] shadow-xs">
                  <div className="text-xs font-bold text-[#128A83] uppercase">Tư duy hôm nay</div>
                  <div className="font-bold text-sm text-[#162425] mt-1">
                    “Khách hàng thực sự cần hỗ trợ điều gì?”
                  </div>
                  <p className="text-xs text-[#128A83] font-semibold mt-1">Đồng hành, chăm sóc sức khỏe chủ động lâu dài</p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#162425] leading-relaxed">
                Tôi bắt đầu tiếp cận khách hàng theo hướng <strong>chăm sóc dài hạn</strong>, kết hợp kiến thức chuyên môn, dinh dưỡng, thiết bị tầm soát hiện đại và công nghệ hỗ trợ quản lý khách hàng chu đáo.
              </p>

              {/* Responsible Healthcare Notice */}
              <div className="p-3.5 rounded-xl bg-white border-l-4 border-[#24B7AB] text-xs text-[#5A6F6C] flex items-start gap-2 shadow-xs">
                <ShieldAlert className="w-4 h-4 text-[#24B7AB] shrink-0 mt-0.5" />
                <span>
                  Luôn khuyến nghị khách hàng thăm khám tại cơ sở y tế phù hợp khi tình trạng cần được chẩn đoán hoặc điều trị chuyên môn sâu.
                </span>
              </div>
            </div>

            {/* Leadership & 20+ Pharmacists milestones */}
            <div className="p-6 rounded-2xl bg-white border border-[#D5E4E1] shadow-xs space-y-4">
              <div className="flex items-center gap-3 text-[#128A83] font-bold text-sm sm:text-base">
                <Users className="w-5 h-5 text-[#5BEA68]" />
                <span>ĐỘI NGŨ 20+ DƯỢC SĨ TẠI NHIỀU TỈNH THÀNH</span>
              </div>

              <p className="text-sm text-[#5A6F6C] leading-relaxed">
                Từ một người từng e ngại công nghệ, tôi đã tự tin tham gia <strong>Ban huấn luyện</strong> để hỗ trợ những dược sĩ khác tiếp cận công nghệ. Từ một người từng loay hoay một mình, nay tôi đã có đội ngũ hơn <strong>20 dược sĩ</strong> cùng học tập, kinh doanh và phát triển.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-3 py-1.5 rounded-lg bg-[#172223] text-white text-xs font-bold">
                  Giám đốc toàn quốc
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#24B7AB] text-white text-xs font-bold">
                  Giám đốc khu vực
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#128A83] text-white text-xs font-bold">
                  Trưởng phòng kinh doanh
                </span>
              </div>
            </div>
          </div>

          {/* Right Image: Team & Recognition (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-md border border-[#D5E4E1] group">
              <img
                src={IMAGES.community}
                alt="Cộng đồng Dược sĩ Diễm Phúc đồng hành và phát triển"
                className="w-full h-auto object-cover max-h-[460px] group-hover:scale-102 transition-transform duration-500"
                loading="lazy"
              />
              <div className="p-3.5 bg-[#172223] text-white text-xs font-semibold text-center">
                Lễ vinh danh & giao lưu phát triển đội ngũ Dược sĩ thời đại mới
              </div>
            </div>
          </div>
        </div>

        {/* COACHING & PHARMACY BRANDING HIGHLIGHT */}
        <div className="my-12 p-6 sm:p-8 rounded-2xl bg-[#F2F8F6] border border-[#D5E4E1] shadow-xs space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#24B7AB]/10 text-[#128A83] text-xs font-bold uppercase tracking-wider border border-[#24B7AB]/20">
                <Sparkles className="w-3.5 h-3.5 text-[#24B7AB]" />
                BAN HUẤN LUYỆN THỰC CHIẾN
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#162425]">
                Huấn Luyện & Hướng Dẫn Các Nhà Thuốc / Quầy Thuốc Trang Trí, Định Vị Lại Thương Hiệu
              </h3>
              <p className="text-xs sm:text-sm text-[#5A6F6C] max-w-3xl leading-relaxed">
                Phúc trực tiếp tham gia hỗ trợ, cầm tay chỉ việc cho các đồng nghiệp dược sĩ: từ chuẩn hóa không gian trải nghiệm khách hàng, sắp xếp quầy kệ nhận diện thương hiệu đến định vị phong cách tư vấn chuyên gia uy tín.
              </p>
            </div>
            <div className="shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white text-[#128A83] border border-[#D5E4E1] text-xs font-bold shadow-xs">
                <Store className="w-4 h-4 text-[#24B7AB]" />
                Chuẩn hóa điểm bán & quầy kệ
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image 1 */}
            <div className="group rounded-2xl overflow-hidden border border-[#D5E4E1] bg-white shadow-xs">
              <div className="aspect-[4/3] w-full overflow-hidden relative bg-slate-900">
                <img
                  src={IMAGES.brandingCoaching1}
                  alt="Hướng dẫn các Dược sĩ trang trí lại nhà thuốc và định vị thương hiệu"
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#172223]/85 backdrop-blur-md text-[#5BEA68] text-[10px] font-bold px-2.5 py-1 rounded-md border border-white/20">
                  Huấn luyện thực tế
                </div>
              </div>
              <div className="p-4 bg-white border-t border-[#D5E4E1] space-y-1">
                <h4 className="font-bold text-sm sm:text-base text-[#162425]">
                  Hướng dẫn các Dược sĩ trang trí lại nhà thuốc & định vị thương hiệu
                </h4>
                <p className="text-xs text-[#5A6F6C] leading-relaxed">
                  Đồng hành cùng các chủ quầy thuốc thiết kế layout hiện đại, tối ưu điểm chạm thị giác tạo thiện cảm và củng cố uy tín ngay khi khách hàng bước vào.
                </p>
              </div>
            </div>

            {/* Image 2 */}
            <div className="group rounded-2xl overflow-hidden border border-[#D5E4E1] bg-white shadow-xs">
              <div className="aspect-[4/3] w-full overflow-hidden relative bg-slate-900">
                <img
                  src={IMAGES.brandingCoaching2}
                  alt="Hướng dẫn trang trí nhà thuốc định vị thương hiệu"
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#172223]/85 backdrop-blur-md text-[#5BEA68] text-[10px] font-bold px-2.5 py-1 rounded-md border border-white/20">
                  Định vị thương hiệu
                </div>
              </div>
              <div className="p-4 bg-white border-t border-[#D5E4E1] space-y-1">
                <h4 className="font-bold text-sm sm:text-base text-[#162425]">
                  Chuẩn hóa không gian quầy thuốc & xây dựng niềm tin dài lâu
                </h4>
                <p className="text-xs text-[#5A6F6C] leading-relaxed">
                  Hướng dẫn phân khu sản phẩm khoa học, tích hợp khu vực tư vấn đo lường sức khỏe giúp gia tăng giá trị đơn hàng và gắn kết khách hàng bền vững.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* REAL SALES RESULTS & CANICOACH AMHAPY PROOF GALLERY */}
        <SalesProofGallery />

        {/* SAPA TRIP WITH FAMILY & AMHAPY (SEPTEMBER 2026) */}
        <SapaTripHighlight />

        {/* TARGET 100 PHARMACISTS BANNER */}
        <div className="my-14 text-center bg-[#172223] text-white py-8 px-6 rounded-2xl shadow-md border border-[#334546] space-y-2">
          <div className="text-xs uppercase tracking-widest text-[#5BEA68] font-bold">
            MỤC TIÊU CỘNG ĐỒNG TIẾP THEO
          </div>
          <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            KẾT NỐI 100 DƯỢC SĨ TIÊN PHONG
          </h3>
          <p className="text-sm sm:text-base text-[#AABAB7] font-medium">
            Cùng kiến tạo thế hệ: <strong className="text-[#5BEA68] uppercase">DƯỢC SĨ THỜI ĐẠI MỚI</strong>
          </p>
        </div>

        {/* 5 PILLARS OF NEW ERA PHARMACIST */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-3xl font-extrabold text-[#162425]">
              5 Trụ Cột Của Thế Hệ Dược Sĩ Thời Đại Mới
            </h3>
            <p className="text-sm text-[#5A6F6C] mt-1">
              Khung năng lực toàn diện giúp người dược sĩ vừa giữ vững y đức, vừa làm chủ công nghệ và thị trường
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-[#F2F8F6] hover:bg-white p-6 rounded-xl border border-[#D5E4E1] hover:border-[#24B7AB] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#24B7AB] text-white flex items-center justify-center font-bold text-xl shadow-xs transition-colors font-mono">
                    {pillar.number}
                  </div>
                  <h4 className="text-base font-bold text-[#162425] group-hover:text-[#128A83] transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5A6F6C] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#D5E4E1] text-[11px] font-bold text-[#128A83] uppercase tracking-wide">
                  {pillar.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= GRAND CTA BLOCK: BẠN CŨNG LÀ DƯỢC SĨ? ================= */}
        <div
          id="ket-noi"
          className="relative bg-[#172223] text-white rounded-2xl p-8 sm:p-12 lg:p-16 shadow-xl border border-[#334546] overflow-hidden"
        >
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#24B7AB]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#5BEA68]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10">
            {/* CTA Header */}
            <div className="space-y-3">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#24B7AB]/20 text-[#5BEA68] border border-[#24B7AB]/30 text-xs font-bold uppercase tracking-wider">
                LỜI MỜI ĐỒNG HÀNH & KẾT NỐI
              </span>
              <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                BẠN CŨNG LÀ DƯỢC SĨ?
              </h3>
            </div>

            {/* Check Questions */}
            <div className="text-left bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-xl border border-white/10 space-y-3 text-sm sm:text-base text-[#AABAB7]">
              {[
                'Nếu bạn đang sở hữu một nhà thuốc truyền thống và trăn trở tìm lối đi…',
                'Nếu bạn cảm thấy thị trường đang thay đổi nhanh hơn cách mình đang kinh doanh…',
                'Nếu bạn muốn tiếp cận AI, công nghệ, marketing và tự động hóa nhưng chưa biết bắt đầu từ đâu…',
                'Nếu bạn muốn tìm một cộng đồng dược sĩ cùng học, cùng làm và cùng tiến bộ…',
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#5BEA68] shrink-0 mt-0.5" />
                  <span className="font-medium text-white">{text}</span>
                </div>
              ))}
            </div>

            {/* Warm Personal Message */}
            <div className="space-y-2 text-[#AABAB7] text-base sm:text-lg">
              <p className="font-bold text-[#5BEA68] text-xl">
                “Tôi rất vui được kết nối cùng bạn.”
              </p>
              <p className="text-sm sm:text-base text-[#AABAB7] max-w-xl mx-auto">
                Bạn không cần phải giỏi công nghệ ngay từ ngày đầu tiên. Tôi cũng từng bắt đầu từ những điều rất cơ bản. Điều quan trọng nhất là chúng ta sẵn sàng học và sẵn sàng thay đổi.
              </p>
            </div>

            {/* Main CTA Buttons */}
            <div className="space-y-4 pt-2">
              <div className="text-xs uppercase tracking-widest text-[#5BEA68] font-bold">
                KẾT NỐI VỚI DƯỢC SĨ DIỄM PHÚC
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {/* Button 1: Call now */}
                <a
                  id="final-cta-call"
                  href={CONTACT_INFO.telUrl}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#24B7AB] hover:bg-[#128A83] text-white px-8 py-4 rounded-xl text-base font-bold shadow-md hover:scale-102 transition-all"
                >
                  <Phone className="w-5 h-5 text-white" />
                  <span>GỌI NGAY: {CONTACT_INFO.phoneDisplay}</span>
                </a>

                {/* Button 2: Join Zalo Group */}
                <a
                  id="final-cta-zalo"
                  href={CONTACT_INFO.zaloGroupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#5BEA68] to-[#24B7AB] hover:opacity-90 text-[#0C1516] px-8 py-4 rounded-xl text-base font-extrabold shadow-md hover:scale-102 transition-all"
                >
                  <Gift className="w-5 h-5 text-[#0C1516]" />
                  <span>THAM GIA NHÓM ZALO NHẬN QUÀ</span>
                </a>
              </div>

              {/* Share & Gift Secondary Actions */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs font-semibold">
                <button
                  onClick={onOpenGift}
                  className="inline-flex items-center gap-1.5 text-[#AABAB7] hover:text-white underline"
                >
                  <Gift className="w-3.5 h-3.5 text-[#5BEA68]" />
                  Xem danh mục 4 phần quà tặng đặc quyền
                </button>
                <span className="text-white/40">•</span>
                <button
                  onClick={onOpenShare}
                  className="inline-flex items-center gap-1.5 text-[#AABAB7] hover:text-white underline"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#5BEA68]" />
                  Chia sẻ cho bạn bè & đồng nghiệp
                </button>
              </div>
            </div>

            {/* Closing Life Statement */}
            <div className="pt-8 border-t border-white/10 space-y-2">
              <div className="text-sm font-semibold text-[#AABAB7]">
                Cùng học – Cùng thay đổi – Cùng tạo ra giá trị
              </div>
              <div className="text-xs text-[#AABAB7]/70">
                Và cùng hướng tới một cuộc sống:
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#5BEA68] tracking-wider">
                ẤM NO – TỰ DO – HẠNH PHÚC VẸN TRÒN
              </div>

              <div className="pt-4 text-xs font-bold text-white">
                <div className="text-sm font-bold uppercase text-white">DƯỢC SĨ DIỄM PHÚC</div>
                <div className="text-[#5BEA68]">Dược sĩ giỏi công nghệ – Đồng hành xây dựng nhà thuốc hiện đại</div>
                <div className="text-[#AABAB7]/70">Nhà Thuốc Minh Khôi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
