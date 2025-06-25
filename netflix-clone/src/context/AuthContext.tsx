import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  profiles: Profile[];
  activeProfile?: Profile;
}

interface Profile {
  id: string;
  name: string;
  avatar: string;
  isKids: boolean;
  watchHistory: string[];
  myList: string[];
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  currentProfile: Profile | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  setProfile: (profile: Profile) => void;
  addToMyList: (contentId: string) => void;
  removeFromMyList: (contentId: string) => void;
  addToWatchHistory: (contentId: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const defaultProfiles: Profile[] = [
  {
    id: '1',
    name: 'Main Profile',
    avatar: '/images/profile-red.jpg',
    isKids: false,
    watchHistory: ['1', '3', '5'],
    myList: ['2', '4', '6', '8']
  },
  {
    id: '2',
    name: 'Kids',
    avatar: '/images/profile-kids.jpg',
    isKids: true,
    watchHistory: [],
    myList: []
  }
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [currentProfile, setCurrentProfile] = useState<Profile | null>(null);

  useEffect(() => {
    // Check for stored authentication
    const storedUser = localStorage.getItem('netflix-user');
    const storedProfile = localStorage.getItem('netflix-profile');
    
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
      
      if (storedProfile) {
        const profileData = JSON.parse(storedProfile);
        setCurrentProfile(profileData);
      }
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock authentication - accept any email/password for demo
    const userData: User = {
      id: '1',
      email,
      name: email.split('@')[0],
      profiles: defaultProfiles
    };
    
    setUser(userData);
    localStorage.setItem('netflix-user', JSON.stringify(userData));
    return true;
  };

  const signup = async (email: string, password: string, name: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const userData: User = {
      id: '1',
      email,
      name,
      profiles: defaultProfiles
    };
    
    setUser(userData);
    localStorage.setItem('netflix-user', JSON.stringify(userData));
    return true;
  };

  const logout = () => {
    setUser(null);
    setCurrentProfile(null);
    localStorage.removeItem('netflix-user');
    localStorage.removeItem('netflix-profile');
  };

  const setProfile = (profile: Profile) => {
    setCurrentProfile(profile);
    localStorage.setItem('netflix-profile', JSON.stringify(profile));
  };

  const addToMyList = (contentId: string) => {
    if (currentProfile && user) {
      const updatedProfile = {
        ...currentProfile,
        myList: [...currentProfile.myList, contentId]
      };
      
      const updatedUser = {
        ...user,
        profiles: user.profiles.map(p => 
          p.id === currentProfile.id ? updatedProfile : p
        )
      };
      
      setCurrentProfile(updatedProfile);
      setUser(updatedUser);
      localStorage.setItem('netflix-user', JSON.stringify(updatedUser));
      localStorage.setItem('netflix-profile', JSON.stringify(updatedProfile));
    }
  };

  const removeFromMyList = (contentId: string) => {
    if (currentProfile && user) {
      const updatedProfile = {
        ...currentProfile,
        myList: currentProfile.myList.filter(id => id !== contentId)
      };
      
      const updatedUser = {
        ...user,
        profiles: user.profiles.map(p => 
          p.id === currentProfile.id ? updatedProfile : p
        )
      };
      
      setCurrentProfile(updatedProfile);
      setUser(updatedUser);
      localStorage.setItem('netflix-user', JSON.stringify(updatedUser));
      localStorage.setItem('netflix-profile', JSON.stringify(updatedProfile));
    }
  };

  const addToWatchHistory = (contentId: string) => {
    if (currentProfile && user) {
      const updatedHistory = [contentId, ...currentProfile.watchHistory.filter(id => id !== contentId)];
      const updatedProfile = {
        ...currentProfile,
        watchHistory: updatedHistory.slice(0, 20) // Keep only last 20 items
      };
      
      const updatedUser = {
        ...user,
        profiles: user.profiles.map(p => 
          p.id === currentProfile.id ? updatedProfile : p
        )
      };
      
      setCurrentProfile(updatedProfile);
      setUser(updatedUser);
      localStorage.setItem('netflix-user', JSON.stringify(updatedUser));
      localStorage.setItem('netflix-profile', JSON.stringify(updatedProfile));
    }
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    currentProfile,
    login,
    signup,
    logout,
    setProfile,
    addToMyList,
    removeFromMyList,
    addToWatchHistory
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
