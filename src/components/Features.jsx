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
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />

      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Why Choose BookSmart
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience cinema booking reimagined with features designed to make your movie-going seamless
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="feature-card group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-600/0 group-hover:from-cyan-500/10 group-hover:to-purple-600/10 rounded-2xl transition-all duration-300" />

                <div className="relative">
                  <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 p-0.5">
                    <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute inset-0 rounded-2xl shadow-2xl shadow-cyan-500/0 group-hover:shadow-cyan-500/20 transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
