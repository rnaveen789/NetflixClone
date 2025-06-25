import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ContentRow from '../components/ContentRow';
import { useAuth } from '../context/AuthContext';
import { 
  contentData, 
  getFeaturedContent, 
  getTrendingContent, 
  getNewReleases, 
  getContentByCategory 
} from '../data/content';

const Dashboard: React.FC = () => {
  const { isAuthenticated, currentProfile } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    if (!currentProfile) {
      navigate('/profiles');
      return;
    }
  }, [isAuthenticated, currentProfile, navigate]);

  if (!isAuthenticated || !currentProfile) {
    return null;
  }

  const featuredContent = getFeaturedContent();
  const trendingContent = getTrendingContent();
  const newReleases = getNewReleases();
  
  // Get Continue Watching (from watch history)
  const continueWatching = contentData.filter(content => 
    currentProfile.watchHistory.includes(content.id)
  ).slice(0, 10);

  // Get My List
  const myListContent = contentData.filter(content => 
    currentProfile.myList.includes(content.id)
  );

  // Genre-based rows
  const dramaContent = getContentByCategory('Drama');
  const thrillerContent = getContentByCategory('Thriller');
  const sciFiContent = getContentByCategory('Sci-Fi');
  const crimeContent = getContentByCategory('Crime');
  const comedyContent = getContentByCategory('Comedy');

  return (
    <div className="min-h-screen bg-black">
      <Header isTransparent={true} />
      
      {/* Hero Section */}
      <Hero content={featuredContent} />

      {/* Content Rows */}
      <div className="pb-16">
        {/* Continue Watching */}
        {continueWatching.length > 0 && (
          <ContentRow title="Continue Watching" content={continueWatching} />
        )}

        {/* Trending Now */}
        <ContentRow title="Trending Now" content={trendingContent} />

        {/* My List */}
        {myListContent.length > 0 && (
          <ContentRow title="My List" content={myListContent} />
        )}

        {/* New Releases */}
        <ContentRow title="New Releases" content={newReleases} />

        {/* Netflix Originals */}
        <ContentRow title="Netflix Originals" content={contentData.slice(0, 10)} />

        {/* Drama Series */}
        <ContentRow title="Drama Series" content={dramaContent} />

        {/* Thriller Movies & Shows */}
        <ContentRow title="Thriller Movies & Shows" content={thrillerContent} />

        {/* Sci-Fi & Fantasy */}
        <ContentRow title="Sci-Fi & Fantasy" content={sciFiContent} />

        {/* Crime Shows */}
        <ContentRow title="Crime Shows" content={crimeContent} />

        {/* Comedy Series */}
        <ContentRow title="Comedy Series" content={comedyContent} />

        {/* Because you watched... */}
        {continueWatching.length > 0 && (
          <ContentRow 
            title={`Because you watched ${continueWatching[0]?.title}`} 
            content={contentData.filter(c => 
              c.genre.some(g => continueWatching[0]?.genre.includes(g)) && 
              c.id !== continueWatching[0]?.id
            ).slice(0, 10)} 
          />
        )}

        {/* Popular on Netflix */}
        <ContentRow title="Popular on Netflix" content={contentData.slice(5, 15)} />

        {/* Award-Winning Series */}
        <ContentRow title="Award-Winning Series" content={contentData.slice(10, 20)} />

        {/* Bingeworthy Series */}
        <ContentRow title="Bingeworthy Series" content={contentData.filter(c => c.episodes && c.episodes > 20)} />

        {/* Only on Netflix */}
        <ContentRow title="Only on Netflix" content={contentData.slice(15)} />
      </div>
    </div>
  );
};

export default Dashboard;
