import React from 'react';
import profilePic from '../assets/profile2.jpg'; // Adjust the path based on your file structure

const ProfileHeader = ({ user }) => {
  return (
    <div className="flex flex-col items-center mb-4">
      <div className="flex items-center space-x-4">
        <img src={profilePic} alt="Profile" className="rounded-full w-24 h-24" /> {/* Profile picture */}
        <div className="text-center">
          <h2 className="text-2xl font-bold">{user.fullName}</h2>
          <p className="text-lg font-medium">@{user.username}</p>
          <div className="mt-2 space-x-4">
            <span className="font-semibold">{user.posts} Posts</span>
            <span className="font-semibold">{user.followers} Followers</span>
            <span className="font-semibold">{user.following} Following</span>
          </div>
          <p className="mt-2 text-gray-600">{user.bio}</p>
          <div className="mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Edit Profile</button>
            <button className="bg-gray-300 px-4 py-2 rounded-md">Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;