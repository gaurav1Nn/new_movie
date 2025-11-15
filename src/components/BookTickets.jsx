import React, { useState, useEffect } from 'react';
import { Film, Calendar, Clock, MapPin, Users, CreditCard, ArrowLeft, Check } from 'lucide-react';

const BookTickets = () => {
  const [step, setStep] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedTheater, setSelectedTheater] = useState(null);
  
  // Data states - will be populated from backend API
  const [movies, setMovies] = useState([]);
  const [dates, setDates] = useState([]);
  const [theaters, setTheaters] = useState([]);
  const [showtimes, setShowtimes] = useState([]);
  const [seats, setSeats] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch movies on component mount
  useEffect(() => {
    fetchMovies();
  }, []);

  // Fetch dates when movie is selected
  useEffect(() => {
    if (selectedMovie) {
      fetchDates(selectedMovie.id);
    }
  }, [selectedMovie]);

  // Fetch theaters when date is selected
  useEffect(() => {
    if (selectedDate) {
      fetchTheaters(selectedMovie.id, selectedDate.id);
    }
  }, [selectedDate]);

  // Fetch showtimes when theater is selected
  useEffect(() => {
    if (selectedTheater) {
      fetchShowtimes(selectedMovie.id, selectedDate.id, selectedTheater.id);
    }
  }, [selectedTheater]);

  // Fetch seats when time is selected
  useEffect(() => {
    if (selectedTime) {
      fetchSeats(selectedMovie.id, selectedDate.id, selectedTheater.id, selectedTime);
    }
  }, [selectedTime]);

  // API calls - Replace with your actual API endpoints
  const fetchMovies = async () => {
    setLoading(true);
    try {
      // const response = await fetch('/api/movies');
      // const data = await response.json();
      // setMovies(data);
      
      // Temporary mock data - remove when backend is ready
      setMovies([
        { id: 1, title: 'Sample Movie', genre: 'Action', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop', rating: '8.5' }
      ]);
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchDates = async (movieId) => {
    try {
      // const response = await fetch(`/api/movies/${movieId}/dates`);
      // const data = await response.json();
      // setDates(data);
      
      setDates([
        { id: 1, day: 'Today', date: 'Nov 15' }
      ]);
    } catch (error) {
      console.error('Error fetching dates:', error);
    }
  };

  const fetchTheaters = async (movieId, dateId) => {
    try {
      // const response = await fetch(`/api/movies/${movieId}/theaters?date=${dateId}`);
      // const data = await response.json();
      // setTheaters(data);
      
      setTheaters([
        { id: 1, name: 'Sample Theater', location: 'Downtown', distance: '2.5 km' }
      ]);
    } catch (error) {
      console.error('Error fetching theaters:', error);
    }
  };

  const fetchShowtimes = async (movieId, dateId, theaterId) => {
    try {
      // const response = await fetch(`/api/showtimes?movie=${movieId}&date=${dateId}&theater=${theaterId}`);
      // const data = await response.json();
      // setShowtimes(data);
      
      setShowtimes(['10:30 AM']);
    } catch (error) {
      console.error('Error fetching showtimes:', error);
    }
  };

  const fetchSeats = async (movieId, dateId, theaterId, time) => {
    try {
      // const response = await fetch(`/api/seats?movie=${movieId}&date=${dateId}&theater=${theaterId}&time=${time}`);
      // const data = await response.json();
      // setSeats(data);
      
      const rows = ['A', 'B', 'C', 'D', 'E'];
      const mockSeats = rows.map(row => ({
        row,
        seats: Array.from({ length: 10 }, (_, i) => ({
          id: `${row}${i + 1}`,
          isBooked: false
        }))
      }));
      setSeats(mockSeats);
    } catch (error) {
      console.error('Error fetching seats:', error);
    }
  };

  const toggleSeat = (seatId) => {
    setSelectedSeats(prev => 
      prev.includes(seatId) 
        ? prev.filter(s => s !== seatId)
        : [...prev, seatId]
    );
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      window.location.href = '/';
    }
  };

  const calculateTotal = () => {
    const pricePerSeat = 250; // Get from API
    return selectedSeats.length * pricePerSeat;
  };

  const handleBooking = async () => {
    const bookingData = {
      movieId: selectedMovie.id,
      dateId: selectedDate.id,
      theaterId: selectedTheater.id,
      showtime: selectedTime,
      seats: selectedSeats,
      totalAmount: calculateTotal()
    };

    try {
      // const response = await fetch('/api/bookings', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(bookingData)
      // });
      // const result = await response.json();
      
      alert('Booking successful!');
      window.location.href = '/';
    } catch (error) {
      console.error('Booking error:', error);
      alert('Booking failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300">
              <Film className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black text-white group-hover:text-cyan-300 transition-colors duration-300">BookSmart</span>
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <button 
            onClick={handleBack}
            className="mb-6 flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {step > 1 ? 'Back' : 'Home'}
          </button>

          {/* Progress Steps */}
          <div className="mb-12 flex items-center justify-center gap-4">
            {[1, 2, 3, 4].map((s) => (
              <React.Fragment key={s}>
                <div className={`flex items-center gap-2 ${s <= step ? 'text-cyan-400' : 'text-gray-600'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                    s < step ? 'bg-cyan-500 text-white' : s === step ? 'bg-cyan-500/20 border-2 border-cyan-500' : 'bg-gray-800'
                  }`}>
                    {s < step ? <Check className="w-5 h-5" /> : s}
                  </div>
                  <span className="hidden md:inline font-medium">
                    {s === 1 ? 'Movie' : s === 2 ? 'Theater & Time' : s === 3 ? 'Seats' : 'Payment'}
                  </span>
                </div>
                {s < 4 && <div className={`h-0.5 w-12 ${s < step ? 'bg-cyan-500' : 'bg-gray-800'}`} />}
              </React.Fragment>
            ))}
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="text-white text-xl">Loading...</div>
            </div>
          ) : (
            <>
              {/* Step 1: Select Movie */}
              {step === 1 && (
                <div>
                  <h2 className="text-4xl font-bold text-white mb-8 text-center">Select Your Movie</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {movies.map((movie) => (
                      <div
                        key={movie.id}
                        onClick={() => {
                          setSelectedMovie(movie);
                          handleNext();
                        }}
                        className="group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30"
                      >
                        <div className="relative aspect-[2/3]">
                          <img src={movie.image} alt={movie.title} className="w-full h-full object-cover" />
                          <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full font-bold text-sm">
                            ⭐ {movie.rating}
                          </div>
                        </div>
                        <div className="p-4 bg-gray-900">
                          <h3 className="text-xl font-bold text-white mb-1">{movie.title}</h3>
                          <p className="text-gray-400 text-sm">{movie.genre}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Select Theater, Date & Time */}
              {step === 2 && selectedMovie && (
                <div>
                  <h2 className="text-4xl font-bold text-white mb-8 text-center">Choose Theater, Date & Time</h2>
                  
                  {/* Dates */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-cyan-400" />
                      Select Date
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {dates.map((date) => (
                        <button
                          key={date.id}
                          onClick={() => setSelectedDate(date)}
                          className={`p-4 rounded-xl transition-all ${
                            selectedDate?.id === date.id
                              ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                          }`}
                        >
                          <div className="font-bold">{date.day}</div>
                          <div className="text-sm">{date.date}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Theaters */}
                  {selectedDate && (
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-cyan-400" />
                        Select Theater
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {theaters.map((theater) => (
                          <button
                            key={theater.id}
                            onClick={() => setSelectedTheater(theater)}
                            className={`p-4 rounded-xl text-left transition-all ${
                              selectedTheater?.id === theater.id
                                ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                            }`}
                          >
                            <div className="font-bold text-lg">{theater.name}</div>
                            <div className="text-sm">{theater.location}</div>
                            <div className="text-xs mt-1">{theater.distance} away</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Showtimes */}
                  {selectedTheater && (
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-cyan-400" />
                        Select Showtime
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {showtimes.map((time) => (
                          <button
                            key={time}
                            onClick={() => {
                              setSelectedTime(time);
                              handleNext();
                            }}
                            className={`p-4 rounded-xl font-bold transition-all ${
                              selectedTime === time
                                ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Step 3: Select Seats */}
              {step === 3 && (
                <div>
                  <h2 className="text-4xl font-bold text-white mb-8 text-center">Select Your Seats</h2>
                  
                  <div className="mb-8">
                    <div className="max-w-4xl mx-auto">
                      <div className="h-2 bg-gradient-to-r from-transparent via-gray-400 to-transparent rounded-full mb-2" />
                      <p className="text-center text-gray-400 text-sm mb-8">SCREEN</p>
                    </div>
                  </div>

                  <div className="mb-8 max-w-4xl mx-auto">
                    {seats.map((row) => (
                      <div key={row.row} className="flex items-center gap-2 mb-2 justify-center">
                        <span className="w-8 text-gray-400 font-bold text-center">{row.row}</span>
                        {row.seats.map((seat) => (
                          <button
                            key={seat.id}
                            onClick={() => !seat.isBooked && toggleSeat(seat.id)}
                            disabled={seat.isBooked}
                            className={`w-8 h-8 rounded-t-lg text-xs font-bold transition-all ${
                              seat.isBooked
                                ? 'bg-gray-700 cursor-not-allowed'
                                : selectedSeats.includes(seat.id)
                                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/50'
                                : 'bg-gray-800 hover:bg-gray-700 text-gray-400'
                            }`}
                          >
                            {seat.isBooked ? '✕' : ''}
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-center gap-8 mb-8">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gray-800 rounded-t-lg" />
                      <span className="text-gray-400 text-sm">Available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-cyan-500 rounded-t-lg" />
                      <span className="text-gray-400 text-sm">Selected</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gray-700 rounded-t-lg" />
                      <span className="text-gray-400 text-sm">Booked</span>
                    </div>
                  </div>

                  {selectedSeats.length > 0 && (
                    <div className="max-w-md mx-auto bg-gray-900/50 rounded-2xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-400 flex items-center gap-2">
                          <Users className="w-5 h-5" />
                          Selected Seats:
                        </span>
                        <span className="text-white font-bold">{selectedSeats.join(', ')}</span>
                      </div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-gray-400">Total Amount:</span>
                        <span className="text-2xl font-bold text-cyan-400">₹{calculateTotal()}</span>
                      </div>
                      <button
                        onClick={handleNext}
                        className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-bold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all"
                      >
                        Continue to Payment
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Step 4: Payment */}
              {step === 4 && (
                <div className="max-w-2xl mx-auto">
                  <h2 className="text-4xl font-bold text-white mb-8 text-center">Payment Details</h2>
                  
                  <div className="bg-gray-900/50 rounded-2xl p-6 mb-6">
                    <h3 className="text-xl font-bold text-white mb-4">Booking Summary</h3>
                    <div className="space-y-3 text-gray-400">
                      <div className="flex justify-between">
                        <span>Movie:</span>
                        <span className="text-white font-medium">{selectedMovie?.title}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Theater:</span>
                        <span className="text-white font-medium">{selectedTheater?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Date & Time:</span>
                        <span className="text-white font-medium">{selectedDate?.date}, {selectedTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Seats:</span>
                        <span className="text-white font-medium">{selectedSeats.join(', ')}</span>
                      </div>
                      <div className="h-px bg-gray-800 my-4" />
                      <div className="flex justify-between text-xl">
                        <span className="font-bold text-white">Total:</span>
                        <span className="font-bold text-cyan-400">₹{calculateTotal()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-900/50 rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-6">
                      <CreditCard className="w-6 h-6 text-cyan-400" />
                      <h3 className="text-xl font-bold text-white">Card Details</h3>
                    </div>
                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="Card Number"
                        className="w-full px-4 py-3 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                      <input
                        type="text"
                        placeholder="Cardholder Name"
                        className="w-full px-4 py-3 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="px-4 py-3 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                        <input
                          type="text"
                          placeholder="CVV"
                          className="px-4 py-3 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                      </div>
                      <button 
                        onClick={handleBooking}
                        className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105 active:scale-95"
                      >
                        Complete Booking - ₹{calculateTotal()}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookTickets;