import React from 'react';
import { AlertCircle, CheckCircle2, ArrowRight, ShieldCheck, HeartHandshake, Sparkles, TrendingUp } from 'lucide-react';
import { IMAGES } from '../data/content';
import { OldWayBusinessGallery } from './OldWayBusinessGallery';
import { MarketingCampaignsGallery } from './MarketingCampaignsGallery';

export const TransformationSection: React.FC = () => {
  const afterList = [
    'AI hỗ trợ sáng tạo nội dung tư vấn sức khỏe',
    'Canva xây dựng hình ảnh thương hiệu chỉn chu',
    'Fanpage kết nối và tương tác khách hàng địa phương',
    'Zalo OA chăm sóc khách hàng tự động và chu đáo',
    'Chatbot phản hồi nhanh chóng 24/7',
    'Minigame tăng gắn kết và lòng tin khách hàng',
    'Video ngắn phục vụ truyền thông hữu ích',
    'Hệ thống dữ liệu khách hàng số hóa chuyên nghiệp',
    'Quy trình chăm sóc sau bán tận tâm, bài bản',
    'Marketing tại điểm bán thu hút khách hàng quay lại',
    'Xây dựng thương hiệu cá nhân uy tín, đáng tin cậy',
  ];

  return (
    <section id="chuyen-doi" className="py-20 sm:py-28 bg-[#F2F8F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#24B7AB]/10 text-[#128A83] text-xs font-bold uppercase tracking-wider border border-[#24B7AB]/20">
            <Sparkles className="w-4 h-4 text-[#24B7AB]" />
            SECTION 04 • TỪ THỬ THÁCH ĐẾN CHUYỂN ĐỔI
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#162425] leading-tight">
            KHI KHÔNG THỂ THAY ĐỔI THỊ TRƯỜNG, <br className="hidden sm:inline" />
            <span className="text-[#24B7AB]">TÔI CHỌN THAY ĐỔI CHÍNH MÌNH</span>
          </h2>
          <p className="text-base sm:text-lg text-[#5A6F6C]">
            Hành trình chuyển hóa từ áp lực tồn kho, sụt giảm doanh số đến một mô hình vận hành tự chủ, bền vững.
          </p>
        </div>

        {/* Storytelling: BEFORE vs AFTER Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-10">
          {/* BEFORE CARD */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-red-100 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-50 text-red-700 text-xs font-bold border border-red-200">
                <AlertCircle className="w-3.5 h-3.5" />
                GIAI ĐOẠN KHÓ KHĂN TRƯỚC NĂM 2025 (BEFORE)
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#162425]">
                Kinh doanh theo kiểu cũ & áp lực biến động thị trường
              </h3>
              <ul className="space-y-3 text-sm text-[#162425]/85">
                {[
                  'Kinh doanh theo kiểu cũ: ôm 1 kho hàng lớn hơn 2.000 sản phẩm, áp lực vốn đọng nặng nề',
                  'Suốt ngày loay hoay đóng hàng, quấn băng dính, ghi phiếu thủ công',
                  'Ship hàng cả ngày mệt mỏi, phụ thuộc vào chành xe và bến bãi',
                  'Thị trường ngành dược biến động, nhiều mặt hàng bán chậm hoặc cận date',
                  'Có sản phẩm phải chấp nhận xả lỗ hoặc tặng lại đại lý để giải phóng kho tồn',
                  'Thiếu thời gian cho việc tư vấn chuyên môn và chăm sóc người bệnh thực sự',
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✕
                    </span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-red-50/70 border border-red-100 text-center">
              <p className="text-xs uppercase tracking-wider text-red-600 font-bold mb-1">
                Trăn trở lớn nhất:
              </p>
              <p className="text-base font-bold text-[#162425] italic">
                “Cứ ôm kho, đóng hàng và ship hàng cả ngày thế này... Nhà thuốc của mình rồi sẽ đi về đâu?”
              </p>
            </div>
          </div>

          {/* TWO CHOICES & TURNING POINT */}
          <div className="flex flex-col justify-between gap-6">
            {/* 2 Choices Comparison */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-xs border border-[#D5E4E1] space-y-4">
              <div className="text-xs font-bold text-[#128A83] uppercase tracking-wider text-center">
                Đứng trước hai ngã rẽ thực tế
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-center space-y-1 opacity-80">
                  <div className="text-2xl">❌</div>
                  <div className="font-bold text-[#5A6F6C] text-sm">Lựa chọn cũ</div>
                  <div className="text-xs text-[#5A6F6C]">Tiếp tục ôm kho, phụ thuộc lối mòn truyền thống</div>
                </div>

                <div className="p-4 rounded-xl bg-[#E8FBF0] border border-[#5BEA68] text-center space-y-1 shadow-xs">
                  <div className="text-2xl">✅</div>
                  <div className="font-bold text-[#128A83] text-sm">Lựa chọn dấn thân</div>
                  <div className="text-xs font-semibold text-[#162425]">Chủ động thay đổi tư duy, đón đầu công nghệ & mô hình tư vấn giải pháp</div>
                </div>
              </div>
            </div>

            {/* Turning Point Center Statement */}
            <div className="bg-[#172223] text-white p-6 sm:p-8 rounded-2xl shadow-md border border-[#334546] space-y-3 text-center">
              <div className="text-xs text-[#5BEA68] font-bold uppercase tracking-wider">
                QUYẾT ĐỊNH BƯỚC NGOẶT
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-white">
                TÔI CHỌN THAY ĐỔI.
              </h3>
              <p className="text-sm sm:text-base text-[#AABAB7] leading-relaxed max-w-lg mx-auto">
                Sau khoảng ba tháng học và triển khai liên tục, tôi đưa ra một quyết định lớn:
              </p>
              <div className="p-3.5 bg-white/10 rounded-xl font-bold text-sm sm:text-base text-[#5BEA68] border border-white/10">
                Rời công việc công ty đã gắn bó nhiều năm để tập trung toàn lực phát triển Nhà Thuốc Minh Khôi và con đường mới.
              </div>
            </div>
          </div>
        </div>

        {/* REAL OLD-BUSINESS PHOTOS (BEFORE 2025): Ôm kho hàng, đóng hàng, ship hàng cả ngày */}
        <OldWayBusinessGallery />

        {/* AFTER: MỘT NHÀ THUỐC THEO CÁCH LÀM MỚI */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-[#D5E4E1]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: 11 Actionable items (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#E8FBF0] text-[#128A83] text-xs font-bold">
                  <TrendingUp className="w-3.5 h-3.5 text-[#5BEA68]" />
                  GIAI ĐOẠN HIỆN TẠI (AFTER)
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#162425]">
                  Một nhà thuốc theo cách làm mới
                </h3>
                <p className="text-sm text-[#5A6F6C]">
                  Tôi bắt đầu đưa công nghệ vào hoạt động thực tế mỗi ngày:
                </p>
              </div>

              {/* 11 Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {afterList.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F2F8F6] hover:bg-[#E8FBF0] border border-[#D5E4E1] transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#5BEA68] shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-[#162425]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Real Transformation Photo (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-md border border-[#D5E4E1] group">
                <img
                  src={IMAGES.transformation}
                  alt="Dược sĩ Diễm Phúc đồng hành và phát triển nhà thuốc hiện đại"
                  className="w-full h-auto object-cover max-h-[380px] group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="p-3 bg-[#172223] text-white text-xs font-semibold text-center">
                  Nhà Thuốc Minh Khôi – Ứng dụng công nghệ & phụng sự cộng đồng
                </div>
              </div>

              {/* Crucial Message Box */}
              <div className="p-5 rounded-xl bg-[#F2F8F6] border border-[#D5E4E1] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#128A83]">
                  <HeartHandshake className="w-4 h-4 text-[#5BEA68]" />
                  <span>NGUYÊN TẮC CỐT LÕI:</span>
                </div>
                <blockquote className="text-xs sm:text-sm font-semibold text-[#162425] leading-relaxed italic">
                  “Công nghệ làm những công việc công nghệ nên làm. Người dược sĩ dành nhiều thời gian hơn cho những việc con người làm tốt nhất: lắng nghe, tư vấn, chăm sóc và xây dựng niềm tin.”
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* MARKETING CAMPAIGNS & PROMOTIONAL DESIGNS SHOWCASE */}
        <MarketingCampaignsGallery />
      </div>
    </section>
  );
};
