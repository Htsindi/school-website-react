import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  
  const carouselItems = [
    {
      id: 1,
      image: "/assets/InClass.jpg",
      alt: "Students in Class",
      title: "In-Class Learning",
      description: "Empowering learners for a brighter future through modern teaching methods and interactive classrooms."
    },
    {
      id: 2,
      image: "/assets/Atheletics.jpg",
      alt: "Athletics Event",
      title: "Athletics and Sports",
      description: "Building teamwork, discipline, and sportsmanship through comprehensive athletic programs."
    },
    {
      id: 3,
      image: "/assets/ScienceExpo.jpg",
      alt: "Science Expo",
      title: "Science Expo",
      description: "Exploring innovation and creativity in our annual science fair showcasing student projects."
    },
    {
      id: 4,
      image: "/assets/Playgrounds.jpg",
      alt: "School Playgrounds",
      title: "Playgrounds and Recreation",
      description: "Providing safe and fun recreational spaces for physical development and social interaction."
    }
  ];

  const handleSelect = (selectedIndex) => {
    setCarouselIndex(selectedIndex);
  };

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="home-page">
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
              Welcome to Sacred Heart Private Primary School
            </h1>
            <p className="lead mb-4">
              A premier educational institution dedicated to nurturing young minds, 
              fostering character development, and preparing students for success in 
              an ever-changing world.
            </p>
            
            {/* Quick Links/Features */}
            <Row className="mt-5">
              <Col md={4} className="mb-4">
                <div className="feature-card p-4">
                  <h3 style={{ color: '#003366' }}>Academic Excellence</h3>
                  <p>Comprehensive curriculum with modern teaching methodologies</p>
                </div>
              </Col>
              <Col md={4} className="mb-4">
                <div className="feature-card p-4">
                  <h3 style={{ color: '#003366' }}>Holistic Development</h3>
                  <p>Focus on sports, arts, and character building</p>
                </div>
              </Col>
              <Col md={4} className="mb-4">
                <div className="feature-card p-4">
                  <h3 style={{ color: '#003366' }}>Safe Environment</h3>
                  <p>Secure and nurturing atmosphere for all students</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Quick Announcements */}
      <section className="quick-announcements py-4" style={{ backgroundColor: '#003366', color: 'white' }}>
        <Container>
          <Row className="align-items-center">
            <Col md={8}>
              <h4 className="mb-0" style={{ color: '#FFD700' }}>
                🎓 Upcoming: Parent-Teacher Meetings - November 15th
              </h4>
            </Col>
            <Col md={4} className="text-md-end mt-2 mt-md-0">
              <button className="btn" style={{ backgroundColor: '#FFD700', color: '#003366' }}>
                Learn More
              </button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;