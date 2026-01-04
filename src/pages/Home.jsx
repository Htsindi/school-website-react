import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { homeData } from '../data/home';

function Home() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(false);
  const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);
  
  const { 
    carouselItems, 
    welcomeSection, 
    features, 
    announcements,
    schoolInfo 
  } = homeData;

  // Find active announcement or use the first one
  const activeAnnouncement = announcements.find(ann => ann.isActive) || announcements[0];

  useEffect(() => {
    // Trigger announcement animation after component mounts
    const timer = setTimeout(() => {
      setIsAnnouncementVisible(true);
    }, 500);
    
    // Auto-rotate announcements every 10 seconds (optional)
    const announcementTimer = setInterval(() => {
      setCurrentAnnouncementIndex((prev) => 
        (prev + 1) % announcements.length
      );
    }, 10000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(announcementTimer);
    };
  }, [announcements.length]);

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="home-page pb-5">
      {/* Hero Carousel Section */}
      <section className="hero-carousel-section" aria-label="School Highlights">
        <div className="hero-carousel-container">
          {carouselItems.map((item, index) => (
            <div 
              key={item.id}
              className={`carousel-slide ${index === carouselIndex ? 'active' : ''}`}
              aria-hidden={index !== carouselIndex}
            >
              <img
                src={item.image}
                className="carousel-image"
                alt={item.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              
              {/* Custom Caption Overlay */}
              <div className="carousel-caption-overlay">
                <div className="overlay-content">
                  <h2 className="slide-title">{item.title}</h2>
                  <p className="slide-description">{item.description}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Custom Navigation Arrows */}
          <button 
            className="carousel-arrow prev-arrow" 
            onClick={handlePrev}
            aria-label="Previous slide"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button 
            className="carousel-arrow next-arrow" 
            onClick={handleNext}
            aria-label="Next slide"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Custom Indicators */}
          <div className="custom-indicators">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                className={`custom-indicator ${index === carouselIndex ? 'active' : ''}`}
                onClick={() => setCarouselIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <Container className="welcome-section py-5">
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h1 className="mb-4" style={{ color: '#003366' }}>
              {welcomeSection.title}
            </h1>
            <p className="lead mb-4">
              {welcomeSection.description}
            </p>
            
            {/* School Info Badge */}
            <div className="school-info-badge mb-5 p-3 rounded" 
                 style={{ 
                   backgroundColor: 'rgba(0, 51, 102, 0.1)', 
                   borderLeft: '4px solid #FFD700' 
                 }}>
              <p className="mb-2">
                <strong>{schoolInfo.name}</strong> • {schoolInfo.motto}
              </p>
              <small className="text-muted">
                Established {schoolInfo.established} • {schoolInfo.address}
              </small>
            </div>
            
            {/* Quick Links/Features */}
            <Row className="mt-5">
              {features.map((feature) => (
                <Col md={4} className="mb-4" key={feature.id}>
                  <div className="feature-card p-4 h-100">
                    <div className="feature-icon mb-3" style={{ fontSize: '2.5rem' }}>
                      {feature.icon}
                    </div>
                    <h3 style={{ color: '#003366' }}>{feature.title}</h3>
                    <p className="mb-0">{feature.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Quick Announcements - Animated */}
      <section className="quick-announcements py-4" style={{ backgroundColor: '#003366', color: 'white' }}>
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col xs={12} className="text-center position-relative">
              <div 
                className={`announcement-container ${isAnnouncementVisible ? 'visible' : ''}`}
                style={{
                  display: 'inline-block',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <h4 
                  className="mb-0 announcement-text" 
                  style={{ 
                    color: '#FFD700',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    flexWrap: 'wrap'
                  }}
                >
                  <span className="announcement-icon">{announcements[currentAnnouncementIndex].icon}</span>
                  <span>{announcements[currentAnnouncementIndex].text}</span>
                  <span className="announcement-icon">{announcements[currentAnnouncementIndex].dateIcon}</span>
                </h4>
                
                {/* Announcement indicators */}
                <div className="announcement-indicators mt-3">
                  {announcements.map((_, index) => (
                    <button
                      key={index}
                      className={`announcement-indicator ${index === currentAnnouncementIndex ? 'active' : ''}`}
                      onClick={() => setCurrentAnnouncementIndex(index)}
                      aria-label={`Go to announcement ${index + 1}`}
                    />
                  ))}
                </div>
                
                {/* Pulsing animation dot */}
                <span className="pulse-dot"></span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Add CSS styles for animations */}
      <style jsx>{`
        .home-page {
          padding-bottom: 3rem !important;
        }
        
        .announcement-container {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }
        
        .announcement-container.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .announcement-text {
          position: relative;
          padding: 12px 24px;
          background: rgba(255, 215, 0, 0.1);
          border-radius: 8px;
          animation: subtlePulse 2s infinite;
          min-height: 60px;
          display: flex;
          align-items: center;
        }
        
        @keyframes subtlePulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.2);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(255, 215, 0, 0);
          }
        }
        
        .announcement-icon {
          animation: bounce 2s infinite;
          display: inline-block;
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        .announcement-indicators {
          display: flex;
          justify-content: center;
          gap: 8px;
        }
        
        .announcement-indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: none;
          background-color: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }
        
        .announcement-indicator.active {
          background-color: #FFD700;
          transform: scale(1.2);
        }
        
        .announcement-indicator:hover {
          background-color: rgba(255, 215, 0, 0.7);
          transform: scale(1.1);
        }
        
        .pulse-dot {
          position: absolute;
          top: 50%;
          left: -15px;
          width: 12px;
          height: 12px;
          background-color: #FFD700;
          border-radius: 50%;
          transform: translateY(-50%);
          animation: pulse 1.5s infinite;
          opacity: 0.8;
        }
        
        @keyframes pulse {
          0% {
            transform: translateY(-50%) scale(0.8);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-50%) scale(1.2);
            opacity: 1;
          }
          100% {
            transform: translateY(-50%) scale(0.8);
            opacity: 0.8;
          }
        }
        
        /* Feature cards */
        .feature-card {
          transition: all 0.3s ease;
          border-radius: 10px;
          border: 2px solid transparent;
          background: white;
          box-shadow: 0 4px 6px rgba(0, 51, 102, 0.1);
          display: flex;
          flex-direction: column;
        }
        
        .feature-card:hover {
          transform: translateY(-5px);
          border-color: #FFD700;
          box-shadow: 0 8px 15px rgba(0, 51, 102, 0.2);
        }
        
        .feature-icon {
          transition: transform 0.3s ease;
        }
        
        .feature-card:hover .feature-icon {
          transform: scale(1.1);
        }
        
        /* School info badge */
        .school-info-badge {
          transition: all 0.3s ease;
        }
        
        .school-info-badge:hover {
          transform: translateX(5px);
          background-color: rgba(0, 51, 102, 0.15) !important;
        }
        
        /* Carousel enhancements */
        .carousel-slide {
          transition: opacity 0.5s ease;
        }
        
        .carousel-slide:not(.active) {
          opacity: 0;
          pointer-events: none;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
        }
        
        .carousel-slide.active {
          opacity: 1;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .announcement-text {
            flex-direction: column;
            gap: 8px;
            padding: 15px;
            min-height: auto;
          }
          
          .pulse-dot {
            display: none;
          }
          
          .feature-card {
            margin-bottom: 1.5rem;
          }
        }
        
        @media (max-width: 576px) {
          .announcement-text {
            font-size: 1rem;
          }
          
          .feature-icon {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;