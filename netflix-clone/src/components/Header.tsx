import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Bell, ChevronDown, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface HeaderProps {
  isTransparent?: boolean;
  showSearch?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isTransparent = false, showSearch = true }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchInput, setShowSearchInput] = useState(false);
  const { isAuthenticated, currentProfile, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleProfileChange = () => {
    navigate('/profiles');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent && !isScrolled
          ? 'bg-transparent'
          : 'bg-black bg-opacity-95 backdrop-blur-sm'
      }`}
    >
      <div className="flex items-center justify-between px-4 py-4 md:px-16">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <Link to={isAuthenticated ? '/dashboard' : '/'} className="flex-shrink-0">
            <img
              src="/images/netflix-logo.png"
              alt="Netflix"
              className="h-8 md:h-10"
            />
          </Link>

          {/* Navigation - only show when authenticated */}
          {isAuthenticated && (
            <nav className="hidden md:flex space-x-6">
              <Link
                to="/dashboard"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/tv-shows"
                className="text-white hover:text-gray-300 transition-colors"
              >
                TV Shows
              </Link>
              <Link
                to="/movies"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Movies
              </Link>
              <Link
                to="/new-popular"
                className="text-white hover:text-gray-300 transition-colors"
              >
                New & Popular
              </Link>
              <Link
                to="/my-list"
                className="text-white hover:text-gray-300 transition-colors"
              >
                My List
              </Link>
            </nav>
          )}
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          {showSearch && isAuthenticated && (
            <div className="relative">
              {showSearchInput ? (
                <form onSubmit={handleSearch} className="flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Titles, people, genres"
                    className="bg-black bg-opacity-70 border border-white border-opacity-50 rounded px-4 py-2 text-white placeholder-gray-400 w-64 focus:outline-none focus:border-white"
                    autoFocus
                    onBlur={() => {
                      if (!searchQuery) setShowSearchInput(false);
                    }}
                  />
                </form>
              ) : (
                <button
                  onClick={() => setShowSearchInput(true)}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <Search className="h-6 w-6" />
                </button>
              )}
            </div>
          )}

          {isAuthenticated ? (
            <>
              {/* Notifications */}
              <button className="text-white hover:text-gray-300 transition-colors">
                <Bell className="h-6 w-6" />
              </button>

              {/* Profile dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors">
                  <img
                    src={currentProfile?.avatar || '/images/profile-red.jpg'}
                    alt={currentProfile?.name || 'Profile'}
                    className="w-8 h-8 rounded"
                  />
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-black bg-opacity-90 border-gray-600 text-white">
                  <DropdownMenuItem onClick={handleProfileChange}>
                    <User className="mr-2 h-4 w-4" />
                    Manage Profiles
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Account</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Help Center</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    <span>Sign out of Netflix</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Sign In
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
