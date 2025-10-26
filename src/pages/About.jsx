import './About.css';

function About() {
  const categories = [
    {
      name: "Fashion & Accessories",
      icon: "👗",
      description: "Curated style guides, seasonal trends, and product reviews for the fashion-forward."
    },
    {
      name: "Health & Beauty",
      icon: "💄",
      description: "Natural skincare routines, wellness tips, and beauty product recommendations."
    },
    {
      name: "Home & Garden",
      icon: "🏡",
      description: "Interior design inspiration, DIY projects, and sustainable living solutions."
    },
    {
      name: "Travel & Accommodation",
      icon: "✈️",
      description: "Hidden destinations, travel guides, and accommodation recommendations."
    },
    {
      name: "Finance & Insurance",
      icon: "💰",
      description: "Smart money management, investment platforms, and insurance guidance."
    },
    {
      name: "Food & Beverage",
      icon: "🍽️",
      description: "Recipe inspiration, restaurant reviews, and culinary adventures."
    }
  ];

  const values = [
    {
      title: "Authenticity",
      description: "We provide honest reviews and recommendations based on real experiences and thorough research."
    },
    {
      title: "Quality",
      description: "Every article is carefully crafted to deliver valuable insights and actionable information."
    },
    {
      title: "Community",
      description: "We're building a space where readers can discover, learn, and share their own journeys."
    },
    {
      title: "Inspiration",
      description: "Our goal is to inspire better living through thoughtful content and meaningful recommendations."
    }
  ];

  return (
    <div className="about fade-in">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="about-title">About SojournSpot</h1>
          <p className="about-subtitle">
            Your trusted companion for discovering quality products, destinations, and lifestyle inspiration.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="about-story section-padding">
        <div className="container">
          <div className="story-content">
            <div className="story-image">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop" 
                alt="Our team working together"
                loading="lazy"
              />
            </div>
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                SojournSpot was born from a simple idea: to create a space where quality content meets 
                genuine recommendations. We believe that every journey – whether it's finding the perfect 
                outfit, discovering a new skincare routine, or planning your next adventure – deserves 
                thoughtful guidance.
              </p>
              <p>
                Our team of passionate writers and lifestyle enthusiasts curates content across six diverse 
                categories, ensuring that you have access to reliable information and honest reviews. We're 
                not just another blog; we're your companion in making informed decisions that enhance your 
                everyday life.
              </p>
              <p>
                From fashion to finance, from home décor to travel destinations, we explore topics that 
                matter to you. Each article is crafted with care, backed by research, and infused with 
                personal experience to provide you with authentic, valuable insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="about-categories section-padding">
        <div className="container">
          <h2 className="section-title">What We Cover</h2>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <div 
                key={index} 
                className="category-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="category-icon">{category.icon}</div>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="about-values section-padding">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="value-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about-team section-padding">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="team-avatar" style={{ background: 'linear-gradient(135deg, #D4A5A5 0%, #C9ADA7 100%)' }}>
                ET
              </div>
              <h3>Emma Thompson</h3>
              <p className="team-role">Fashion & Style Editor</p>
              <p className="team-bio">
                With a decade of experience in fashion journalism, Emma brings her keen eye for style 
                and trend forecasting to SojournSpot.
              </p>
            </div>
            <div className="team-member">
              <div className="team-avatar" style={{ background: 'linear-gradient(135deg, #A8B5C3 0%, #9CA986 100%)' }}>
                SM
              </div>
              <h3>Dr. Sarah Martinez</h3>
              <p className="team-role">Health & Beauty Specialist</p>
              <p className="team-bio">
                A certified dermatologist and wellness advocate, Sarah shares science-backed beauty 
                and health recommendations.
              </p>
            </div>
            <div className="team-member">
              <div className="team-avatar" style={{ background: 'linear-gradient(135deg, #C9ADA7 0%, #D4BFDB 100%)' }}>
                MC
              </div>
              <h3>Michael Chen</h3>
              <p className="team-role">Home & Design Expert</p>
              <p className="team-bio">
                An interior designer passionate about creating beautiful, functional spaces that 
                reflect personal style.
              </p>
            </div>
            <div className="team-member">
              <div className="team-avatar" style={{ background: 'linear-gradient(135deg, #F4D9C6 0%, #D4A5A5 100%)' }}>
                SR
              </div>
              <h3>Sofia Rodriguez</h3>
              <p className="team-role">Travel Writer</p>
              <p className="team-bio">
                Having visited over 60 countries, Sofia specializes in finding hidden gems and 
                authentic travel experiences.
              </p>
            </div>
            <div className="team-member">
              <div className="team-avatar" style={{ background: 'linear-gradient(135deg, #9CA986 0%, #A8B5C3 100%)' }}>
                DF
              </div>
              <h3>David Foster</h3>
              <p className="team-role">Finance Advisor</p>
              <p className="team-bio">
                A certified financial planner helping readers make informed decisions about savings, 
                investments, and insurance.
              </p>
            </div>
            <div className="team-member">
              <div className="team-avatar" style={{ background: 'linear-gradient(135deg, #D4BFDB 0%, #F4D9C6 100%)' }}>
                LC
              </div>
              <h3>Lisa Chang</h3>
              <p className="team-role">Food & Lifestyle Writer</p>
              <p className="team-bio">
                A culinary enthusiast and recipe developer sharing delicious discoveries and dining 
                experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Join Our Journey</h2>
            <p>
              Discover curated content, honest reviews, and lifestyle inspiration. 
              Start exploring today and make every journey meaningful.
            </p>
            <div className="cta-buttons">
              <a href="/" className="btn btn-primary">Explore Articles</a>
              <a href="/contact" className="btn btn-secondary">Get in Touch</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

