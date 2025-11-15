import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.defaults({ overwrite: 'auto' });
export const animateHero = (titleRef, taglineRef) => {
  if (!titleRef || !titleRef.current) return () => {};
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

  return () => tl.kill();
};

export const animateScrollIndicator = (indicatorRef) => {
  if (!indicatorRef || !indicatorRef.current) return () => {};
  const tween = gsap.to(indicatorRef.current, {
    y: 12,
    duration: 1.8,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
  });
  return () => tween.kill();
};

export const animateMovieCarousel = (carouselRef) => {
  if (!carouselRef || !carouselRef.current) return () => {};
  const root = carouselRef.current;

  // Outer container that holds the inner moving wrapper
  const containerOuter = root.querySelector('.carousel-container');
  if (!containerOuter) return () => {};

  // The inner wrapper (first direct child) is what we'll translate horizontally
  const container = containerOuter.querySelector(':scope > div') || containerOuter;
  const movies = root.querySelectorAll('.movie-card');
  if (!container || movies.length === 0) return () => {};

  // Clean up any previous ScrollTriggers tied to this root to avoid duplicates
  ScrollTrigger.getAll().forEach((t) => {
    try {
      if (t && t.trigger && root.contains(t.trigger)) t.kill();
    } catch (e) {}
  });

  // Calculate how far to move the inner container
  // Instead of pinning (which can create large blank spacer gaps), enable
  // a smooth horizontal scrollable area and add wheel + drag handling so
  // users can scroll posters horizontally in a natural way.
  containerOuter.style.overflowX = 'auto';
  containerOuter.style.webkitOverflowScrolling = 'touch';
  containerOuter.style.scrollBehavior = 'smooth';

  // simple entrance animation for posters
  const entranceTween = gsap.fromTo(movies, {
    opacity: 0.6,
    scale: 0.96,
  }, {
    opacity: 1,
    scale: 1,
    stagger: 0.06,
    duration: 0.7,
    ease: 'power3.out',
  });

  // Wheel -> horizontal scroll
  const wheelHandler = (e) => {
    // Only act when the pointer is over the carousel
    e.preventDefault();
    const delta = e.deltaY || e.wheelDelta || -e.detail;
    const target = containerOuter.scrollLeft + delta;
    gsap.to(containerOuter, { scrollLeft: target, duration: 0.6, ease: 'power3.out' });
  };

  // Pointer drag (mouse/touch) to pan horizontally
  let isDown = false;
  let startX = 0;
  let startScroll = 0;

  const pointerDown = (e) => {
    isDown = true;
    startX = e.touches ? e.touches[0].clientX : e.clientX;
    startScroll = containerOuter.scrollLeft;
    containerOuter.classList.add('dragging');
  };

  const pointerMove = (e) => {
    if (!isDown) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const walk = (x - startX);
    containerOuter.scrollLeft = startScroll - walk;
  };

  const pointerUp = () => {
    isDown = false;
    containerOuter.classList.remove('dragging');
  };

  // Attach listeners
  containerOuter.addEventListener('wheel', wheelHandler, { passive: false });
  containerOuter.addEventListener('pointerdown', pointerDown);
  window.addEventListener('pointermove', pointerMove);
  window.addEventListener('pointerup', pointerUp);
  // also support touch events for older browsers
  containerOuter.addEventListener('touchstart', pointerDown, { passive: true });
  containerOuter.addEventListener('touchmove', pointerMove, { passive: false });
  containerOuter.addEventListener('touchend', pointerUp);

  // Return cleanup
  return () => {
    try { entranceTween.kill(); } catch (e) {}
    try { containerOuter.removeEventListener('wheel', wheelHandler); } catch (e) {}
    try { containerOuter.removeEventListener('pointerdown', pointerDown); } catch (e) {}
    try { window.removeEventListener('pointermove', pointerMove); } catch (e) {}
    try { window.removeEventListener('pointerup', pointerUp); } catch (e) {}
    try { containerOuter.removeEventListener('touchstart', pointerDown); } catch (e) {}
    try { containerOuter.removeEventListener('touchmove', pointerMove); } catch (e) {}
    try { containerOuter.removeEventListener('touchend', pointerUp); } catch (e) {}
    // ensure no lingering ScrollTriggers related to this root
    ScrollTrigger.getAll().forEach((t) => { try { if (t && t.trigger && root.contains(t.trigger)) t.kill(); } catch (e) {} });
  };
};

export const animateFeatures = (featuresRef) => {
  if (!featuresRef || !featuresRef.current) return () => {};
  const cards = featuresRef.current.querySelectorAll('.feature-card');

  const tween = gsap.from(cards, {
    scrollTrigger: {
      trigger: featuresRef.current,
      start: 'top 65%',
      end: 'top 35%',
      scrub: 0.5,
      toggleActions: 'play none none reverse',
      invalidateOnRefresh: true,
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

  return () => {
    try { tween.kill(); } catch (e) {}
    ScrollTrigger.getAll().forEach((t) => { try { if (t && t.trigger && featuresRef.current.contains(t.trigger)) t.kill(); } catch (e) {} });
  };
};

export const createScrollProgress = () => {
  const tween = gsap.to('.progress-bar', {
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
  return () => { try { tween.kill(); } catch (e) {} };
};

export const animateNavbar = (navRef) => {
  if (!navRef || !navRef.current) return () => {};
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: 'body',
      start: 'top -50',
      end: '+=100',
      scrub: 0.5,
      toggleActions: 'play none none reverse',
      invalidateOnRefresh: true,
    },
  });

  tl.to(navRef.current, {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    backdropFilter: 'blur(10px)',
    borderBottomColor: 'rgba(6, 182, 212, 0.3)',
    duration: 0.5,
  }, 0);

  return () => { try { tl.kill(); } catch (e) {} };
};

export const animateHeroExit = () => {
  const tween = gsap.to('body', {
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'bottom center',
      end: 'bottom top',
      scrub: 1,
    },
    backgroundColor: '#000',
    ease: 'none',
  });
  return () => { try { tween.kill(); } catch (e) {} };
};


