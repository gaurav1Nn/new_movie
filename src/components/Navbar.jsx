import { useEffect, useRef } from 'react';
import { Film } from 'lucide-react';
import { animateNavbar } from '../animations/gsapAnimations';

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    animateNavbar(navRef);
  }, []);

  return (
    <>
      <div className="progress-bar fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 z-[100]" style={{ width: '0%' }} />
      <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Film className="w-8 h-8 text-cyan-400" />
            <span className="text-2xl font-bold text-white">BookSmart</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#movies" className="text-gray-300 hover:text-cyan-400 transition-colors">Movies</a>
            <a href="#features" className="text-gray-300 hover:text-cyan-400 transition-colors">Features</a>
            <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
              Sign In
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
