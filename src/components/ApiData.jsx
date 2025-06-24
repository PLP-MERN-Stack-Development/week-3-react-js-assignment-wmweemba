import React, { useEffect, useState } from 'react';
import { fetchFromJsonPlaceholder } from '../utils/api';

const POSTS_PER_PAGE = 5;

const ApiData = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setLoading(true);
    setError(null);

    let endpoint = '';
    if (searchTerm) {
      endpoint = `posts?q=${encodeURIComponent(searchTerm)}`;
    } else {
      endpoint = `posts?_page=${page}&_limit=${POSTS_PER_PAGE}`;
    }

    fetchFromJsonPlaceholder(endpoint)
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [page, searchTerm]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(search.trim());
    setPage(1); // Reset to first page on new search
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="relative">
      <ul className="divide-y divide-gray-200 dark:divide-gray-700 mb-4">
        {posts.length === 0 ? (
          <li className="py-3 px-2 text-gray-500 dark:text-gray-400">No results found.</li>
        ) : (
          posts.map((post) => (
            <li
              key={post.id}
              className="py-3 px-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded transition"
            >
              <span className="font-medium text-gray-800 dark:text-gray-100">{post.title}</span>
            </li>
          ))
        )}
      </ul>
      {!searchTerm && (
        <div className="flex gap-2">
          <button
            className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            Previous
          </button>
          <span className="px-2 py-1">{page}</span>
          <button
            className="px-3 py-1 bg-blue-500 text-white rounded"
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </button>
        </div>
      )}
      {/* Search bar at bottom right */}
      <form
        onSubmit={handleSearchSubmit}
        className="absolute bottom-0 right-0 flex items-center gap-2 mt-4"
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search posts..."
          className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-gray-100 dark:bg-gray-700"
        />
        <button
          type="submit"
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default ApiData;