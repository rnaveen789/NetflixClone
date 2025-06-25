import React, { useState } from 'react';
import { Play, Info, Plus, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '../context/AuthContext';
import { Content } from '../data/content';

interface HeroProps {
  content?: Content;
  isLandingPage?: boolean;
}

const Hero: React.FC<HeroProps> = ({ content, isLandingPage = false }) => {
  const [email, setEmail] = useState('');
  const { currentProfile, addToMyList, removeFromMyList } = useAuth();
  const navigate = useNavigate();

  const isInMyList = currentProfile?.myList.includes(content?.id || '') || false;

  const handleGetStarted = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      navigate(`/signup?email=${encodeURIComponent(email)}`);
    }
  };

  const handlePlay = () => {
    if (content) {
      navigate(`/player/${content.id}`);
    }
  };

  const handleMoreInfo = () => {
    if (content) {
      // In a real app, this would open a modal with more details
      navigate(`/title/${content.id}`);
    }
  };

  const handleMyListToggle = () => {
    if (content && currentProfile) {
      if (isInMyList) {
        removeFromMyList(content.id);
      } else {
        addToMyList(content.id);
      }
    }
  };

  if (isLandingPage) {
    return (
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url('/images/hero-bg.JPG')`,
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Watch anywhere. Cancel anytime.
          </p>
          <p className="text-lg mb-8">
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          
          <form onSubmit={handleGetStarted} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="flex-1 px-4 py-4 text-black text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
            <Button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4 rounded-md font-semibold transition-colors"
            >
              Get Started &gt;
            </Button>
          </form>
        </div>
      </section>
    );
  }

  if (!content) {
    return null;
  }

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.3)), url('${content.image}')`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-white max-w-2xl mx-auto px-4 md:px-16 pt-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {content.title}
        </h1>
        
        <p className="text-lg md:text-xl mb-6 leading-relaxed">
          {content.description}
        </p>
        
        <div className="flex items-center gap-2 mb-8 text-sm">
          <span className="bg-gray-600 px-2 py-1 rounded">{content.rating}</span>
          <span>{content.year}</span>
          <span>{content.duration}</span>
          <div className="flex gap-1">
            {content.genre.slice(0, 3).map((genre, index) => (
              <span key={genre}>
                {genre}{index < Math.min(content.genre.length, 3) - 1 && ','}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex gap-4">
          <Button
            onClick={handlePlay}
            className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-3 rounded-md flex items-center gap-2 transition-colors"
          >
            <Play className="h-5 w-5 fill-current" />
            Play
          </Button>
          
          <Button
            onClick={handleMoreInfo}
            variant="secondary"
            className="bg-gray-600 bg-opacity-70 text-white hover:bg-gray-500 font-semibold px-8 py-3 rounded-md flex items-center gap-2 transition-colors"
          >
            <Info className="h-5 w-5" />
            More Info
          </Button>
          
          <Button
            onClick={handleMyListToggle}
            variant="secondary"
            className="bg-gray-600 bg-opacity-70 text-white hover:bg-gray-500 p-3 rounded-full transition-colors"
          >
            {isInMyList ? (
              <Check className="h-5 w-5" />
            ) : (
              <Plus className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
