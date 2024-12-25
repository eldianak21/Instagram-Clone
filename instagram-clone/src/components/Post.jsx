import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-4 bg-white">
      <div className="flex items-center mb-2">
        <img
          src="https://via.placeholder.com/40"
          alt={post.username}
          className="w-10 h-10 rounded-full mr-2"
        />
        <div>
          <h3 className="text-lg font-semibold">{post.username}</h3>
          <p className="text-gray-600 text-sm">{post.location}</p>
        </div>
      </div>
      <img 
        src={post.image} 
        alt={post.description} 
        className="w-full h-auto rounded-md mb-2" 
      />
      <p className="text-gray-600">{post.description}</p>
    </div>
  );
};

export default Post;