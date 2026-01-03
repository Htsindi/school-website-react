import { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { 
  Calendar, 
  Facebook, 
  Youtube, 
  Music, 
  MessageCircle,
  ExternalLink,
  Share2,
  Clock,
  MapPin,
  Users
} from 'lucide-react';

function Media() {
  // Upcoming Event Data
  const [upcomingEvent] = useState({
    title: "Annual Sports Day 2026",
    date: "March 15, 2026",
    time: "9:00 AM - 3:00 PM",
    location: "School Sports Field",
    description: "Join us for our annual sports day featuring track events, team sports, and fun activities for all students and parents. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    participants: "All students from Grade R to Grade 7",
    image: "/assets/sports-day-poster.jpg", // Replace with actual image
    status: "upcoming"
  });

  // Social Media Links Data
  const socialMediaLinks = [
    {
      platform: "Facebook",
      icon: <Facebook size={24} />,
      url: "https://facebook.com/YOUR_SCHOOL_PAGE",
      color: "#1877F2",
      description: "Follow us for updates, photos, and school announcements",
      handle: "@SacredHeartSchool"
    },
    {
      platform: "YouTube",
      icon: <Youtube size={24} />,
      url: "https://youtube.com/channel/YOUR_CHANNEL_ID",
      color: "#FF0000",
      description: "Watch school events, performances, and educational content",
      handle: "Sacred Heart School Channel"
    },
    {
      platform: "TikTok",
      icon: <Music size={24} />,
      url: "https://tiktok.com/@YOUR_SCHOOL_USERNAME",
      color: "#000000",
      description: "Short videos of daily school life and student activities",
      handle: "@SacredHeartSchool"
    },
    {
      platform: "WhatsApp",
      icon: <MessageCircle size={24} />,
      url: "https://wa.me/YOUR_SCHOOL_NUMBER",
      color: "#25D366",
      description: "Quick updates and important announcements",
      handle: "School WhatsApp Channel"
    }
  ];

  // Sample Media Gallery (could be expanded)
  const mediaGallery = [
    {
      title: "Science Fair 2025",
      type: "photos",
      count: 45,
      date: "October 2025"
    },
    {
      title: "Graduation Ceremony",
      type: "videos",
      count: 12,
      date: "December 2025"
    },
    {
      title: "Cultural Day",
      type: "photos",
      count: 68,
      date: "August 2025"
    }
  ];

  const handleSocialClick = (url, platform) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    console.log(`Opening ${platform} page`);
  };

  return (
    <div className="media-page">
      <Container className="py-5">
        {/* Page Header */}
        <div className="text-center mb-5">
          <h1 className="mb-3" style={{ color: '#003366' }}>School Media Hub</h1>
          <p className="lead" style={{ color: '#666' }}>
            Stay connected with our latest events and social media updates
          </p>
        </div>

        {/* Upcoming Event Poster Section */}
        <section className="mb-5">
          <div className="section-header mb-4">
            <h2 className="d-flex align-items-center gap-3" style={{ color: '#003366' }}>
              <Calendar size={32} />
              Upcoming Event
            </h2>
            <div className="divider" style={{ backgroundColor: '#FFD700', height: '3px', width: '100px' }}></div>
          </div>

          <Card className="event-poster border-0 shadow-lg overflow-hidden">
            <Row className="g-0">
              <Col lg={5}>
                <div 
                  className="event-image h-100"
                  style={{
                    background: 'linear-gradient(135deg, #003366, #004080)',
                    minHeight: '300px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    padding: '2rem'
                  }}
                >
                  <div className="text-center">
                    <Calendar size={64} color="#FFD700" />
                    <h3 className="mt-3" style={{ color: '#FFD700' }}>Upcoming Event</h3>
                    <p className="mb-0">Save the date!</p>
                  </div>
                </div>
              </Col>
              <Col lg={7}>
                <Card.Body className="p-4 p-lg-5">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                      <Card.Title as="h2" style={{ color: '#003366' }}>
                        {upcomingEvent.title}
                      </Card.Title>
                      <span className="badge bg-warning text-dark px-3 py-2">
                        {upcomingEvent.status.toUpperCase()}
                      </span>
                    </div>
                    <Share2 size={24} style={{ color: '#003366', cursor: 'pointer' }} />
                  </div>

                  <div className="event-details mb-4">
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="d-flex align-items-center gap-3 mb-3">
                          <Calendar size={20} style={{ color: '#003366' }} />
                          <div>
                            <h6 className="mb-0" style={{ color: '#003366' }}>Date</h6>
                            <p className="mb-0">{upcomingEvent.date}</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center gap-3 mb-3">
                          <Clock size={20} style={{ color: '#003366' }} />
                          <div>
                            <h6 className="mb-0" style={{ color: '#003366' }}>Time</h6>
                            <p className="mb-0">{upcomingEvent.time}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex align-items-center gap-3 mb-3">
                          <MapPin size={20} style={{ color: '#003366' }} />
                          <div>
                            <h6 className="mb-0" style={{ color: '#003366' }}>Location</h6>
                            <p className="mb-0">{upcomingEvent.location}</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center gap-3 mb-3">
                          <Users size={20} style={{ color: '#003366' }} />
                          <div>
                            <h6 className="mb-0" style={{ color: '#003366' }}>Participants</h6>
                            <p className="mb-0">{upcomingEvent.participants}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Card.Text className="mb-4">
                    {upcomingEvent.description}
                  </Card.Text>

                  <div className="d-flex gap-3">
                    <Button 
                      variant="primary" 
                      style={{ backgroundColor: '#003366', borderColor: '#003366' }}
                      onClick={() => alert('Event registration coming soon!')}
                    >
                      Register Interest
                    </Button>
                    <Button 
                      variant="outline-primary" 
                      style={{ color: '#003366', borderColor: '#003366' }}
                      onClick={() => alert('Adding to calendar...')}
                    >
                      Add to Calendar
                    </Button>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </section>

        {/* Social Media Links Section */}
        <section className="mb-5">
          <div className="section-header mb-4">
            <h2 className="d-flex align-items-center gap-3" style={{ color: '#003366' }}>
              <Share2 size={32} />
              Connect With Us
            </h2>
            <div className="divider" style={{ backgroundColor: '#FFD700', height: '3px', width: '100px' }}></div>
            <p className="text-muted mb-4">
              Follow our social media channels for real-time updates, photos, and school announcements
            </p>
          </div>

          <Row className="g-4">
            {socialMediaLinks.map((social, index) => (
              <Col key={index} xs={12} sm={6} md={3}>
                <Card 
                  className="h-100 border-0 shadow-sm social-card"
                  style={{ 
                    borderTop: `4px solid ${social.color}`,
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
                  }}
                >
                  <Card.Body className="text-center p-4 d-flex flex-column">
                    <div 
                      className="social-icon mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center"
                      style={{ 
                        backgroundColor: social.color,
                        width: '60px',
                        height: '60px'
                      }}
                    >
                      <div style={{ color: 'white' }}>
                        {social.icon}
                      </div>
                    </div>
                    
                    <Card.Title as="h5" style={{ color: '#003366' }} className="mb-2">
                      {social.platform}
                    </Card.Title>
                    
                    <Card.Text className="text-muted small mb-3 flex-grow-1">
                      {social.description}
                    </Card.Text>
                    
                    <div className="mb-3">
                      <small className="text-muted">{social.handle}</small>
                    </div>
                    
                    <Button
                      variant="outline-primary"
                      className="mt-auto"
                      style={{ 
                        color: social.color,
                        borderColor: social.color,
                        backgroundColor: 'transparent'
                      }}
                      onClick={() => handleSocialClick(social.url, social.platform)}
                    >
                      <div className="d-flex align-items-center justify-content-center gap-2">
                        <span>Visit Page</span>
                        <ExternalLink size={16} />
                      </div>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* Media Gallery Preview */}
        <section className="mb-5">
          <div className="section-header mb-4">
            <h2 style={{ color: '#003366' }}>Media Gallery</h2>
            <div className="divider" style={{ backgroundColor: '#FFD700', height: '3px', width: '100px' }}></div>
            <p className="text-muted mb-4">
              Browse through our collection of photos and videos from past events
            </p>
          </div>

          <Row className="g-4">
            {mediaGallery.map((item, index) => (
              <Col key={index} md={4}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body className="p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <h5 style={{ color: '#003366' }}>{item.title}</h5>
                      <span className="badge bg-secondary">{item.type}</span>
                    </div>
                    
                    <div className="mb-3">
                      <div className="d-flex align-items-center gap-2">
                        <Calendar size={16} />
                        <small className="text-muted">{item.date}</small>
                      </div>
                      <div className="d-flex align-items-center gap-2 mt-1">
                        <div className="rounded-circle bg-primary p-1">
                          <div style={{ width: '16px', height: '16px' }}></div>
                        </div>
                        <small className="text-muted">{item.count} items</small>
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline-primary" 
                      className="w-100"
                      style={{ color: '#003366', borderColor: '#003366' }}
                      onClick={() => alert(`Viewing ${item.title} gallery...`)}
                    >
                      View Gallery
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-4">
            <Button 
              variant="primary" 
              style={{ backgroundColor: '#003366', borderColor: '#003366' }}
              onClick={() => alert('Opening full media gallery...')}
            >
              View Full Media Gallery
            </Button>
          </div>
        </section>

        {/* Social Media Tips */}
        <section>
          <Card className="border-0 shadow-sm" style={{ backgroundColor: 'rgba(0, 51, 102, 0.05)' }}>
            <Card.Body className="p-4">
              <h4 style={{ color: '#003366' }} className="mb-3">
                Stay Updated with Our Social Media
              </h4>
              <Row>
                <Col md={6}>
                  <ul className="mb-0">
                    <li>Enable notifications for important announcements</li>
                    <li>Check our pages daily for updates</li>
                    <li>Share school events with friends and family</li>
                  </ul>
                </Col>
                <Col md={6}>
                  <ul className="mb-0">
                    <li>Tag us in your school-related posts</li>
                    <li>Use our official hashtag: #SacredHeartSchool</li>
                    <li>Contact us through social media for quick queries</li>
                  </ul>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </section>
      </Container>
    </div>
  );
}

export default Media;