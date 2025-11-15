import { useEffect, useState } from 'react';
import { Film } from 'lucide-react';
import { gsap } from 'gsap';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        gsap.to('.loading-screen', {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            onComplete();
          },
        });
      }, 500);
    }
  }, [progress, onComplete]);

  return (
    <div className="loading-screen fixed inset-0 z-[200] bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Film className="w-20 h-20 text-cyan-400 animate-pulse" />
            <div className="absolute inset-0 blur-xl bg-cyan-400/50" />
          </div>
        </div>

        <h2 className="text-4xl font-bold text-white mb-8">BookSmart</h2>

        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-gray-400 mt-4">{progress}%</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
