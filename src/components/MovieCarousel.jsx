import { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { animateMovieCarousel } from '../animations/gsapAnimations';

const movies = [
  { id: 1, title: 'Stellar Odyssey', rating: 8.9, image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop' },
  { id: 2, title: 'Neon Dreams', rating: 9.2, image: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop' },
  { id: 3, title: 'Shadow Protocol', rating: 8.5, image: 'https://images.unsplash.com/photo-1571847140471-1d7766e825ea?w=400&h=600&fit=crop' },
  { id: 4, title: 'Quantum Edge', rating: 9.0, image: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=600&fit=crop' },
  { id: 5, title: 'The Last Dawn', rating: 8.7, image: 'https://images.unsplash.com/photo-1574267432644-f610a13ad0c7?w=400&h=600&fit=crop' },
  { id: 6, title: 'Electric Hearts', rating: 8.8, image: 'https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=400&h=600&fit=crop' },
  { id: 7, title: 'Void Runner', rating: 9.1, image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=600&fit=crop' },
  { id: 8, title: 'Crimson Sky', rating: 8.6, image: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=400&h=600&fit=crop' },
  { id: 9, title: 'Digital Phantom', rating: 9.3, image: 'https://images.unsplash.com/photo-1560109947-543149eceb16?w=400&h=600&fit=crop' },
  { id: 10, title: 'Beyond Reality', rating: 8.9, image: 'https://images.unsplash.com/photo-1585951237318-9ea5e175b891?w=400&h=600&fit=crop' },
];

const MovieCarousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    animateMovieCarousel(carouselRef);
  }, []);

  return (
    <section id="movies" ref={carouselRef} className="relative h-screen bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 flex items-center">
        <div className="flex gap-6 px-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="movie-card relative group flex-shrink-0 w-64 h-96 rounded-xl overflow-hidden cursor-pointer"
              style={{ willChange: 'transform' }}
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-white text-sm font-semibold">{movie.rating}</span>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-xl font-bold mb-4">{movie.title}</h3>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                    Book Now
                  </button>
                </div>
              </div>

              <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-cyan-400 rounded-xl transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-cyan-400/50" />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none z-10">
        <h2 className="text-5xl md:text-7xl font-bold text-white/10 mb-4">
          Now Showing
        </h2>
      </div>
    </section>
  );
};

export default MovieCarousel;
