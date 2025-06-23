import React, { useEffect, useState } from 'react';
import { fetchFromJsonPlaceholder } from '../utils/api';

const ApiData = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFromJsonPlaceholder('posts')
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {posts.slice(0, 10).map((post) => (
        <li
          key={post.id}
          className="py-3 px-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded transition"
        >
          <span className="font-medium text-gray-800 dark:text-gray-100">{post.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default ApiData;