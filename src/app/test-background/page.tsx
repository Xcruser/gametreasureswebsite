'use client';

import { AnimatedBackground } from '@/components/ui/AnimatedBackground/AnimatedBackground';
import { FaReact, FaHeart } from 'react-icons/fa';

export default function TestPage() {
  return (
    <div className="w-full h-screen">
      <AnimatedBackground
        gradientColors={['#1e40af', '#3b82f6']}
        icons={[
          <FaReact key="react" className="text-cyan-200" />,
          <FaHeart key="heart" className="text-pink-200" />
        ]}
        iconCount={15}
        iconSize="lg"
        iconOpacity={0.2}
        animationType="float"
        animationSpeed="medium"
      >
        <div className="h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Test Animation</h1>
            <p className="text-xl">Hier sollten animierte Icons zu sehen sein</p>
          </div>
        </div>
      </AnimatedBackground>
    </div>
  );
}
