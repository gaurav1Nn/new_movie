import { useEffect, useRef } from 'react';
import { animateHero, animateHeroExit } from '../animations/gsapAnimations';
import ScrollIndicator from './ScrollIndicator';

const Hero = () => {
  const titleRef = useRef(null);
  const taglineRef = useRef(null);

  useEffect(() => {
    animateHero(titleRef, taglineRef);
    animateHeroExit();
  }, []);

  return (
    <section className="hero-section relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-cyan-500/25 rounded-full blur-3xl" style={{ animation: 'float 8s ease-in-out infinite' }} />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/25 rounded-full blur-3xl" style={{ animation: 'float 10s ease-in-out infinite 2s' }} />
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" style={{ animation: 'float 12s ease-in-out infinite 4s' }} />
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl">
        <h1
          ref={titleRef}
          className="text-7xl sm:text-8xl md:text-9xl font-black text-white mb-4 tracking-tighter leading-none"
          style={{
            textShadow: '0 0 60px rgba(6, 182, 212, 0.6), 0 0 30px rgba(168, 85, 247, 0.4), 0 0 100px rgba(6, 182, 212, 0.3)',
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: '-0.02em',
          }}
        >
          BookSmart
        </h1>
        <p
          ref={taglineRef}
          className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light tracking-wide mb-8"
          style={{ letterSpacing: '0.05em' }}
        >
          Your Cinema, Your Way
        </p>
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default Hero;
