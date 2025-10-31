import React, { useState, useEffect, useContext } from "react";
import Button from "./button.jsx";
import { ThemeContext } from "./ThemeContext.jsx";

const PostsList = () => {
  const { theme } = useContext(ThemeContext); // ✅ useContext must be inside component

  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [hasMore, setHasMore] = useState(true);

  const limit = 5;
  const maxPage = 2;

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
      );

      if (!res.ok) throw new Error("Failed to fetch posts");

      const data = await res.json();
      setPosts((prev) => [...prev, ...data]);
      setFilteredPosts((prev) => [...prev, ...data]);
      setHasMore(page < maxPage && data.length > 0);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  };

  return (
    <div
      className={`min-h-screen p-3 md:p-6 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-slate-500 text-gray-100"
          : "bg-gray-100 text-gray-500"
      }`}
    >
    <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-all duration-300" >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            Public API Posts
          </h2>
        </div>

        {/* Search bar */}
        <div className="mb-6 flex gap-2">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow px-4 py-2 border rounded-lg 
              bg-gray-50 text-gray-900
              focus:outline-none focus:ring-2 focus:ring-blue-500 
              dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-300 dark:border-gray-600"
          />
          <Button type="button" variant="primary" onClick={handleSearch}>
            Search
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => {
              setSearchTerm("");
              setFilteredPosts(posts);
            }}
          >
            Clear
          </Button>
        </div>

        {/* Loading and error states */}
        {loading && posts.length === 0 && (
          <p className="text-gray-500 dark:text-gray-400">Loading posts...</p>
        )}
        {error && (
          <p className="text-red-500 dark:text-red-400">Error: {error}</p>
        )}

        {/* Posts Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="p-4 border rounded-lg 
                bg-gray-50 text-gray-800 
                dark:bg-gray-700 dark:text-gray-100 
                dark:border-gray-600 hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="font-semibold mb-2 text-lg">{post.title}</h3>
              <p className="text-sm">{post.body}</p>
            </div>
          ))}
        </div>

        {/* Load More */}
        {!loading && hasMore && (
          <div className="mt-6 text-center">
            <Button
              variant="primary"
              onClick={() => {
                if (page < maxPage) setPage(page + 1);
              }}
            >
              Load More
            </Button>
          </div>
        )}

        {/* No Results */}
        {!loading && filteredPosts.length === 0 && (
          <p className="text-gray-500 dark:text-gray-400 text-center mt-4">
            No posts found.
          </p>
        )}
      </div>
    </div>
  );
};

export default PostsList;
