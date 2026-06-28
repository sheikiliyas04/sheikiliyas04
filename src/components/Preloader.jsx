import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import logoImg from '../assets/logo.jpg';

export default function Preloader({ onComplete }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const duration = 1800; // 1.8 seconds loading
    const intervalTime = 15;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 300);
          return 100;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary"
      initial={{ y: 0 }}
      exit={{ 
        y: '-100%',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Decorative Grid Backdrop */}
        <div className="absolute inset-0 -m-32 grid grid-cols-4 grid-rows-4 gap-4 opacity-5 pointer-events-none">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="border border-white" />
          ))}
        </div>

        {/* Logo Container */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Background Outlined/Faded Logo */}
          <img 
            src={logoImg} 
            alt="KSI Logo Background" 
            className="absolute inset-0 w-full h-full object-contain opacity-20" 
          />

          {/* Foreground Filled Logo (animated upward fill) */}
          <img 
            src={logoImg} 
            alt="KSI Logo" 
            className="absolute inset-0 w-full h-full object-contain"
            style={{
              clipPath: `polygon(0% ${100 - percent}%, 100% ${100 - percent}%, 100% 100%, 0% 100%)`
            }}
          />
        </div>

        {/* Progress Text */}
        <motion.div 
          className="mt-6 flex flex-col items-center gap-1"
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
          <span className="font-sans text-[10px] tracking-[0.3em] text-white-custom/50 uppercase">
            System Initializing
          </span>
          <span className="font-display text-sm font-medium text-white-custom tracking-wider">
            {Math.min(100, Math.floor(percent))}%
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
