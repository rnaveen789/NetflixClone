import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Edit, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '../context/AuthContext';

const Profiles: React.FC = () => {
  const { user, setProfile } = useAuth();
  const navigate = useNavigate();
  const [isManaging, setIsManaging] = useState(false);

  const handleProfileSelect = (profile: any) => {
    if (!isManaging) {
      setProfile(profile);
      navigate('/dashboard');
    }
  };

  const handleManageProfiles = () => {
    setIsManaging(!isManaging);
  };

  const handleEditProfile = (profileId: string) => {
    // In a real app, this would open an edit modal
    console.log('Edit profile:', profileId);
  };

  const handleAddProfile = () => {
    // In a real app, this would open an add profile modal
    console.log('Add new profile');
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        {/* Header */}
        <h1 className="text-white text-4xl md:text-6xl font-light mb-8">
          Who's watching?
        </h1>

        {/* Profiles Grid */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {user.profiles.map((profile) => (
            <div
              key={profile.id}
              className="text-center cursor-pointer group"
              onClick={() => handleProfileSelect(profile)}
            >
              <div className="relative mb-4">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className={`w-32 h-32 md:w-40 md:h-40 rounded-lg transition-transform duration-200 ${
                    !isManaging ? 'group-hover:scale-105' : ''
                  }`}
                />
                
                {/* Kids Badge */}
                {profile.isKids && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded-full font-semibold">
                      KIDS
                    </span>
                  </div>
                )}

                {/* Edit Overlay */}
                {isManaging && (
                  <div
                    className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditProfile(profile.id);
                    }}
                  >
                    <Edit className="h-8 w-8 text-white" />
                  </div>
                )}
              </div>
              
              <p className="text-gray-400 text-lg md:text-xl group-hover:text-white transition-colors">
                {profile.name}
              </p>
            </div>
          ))}

          {/* Add Profile */}
          {isManaging && user.profiles.length < 5 && (
            <div
              className="text-center cursor-pointer group"
              onClick={handleAddProfile}
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg bg-gray-700 flex items-center justify-center mb-4 group-hover:bg-gray-600 transition-colors">
                <Plus className="h-12 w-12 text-gray-400 group-hover:text-white" />
              </div>
              <p className="text-gray-400 text-lg md:text-xl group-hover:text-white transition-colors">
                Add Profile
              </p>
            </div>
          )}
        </div>

        {/* Manage Profiles Button */}
        <Button
          onClick={handleManageProfiles}
          variant="outline"
          className="border-gray-400 text-gray-400 hover:border-white hover:text-white bg-transparent text-lg px-8 py-3"
        >
          {isManaging ? 'Done' : 'Manage Profiles'}
        </Button>

        {/* Additional Info for Kids Profiles */}
        {user.profiles.some(p => p.isKids) && !isManaging && (
          <div className="mt-16 max-w-2xl mx-auto px-4">
            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6">
              <h3 className="text-white text-xl font-semibold mb-3">
                Kids Profiles
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Send kids on adventures with their favorite characters in a space made just for them—free with your membership. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profiles;
