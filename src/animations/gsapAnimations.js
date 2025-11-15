import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.defaults({ overwrite: 'auto' });

export const animateHero = (titleRef, taglineRef) => {
  const tl = gsap.timeline({ delay: 0.3 });

  tl.from(titleRef.current, {
    y: 120,
    opacity: 0,
    duration: 1.4,
    ease: 'elastic.out(1, 0.5)',
  }, 0)
  .from(taglineRef.current, {
    y: 60,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out',
  }, 0.3);

  return tl;
};

export const animateScrollIndicator = (indicatorRef) => {
  gsap.to(indicatorRef.current, {
    y: 12,
    duration: 1.8,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
  });
};

export const animateMovieCarousel = (carouselRef) => {
  const container = carouselRef.current.querySelector('.carousel-container');
  const movies = carouselRef.current.querySelectorAll('.movie-card');

  if (!container || movies.length === 0) return;

  const trigger = ScrollTrigger.create({
    trigger: carouselRef.current,
    start: 'top center',
    end: () => `+=${window.innerHeight * 3}`,
    pin: true,
    pinSpacing: true,
    scrub: 0.8,
    markers: false,
  });

  gsap.to(container, {
    x: () => -(container.scrollWidth - window.innerWidth + 100),
    ease: 'power2.inOut',
    scrollTrigger: trigger,
  });

  gsap.from(movies, {
    opacity: 0.6,
    scale: 0.95,
    stagger: 0.1,
    scrollTrigger: {
      trigger: carouselRef.current,
      start: 'top center',
      scrub: 1,
      toggleActions: 'play none none none',
    },
  });
};

export const animateFeatures = (featuresRef) => {
  const cards = featuresRef.current.querySelectorAll('.feature-card');

  gsap.from(cards, {
    scrollTrigger: {
      trigger: featuresRef.current,
      start: 'top 65%',
      end: 'top 35%',
      scrub: 0.5,
      toggleActions: 'play none none reverse',
    },
    y: 80,
    opacity: 0,
    duration: 1.2,
    stagger: {
      each: 0.15,
      from: 'start',
    },
    ease: 'back.out(1.7)',
  });

  cards.forEach((card) => {
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 70%',
        end: 'top 30%',
        scrub: 1,
        toggleActions: 'play none none reverse',
      },
      boxShadow: '0 20px 60px rgba(6, 182, 212, 0.3)',
      ease: 'power2.inOut',
    });
  });
};

export const createScrollProgress = () => {
  gsap.to('.progress-bar', {
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.5,
      onUpdate: (self) => {
        gsap.set('.progress-bar', { scaleX: self.progress });
      },
    },
    ease: 'none',
  });
};

export const animateNavbar = (navRef) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: 'body',
      start: 'top -50',
      end: '+=100',
      scrub: 0.5,
      toggleActions: 'play none none reverse',
    },
  });

  tl.to(navRef.current, {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    backdropFilter: 'blur(10px)',
    borderBottomColor: 'rgba(6, 182, 212, 0.3)',
    duration: 0.5,
  }, 0);
};

export const animateHeroExit = () => {
  gsap.to('body', {
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'bottom center',
      end: 'bottom top',
      scrub: 1,
    },
    backgroundColor: '#000',
    ease: 'none',
  });
};
