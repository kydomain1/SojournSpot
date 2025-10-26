import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { articles, categories } from '../data/articles';
import './Home.css';

function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  // Filter articles based on category and search
  const filteredArticles = useMemo(() => {
    let filtered = articles;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  // Pagination
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="home fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to SojournSpot</h1>
            <p className="hero-subtitle">
              Discover curated insights, product reviews, and lifestyle inspiration 
              across fashion, beauty, home, travel, finance, and more.
            </p>
            <div className="hero-cta">
              <a href="#articles" className="btn btn-primary">Explore Articles</a>
            </div>
          </div>
          <div className="hero-decoration">
            <div className="decoration-circle circle-1"></div>
            <div className="decoration-circle circle-2"></div>
            <div className="decoration-circle circle-3"></div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="search-filter-section" id="articles">
        <div className="container">
          <div className="search-bar">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="2"/>
              <path d="M14 14L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="articles-section section-padding">
        <div className="container">
          {currentArticles.length > 0 ? (
            <>
              <div className="articles-grid">
                {currentArticles.map((article, index) => (
                  <article 
                    key={article.id} 
                    className="article-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Link to={`/article/${article.slug}`} className="article-image-link">
                      <div className="article-image">
                        <img src={article.image} alt={article.title} loading="lazy" />
                        <div className="article-category-badge">{article.category}</div>
                      </div>
                    </Link>
                    <div className="article-content">
                      <div className="article-meta">
                        <span className="article-date">{formatDate(article.date)}</span>
                        <span className="article-author">By {article.author}</span>
                      </div>
                      <Link to={`/article/${article.slug}`}>
                        <h2 className="article-title">{article.title}</h2>
                      </Link>
                      <p className="article-excerpt">{article.excerpt}</p>
                      <Link to={`/article/${article.slug}`} className="read-more">
                        Read More
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="pagination">
                  <button
                    className="pagination-btn"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M12 5L7 10L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Previous
                  </button>

                  <div className="pagination-numbers">
                    {[...Array(totalPages)].map((_, index) => (
                      <button
                        key={index + 1}
                        className={`pagination-number ${currentPage === index + 1 ? 'active' : ''}`}
                        onClick={() => handlePageChange(index + 1)}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>

                  <button
                    className="pagination-btn"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Next
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M8 5L13 10L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="no-results">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="30" stroke="var(--primary-light)" strokeWidth="3"/>
                <circle cx="40" cy="35" r="2" fill="var(--primary)"/>
                <path d="M30 50 Q40 55, 50 50" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round"/>
              </svg>
              <h3>No articles found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;

