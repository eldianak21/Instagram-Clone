import React from 'react';
import Navbar from '../components/Navbar';
import Feed from '../components/Feed';
import profile from '../assets/profile2.jpg'; // Ensure the path is correct

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
    { id: 1, name: 'Your Story', image: profile, live: true }, // Fixed syntax
    { id: 2, name: 'saron', image: 'https://t4.ftcdn.net/jpg/06/36/94/27/360_F_636942772_50sjVSej3AtdpJ4W2494gSa4MkkE2XyZ.jpg' },
    { id: 3, name: 'john', image: 'https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg' },
    { id: 4, name: 'meri-work', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHzPC_OOh1NVqWPNVoz8bjlpBxRvXs0lycSw&s' },
    { id: 5, name: 'aben_', image: 'https://plus.unsplash.com/premium_photo-1678703870962-166fe3f1d274?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D' },
  ];

  return (
    <div className="flex overflow-x-auto p-4 space-x-4 bg-white border-b border-gray-300">
      {stories.map((story) => (
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