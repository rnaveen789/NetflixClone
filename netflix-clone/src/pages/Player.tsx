import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  ArrowLeft, 
  Settings,
  SkipForward,
  Rewind
} from 'lucide-react';
import { contentData } from '../data/content';
import { useAuth } from '../context/AuthContext';
import { Button } from '@/components/ui/button';

const Player: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToWatchHistory } = useAuth();
  const videoRef = useRef<HTMLDivElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(100);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const content = contentData.find(item => item.id === id);

  useEffect(() => {
    if (content) {
      addToWatchHistory(content.id);
      // Simulate video duration
      setDuration(3600); // 1 hour
    }
  }, [content, addToWatchHistory]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentTime(prev => Math.min(prev + 1, duration));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, duration]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.code) {
        case 'Space':
          e.preventDefault();
          setIsPlaying(!isPlaying);
          break;
        case 'KeyM':
          setIsMuted(!isMuted);
          break;
        case 'KeyF':
          toggleFullscreen();
          break;
        case 'ArrowLeft':
          setCurrentTime(prev => Math.max(prev - 10, 0));
          break;
        case 'ArrowRight':
          setCurrentTime(prev => Math.min(prev + 10, duration));
          break;
        case 'Escape':
          if (isFullscreen) {
            setIsFullscreen(false);
          } else {
            navigate('/dashboard');
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isPlaying, isMuted, isFullscreen, duration, navigate]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  if (!content) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-2xl mb-4">Content not found</h1>
          <Button onClick={() => navigate('/dashboard')}>
            Return to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={videoRef}
      className={`relative bg-black ${isFullscreen ? 'fixed inset-0 z-50' : 'min-h-screen'}`}
      onMouseMove={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Video Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${content.image}')`,
          filter: 'brightness(0.7)'
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Content Info */}
      <div className="absolute top-20 left-8 text-white z-10 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{content.title}</h1>
        <p className="text-lg mb-4">{content.description}</p>
        <div className="flex items-center gap-4 text-sm">
          <span className="bg-gray-600 px-2 py-1 rounded">{content.rating}</span>
          <span>{content.year}</span>
          <span>{content.duration}</span>
        </div>
      </div>

      {/* Video Controls */}
      <div 
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8 transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Progress Bar */}
        <div className="w-full mb-6">
          <div className="w-full bg-gray-600 h-1 rounded-full cursor-pointer">
            <div 
              className="bg-red-600 h-1 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className="flex justify-between text-white text-sm mt-2">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Back Button */}
            <Button
              onClick={() => navigate('/dashboard')}
              variant="ghost"
              size="sm"
              className="text-white hover:text-gray-300"
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>

            {/* Rewind */}
            <Button
              onClick={() => setCurrentTime(prev => Math.max(prev - 10, 0))}
              variant="ghost"
              size="sm"
              className="text-white hover:text-gray-300"
            >
              <Rewind className="h-6 w-6" />
            </Button>

            {/* Play/Pause */}
            <Button
              onClick={() => setIsPlaying(!isPlaying)}
              variant="ghost"
              size="sm"
              className="text-white hover:text-gray-300"
            >
              {isPlaying ? (
                <Pause className="h-8 w-8 fill-current" />
              ) : (
                <Play className="h-8 w-8 fill-current" />
              )}
            </Button>

            {/* Fast Forward */}
            <Button
              onClick={() => setCurrentTime(prev => Math.min(prev + 10, duration))}
              variant="ghost"
              size="sm"
              className="text-white hover:text-gray-300"
            >
              <SkipForward className="h-6 w-6" />
            </Button>

            {/* Volume */}
            <div className="flex items-center gap-2">
              <Button
                onClick={() => setIsMuted(!isMuted)}
                variant="ghost"
                size="sm"
                className="text-white hover:text-gray-300"
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="h-6 w-6" />
                ) : (
                  <Volume2 className="h-6 w-6" />
                )}
              </Button>
              <input
                type="range"
                min="0"
                max="100"
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                  const newVolume = parseInt(e.target.value);
                  setVolume(newVolume);
                  setIsMuted(newVolume === 0);
                }}
                className="w-20 accent-white"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Skip Intro (for series) */}
            {content.category === 'series' && currentTime > 30 && currentTime < 90 && (
              <Button
                onClick={() => setCurrentTime(90)}
                className="bg-gray-700 bg-opacity-80 text-white hover:bg-gray-600 px-4 py-2 rounded"
              >
                Skip Intro
              </Button>
            )}

            {/* Settings */}
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-gray-300"
            >
              <Settings className="h-6 w-6" />
            </Button>

            {/* Fullscreen */}
            <Button
              onClick={toggleFullscreen}
              variant="ghost"
              size="sm"
              className="text-white hover:text-gray-300"
            >
              <Maximize className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Playing/Paused Indicator */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black bg-opacity-50 rounded-full p-8">
            <Play className="h-16 w-16 text-white fill-current" />
          </div>
        </div>
      )}

      {/* Auto-play Next Episode (for series) */}
      {content.category === 'series' && currentTime >= duration - 30 && (
        <div className="absolute bottom-32 right-8 bg-gray-900 bg-opacity-90 p-6 rounded-lg text-white max-w-sm">
          <h3 className="font-semibold mb-2">Next Episode</h3>
          <p className="text-sm text-gray-300 mb-4">S1:E2 - "The Weirdo on Maple Street"</p>
          <div className="flex gap-2">
            <Button size="sm" className="bg-white text-black hover:bg-gray-200">
              Play Now
            </Button>
            <Button size="sm" variant="outline" className="border-gray-600 text-white">
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Player;
