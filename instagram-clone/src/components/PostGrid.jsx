import React from 'react';

const posts = [
  // Sample post images
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  
];

const PostGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {posts.map((post, index) => (
        <div key={index} className="bg-gray-300 h-40">
          <img src={post} alt="Post" className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
};

export default PostGrid;