import { useParams, Link, useNavigate } from 'react-router-dom';
import { articles } from '../data/articles';
import './ArticleDetail.css';

function ArticleDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="article-not-found">
        <div className="container">
          <h1>Article Not Found</h1>
          <p>Sorry, we couldn't find the article you're looking for.</p>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const relatedArticles = articles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="article-detail fade-in">
      {/* Article Header */}
      <section className="article-header">
        <div className="container">
          <button onClick={() => navigate(-1)} className="back-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12 5L7 10L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back
          </button>
          
          <div className="article-header-content">
            <span className="article-category-tag">{article.category}</span>
            <h1 className="article-detail-title">{article.title}</h1>
            <div className="article-header-meta">
              <span className="meta-item">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M9 5v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                {formatDate(article.date)}
              </span>
              <span className="meta-item">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="6" r="3" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M3 15a6 6 0 0 1 12 0" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                {article.author}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="article-featured-image">
        <div className="container">
          <div className="featured-image-wrapper">
            <img src={article.image} alt={article.title} />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="article-body">
        <div className="container">
          <div className="article-layout">
            <div className="article-main">
              <div className="article-excerpt-box">
                <p>{article.excerpt}</p>
              </div>

              <div className="article-text">
                {article.content.split('\n\n').map((paragraph, index) => {
                  const elements = [];
                  
                  if (paragraph.startsWith('## ')) {
                    elements.push(<h2 key={index}>{paragraph.replace('## ', '')}</h2>);
                  } else if (paragraph.startsWith('### ')) {
                    elements.push(<h3 key={index}>{paragraph.replace('### ', '')}</h3>);
                  } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    elements.push(<h4 key={index} className="product-heading">{paragraph.replace(/\*\*/g, '')}</h4>);
                  } else if (paragraph.trim()) {
                    elements.push(<p key={index} dangerouslySetInnerHTML={{ __html: paragraph }}></p>);
                  }
                  
                  // Insert images at specific positions in the content
                  if (article.images && article.images.length > 1) {
                    if (index === 5 && article.images[1]) {
                      elements.push(
                        <div key={`img-${index}-1`} className="inline-image">
                          <img src={article.images[1]} alt={`${article.title} illustration`} loading="lazy" />
                        </div>
                      );
                    }
                    if (index === 9 && article.images[2]) {
                      elements.push(
                        <div key={`img-${index}-2`} className="inline-image">
                          <img src={article.images[2]} alt="Pep Talks and Motivation" loading="lazy" />
                        </div>
                      );
                    }
                    if (index === 12 && article.images[3]) {
                      elements.push(
                        <div key={`img-${index}-3`} className="inline-image">
                          <img src={article.images[3]} alt="How Cameo Works - Celebrity Directory" loading="lazy" />
                        </div>
                      );
                    }
                    if (index === 17 && article.images[4]) {
                      elements.push(
                        <div key={`img-${index}-4`} className="inline-image">
                          <img src={article.images[4]} alt={`${article.title} illustration`} loading="lazy" />
                        </div>
                      );
                    }
                  }
                  
                  return elements;
                })}
              </div>

              {/* Article Images Gallery - Hidden since images are now inline */}

              {/* Products Section */}
              {article.products && article.products.length > 0 && (
                <div className="products-section">
                  <h2>Featured Products</h2>
                  <div className="products-grid">
                    {article.products.map((product, index) => (
                      <div key={index} className="product-card">
                        <div className="product-image">
                          <img src={product.image} alt={product.name} loading="lazy" />
                        </div>
                        <div className="product-info">
                          <h4>{product.name}</h4>
                          <p className="product-price">{product.price}</p>
                          <a href={product.link} className="product-btn">
                            View Product
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="article-sidebar">
              <div className="sidebar-widget">
                <h3>About the Author</h3>
                <div className="author-card">
                  <div className="author-avatar">
                    {article.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="author-info">
                    <h4>{article.author}</h4>
                    <p>Passionate writer and lifestyle enthusiast sharing insights and recommendations.</p>
                  </div>
                </div>
              </div>

              <div className="sidebar-widget">
                <h3>Share Article</h3>
                <div className="share-buttons">
                  <a href={`https://facebook.com/sharer/sharer.php?u=${window.location.href}`} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="share-btn facebook">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M15 2h-2.5c-1.4 0-2.5 1.1-2.5 2.5v2.5H7.5v3.3H10V18h3.3v-7.7H16l.4-3.3h-3.7V4.5c0-.5.4-.8.8-.8H15V2z"/>
                    </svg>
                  </a>
                  <a href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${article.title}`}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="share-btn twitter">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M19 4a8 8 0 01-2.36 2.29c.01.2.01.4.01.59 0 5.5-4.2 11.8-11.8 11.8A11.7 11.7 0 010 16.7a8.3 8.3 0 006.1-1.7 4.2 4.2 0 01-3.9-2.9c.6.1 1.2.1 1.7-.1a4.2 4.2 0 01-3.3-4.1v-.1c.5.3 1.1.4 1.7.5a4.2 4.2 0 01-1.3-5.6 11.8 11.8 0 008.6 4.4 4.2 4.2 0 017.1-3.8 8.4 8.4 0 002.6-1 4.2 4.2 0 01-1.8 2.3A8.2 8.2 0 0019 4z"/>
                    </svg>
                  </a>
                  <a href={`https://pinterest.com/pin/create/button/?url=${window.location.href}&description=${article.title}`}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="share-btn pinterest">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 0C4.5 0 0 4.5 0 10c0 4.2 2.6 7.8 6.3 9.3-.1-.8-.1-2 0-2.8l1.3-5.4s-.3-.7-.3-1.6c0-1.5.9-2.6 2-2.6.9 0 1.4.7 1.4 1.5 0 .9-.6 2.3-.9 3.5-.2 1 .5 1.8 1.5 1.8 1.8 0 3.2-1.9 3.2-4.6 0-2.4-1.7-4.1-4.2-4.1-2.8 0-4.5 2.1-4.5 4.3 0 .9.3 1.8.7 2.3.1.1.1.2.1.3-.1.3-.2 1-.3 1.1 0 .2-.1.2-.3.1-1.3-.6-2.1-2.5-2.1-4 0-3.2 2.3-6.1 6.6-6.1 3.5 0 6.2 2.5 6.2 5.8 0 3.5-2.2 6.2-5.2 6.2-1 0-2-.5-2.3-1.1l-.6 2.4c-.2.9-.8 2-1.2 2.7.9.3 1.9.4 2.9.4 5.5 0 10-4.5 10-10S15.5 0 10 0z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="related-articles">
          <div className="container">
            <h2>Related Articles</h2>
            <div className="related-grid">
              {relatedArticles.map(relatedArticle => (
                <Link 
                  key={relatedArticle.id}
                  to={`/article/${relatedArticle.slug}`}
                  className="related-card"
                >
                  <div className="related-image">
                    <img src={relatedArticle.image} alt={relatedArticle.title} loading="lazy" />
                  </div>
                  <div className="related-content">
                    <span className="related-category">{relatedArticle.category}</span>
                    <h3>{relatedArticle.title}</h3>
                    <p>{relatedArticle.excerpt.substring(0, 100)}...</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default ArticleDetail;

