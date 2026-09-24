import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TimelineSection } from './components/TimelineSection';
import { BreakthroughSection } from './components/BreakthroughSection';
import { TransformationSection } from './components/TransformationSection';
import { WhyAmHapySection } from './components/WhyAmHapySection';
import { NewEraPharmacistSection } from './components/NewEraPharmacistSection';
import { Footer } from './components/Footer';
import { PharmacistToasts } from './components/PharmacistToasts';
import { ZaloGiftModal } from './components/ZaloGiftModal';
import { ShareModal } from './components/ShareModal';
import { FloatingActions } from './components/FloatingActions';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const [isGiftModalOpen, setIsGiftModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [viewerCount, setViewerCount] = useState(48);
  const [hasShownAutoPopup, setHasShownAutoPopup] = useState(false);

  // Requirement: "Có pop up sau khi vào web 10 giây, mời tham gia vào nhóm zalo"
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasShownAutoPopup) {
        setIsGiftModalOpen(true);
        setHasShownAutoPopup(true);
      }
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, [hasShownAutoPopup]);

  // Requirement: "Có hiệu ứng báo view, mắt xem" (live fluctuating realistic viewer counter)
  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCount((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2; // -2 to +2
        const next = prev + delta;
        return Math.max(38, Math.min(65, next));
      });
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative bg-white text-[#162425]">
      {/* Sticky Navigation */}
      <Navbar
        onOpenShare={() => setIsShareModalOpen(true)}
        onOpenGift={() => setIsGiftModalOpen(true)}
        viewerCount={viewerCount}
      />

      {/* Real-time Top-Left Notification Toasts */}
      <PharmacistToasts />

      {/* Main 5-Section Landing Page */}
      <main className="flex-grow">
        {/* Section 1: Hero */}
        <HeroSection onOpenGift={() => setIsGiftModalOpen(true)} />

        {/* Section 2: Hành trình */}
        <TimelineSection />

        {/* Section 3: Bước ngoặt */}
        <BreakthroughSection />

        {/* Section 4: Từ khủng hoảng đến chuyển đổi */}
        <TransformationSection />

        {/* Section 4B: Vì sao tôi lựa chọn mô hình Affiliate AmHapy? */}
        <WhyAmHapySection
          onOpenGift={() => setIsGiftModalOpen(true)}
          onOpenShare={() => setIsShareModalOpen(true)}
        />

        {/* Section 5: Phiên bản dược sĩ tôi đang xây dựng & Grand CTA */}
        <NewEraPharmacistSection
          onOpenGift={() => setIsGiftModalOpen(true)}
          onOpenShare={() => setIsShareModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Right-Side Floating Actions */}
      <FloatingActions
        onOpenGift={() => setIsGiftModalOpen(true)}
        onOpenShare={() => setIsShareModalOpen(true)}
      />

      {/* Mobile Sticky Bottom CTA Bar */}
      <MobileStickyBar onOpenGift={() => setIsGiftModalOpen(true)} />

      {/* 10-Second Auto Popup & Manual Gift Modal */}
      <ZaloGiftModal
        isOpen={isGiftModalOpen}
        onClose={() => setIsGiftModalOpen(false)}
      />

      {/* Social Share Modal with Prepared Message */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />
    </div>
  );
}
