// import { useLayoutEffect, useRef } from 'react';
// import { Star } from 'lucide-react';
// import { animateMovieCarousel } from '../animations/gsapAnimations';

// const movies = [
//   { id: 1, title: 'Stellar Odyssey', rating: 8.9, image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop' },
//   { id: 2, title: 'Neon Dreams', rating: 9.2, image: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop' },
//   { id: 3, title: 'Shadow Protocol', rating: 8.5, image: 'https://images.unsplash.com/photo-1571847140471-1d7766e825ea?w=400&h=600&fit=crop' },
//   { id: 4, title: 'Quantum Edge', rating: 9.0, image: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=600&fit=crop' },
//   { id: 5, title: 'The Last Dawn', rating: 8.7, image: 'https://images.unsplash.com/photo-1574267432644-f610a13ad0c7?w=400&h=600&fit=crop' },
//   { id: 6, title: 'Electric Hearts', rating: 8.8, image: 'https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=400&h=600&fit=crop' },
//   { id: 7, title: 'Void Runner', rating: 9.1, image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=600&fit=crop' },
//   { id: 8, title: 'Crimson Sky', rating: 8.6, image: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=400&h=600&fit=crop' },
//   { id: 9, title: 'Digital Phantom', rating: 9.3, image: 'https://images.unsplash.com/photo-1560109947-543149eceb16?w=400&h=600&fit=crop' },
//   { id: 10, title: 'Beyond Reality', rating: 8.9, image: 'https://images.unsplash.com/photo-1585951237318-9ea5e175b891?w=400&h=600&fit=crop' },
// ];

// const MovieCarousel = () => {
//   const carouselRef = useRef(null);

//   useLayoutEffect(() => {
//     // animateMovieCarousel returns a cleanup function — use it
//     const cleanup = animateMovieCarousel(carouselRef);
//     return () => {
//       if (typeof cleanup === 'function') cleanup();
//     };
//   }, []);

//   return (
//     <section id="movies" ref={carouselRef} className="relative h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 overflow-hidden">
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen blur-3xl" />
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen blur-3xl" />
//       </div>

//       <div className="carousel-container absolute inset-0 flex items-center">
//         <div className="flex gap-6 px-6 py-20">
//           {movies.map((movie) => (
//             <div
//               key={movie.id}
//               className="movie-card relative group flex-shrink-0 w-72 h-96 rounded-2xl overflow-hidden cursor-pointer shadow-2xl"
//               style={{ willChange: 'transform, opacity' }}
//             >
//               <img
//                 src={movie.image}
//                 alt={movie.title}
//                 loading="lazy"
//                 decoding="async"
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

//               <div className="absolute top-4 right-4 flex items-center gap-1 px-4 py-2 bg-black/80 backdrop-blur-xl rounded-full border border-white/20 group-hover:border-cyan-400/50 transition-all duration-300">
//                 <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
//                 <span className="text-white text-sm font-semibold">{movie.rating}</span>
//               </div>

//               <div className="absolute inset-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
//                 <div className="p-6 pt-12 bg-gradient-to-t from-black via-black/80 to-transparent">
//                   <h3 className="text-white text-xl font-bold mb-3 line-clamp-2">{movie.title}</h3>
//                   <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/60 transition-all duration-300 hover:scale-105 active:scale-95">
//                     Book Now
//                   </button>
//                 </div>
//               </div>

//               <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-cyan-400/50 rounded-2xl transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-cyan-400/40 pointer-events-none" />
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="absolute inset-0 flex items-center justify-start pointer-events-none z-10 px-8">
//         <div className="max-w-xl ml-8 bg-gradient-to-r from-black/50 via-transparent to-transparent p-6 rounded-lg">
//           <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight">
//             Featured
//           </h2>
//           <p className="text-xl md:text-2xl text-gray-300 mt-2">Now Showing — curated picks</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MovieCarousel;



import { useLayoutEffect, useRef, memo } from 'react';
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

const MovieCard = memo(({ movie }) => (
  <article
    className="movie-card relative group flex-shrink-0 w-72 h-96 rounded-2xl overflow-hidden cursor-pointer shadow-2xl transform-gpu"
    style={{ willChange: 'transform, opacity' }}
    role="listitem"
    aria-label={`${movie.title} - Rating: ${movie.rating}`}
  >
    <img
      src={movie.image}
      alt={`Movie poster for ${movie.title}`}
      loading="lazy"
      decoding="async"
      width={288}
      height={384}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
      onError={(e) => {
        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="288" height="384" fill="%23374151"%3E%3Crect width="288" height="384" /%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23fff"%3EImage not available%3C/text%3E%3C/svg%3E';
      }}
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

    <div className="absolute top-4 right-4 flex items-center gap-1 px-4 py-2 bg-black/80 backdrop-blur-xl rounded-full border border-white/20 group-hover:border-cyan-400/50 transition-all duration-300">
      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" aria-hidden="true" />
      <span className="text-white text-sm font-semibold">{movie.rating}</span>
    </div>

    <div className="absolute inset-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
      <div className="p-6 pt-12 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-auto">
        <h3 className="text-white text-xl font-bold mb-3 line-clamp-2">{movie.title}</h3>
        <button 
          className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/60 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
          aria-label={`Book tickets for ${movie.title}`}
          type="button"
        >
          Book Now
        </button>
      </div>
    </div>

    <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-cyan-400/50 rounded-2xl transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-cyan-400/40 pointer-events-none" />
  </article>
));

MovieCard.displayName = 'MovieCard';

const MovieCarousel = () => {
  const carouselRef = useRef(null);

  useLayoutEffect(() => {
    const cleanup = animateMovieCarousel(carouselRef);
    return () => {
      if (typeof cleanup === 'function') cleanup();
    };
  }, []);

  return (
    <section 
      id="movies" 
      ref={carouselRef} 
      className="relative h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 overflow-hidden"
      aria-label="Movie carousel"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Carousel container */}
      <div className="carousel-container absolute inset-0 flex items-center">
        <div className="flex gap-6 px-6 py-20" role="list">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>

      {/* Title section */}
      <div className="absolute inset-0 flex items-center justify-start pointer-events-none z-10 px-8">
        <header className="max-w-xl ml-8 bg-gradient-to-r from-black/50 via-transparent to-transparent p-6 rounded-lg">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight">
            Featured
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mt-2">Now Showing — curated picks</p>
        </header>
      </div>
    </section>
  );
};

export default memo(MovieCarousel);