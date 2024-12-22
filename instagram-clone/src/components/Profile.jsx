import React from 'react';

const Profile = () => {
  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      {/* Add user info and posts here */}
      <div className="bg-white border border-gray-300 rounded-lg p-4">
        <h3 className="text-lg font-semibold">User Info</h3>
        <p className="text-gray-600">This is where user info will be displayed.</p>
      </div>
    </div>
  );
};

export default Profile;