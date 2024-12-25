import React from 'react';
import Post from './Post';

const Feed = () => {
  const posts = [
    {
      id: 1,
      username: 'joshua_l',
      location: 'Tokyo, Japan',
      image: 'https://via.placeholder.com/400',
      description: 'Amazing view of the city!',
    },
    {
      id: 2,
      username: 'another_user',
      location: 'New York, USA',
      image: 'https://via.placeholder.com/400',
      description: 'City that never sleeps!',
    },
  ]; // Sample data

  return (
    <div className="max-w-lg mx-auto p-4">
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;