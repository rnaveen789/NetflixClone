import React, { useState } from 'react';
import { Play, Plus, Check, ThumbsUp, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Content } from '../data/content';
import { useAuth } from '../context/AuthContext';
import { Button } from '@/components/ui/button';

interface ContentCardProps {
  content: Content;
  size?: 'small' | 'medium' | 'large';
}

const ContentCard: React.FC<ContentCardProps> = ({ content, size = 'medium' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { currentProfile, addToMyList, removeFromMyList } = useAuth();
  const navigate = useNavigate();

  const isInMyList = currentProfile?.myList.includes(content.id) || false;

  const sizeClasses = {
    small: 'w-32 md:w-40',
    medium: 'w-40 md:w-48',
    large: 'w-48 md:w-56'
  };

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/player/${content.id}`);
  };

  const handleMyListToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isInMyList) {
      removeFromMyList(content.id);
    } else {
      addToMyList(content.id);
    }
  };

  const handleMoreInfo = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/title/${content.id}`);
  };

  const handleCardClick = () => {
    navigate(`/title/${content.id}`);
  };

  return (
    <div
      className={`${sizeClasses[size]} relative cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-10`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Main Image */}
      <div className="relative aspect-video rounded-md overflow-hidden">
        <img
          src={content.image}
          alt={content.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Hover Overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        )}
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex gap-1">
          {content.isNewRelease && (
            <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
              NEW
            </span>
          )}
          {content.isTrending && (
            <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
              #1 in India Today
            </span>
          )}
        </div>
      </div>

      {/* Expanded Card on Hover */}
      {isHovered && (
        <div className="absolute top-full left-0 right-0 bg-gray-900 rounded-b-md p-3 shadow-2xl border-t-2 border-gray-700 z-20">
          {/* Action Buttons */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex gap-2">
              <Button
                onClick={handlePlay}
                size="sm"
                className="bg-white text-black hover:bg-gray-200 rounded-full p-2"
              >
                <Play className="h-4 w-4 fill-current" />
              </Button>
              
              <Button
                onClick={handleMyListToggle}
                size="sm"
                variant="outline"
                className="border-gray-600 text-white hover:border-white rounded-full p-2"
              >
                {isInMyList ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Plus className="h-4 w-4" />
                )}
              </Button>
              
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-white hover:border-white rounded-full p-2"
              >
                <ThumbsUp className="h-4 w-4" />
              </Button>
            </div>
            
            <Button
              onClick={handleMoreInfo}
              size="sm"
              variant="outline"
              className="border-gray-600 text-white hover:border-white rounded-full p-2"
            >
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>

          {/* Content Info */}
          <div className="text-white">
            <h3 className="font-semibold mb-1 line-clamp-1">{content.title}</h3>
            
            <div className="flex items-center gap-2 text-xs text-gray-300 mb-2">
              <span className="text-green-400 font-semibold">98% Match</span>
              <span className="border border-gray-500 px-1">{content.rating}</span>
              <span>{content.year}</span>
              {content.episodes && (
                <span>{content.episodes} Episodes</span>
              )}
            </div>
            
            <div className="flex flex-wrap gap-1 text-xs text-gray-300">
              {content.genre.slice(0, 3).map((genre, index) => (
                <span key={genre}>
                  {genre}
                  {index < Math.min(content.genre.length, 3) - 1 && ' • '}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentCard;
