import React from 'react';
import { Phone, Shield, ArrowUp, Sparkles, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#172223] text-white border-t border-[#334546] pt-16 pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          {/* Brand & Identity (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#24B7AB] flex items-center justify-center font-black text-lg text-white">
                DP
              </div>
              <div>
                <h4 className="text-lg font-bold tracking-wide text-white uppercase">
                  DƯỢC SĨ DIỄM PHÚC
                </h4>
                <p className="text-xs text-[#5BEA68] font-semibold">
                  Nhà Thuốc Minh Khôi
                </p>
              </div>
            </div>
            <p className="text-sm text-[#AABAB7]/80 leading-relaxed max-w-sm">
              Dược sĩ giỏi công nghệ – Đồng hành xây dựng nhà thuốc hiện đại. Kết nối, đào tạo và chuyển đổi số cho thế hệ dược sĩ thời đại mới.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <Phone className="w-4 h-4 text-[#5BEA68]" />
              <span>Điện thoại/Zalo:</span>
              <a href={CONTACT_INFO.telUrl} className="text-[#5BEA68] hover:underline font-mono font-bold">
                {CONTACT_INFO.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Quick Links Menu (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="text-xs font-bold tracking-wider text-[#5BEA68] uppercase">
              ĐIỀU HƯỚNG NHANH
            </h5>
            <ul className="space-y-2 text-sm text-[#AABAB7]/80">
              <li>
                <a href="#hero" className="hover:text-[#5BEA68] transition-colors">
                  Giới thiệu & Triết lý nghề
                </a>
              </li>
              <li>
                <a href="#hanh-trinh" className="hover:text-[#5BEA68] transition-colors">
                  Hành trình 2007 – 2019
                </a>
              </li>
              <li>
                <a href="#buoc-ngoat" className="hover:text-[#5BEA68] transition-colors">
                  Bước ngoặt chuyển hóa & Công nghệ
                </a>
              </li>
              <li>
                <a href="#chuyen-doi" className="hover:text-[#5BEA68] transition-colors">
                  Từ thử thách đến mô hình mới
                </a>
              </li>
              <li>
                <a href="#mo-hinh-amhapy" className="hover:text-[#5BEA68] transition-colors">
                  Vì sao lựa chọn Affiliate AmHapy
                </a>
              </li>
              <li>
                <a href="#thanh-qua" className="hover:text-[#5BEA68] transition-colors">
                  Cộng đồng 100 Dược Sĩ & Kết nối
                </a>
              </li>
            </ul>
          </div>

          {/* Community & Back to Top (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h5 className="text-xs font-bold tracking-wider text-[#5BEA68] uppercase">
              CỘNG ĐỒNG GIAO LƯU
            </h5>
            <a
              href={CONTACT_INFO.zaloGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#128A83] hover:bg-[#0C1516] text-white text-xs font-bold transition-all shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Tham gia Zalo Group</span>
            </a>
            <div>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs text-[#AABAB7]/60 hover:text-white transition-colors"
              >
                <ArrowUp className="w-4 h-4 text-[#5BEA68]" />
                <span>Lên đầu trang</span>
              </button>
            </div>
          </div>
        </div>

        {/* Medical & Knowledge Disclaimer */}
        <div className="py-6 border-b border-white/10">
          <div className="flex items-start gap-3 text-xs text-[#AABAB7]/70 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
            <Shield className="w-4 h-4 text-[#5BEA68] shrink-0 mt-0.5" />
            <p>
              <strong>Khuyến cáo y khoa:</strong> “Nội dung trên website mang tính chia sẻ kiến thức, kinh nghiệm và định hướng chăm sóc sức khỏe. Không thay thế việc khám, chẩn đoán hoặc điều trị bởi bác sĩ và cơ sở y tế chuyên môn.”
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#AABAB7]/50 gap-4">
          <div>
            © 2026 Dược sĩ Diễm Phúc. All Rights Reserved.
          </div>
          <div className="text-center sm:text-right">
            Đồng hành cùng Dược sĩ Việt Nam xây dựng nhà thuốc hiện đại
          </div>
        </div>
      </div>
    </footer>
  );
};
