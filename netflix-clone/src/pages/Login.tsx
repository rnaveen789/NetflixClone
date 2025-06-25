import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const success = await login(email, password);
      if (success) {
        navigate('/profiles');
      } else {
        setError('Invalid email or password. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black relative">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: `url('/images/login-bg.jpg')`,
        }}
      />
      
      {/* Header */}
      <header className="relative z-10 p-6">
        <Link to="/">
          <img
            src="/images/netflix-logo.png"
            alt="Netflix"
            className="h-12"
          />
        </Link>
      </header>

      {/* Login Form */}
      <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-4">
        <div className="bg-black bg-opacity-75 p-8 md:p-16 rounded-md w-full max-w-md">
          <h1 className="text-white text-3xl font-semibold mb-8">Sign In</h1>
          
          {error && (
            <div className="bg-orange-500 text-white p-3 rounded mb-4 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email or mobile number"
                className="w-full p-4 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-white focus:bg-gray-600"
                required
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full p-4 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-white focus:bg-gray-600 pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded font-semibold transition-colors"
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </Button>

            <div className="text-center">
              <span className="text-gray-400">OR</span>
            </div>

            <Button
              type="button"
              variant="secondary"
              className="w-full bg-gray-600 bg-opacity-50 hover:bg-gray-500 text-white py-4 rounded font-semibold transition-colors"
            >
              Use a Sign-In Code
            </Button>

            <div className="text-center">
              <Link
                to="/forgot-password"
                className="text-white hover:underline"
              >
                Forgot password?
              </Link>
            </div>
          </form>

          <div className="mt-8">
            <label className="flex items-center text-gray-400">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="mr-2"
              />
              Remember me
            </label>
          </div>

          <div className="mt-8 text-gray-400">
            <span>New to Netflix? </span>
            <Link to="/signup" className="text-white hover:underline">
              Sign up now
            </Link>
            .
          </div>

          <div className="mt-4 text-xs text-gray-500">
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
              <a href="#" className="text-blue-500 hover:underline">
                Learn more
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-black bg-opacity-75 p-8 mt-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-400 mb-6">
            Questions? Call{' '}
            <a href="tel:000-800-040-1843" className="underline hover:no-underline">
              000-800-040-1843
            </a>
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-400 text-sm">
            <a href="#" className="hover:underline">FAQ</a>
            <a href="#" className="hover:underline">Help Center</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Cookie Preferences</a>
            <a href="#" className="hover:underline">Corporate Information</a>
          </div>
          
          <div className="mt-6">
            <select className="bg-black border border-gray-600 text-gray-400 px-3 py-2 rounded">
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
            </select>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
