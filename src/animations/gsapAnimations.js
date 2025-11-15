import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateHero = (titleRef, taglineRef) => {
  const tl = gsap.timeline();

  tl.from(titleRef.current, {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: 'power4.out',
  })
  .from(taglineRef.current, {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  }, '-=0.6');

  return tl;
};

export const animateScrollIndicator = (indicatorRef) => {
  gsap.to(indicatorRef.current, {
    y: 10,
    duration: 1.5,
    ease: 'power1.inOut',
    repeat: -1,
    yoyo: true,
  });
};

export const animateMovieCarousel = (carouselRef) => {
  const movies = carouselRef.current.querySelectorAll('.movie-card');

  ScrollTrigger.create({
    trigger: carouselRef.current,
    start: 'top top',
    end: '+=300%',
    pin: true,
    scrub: 1,
    onUpdate: (self) => {
      gsap.to(movies, {
        x: -self.progress * (movies.length * 280),
        ease: 'none',
      });
    },
  });
};

export const animateFeatures = (featuresRef) => {
  const cards = featuresRef.current.querySelectorAll('.feature-card');

  gsap.from(cards, {
    scrollTrigger: {
      trigger: featuresRef.current,
      start: 'top 70%',
      toggleActions: 'play none none reverse',
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out',
  });
};

export const createScrollProgress = () => {
  gsap.to('.progress-bar', {
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.3,
    },
    width: '100%',
    ease: 'none',
  });
};

export const animateNavbar = (navRef) => {
  ScrollTrigger.create({
    start: 'top -80',
    end: 99999,
    toggleClass: { targets: navRef.current, className: 'navbar-scrolled' },
  });
};
