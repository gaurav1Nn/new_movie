
// import React from 'react';

// const Hero = () => {
//   return (
//     <section className="relative h-screen flex items-center justify-center overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

//       <div className="absolute inset-0 opacity-40">
//         <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-cyan-500/25 rounded-full blur-3xl" />
//         <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/25 rounded-full blur-3xl" />
//         <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
//       </div>

//       <div className="relative z-10 text-center px-6 max-w-6xl">
//         <h1
//           className="text-7xl sm:text-8xl md:text-9xl font-black text-white mb-4 tracking-tighter leading-none"
//           style={{
//             textShadow: '0 0 60px rgba(6, 182, 212, 0.6), 0 0 30px rgba(168, 85, 247, 0.4), 0 0 100px rgba(6, 182, 212, 0.3)',
//             fontFamily: "'Poppins', sans-serif",
//             letterSpacing: '-0.02em',
//           }}
//         >
//           BookSmart
//         </h1>
//         <p
//           className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light tracking-wide mb-8"
//           style={{ letterSpacing: '0.05em' }}
//         >
//           Your Cinema, Your Way
//         </p>
//       </div>

//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400">
//         <svg
//           className="w-6 h-6 animate-bounce"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M19 9l-7 7-7-7"
//           />
//         </svg>
//       </div>
//     </section>
//   );
// };

// export default Hero;


 // correct code 

 import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      {/* Animated background blobs */}
      <div className="absolute inset-0 opacity-40">
        <div 
          className="absolute top-1/3 left-1/4 w-80 h-80 bg-cyan-500/25 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '0s' }}
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/25 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div 
          className="absolute top-1/2 right-1/3 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '4s' }}
        />
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-6xl">
        {/* Animated title */}
        <h1
          className="text-7xl sm:text-8xl md:text-9xl font-black text-white mb-4 tracking-tighter leading-none animate-fadeInUp"
          style={{
            textShadow: '0 0 60px rgba(6, 182, 212, 0.6), 0 0 30px rgba(168, 85, 247, 0.4), 0 0 100px rgba(6, 182, 212, 0.3)',
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: '-0.02em',
            background: 'linear-gradient(45deg, #06b6d4, #a855f7, #06b6d4)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'fadeInUp 1s ease-out, gradientShift 5s ease infinite',
          }}
        >
          BookSmart
        </h1>
        
        {/* Animated subtitle */}
        <p
          className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light tracking-wide mb-8 animate-fadeInUp"
          style={{ 
            letterSpacing: '0.05em',
            animationDelay: '0.3s',
            opacity: 0,
            animationFillMode: 'forwards'
          }}
        >
          Your Cinema, Your Way
        </p>

        {/* Animated CTA button */}
        <button
          className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full text-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 animate-fadeInUp"
          style={{
            animationDelay: '0.6s',
            opacity: 0,
            animationFillMode: 'forwards'
          }}
        >
          Explore Now
        </button>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400 animate-fadeIn">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-400 animate-pulse">Scroll Down</span>
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }

        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes gridMove {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50px);
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 1.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;