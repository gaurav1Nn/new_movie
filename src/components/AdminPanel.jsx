import { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Users, 
  Ticket, 
  DollarSign, 
  Film, 
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Calendar,
  Clock,
  Eye,
  Download,
  Search,
  Filter,
  MoreVertical,
  CheckCircle2,
  XCircle,
  AlertCircle
} from 'lucide-react';
import Navbar from '../components/Navbar';

const AdminPanel = () => {
  const [stats, setStats] = useState({
    totalRevenue: 0,
    totalBookings: 0,
    activeUsers: 0,
    moviesShowing: 0,
    revenueChange: 0,
    bookingsChange: 0,
    usersChange: 0,
    moviesChange: 0,
  });

  const [recentBookings, setRecentBookings] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [todayBookings, setTodayBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setStats({
        totalRevenue: 125430,
        totalBookings: 3421,
        activeUsers: 8923,
        moviesShowing: 24,
        revenueChange: 12.5,
        bookingsChange: 8.3,
        usersChange: 15.2,
        moviesChange: -2.1,
      });

      setRecentBookings([
        { id: 1, movie: 'Stellar Odyssey', customer: 'John Doe', seats: 'A5, A6', amount: 25.98, time: '2 hours ago', status: 'confirmed', email: 'john@example.com' },
        { id: 2, movie: 'Neon Dreams', customer: 'Jane Smith', seats: 'B3, B4, B5', amount: 38.97, time: '3 hours ago', status: 'confirmed', email: 'jane@example.com' },
        { id: 3, movie: 'Quantum Edge', customer: 'Mike Johnson', seats: 'C8', amount: 12.99, time: '4 hours ago', status: 'pending', email: 'mike@example.com' },
        { id: 4, movie: 'Digital Phantom', customer: 'Sarah Williams', seats: 'D2, D3', amount: 25.98, time: '5 hours ago', status: 'confirmed', email: 'sarah@example.com' },
        { id: 5, movie: 'Void Runner', customer: 'Tom Brown', seats: 'E7, E8, E9', amount: 38.97, time: '6 hours ago', status: 'cancelled', email: 'tom@example.com' },
        { id: 6, movie: 'Crimson Sky', customer: 'Emily Davis', seats: 'F4, F5', amount: 25.98, time: '7 hours ago', status: 'confirmed', email: 'emily@example.com' },
      ]);

      setTopMovies([
        { id: 1, title: 'Stellar Odyssey', bookings: 1243, revenue: 16146.57, rating: 8.9, image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop' },
        { id: 2, title: 'Neon Dreams', bookings: 987, revenue: 12812.13, rating: 9.2, image: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop' },
        { id: 3, title: 'Quantum Edge', bookings: 856, revenue: 11120.44, rating: 9.0, image: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=600&fit=crop' },
        { id: 4, title: 'Digital Phantom', bookings: 743, revenue: 9651.57, rating: 9.3, image: 'https://images.unsplash.com/photo-1560109947-543149eceb16?w=400&h=600&fit=crop' },
        { id: 5, title: 'Void Runner', bookings: 692, revenue: 8989.08, rating: 9.1, image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=600&fit=crop' },
      ]);

      setTodayBookings([
        { id: 1, movie: 'Stellar Odyssey', time: '10:00 AM', seats: 45, revenue: 584.55 },
        { id: 2, movie: 'Neon Dreams', time: '1:00 PM', seats: 38, revenue: 493.62 },
        { id: 3, movie: 'Quantum Edge', time: '4:00 PM', seats: 52, revenue: 675.48 },
        { id: 4, movie: 'Digital Phantom', time: '7:00 PM', seats: 67, revenue: 870.33 },
        { id: 5, movie: 'Void Runner', time: '10:00 PM', seats: 41, revenue: 532.59 },
      ]);
    }, 500);
  }, []);

  const StatCard = ({ icon: Icon, title, value, change, prefix = '', color = 'cyan' }) => {
    const isPositive = change >= 0;
    const colorClasses = {
      cyan: 'from-cyan-500/20 to-purple-600/20 text-cyan-400',
      purple: 'from-purple-500/20 to-pink-600/20 text-purple-400',
      green: 'from-green-500/20 to-emerald-600/20 text-green-400',
      orange: 'from-orange-500/20 to-red-600/20 text-orange-400',
    };
    
    return (
      <div className="group bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl border border-cyan-500/20 p-6 hover:border-cyan-400/40 transition-all hover:shadow-2xl hover:shadow-cyan-500/10">
        <div className="flex items-center justify-between mb-4">
          <div className={p-3 rounded-xl bg-gradient-to-br ${colorClasses[color]}}>
            <Icon className="w-6 h-6" />
          </div>
          {change !== undefined && (
            <div className={flex items-center gap-1 text-sm font-semibold px-2 py-1 rounded-lg ${isPositive ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}}>
              {isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
              {Math.abs(change)}%
            </div>
          )}
        </div>
        <h3 className="text-gray-400 text-sm mb-2">{title}</h3>
        <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
          {prefix}{value.toLocaleString()}
        </p>
      </div>
    );
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      confirmed: { icon: CheckCircle2, color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/30' },
      pending: { icon: AlertCircle, color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30' },
      cancelled: { icon: XCircle, color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/30' },
    };
    
    const config = statusConfig[status] || statusConfig.pending;
    const Icon = config.icon;
    
    return (
      <div className={flex items-center gap-1.5 px-3 py-1 rounded-full ${config.bg} ${config.border} border}>
        <Icon className={w-3 h-3 ${config.color}} />
        <span className={text-xs font-semibold ${config.color} capitalize}>{status}</span>
      </div>
    );
  };

  const filteredBookings = recentBookings.filter(booking =>
    booking.movie.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Header */}
      <div className="fixed top-20 left-0 right-0 z-40 bg-black/90 backdrop-blur-lg border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-1">
                Admin Dashboard
              </h1>
              <p className="text-gray-400 text-sm">Welcome back! Here's what's happening today.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-cyan-400 font-semibold text-sm">Live</span>
              </div>
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center gap-2">
                <Download className="w-4 h-4" />
                <span className="text-sm font-semibold">Export</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              icon={DollarSign}
              title="Total Revenue"
              value={stats.totalRevenue}
              change={stats.revenueChange}
              prefix="$"
              color="cyan"
            />
            <StatCard
              icon={Ticket}
              title="Total Bookings"
              value={stats.totalBookings}
              change={stats.bookingsChange}
              color="purple"
            />
            <StatCard
              icon={Users}
              title="Active Users"
              value={stats.activeUsers}
              change={stats.usersChange}
              color="green"
            />
            <StatCard
              icon={Film}
              title="Movies Showing"
              value={stats.moviesShowing}
              change={stats.moviesChange}
              color="orange"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Recent Bookings */}
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl border border-cyan-500/20 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <Activity className="w-6 h-6 text-cyan-400" />
                  Recent Bookings
                </h2>
                <button className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold flex items-center gap-1">
                  View All
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              {/* Search */}
              <div className="mb-4 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search bookings..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-cyan-400 focus:outline-none text-sm"
                />
              </div>

              <div className="space-y-3 max-h-96 overflow-y-auto">
                {filteredBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/30 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-white mb-1">{booking.movie}</h3>
                        <p className="text-sm text-gray-400">{booking.customer}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-cyan-400 font-bold text-lg">${booking.amount}</p>
                        {getStatusBadge(booking.status)}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Ticket className="w-3 h-3" />
                          {booking.seats}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {booking.time}
                        </span>
                      </div>
                      <button className="text-cyan-400 hover:text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Today's Schedule */}
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl border border-cyan-500/20 p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-cyan-400" />
                Today's Schedule
              </h2>
              <div className="space-y-4">
                {todayBookings.map((show) => (
                  <div
                    key={show.id}
                    className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/30 transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-sm">{show.movie}</h3>
                      <span className="text-cyan-400 font-bold text-xs">{show.time}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-400 mt-2">
                      <span>{show.seats} seats</span>
                      <span className="text-green-400">${show.revenue}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Movies & Revenue Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Top Movies */}
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl border border-cyan-500/20 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <BarChart3 className="w-6 h-6 text-cyan-400" />
                  Top Movies
                </h2>
                <button className="text-gray-400 hover:text-cyan-400">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-4">
                {topMovies.map((movie, index) => (
                  <div
                    key={movie.id}
                    className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/30 transition-all group"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center font-bold text-sm shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm truncate">{movie.title}</h3>
                        <p className="text-xs text-gray-400">⭐ {movie.rating}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2 bg-gray-900/50 rounded-lg">
                        <p className="text-gray-400 mb-1">Bookings</p>
                        <p className="text-white font-semibold">{movie.bookings}</p>
                      </div>
                      <div className="p-2 bg-gray-900/50 rounded-lg">
                        <p className="text-gray-400 mb-1">Revenue</p>
                        <p className="text-cyan-400 font-semibold">${(movie.revenue / 1000).toFixed(1)}k</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Revenue Chart Placeholder */}
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl border border-cyan-500/20 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-cyan-400" />
                  Revenue Overview
                </h2>
                <div className="flex items-center gap-2">
                  <button className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 text-sm font-semibold hover:bg-cyan-500/20 transition-all">
                    Last 7 Days
                  </button>
                  <button className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-400 text-sm font-semibold hover:border-cyan-500/30 transition-all">
                    Last 30 Days
                  </button>
                </div>
              </div>
              <div className="h-80 flex items-center justify-center bg-gray-800/30 rounded-xl border border-gray-700/50">
                <div className="text-center">
                  <BarChart3 className="w-20 h-20 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">Revenue Chart</p>
                  <p className="text-gray-600 text-sm mt-2">Integrate with Chart.js or Recharts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl border border-cyan-500/20 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-300">Today's Revenue</h3>
                <DollarSign className="w-5 h-5 text-cyan-400" />
              </div>
              <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                $3,156.80
              </p>
              <p className="text-sm text-green-400 mt-2 flex items-center gap-1">
                <ArrowUpRight className="w-4 h-4" />
                +15.3% from yesterday
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl border border-cyan-500/20 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-300">Active Sessions</h3>
                <Users className="w-5 h-5 text-purple-400" />
              </div>
              <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                1,247
              </p>
              <p className="text-sm text-gray-400 mt-2">Users browsing right now</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-2xl border border-cyan-500/20 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-300">Conversion Rate</h3>
                <TrendingUp className="w-5 h-5 text-green-400" />
              </div>
              <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                68.4%
              </p>
              <p className="text-sm text-green-400 mt-2 flex items-center gap-1">
                <ArrowUpRight className="w-4 h-4" />
                +2.1% this week
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;