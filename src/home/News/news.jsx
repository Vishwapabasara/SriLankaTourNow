// src/components/NewsFeed.jsx
import React, { useEffect, useState } from 'react';

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiKey = '6c3c86b09daf42709380e2e38047e8fc'; // Replace this with your API key
  const url = `https://newsapi.org/v2/everything?q=Sri%20Lanka%20Tourism&language=en&sortBy=publishedAt&apiKey=${apiKey}`;

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setArticles(data.articles || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch news:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Sri Lanka Tourism News</h1>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {loading ? (
          <div className="text-center text-gray-500 text-lg py-20">Loading latest articles...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
              >
                <img
                  src={article.urlToImage || 'https://via.placeholder.com/400x200?text=No+Image'}
                  alt="news"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col flex-1">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">{article.title}</h2>
                  <p className="text-sm text-gray-600 mb-4 flex-1">{article.description}</p>
                  <div className="mt-auto">
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm font-medium text-blue-500 hover:text-blue-700 transition"
                    >
                      Read Full Article →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsFeed;
