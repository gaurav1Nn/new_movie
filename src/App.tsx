import { useEffect, useState } from 'react';
import { createScrollProgress } from './animations/gsapAnimations';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieCarousel from './components/MovieCarousel';
import Features from './components/Features';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      createScrollProgress();
    }
  }, [loading]);

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <MovieCarousel />
      <Features />
    </div>
  );
}

export default App;
