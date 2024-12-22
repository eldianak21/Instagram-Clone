import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-4 bg-white">
      <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
      <img 
        src={post.image} 
        alt={post.title} 
        className="w-full h-auto rounded-md mb-2" 
      />
      <p className="text-gray-600">{post.description}</p>
    </div>
  );
};

export default Post;