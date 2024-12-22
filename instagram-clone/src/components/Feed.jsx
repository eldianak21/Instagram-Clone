import React from 'react';
import Post from './Post';

const Feed = () => {
  const posts = [
    {
      id: 1,
      title: 'First Post',
      image: 'https://via.placeholder.com/400',
      description: 'This is my first post!',
    },
    {
      id: 2,
      title: 'Second Post',
      image: 'https://via.placeholder.com/400',
      description: 'Another day, another post!',
    },
  ]; // Sample data

  return (
    <div className="max-w-lg mx-auto p-4">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;