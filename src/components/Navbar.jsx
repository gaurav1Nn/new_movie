// import { useLayoutEffect, useRef } from 'react';
// import { Film } from 'lucide-react';
// import { animateNavbar, createScrollProgress } from '../animations/gsapAnimations';

// const Navbar = () => {
//   const navRef = useRef(null);

//   useLayoutEffect(() => {
//     const cleanupNav = animateNavbar(navRef);
//     const cleanupProgress = createScrollProgress();
//     return () => {
//       if (typeof cleanupNav === 'function') cleanupNav();
//       if (typeof cleanupProgress === 'function') cleanupProgress();
//     };
//   }, []);

//   return (
//     <>
//       <div className="progress-bar fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 z-[100] origin-left" style={{ width: '0%', transform: 'scaleX(0)' }} />
//       <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
//         <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
//           <div className="flex items-center gap-2 group cursor-pointer">
//             <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300" style={{ willChange: 'transform' }}>
//               <Film className="w-6 h-6 text-white" />
//             </div>
//             <span className="text-2xl font-black text-white group-hover:text-cyan-300 transition-colors duration-300">BookSmart</span>
//           </div>
//           <div className="hidden md:flex items-center gap-8">
//             <a href="#movies" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 font-medium">Movies</a>
//             <a href="#features" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 font-medium">Features</a>
//             <button className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full hover:shadow-2xl hover:shadow-cyan-500/60 transition-all duration-300 hover:scale-105 active:scale-95 font-semibold">
//               Book Tickets
//             </button>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
import React from 'react';
import { Film } from 'lucide-react';

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300">
              <Film className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black text-white group-hover:text-cyan-300 transition-colors duration-300">BookSmart</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#movies" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 font-medium">Movies</a>
            <a href="#features" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 font-medium">Features</a>
            <a 
              href="/book-tickets"
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full hover:shadow-2xl hover:shadow-cyan-500/60 transition-all duration-300 hover:scale-105 active:scale-95 font-semibold"
            >
              Book Tickets
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;