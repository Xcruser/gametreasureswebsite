'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/utils/cn';
import { 
  FaGamepad, 
  FaDice, 
  FaTrophy, 
  FaChess, 
  FaGhost,
  FaCoins
} from 'react-icons/fa';

// Vordefinierte Gaming Icons
export const GAMING_ICONS = [
  <FaGamepad key="gamepad" className="text-white/20" style={{ fontSize: '2.5rem' }} />,
  <FaDice key="dice" className="text-white/20" style={{ fontSize: '2.5rem' }} />,
  <FaTrophy key="trophy" className="text-white/20" style={{ fontSize: '2.5rem' }} />,
  <FaChess key="chess" className="text-white/20" style={{ fontSize: '2.5rem' }} />,
  <FaGhost key="ghost" className="text-white/20" style={{ fontSize: '2.5rem' }} />,
  <FaCoins key="coins" className="text-white/20" style={{ fontSize: '2.5rem' }} />,
];

interface IconPosition {
  top: string;
  left: string;
  animationDelay: string;
}

interface AnimatedBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  // Gradient Optionen
  gradientColors?: string[];
  gradientDirection?: 'to-r' | 'to-l' | 'to-t' | 'to-b' | 'to-tr' | 'to-tl' | 'to-br' | 'to-bl';
  // Icon Optionen
  icons?: React.ReactNode[];
  iconCount?: number;
  iconOpacity?: number;
  // Animation Optionen
  animationType?: 'float' | 'spin' | 'bounce' | 'gaming';
}

export function AnimatedBackground({
  className,
  children,
  gradientColors = ['#0f172a', '#1e293b'],
  gradientDirection = 'to-br',
  icons = [],
  iconCount = 10,
  iconOpacity = 0.1,
  animationType = 'float',
}: AnimatedBackgroundProps) {
  const [iconPositions, setIconPositions] = useState<IconPosition[]>([]);

  // Generiere die Positionen beim ersten Render
  useEffect(() => {
    const positions = Array.from({ length: iconCount }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
    }));
    setIconPositions(positions);
  }, [iconCount]);

  // Konvertiere die Richtung in einen CSS-Wert
  const getGradientDirection = (dir: string) => {
    const dirMap: Record<string, string> = {
      'to-r': '90deg',
      'to-l': '270deg',
      'to-t': '0deg',
      'to-b': '180deg',
      'to-tr': '45deg',
      'to-tl': '315deg',
      'to-br': '135deg',
      'to-bl': '225deg',
    };
    return dirMap[dir] || '135deg';
  };

  // Wenn keine Icons angegeben sind und Gaming-Animation gewählt ist,
  // verwende die Gaming Icons
  const displayIcons = icons.length > 0 ? icons : (
    animationType === 'gaming' ? GAMING_ICONS : icons
  );

  return (
    <div 
      className={cn(
        'relative w-full h-full overflow-hidden bg-[#0f172a]',
        className
      )}
      style={{
        background: `linear-gradient(${getGradientDirection(gradientDirection)}, ${gradientColors[0]}, ${gradientColors[1]})`,
      }}
    >
      {/* Animierte Icons */}
      {displayIcons.length > 0 && iconPositions.map((position, i) => {
        const Icon = displayIcons[i % displayIcons.length];
        
        return (
          <div
            key={i}
            className="absolute transition-all duration-[3000ms]"
            style={{
              top: position.top,
              left: position.left,
              opacity: iconOpacity,
              transform: 'translate(-50%, -50%)',
              willChange: 'transform',
              animationDelay: position.animationDelay,
            }}
          >
            {Icon}
          </div>
        );
      })}

      {/* Content */}
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}

      {/* Gaming Animationen */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) rotate(0deg); }
          50% { transform: translate(-50%, -50%) translate(0, -20px) rotate(180deg); }
        }
        
        .absolute {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
