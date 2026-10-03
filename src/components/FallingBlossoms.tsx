import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Flower2, EyeOff } from 'lucide-react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  swayAmplitude: number;
  swayFrequency: number;
  angle: number;
  rotation: number;
  rotSpeed: number;
  flip: number;
  flipSpeed: number;
  opacity: number;
  type: 'pink' | 'deepPink' | 'gold' | 'herbal' | 'blossom';
}

interface FallingBlossomsProps {
  initialActive?: boolean;
}

export const FallingBlossoms: React.FC<FallingBlossomsProps> = ({ initialActive = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isActive, setIsActive] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('amhapy_falling_blossoms');
      return saved !== null ? JSON.parse(saved) : initialActive;
    } catch {
      return initialActive;
    }
  });

  const [showTooltip, setShowTooltip] = useState(false);
  const petalsRef = useRef<Petal[]>([]);
  const animFrameId = useRef<number | null>(null);
  const windRef = useRef<{ current: number; target: number }>({ current: 0, target: 0 });

  // Save preference to localStorage
  const toggleActive = useCallback(() => {
    setIsActive((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('amhapy_falling_blossoms', JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  useEffect(() => {
    if (!isActive) {
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
        animFrameId.current = null;
      }
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Number of petals: ~18 on mobile, ~30 on desktop
    const count = width < 768 ? 18 : 30;

    const petalTypes: Petal['type'][] = ['pink', 'pink', 'deepPink', 'pink', 'gold', 'herbal', 'blossom'];

    const createPetal = (initialSpawn = false): Petal => {
      const type = petalTypes[Math.floor(Math.random() * petalTypes.length)];
      return {
        x: Math.random() * (width + 100) - 50,
        // If initial spawn, distribute across the screen height, else above top
        y: initialSpawn ? Math.random() * height : -30 - Math.random() * 50,
        size: type === 'blossom' ? 14 + Math.random() * 8 : 11 + Math.random() * 11,
        speedY: 0.7 + Math.random() * 1.3, // Gentle, slow fall
        speedX: -0.2 + Math.random() * 0.4,
        swayAmplitude: 0.6 + Math.random() * 1.4,
        swayFrequency: 0.015 + Math.random() * 0.02,
        angle: Math.random() * Math.PI * 2,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 1.8,
        flip: Math.random() * Math.PI * 2,
        flipSpeed: 0.02 + Math.random() * 0.035,
        opacity: 0.5 + Math.random() * 0.35,
        type,
      };
    };

    petalsRef.current = Array.from({ length: count }, () => createPetal(true));

    // Gentle wind on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const normalizedX = (e.clientX / width - 0.5) * 1.2;
      windRef.current.target = normalizedX;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Draw single petal shape
    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      
      // 3D tumbling flip
      const scaleY = Math.cos(p.flip);
      ctx.scale(1, Math.abs(scaleY) < 0.1 ? 0.1 : scaleY);

      ctx.globalAlpha = p.opacity;

      if (p.type === 'blossom') {
        // Draw tiny 5-petal flower
        ctx.fillStyle = '#FF97B7';
        for (let i = 0; i < 5; i++) {
          ctx.beginPath();
          ctx.ellipse(0, -p.size * 0.45, p.size * 0.28, p.size * 0.45, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.rotate((72 * Math.PI) / 180);
        }
        // Center pistil
        ctx.beginPath();
        ctx.arc(0, 0, p.size * 0.22, 0, Math.PI * 2);
        ctx.fillStyle = '#FFE082';
        ctx.fill();
      } else {
        // Draw organic petal contour with gradient
        const grad = ctx.createLinearGradient(-p.size / 2, -p.size, p.size / 2, p.size);
        if (p.type === 'deepPink') {
          grad.addColorStop(0, '#FF4B8B');
          grad.addColorStop(0.6, '#FF75A0');
          grad.addColorStop(1, '#FFC2D1');
        } else if (p.type === 'gold') {
          grad.addColorStop(0, '#FFA726');
          grad.addColorStop(0.5, '#FFD54F');
          grad.addColorStop(1, '#FFF9C4');
        } else if (p.type === 'herbal') {
          grad.addColorStop(0, '#10B981');
          grad.addColorStop(0.6, '#34D399');
          grad.addColorStop(1, '#A7F3D0');
        } else {
          // soft pink (default cherry/peach blossom)
          grad.addColorStop(0, '#FF85A2');
          grad.addColorStop(0.5, '#FFAEC0');
          grad.addColorStop(1, '#FFE3EC');
        }

        ctx.fillStyle = grad;

        // Custom teardrop petal with delicate cleft
        ctx.beginPath();
        ctx.moveTo(0, p.size * 0.85); // bottom tip
        ctx.bezierCurveTo(
          -p.size * 0.8, p.size * 0.2, 
          -p.size * 0.85, -p.size * 0.6, 
          -p.size * 0.2, -p.size * 0.95
        );
        ctx.quadraticCurveTo(0, -p.size * 0.75, p.size * 0.2, -p.size * 0.95);
        ctx.bezierCurveTo(
          p.size * 0.85, -p.size * 0.6, 
          p.size * 0.8, p.size * 0.2, 
          0, p.size * 0.85
        );
        ctx.closePath();
        ctx.fill();

        // Subtle petal vein highlight
        ctx.beginPath();
        ctx.moveTo(0, p.size * 0.6);
        ctx.quadraticCurveTo(p.size * 0.05, 0, 0, -p.size * 0.5);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      ctx.restore();
    };

    // Main animation loop
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      // Throttle delta for smooth motion across 60hz / 120hz displays
      const delta = Math.min((currentTime - lastTime) / 16.66, 2.0);
      lastTime = currentTime;

      // Ease wind towards target
      windRef.current.current += (windRef.current.target - windRef.current.current) * 0.03 * delta;
      const wind = windRef.current.current;

      ctx.clearRect(0, 0, width, height);

      const petals = petalsRef.current;
      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];

        // Update kinematics
        p.angle += p.swayFrequency * delta;
        p.y += p.speedY * delta;
        p.x += (Math.sin(p.angle) * p.swayAmplitude + p.speedX + wind) * delta;
        p.rotation += p.rotSpeed * delta;
        p.flip += p.flipSpeed * delta;

        // Draw
        drawPetal(p);

        // Respawn if offscreen bottom or sides
        if (p.y > height + 40 || p.x < -60 || p.x > width + 60) {
          petals[i] = createPetal(false);
          // If blown off side, reposition on the opposite side
          if (p.x < -60) petals[i].x = width + 20;
          if (p.x > width + 60) petals[i].x = -20;
        }
      }

      animFrameId.current = requestAnimationFrame(animate);
    };

    // Pause when tab is hidden to save battery
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (animFrameId.current) {
          cancelAnimationFrame(animFrameId.current);
          animFrameId.current = null;
        }
      } else if (isActive) {
        lastTime = performance.now();
        animFrameId.current = requestAnimationFrame(animate);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    animFrameId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, [isActive]);

  return (
    <>
      {/* Falling Blossoms Canvas (Non-intrusive, pointer-events-none) */}
      <canvas
        ref={canvasRef}
        id="falling-blossoms-canvas"
        className={`fixed inset-0 pointer-events-none z-30 transition-opacity duration-1000 ${
          isActive ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      />

      {/* Floating Blossom Toggle Control (Bottom Left) */}
      <div className="fixed bottom-20 sm:bottom-6 left-4 z-40">
        <div className="relative">
          <button
            onClick={toggleActive}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold transition-all shadow-md backdrop-blur-md border ${
              isActive
                ? 'bg-white/90 hover:bg-white text-[#E91E63] border-[#F8BBD0] hover:scale-105 shadow-pink-100'
                : 'bg-white/70 hover:bg-white text-gray-500 border-gray-200 hover:scale-105'
            }`}
            aria-label={isActive ? 'Tắt hiệu ứng hoa rơi' : 'Bật hiệu ứng hoa rơi'}
            title={isActive ? 'Tắt hiệu ứng hoa rơi' : 'Bật hiệu ứng hoa rơi'}
          >
            <Flower2
              className={`w-4 h-4 transition-transform duration-700 ${
                isActive ? 'text-[#E91E63] animate-spin-slow' : 'text-gray-400'
              }`}
              style={{ animationDuration: '8s' }}
            />
            <span className="hidden md:inline font-semibold">
              {isActive ? 'Hoa rơi' : 'Bật hoa rơi'}
            </span>
          </button>

          {/* Tooltip on hover */}
          {showTooltip && (
            <div className="absolute bottom-full left-0 mb-2 whitespace-nowrap bg-[#172223] text-white text-[11px] px-2.5 py-1 rounded-lg shadow-lg pointer-events-none animate-fade-in font-medium z-50">
              {isActive ? 'Bấm để tắt hiệu ứng hoa rơi nhẹ nhàng' : 'Bấm để bật lại hiệu ứng hoa rơi'}
              <div className="absolute top-full left-4 -mt-1 border-4 border-transparent border-t-[#172223]" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
