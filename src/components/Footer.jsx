import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="18" fill="url(#gradient2)" />
                <path
                  d="M20 10 C15 10, 12 13, 12 18 C12 23, 15 25, 20 25 C25 25, 28 23, 28 18 C28 13, 25 10, 20 10Z"
                  fill="white"
                  opacity="0.9"
                />
                <circle cx="20" cy="28" r="4" fill="white" opacity="0.8" />
                <defs>
                  <linearGradient id="gradient2" x1="0" y1="0" x2="40" y2="40">
                    <stop offset="0%" stopColor="#D4A5A5" />
                    <stop offset="100%" stopColor="#C9ADA7" />
                  </linearGradient>
                </defs>
              </svg>
              <span>SojournSpot</span>
            </div>
            <p className="footer-description">
              Your trusted companion for discovering quality products, travel destinations, 
              and lifestyle inspiration. Making every journey meaningful.
            </p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <nav className="footer-nav">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>

          <div className="footer-section">
            <h3>Categories</h3>
            <nav className="footer-nav">
              <a href="/#fashion">Fashion & Accessories</a>
              <a href="/#health">Health & Beauty</a>
              <a href="/#home">Home & Garden</a>
              <a href="/#travel">Travel & Accommodation</a>
              <a href="/#finance">Finance & Insurance</a>
            </nav>
          </div>

          <div className="footer-section">
            <h3>Connect With Us</h3>
            <div className="social-links">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-link"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3c-1.7 0-3 1.3-3 3v3H9v4h3v8h4v-8h3l1-4h-4V5c0-.6.4-1 1-1h3V2z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-link"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.4A4.5 4.5 0 1 1 12.5 7 4.5 4.5 0 0 1 16 11.4z" fill="var(--white)"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="var(--white)"/>
                </svg>
              </a>
              <a 
                href="https://pinterest.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="social-link"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.3-.1-.8-.1-2 0-2.8l1.3-5.4s-.3-.7-.3-1.6c0-1.5.9-2.6 2-2.6.9 0 1.4.7 1.4 1.5 0 .9-.6 2.3-.9 3.5-.2 1 .5 1.8 1.5 1.8 1.8 0 3.2-1.9 3.2-4.6 0-2.4-1.7-4.1-4.2-4.1-2.8 0-4.5 2.1-4.5 4.3 0 .9.3 1.8.7 2.3.1.1.1.2.1.3-.1.3-.2 1-.3 1.1 0 .2-.1.2-.3.1-1.3-.6-2.1-2.5-2.1-4 0-3.2 2.3-6.1 6.6-6.1 3.5 0 6.2 2.5 6.2 5.8 0 3.5-2.2 6.2-5.2 6.2-1 0-2-.5-2.3-1.1l-.6 2.4c-.2.9-.8 2-1.2 2.7.9.3 1.9.4 2.9.4 5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="social-link"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
            </div>
            <p className="newsletter-text">
              Subscribe to our newsletter for the latest updates and exclusive content.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} SojournSpot. All rights reserved. Made with love for better living.</p>
          <div className="footer-bottom-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

