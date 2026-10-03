import React, { useState } from 'react';
import { Phone, Users, Sparkles, CheckCircle2, MessageSquare, Gift, HeartHandshake, ShieldAlert, ZoomIn, ExternalLink, X } from 'lucide-react';
import { CONTACT_INFO, PILLARS, IMAGES } from '../data/content';
import { SalesProofGallery } from './SalesProofGallery';
import { SapaTripHighlight } from './SapaTripHighlight';

interface NewEraPharmacistSectionProps {
  onOpenGift: () => void;
  onOpenShare: () => void;
}

export const NewEraPharmacistSection: React.FC<NewEraPharmacistSectionProps> = ({ onOpenGift, onOpenShare }) => {
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  return (
    <section id="thanh-qua" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#24B7AB]/10 text-[#128A83] text-xs font-bold uppercase tracking-wider border border-[#24B7AB]/20">
            <Sparkles className="w-4 h-4 text-[#24B7AB]" />
            SECTION 05 • PHIÊN BẢN DƯỢC SĨ TÔI ĐANG XÂY DỰNG
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#162425] leading-tight">
            THÀNH QUẢ LỚN NHẤT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#128A83] to-[#24B7AB] font-black underline decoration-[#5BEA68] decoration-4 underline-offset-8">KHÔNG CHỈ LÀ DOANH SỐ</span>
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
                  <div className="text-xs font-bold text-red-500 uppercase flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                    TƯ DUY NGÀY TRƯỚC
                  </div>
                  <div className="font-extrabold text-sm sm:text-base text-[#162425] mt-1.5 line-through decoration-red-400">
                    “Khách cần mua sản phẩm gì?”
                  </div>
                  <p className="text-xs text-[#5A6F6C] mt-1 font-medium">Bị động bán từng sản phẩm lẻ, lệ thuộc khách vãng lai</p>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-br from-[#E8FBF0]/70 to-white border-2 border-[#24B7AB] shadow-sm">
                  <div className="text-xs font-black text-[#128A83] uppercase flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#5BEA68] animate-pulse" />
                    TƯ DUY ĐỘT PHÁ HÔM NAY
                  </div>
                  <div className="font-extrabold text-sm sm:text-base text-[#128A83] mt-1.5">
                    “Khách hàng thực sự cần giải pháp gì để khỏe tận gốc?”
                  </div>
                  <p className="text-xs text-[#128A83] font-bold mt-1">Đồng hành trọn vẹn, tư vấn combo liệu trình cá nhân hóa</p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#162425] leading-relaxed">
                Tôi bắt đầu tiếp cận khách hàng theo hướng <strong className="text-[#128A83] font-black underline decoration-[#5BEA68]">chăm sóc sức khỏe dài hạn</strong>, kết hợp kiến thức chuyên môn dược lâm sàng, dinh dưỡng phòng bệnh, góc tầm soát sinh học hiện đại và công nghệ tự động quản lý khách hàng chu đáo.
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
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#D5E4E1] shadow-xs space-y-4">
              <div className="flex items-center gap-3 text-[#128A83] font-black text-base sm:text-lg">
                <Users className="w-6 h-6 text-[#5BEA68]" />
                <span>ĐỘI NGŨ 20+ DƯỢC SĨ ĐỐI TÁC TRÊN TOÀN QUỐC</span>
              </div>

              <p className="text-sm sm:text-base text-[#5A6F6C] leading-relaxed">
                Từ một người từng e ngại máy tính, tôi đã tự tin bước lên <strong className="text-[#128A83] font-black bg-[#E8FBF0] px-2 py-0.5 rounded border border-[#24B7AB]/30">Ban huấn luyện thực chiến</strong> để chuyển giao công nghệ cho hàng trăm dược sĩ. Từ một người từng loay hoay đơn độc, nay tôi đã xây dựng mạng lưới <strong className="text-[#162425] font-black bg-[#24B7AB]/20 px-2 py-0.5 rounded border border-[#24B7AB]/40">hơn 20 Dược sĩ đối tác</strong> cùng tự do tài chính và vận hành tự động.
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
            {/* Real Team Photo Card */}
            <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-[#24B7AB]/30 group bg-white">
              <div
                className="relative overflow-hidden cursor-pointer bg-slate-900"
                onClick={() => setIsTeamModalOpen(true)}
              >
                <img
                  src={IMAGES.team}
                  alt="Ảnh đội nhóm Dược sĩ Diễm Phúc"
                  className="w-full h-auto object-cover max-h-[380px] group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#172223]/90 backdrop-blur-md text-[#5BEA68] text-xs font-bold px-3 py-1.5 rounded-lg border border-white/20 flex items-center gap-1.5 shadow-md">
                  <Users className="w-3.5 h-3.5 text-[#5BEA68]" />
                  Đội nhóm thực tế Diễm Phúc
                </div>
                <div className="absolute bottom-3 right-3 bg-[#172223]/80 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1.5 rounded-md border border-white/10 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-3.5 h-3.5 text-[#5BEA68]" />
                  <span>Phóng to ảnh</span>
                </div>
              </div>

              <div className="p-4 bg-[#172223] text-white space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-[#5BEA68] flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#5BEA68]" />
                    Đội ngũ Dược sĩ Diễm Phúc
                  </span>
                  <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#24B7AB] text-white">
                    20+ Thành viên
                  </span>
                </div>
                <p className="text-xs text-[#AABAB7] leading-relaxed">
                  Đội ngũ hơn 20 dược sĩ tại nhiều tỉnh thành cùng đồng hành, học tập và bứt phá doanh số cùng CaniCoach – AmHapy.
                </p>
                <div className="pt-2 flex items-center justify-between text-xs border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setIsTeamModalOpen(true)}
                    className="text-[#5BEA68] hover:underline flex items-center gap-1 font-semibold cursor-pointer"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                    Xem ảnh đầy đủ
                  </button>
                  <a
                    href="https://postimg.cc/CRYffGHR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#AABAB7] hover:text-white flex items-center gap-1"
                  >
                    <span>Mở link ảnh gốc</span>
                    <ExternalLink className="w-3 h-3 text-[#24B7AB]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Companion Community Recognition card */}
            <div className="rounded-xl overflow-hidden shadow-xs border border-[#D5E4E1] bg-white p-3 flex items-center gap-3">
              <div className="w-24 h-18 rounded-lg overflow-hidden shrink-0 border border-[#D5E4E1] bg-slate-900">
                <img
                  src={IMAGES.community}
                  alt="Lễ vinh danh & giao lưu phát triển đội ngũ Dược sĩ thời đại mới"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="text-xs text-[#5A6F6C] space-y-1">
                <div className="font-bold text-[#162425] flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#24B7AB]" />
                  Giao lưu & Vinh danh toàn quốc
                </div>
                <p className="text-[11px] text-[#5A6F6C] line-clamp-2">
                  Ghi nhận những bước chuyển đổi bứt phá của các dược sĩ trong hệ thống Y Dược Online.
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

      {/* Lightbox Modal for Team Photo */}
      {isTeamModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsTeamModalOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#172223] rounded-2xl overflow-hidden border border-[#334546] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 bg-[#121c1d] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#5BEA68]" />
                <h3 className="font-bold text-white text-sm sm:text-base">
                  Đội Ngũ Dược Sĩ Diễm Phúc – Hơn 20+ Dược Sĩ Đồng Hành
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://postimg.cc/CRYffGHR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[#5BEA68] text-xs font-semibold flex items-center gap-1 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="hidden sm:inline">Mở link gốc</span>
                </a>
                <button
                  type="button"
                  onClick={() => setIsTeamModalOpen(false)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image */}
            <div className="p-2 sm:p-4 bg-black flex items-center justify-center max-h-[75vh] overflow-auto">
              <img
                src={IMAGES.team}
                alt="Ảnh đội nhóm Dược sĩ Diễm Phúc"
                className="max-h-[70vh] w-auto object-contain rounded-lg"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#172223] text-xs text-[#AABAB7] flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-[#24B7AB]/20 text-[#5BEA68] font-bold">
                  20+ Dược Sĩ Tiên Phong
                </span>
                <span>Cùng học tập, làm chủ công nghệ và phát triển hệ thống</span>
              </div>
              <a
                href={CONTACT_INFO.zaloGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#24B7AB] hover:bg-[#128A83] text-white font-bold transition-colors shrink-0"
              >
                Gia nhập đội ngũ cùng DS. Diễm Phúc
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
