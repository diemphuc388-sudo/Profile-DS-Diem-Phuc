import React, { useState, useEffect } from 'react';
import { Phone, Share2, Gift, Menu, X, Eye, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

interface NavbarProps {
  onOpenShare: () => void;
  onOpenGift: () => void;
  viewerCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenShare, onOpenGift, viewerCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Trang chủ', href: '#hero' },
    { label: 'Hành trình', href: '#hanh-trinh' },
    { label: 'Bước ngoặt', href: '#buoc-ngoat' },
    { label: 'Chuyển đổi', href: '#chuyen-doi' },
    { label: 'Mô hình AmHapy', href: '#mo-hinh-amhapy' },
    { label: 'Thành quả', href: '#thanh-qua' },
    { label: 'Kết nối', href: '#ket-noi' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-2.5 border-b border-[#D5E4E1]'
          : 'bg-white/90 backdrop-blur-sm py-3.5 border-b border-[#D5E4E1]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo / Name */}
        <a href="#hero" className="flex items-center gap-3 group" id="brand-logo-link">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#24B7AB] to-[#172223] flex items-center justify-center text-white font-black text-lg shadow-sm shadow-[#24B7AB]/20 group-hover:scale-105 transition-transform">
            DP
          </div>
          <div>
            <div className="text-base sm:text-lg font-extrabold tracking-tight text-[#162425] group-hover:text-[#24B7AB] transition-colors leading-tight">
              DƯỢC SĨ DIỄM PHÚC
            </div>
            <div className="text-xs text-[#128A83] font-semibold hidden sm:block">
              Nhà Thuốc Minh Khôi • Dược Sĩ Công Nghệ
            </div>
          </div>
        </a>

        {/* Live View Badge */}
        <div 
          id="live-viewers-badge"
          className="hidden md:flex items-center gap-2 px-3 py-1 bg-[#F2F8F6] border border-[#D5E4E1] rounded-full text-xs font-semibold text-[#128A83]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5BEA68] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#5BEA68]"></span>
          </span>
          <Eye className="w-3.5 h-3.5 text-[#24B7AB]" />
          <span><strong className="font-bold text-[#162425]">{viewerCount}</strong> dược sĩ đang xem</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6" id="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-[#5A6F6C] hover:text-[#24B7AB] transition-colors py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-[#24B7AB]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Share Button */}
          <button
            id="nav-share-btn"
            onClick={onOpenShare}
            title="Chia sẻ trang này"
            className="p-2 sm:px-3 sm:py-2 rounded-xl bg-white hover:bg-[#F2F8F6] text-[#162425] hover:text-[#24B7AB] border border-[#D5E4E1] transition-all flex items-center gap-1.5 text-xs font-semibold shadow-xs"
          >
            <Share2 className="w-4 h-4 text-[#24B7AB]" />
            <span className="hidden sm:inline">Chia sẻ</span>
          </button>

          {/* Gift Zalo Button */}
          <button
            id="nav-gift-btn"
            onClick={onOpenGift}
            className="p-2 sm:px-3 sm:py-2 rounded-xl bg-[#F2F8F6] hover:bg-[#E2F1ED] text-[#128A83] border border-[#24B7AB]/30 transition-all flex items-center gap-1.5 text-xs font-bold"
            title="Nhận quà tặng tài liệu AI"
          >
            <Gift className="w-4 h-4 text-[#24B7AB]" />
            <span className="hidden sm:inline">Nhận quà</span>
          </button>

          {/* Main Call / Zalo CTA */}
          <a
            id="nav-cta-btn"
            href={CONTACT_INFO.telUrl}
            className="inline-flex items-center gap-2 bg-[#24B7AB] hover:bg-[#128A83] text-white px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-sm shadow-[#24B7AB]/20 hover:shadow-md transition-all active:scale-95"
          >
            <Phone className="w-4 h-4 text-white" />
            <span>KẾT NỐI NGAY <span className="hidden sm:inline font-mono">– {CONTACT_INFO.phoneDisplay}</span></span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#162425] hover:bg-[#F2F8F6]"
            aria-label="Mở menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div id="mobile-menu-dropdown" className="lg:hidden bg-white border-b border-[#D5E4E1] px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex items-center justify-between pb-2 border-b border-[#D5E4E1] text-xs font-medium text-[#128A83]">
            <span className="flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-[#24B7AB]" />
              Đang có {viewerCount} dược sĩ cùng theo dõi
            </span>
            <span className="px-2 py-0.5 bg-[#F2F8F6] text-[#128A83] rounded text-[11px] font-bold border border-[#24B7AB]/20">
              Trực tuyến
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-[#162425] hover:bg-[#F2F8F6] hover:text-[#24B7AB] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2 border-t border-[#D5E4E1]">
            <a
              href={CONTACT_INFO.zaloGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 px-4 rounded-xl bg-[#24B7AB] hover:bg-[#128A83] text-white text-sm font-bold flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#5BEA68]" />
              Tham Gia Nhóm Zalo Nhận Quà Tặng
            </a>
            <a
              href={CONTACT_INFO.telUrl}
              className="w-full text-center py-2.5 px-4 rounded-xl bg-[#172223] hover:bg-[#0C1516] text-white text-sm font-bold flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#24B7AB]" />
              Gọi Điện Trực Tiếp: {CONTACT_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
