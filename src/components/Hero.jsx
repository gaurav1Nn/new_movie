import { useEffect, useRef } from 'react';
import { animateHero } from '../animations/gsapAnimations';
import ScrollIndicator from './ScrollIndicator';

const Hero = () => {
  const titleRef = useRef(null);
  const taglineRef = useRef(null);

  useEffect(() => {
    animateHero(titleRef, taglineRef);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 text-center px-6">
        <h1
          ref={titleRef}
          className="text-7xl md:text-9xl font-bold text-white mb-6 tracking-tight"
          style={{
            textShadow: '0 0 80px rgba(6, 182, 212, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)',
            fontFamily: "'Poppins', sans-serif"
          }}
        >
          BookSmart
        </h1>
        <p
          ref={taglineRef}
          className="text-2xl md:text-4xl text-gray-300 font-light tracking-wide"
        >
          Your Cinema, Your Way
        </p>
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default Hero;
