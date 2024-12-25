import React from 'react';
import Navbar from '../components/Navbar';
import Feed from '../components/Feed';

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Stories />
      <Feed />
    </div>
  );
};

const Stories = () => {
  const stories = [
    { id: 1, name: 'Your Story', image: 'https://via.placeholder.com/100', live: true },
    { id: 2, name: 'karennne', image: 'https://via.placeholder.com/100' },
    { id: 3, name: 'zackjohn', image: 'https://via.placeholder.com/100' },
    { id: 4, name: 'kieron_d', image: 'https://via.placeholder.com/100' },
    { id: 5, name: 'craig_', image: 'https://via.placeholder.com/100' },
  ];

  return (
    <div className="flex overflow-x-auto p-4 space-x-4 bg-white border-b border-gray-300">
      {stories.map(story => (
        <div key={story.id} className="flex flex-col items-center">
          <div className={`w-16 h-16 rounded-full border-4 ${story.live ? 'border-red-500' : 'border-gray-300'} mb-2`}>
            <img src={story.image} alt={story.name} className="w-full h-full rounded-full" />
          </div>
          <span className="text-sm text-center">{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Home;