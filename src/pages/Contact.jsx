import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="contact fade-in">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">
            Have a question, suggestion, or just want to say hello? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content section-padding">
        <div className="container">
          <div className="contact-layout">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>Send Us a Message</h2>
              {isSubmitted ? (
                <div className="success-message">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="30" r="28" fill="var(--sage)" opacity="0.2"/>
                    <circle cx="30" cy="30" r="20" stroke="var(--sage)" strokeWidth="3"/>
                    <path d="M20 30L26 36L40 22" stroke="var(--sage)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Your Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Tell us what's on your mind..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-submit">
                    Send Message
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M16 2L8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 2L11 16L8 10L2 7L16 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="contact-info-wrapper">
              <div className="contact-info-card">
                <h2>Connect With Us</h2>
                <p className="info-intro">
                  Whether you're looking for collaboration opportunities, have feedback about our content, 
                  or just want to chat, we're here for you!
                </p>

                <div className="info-items">
                  <div className="info-item">
                    <div className="info-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="info-text">
                      <h4>Email</h4>
                      <a href="mailto:hello@sojournspot.com">hello@sojournspot.com</a>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="info-text">
                      <h4>Location</h4>
                      <p>San Francisco, CA</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div className="info-text">
                      <h4>Response Time</h4>
                      <p>Within 24-48 hours</p>
                    </div>
                  </div>
                </div>

                <div className="social-section">
                  <h3>Follow Our Journey</h3>
                  <div className="social-links-large">
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link-large facebook"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18 2h-3c-1.7 0-3 1.3-3 3v3H9v4h3v8h4v-8h3l1-4h-4V5c0-.6.4-1 1-1h3V2z"/>
                      </svg>
                      <span>Facebook</span>
                    </a>
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link-large instagram"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <path d="M16 11.4A4.5 4.5 0 1 1 12.5 7 4.5 4.5 0 0 1 16 11.4z" fill="var(--white)"/>
                        <circle cx="17.5" cy="6.5" r="1.5" fill="var(--white)"/>
                      </svg>
                      <span>Instagram</span>
                    </a>
                    <a 
                      href="https://pinterest.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link-large pinterest"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.3-.1-.8-.1-2 0-2.8l1.3-5.4s-.3-.7-.3-1.6c0-1.5.9-2.6 2-2.6.9 0 1.4.7 1.4 1.5 0 .9-.6 2.3-.9 3.5-.2 1 .5 1.8 1.5 1.8 1.8 0 3.2-1.9 3.2-4.6 0-2.4-1.7-4.1-4.2-4.1-2.8 0-4.5 2.1-4.5 4.3 0 .9.3 1.8.7 2.3.1.1.1.2.1.3-.1.3-.2 1-.3 1.1 0 .2-.1.2-.3.1-1.3-.6-2.1-2.5-2.1-4 0-3.2 2.3-6.1 6.6-6.1 3.5 0 6.2 2.5 6.2 5.8 0 3.5-2.2 6.2-5.2 6.2-1 0-2-.5-2.3-1.1l-.6 2.4c-.2.9-.8 2-1.2 2.7.9.3 1.9.4 2.9.4 5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
                      </svg>
                      <span>Pinterest</span>
                    </a>
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link-large twitter"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                      </svg>
                      <span>Twitter</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How do you select products to review?</h3>
              <p>
                We carefully research and test products based on quality, value, user reviews, 
                and personal experience. We prioritize authenticity and only recommend products 
                we genuinely believe in.
              </p>
            </div>
            <div className="faq-item">
              <h3>Can I submit a guest post?</h3>
              <p>
                We occasionally accept guest contributions from experts in our covered categories. 
                Please email us with your idea, writing samples, and relevant credentials.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you accept sponsored content?</h3>
              <p>
                We maintain editorial independence. While we may accept sponsored content, 
                all reviews remain honest and unbiased. Sponsored posts are clearly marked.
              </p>
            </div>
            <div className="faq-item">
              <h3>How often do you publish new content?</h3>
              <p>
                We publish new articles regularly across all six categories. Subscribe to our 
                newsletter to stay updated with our latest posts and recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

