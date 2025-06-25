import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Eye, EyeOff, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '../context/AuthContext';

const Signup: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [step, setStep] = useState(1);
  
  const { signup } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const emailFromUrl = searchParams.get('email');
    if (emailFromUrl) {
      setEmail(emailFromUrl);
    }
  }, [searchParams]);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setStep(2);
    }
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const success = await signup(email, password, name);
      if (success) {
        navigate('/profiles');
      } else {
        setError('Failed to create account. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const plans = [
    {
      name: 'Mobile',
      price: '₹149',
      features: ['480p', '1 screen', 'Phone & tablet only', 'Downloads available']
    },
    {
      name: 'Basic',
      price: '₹199',
      features: ['720p', '1 screen', 'Phone, tablet, computer & TV', 'Downloads available']
    },
    {
      name: 'Standard',
      price: '₹499',
      features: ['1080p', '2 screens', 'Phone, tablet, computer & TV', 'Downloads available'],
      popular: true
    },
    {
      name: 'Premium',
      price: '₹649',
      features: ['4K+HDR', '4 screens', 'Phone, tablet, computer & TV', 'Downloads available']
    }
  ];

  if (step === 1) {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="border-b p-6">
          <Link to="/">
            <img
              src="/images/netflix-logo.png"
              alt="Netflix"
              className="h-8"
            />
          </Link>
        </header>

        <div className="max-w-md mx-auto pt-16 px-4">
          <h1 className="text-3xl font-normal mb-4">
            Ready to watch? Enter your email to create or restart your membership.
          </h1>
          
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-black text-black placeholder-gray-500"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded font-semibold text-lg transition-colors"
            >
              Get Started &gt;
            </Button>
          </form>
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="border-b p-6 flex items-center justify-between">
          <Link to="/">
            <img
              src="/images/netflix-logo.png"
              alt="Netflix"
              className="h-8"
            />
          </Link>
          <Link to="/login" className="text-lg font-semibold">
            Sign In
          </Link>
        </header>

        <div className="max-w-md mx-auto pt-16 px-4">
          <div className="text-center mb-8">
            <div className="text-xs text-gray-600 mb-2">STEP 1 OF 3</div>
            <h1 className="text-3xl font-normal mb-4">Choose your plan.</h1>
            <div className="space-y-2 text-left">
              <div className="flex items-center">
                <Check className="h-6 w-6 text-red-600 mr-3" />
                <span>No commitments, cancel anytime.</span>
              </div>
              <div className="flex items-center">
                <Check className="h-6 w-6 text-red-600 mr-3" />
                <span>Everything on Netflix for one low price.</span>
              </div>
              <div className="flex items-center">
                <Check className="h-6 w-6 text-red-600 mr-3" />
                <span>Unlimited viewing on all your devices.</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 mb-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                  plan.popular
                    ? 'border-red-600 bg-red-50'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-4 bg-red-600 text-white px-3 py-1 rounded text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-lg">{plan.name}</h3>
                    <p className="text-gray-600 text-sm">{plan.features[0]}</p>
                  </div>
                  <div className="text-lg font-semibold">{plan.price}</div>
                </div>
              </div>
            ))}
          </div>

          <Button
            onClick={() => setStep(3)}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded font-semibold text-lg transition-colors"
          >
            Continue
          </Button>

          <p className="text-xs text-gray-600 mt-4 text-center">
            HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Terms of Use for more details.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b p-6 flex items-center justify-between">
        <Link to="/">
          <img
            src="/images/netflix-logo.png"
            alt="Netflix"
            className="h-8"
          />
        </Link>
        <Link to="/login" className="text-lg font-semibold">
          Sign In
        </Link>
      </header>

      <div className="max-w-md mx-auto pt-16 px-4">
        <div className="text-center mb-8">
          <div className="text-xs text-gray-600 mb-2">STEP 3 OF 3</div>
          <h1 className="text-3xl font-normal mb-4">Create your account</h1>
          <p className="text-gray-600">
            Just a few more steps and you're finished! We hate paperwork, too.
          </p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSignupSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First name"
              className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-black text-black placeholder-gray-500"
              required
            />
          </div>

          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-black bg-gray-100 text-black placeholder-gray-500"
              required
              readOnly
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Add a password"
              className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-black pr-12 text-black placeholder-gray-500"
              required
              minLength={6}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded font-semibold text-lg transition-colors"
          >
            {isLoading ? 'Creating Account...' : 'Start Membership'}
          </Button>
        </form>

        <p className="text-xs text-gray-600 mt-4">
          By clicking "Start Membership", you agree to our{' '}
          <a href="#" className="underline">Terms of Use</a> and that you have read our{' '}
          <a href="#" className="underline">Privacy Statement</a>.
        </p>
      </div>
    </div>
  );
};

export default Signup;
