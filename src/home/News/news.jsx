import React, { useEffect, useState } from 'react';
import { Clock, ExternalLink, MapPin, Calendar, TrendingUp, Filter, Eye, Share2 } from 'lucide-react';

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterCategory, setFilterCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid');

  const apiKey = '6c3c86b09daf42709380e2e38047e8fc';
  const url = `https://newsapi.org/v2/everything?q=Sri%20Lanka%20Tourism&language=en&sortBy=publishedAt&apiKey=${apiKey}`;

  const categories = ['All', 'Hotels', 'Flights', 'Culture', 'Visa', 'Nature'];

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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays === 1) return '1d ago';
    if (diffDays < 7) return `${diffDays}d ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`;
    return `${Math.floor(diffDays / 30)}mo ago`;
  };

  const categorizeArticle = (article) => {
    const text = `${article.title} ${article.description}`.toLowerCase();
    if (text.includes('hotel')) return 'Hotels';
    if (text.includes('flight') || text.includes('airport')) return 'Flights';
    if (text.includes('culture') || text.includes('heritage')) return 'Culture';
    if (text.includes('visa')) return 'Visa';
    if (text.includes('wildlife') || text.includes('beach') || text.includes('nature')) return 'Nature';
    return 'Other';
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Hotels': 'bg-blue-100 text-blue-800',
      'Flights': 'bg-purple-100 text-purple-800',
      'Culture': 'bg-amber-100 text-amber-800',
      'Visa': 'bg-green-100 text-green-800',
      'Nature': 'bg-emerald-100 text-emerald-800',
      'Other': 'bg-gray-100 text-gray-800'
    };
    return colors[category] || colors['Other'];
  };

  const filteredArticles = articles.filter(article => {
    if (filterCategory === 'All') return true;
    return categorizeArticle(article) === filterCategory;
  });

  const NewsCard = ({ article, index, featured = false }) => {
    const category = categorizeArticle(article);
    
    if (featured) {
      return (
        <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0">
            <img
              src={article.urlToImage || 'https://via.placeholder.com/1200x600?text=No+Image'}
              alt="featured news"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="relative p-8 md:p-12">
            <div className="flex items-center gap-4 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(category)}`}>
                {category}
              </span>
              <span className="text-yellow-400 text-sm font-medium flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                Featured
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              {article.title}
            </h2>
            <p className="text-slate-300 text-lg mb-6 max-w-3xl">
              {article.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-slate-400">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {getTimeAgo(article.publishedAt)}
                </span>
                <span>{article.source?.name || 'Unknown'}</span>
              </div>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-slate-900 px-6 py-3 rounded-lg font-medium hover:bg-slate-100 transition-colors flex items-center gap-2"
              >
                Read Story
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 overflow-hidden group">
        <div className="relative">
          <img
            src={article.urlToImage || 'https://via.placeholder.com/400x250?text=No+Image'}
            alt="news thumbnail"
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)}`}>
              {category}
            </span>
          </div>
          <div className="absolute top-4 right-4 bg-black bg-opacity-60 text-white px-2 py-1 rounded-full text-xs">
            {getTimeAgo(article.publishedAt)}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-3 leading-tight group-hover:text-slate-600 transition-colors line-clamp-2">
            {article.title}
          </h3>
          <p className="text-slate-600 text-sm mb-4 line-clamp-3">
            {article.description}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Calendar className="w-3 h-3" />
              {formatDate(article.publishedAt)}
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <Share2 className="w-4 h-4 text-slate-600" />
              </button>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-slate-700 hover:text-slate-900 text-sm font-medium transition-colors"
              >
                <Eye className="w-4 h-4" />
                Read
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ListCard = ({ article }) => {
    const category = categorizeArticle(article);
    
    return (
      <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
        <div className="flex gap-4">
          <img
            src={article.urlToImage || 'https://via.placeholder.com/120x80?text=No+Image'}
            alt="news thumbnail"
            className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
          />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)}`}>
                {category}
              </span>
              <span className="text-xs text-slate-500">{getTimeAgo(article.publishedAt)}</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2 line-clamp-2">
              {article.title}
            </h3>
            <p className="text-sm text-slate-600 line-clamp-2 mb-3">
              {article.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">{article.source?.name || 'Unknown'}</span>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-slate-900 text-sm font-medium"
              >
                Read More →
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              
              
            </div>
            
          </div>
          
          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-slate-600" />
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div className="text-sm text-slate-600">
                {filteredArticles.length} articles
              </div>
            </div>
            
            <div className="flex items-center gap-2 bg-slate-200 p-1 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-white text-slate-900 shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-white text-slate-900 shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                List
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
            <p className="text-slate-600 text-lg">Loading latest tourism news...</p>
          </div>
        ) : (
          <>
            {/* Featured Article */}
            {filteredArticles.length > 0 && (
              <div className="mb-12">
                <NewsCard article={filteredArticles[0]} featured={true} />
              </div>
            )}

            {/* News Content */}
            {filteredArticles.length > 1 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                  Latest Updates
                </h2>
                
                {viewMode === 'grid' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredArticles.slice(1).map((article, index) => (
                      <NewsCard key={index} article={article} index={index} />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredArticles.slice(1).map((article, index) => (
                      <ListCard key={index} article={article} />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* No Articles Message */}
            {filteredArticles.length === 0 && (
              <div className="text-center py-20">
                <div className="bg-slate-200 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-slate-500" />
                </div>
                <h3 className="text-xl font-semibold text-slate-700 mb-2">No articles found</h3>
                <p className="text-slate-500 max-w-md mx-auto">
                  We couldn't find any tourism news matching the selected category. Try selecting a different filter.
                </p>
              </div>
            )}
          </>
        )}
      </div>

      {/* Footer */}
      <div className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <p className="text-slate-600">
            News updates refreshed regularly • Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;