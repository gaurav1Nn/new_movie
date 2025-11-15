// import { useEffect, useRef } from 'react';
// import { Ticket, Armchair, Gift, Zap } from 'lucide-react';
// import { animateFeatures } from '../animations/gsapAnimations';

// const features = [
//   {
//     icon: Ticket,
//     title: 'Easy Booking',
//     description: 'Book tickets in seconds with our streamlined, user-friendly interface designed for speed and convenience.',
//   },
//   {
//     icon: Armchair,
//     title: 'Best Seat Selection',
//     description: 'Choose your perfect spot with our interactive seat map featuring real-time availability and recommendations.',
//   },
//   {
//     icon: Gift,
//     title: 'Exclusive Deals',
//     description: 'Access member-only discounts, early bird offers, and special promotions on the latest blockbusters.',
//   },
//   {
//     icon: Zap,
//     title: 'Quick Payments',
//     description: 'Lightning-fast checkout with secure payment options including cards, wallets, and instant refunds.',
//   },
// ];

// const Features = () => {
//   const featuresRef = useRef(null);

//   useEffect(() => {
//     animateFeatures(featuresRef);
//   }, []);

//   return (
//     <section id="features" ref={featuresRef} className="relative py-40 bg-black overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

//       <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl" style={{ animation: 'float 10s ease-in-out infinite' }} />
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl" style={{ animation: 'float 12s ease-in-out infinite 2s' }} />

//       <div className="relative max-w-7xl mx-auto px-6">
//         <div className="text-center mb-24">
//           <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 tracking-tighter">
//             Why Choose BookSmart
//           </h2>
//           <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
//             Experience cinema booking reimagined with features designed to make your movie-going seamless and delightful
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
//           {features.map((feature, index) => {
//             const Icon = feature.icon;
//             return (
//               <div
//                 key={index}
//                 className="feature-card group relative overflow-hidden rounded-2xl cursor-pointer"
//                 style={{ willChange: 'transform, box-shadow' }}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-950/60 to-black/80 backdrop-blur-xl border border-gray-800/50 group-hover:border-cyan-400/30 transition-all duration-500" />

//                 <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-600/0 group-hover:from-cyan-500/20 group-hover:to-purple-600/15 transition-all duration-500" />

//                 <div className="relative p-8 h-full flex flex-col justify-between">
//                   <div>
//                     <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 p-0.5 group-hover:scale-110 transition-transform duration-500" style={{ willChange: 'transform' }}>
//                       <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
//                         <Icon className="w-7 h-7 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
//                       </div>
//                     </div>

//                     <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
//                       {feature.title}
//                     </h3>
//                     <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
//                       {feature.description}
//                     </p>
//                   </div>

//                   <div className="mt-6 h-1 bg-gradient-to-r from-cyan-500 via-purple-600 to-cyan-500 rounded-full w-0 group-hover:w-full transition-all duration-500" />
//                 </div>

//                 <div className="absolute inset-0 rounded-2xl shadow-2xl shadow-cyan-500/0 group-hover:shadow-cyan-500/30 transition-all duration-500 pointer-events-none" />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;

import { useEffect, useRef } from 'react';
import { Ticket, Armchair, Gift, Zap } from 'lucide-react';
import { animateFeatures } from '../animations/gsapAnimations';

const features = [
  {
    icon: Ticket,
    title: 'Easy Booking',
    description: 'Book tickets in seconds with our streamlined, user-friendly interface designed for speed and convenience.',
  },
  {
    icon: Armchair,
    title: 'Best Seat Selection',
    description: 'Choose your perfect spot with our interactive seat map featuring real-time availability and recommendations.',
  },
  {
    icon: Gift,
    title: 'Exclusive Deals',
    description: 'Access member-only discounts, early bird offers, and special promotions on the latest blockbusters.',
  },
  {
    icon: Zap,
    title: 'Quick Payments',
    description: 'Lightning-fast checkout with secure payment options including cards, wallets, and instant refunds.',
  },
];

const Features = () => {
  const featuresRef = useRef(null);

  useEffect(() => {
    animateFeatures(featuresRef);
  }, []);

  return (
    <section id="features" ref={featuresRef} className="relative py-32 bg-black overflow-hidden">
      {/* Darker base gradient for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950" />

      {/* Subtle ambient lighting effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" style={{ animation: 'float 10s ease-in-out infinite' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" style={{ animation: 'float 12s ease-in-out infinite 2s' }} />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header - Enhanced visibility */}
        <div className="text-center mb-20">
          <h2 
            className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 tracking-tighter"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #06b6d4 50%, #a855f7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 30px rgba(6, 182, 212, 0.4))',
            }}
          >
            Why Choose BookSmart
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience cinema booking reimagined with features designed to make your movie-going seamless and delightful
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="feature-card group relative overflow-hidden rounded-3xl cursor-pointer transform transition-all duration-500 hover:scale-105"
                style={{ willChange: 'transform' }}
              >
                {/* Card background with better visibility */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 via-gray-900/90 to-black/90 backdrop-blur-xl border-2 border-gray-700/50 group-hover:border-cyan-400/50 transition-all duration-500" />

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-600/0 group-hover:from-cyan-500/25 group-hover:to-purple-600/20 transition-all duration-500" />

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon container */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 p-[2px] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" style={{ willChange: 'transform' }}>
                      <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div className="mt-8 h-1 bg-gradient-to-r from-cyan-500 via-purple-600 to-cyan-500 rounded-full w-0 group-hover:w-full transition-all duration-700" />
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-3xl shadow-2xl shadow-cyan-500/0 group-hover:shadow-cyan-500/40 transition-all duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;