import React from 'react';
import Navbar from '../components/Navbar';
import ProfileHeader from '../components/ProfileHeader';
import PostGrid from '../components/PostGrid';

const ProfilePage = () => {
  const user = {
    username: 'eldi_ana_k',
    fullName: 'Eldana Kibru',
    posts: 2,
    followers: 650,
    following: 230,
    bio: 'Ethiopia, Software Engineer',
  };

  return (
    <div className="bg-gray-100 h-screen">
      <Navbar />
      <div className="p-4">
        <ProfileHeader user={user} />
        <PostGrid />
      </div>
    </div>
  );
};

export default ProfilePage;