import { Container, Row, Col, Card } from 'react-bootstrap';
import { Book, Target, Eye, Heart, CalendarCheck, Users, Award, Globe } from 'lucide-react';

function OurSchool() {
  return (
    <div className="our-school-page">
      <Container className="py-5">
        {/* Page Header */}
        <div className="text-center mb-5">
          <h1 className="mb-3" style={{ color: '#003366' }}>About Our School</h1>
          <p className="lead" style={{ color: '#666' }}>
            Sacred Heart Private Primary School - Nurturing excellence since 1995
          </p>
        </div>

        {/* School History Section */}
        <section className="mb-5">
          <div className="section-header mb-4">
            <h2 className="d-flex align-items-center gap-3" style={{ color: '#003366' }}>
              <Book size={32} />
              School History
            </h2>
            <div className="divider" style={{ backgroundColor: '#FFD700', height: '3px', width: '100px' }}></div>
          </div>
          
          <Row className="align-items-center">
            <Col md={6}>
              <div className="history-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="mt-4">
                  <h5 style={{ color: '#003366' }}>Key Milestones</h5>
                  <ul className="timeline">
                    <li><strong>1995:</strong> School founded with 50 students</li>
                    <li><strong>2005:</strong> New campus construction completed</li>
                    <li><strong>2015:</strong> Achieved 100% pass rate for 5 consecutive years</li>
                    <li><strong>2023:</strong> Awarded "Excellence in Education" recognition</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="history-image p-4">
                <div 
                  className="rounded"
                  style={{
                    height: '300px',
                    background: 'linear-gradient(135deg, #003366, #004080)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}
                >
                  <div className="text-center">
                    <h3 style={{ color: '#FFD700' }}>Est. 1995</h3>
                    <p>30+ Years of Excellence</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </section>

        {/* Mission, Vision, Values Sections */}
        <Row className="mb-5 g-4">
          {/* Mission Card */}
          <Col md={4}>
            <Card className="h-100 border-top border-4 border-primary shadow-sm">
              <Card.Body className="text-center p-4">
                <div className="mb-3">
                  <Target size={48} style={{ color: '#003366' }} />
                </div>
                <Card.Title style={{ color: '#003366' }}>Our Mission</Card.Title>
                <Card.Text>
                  In learning and Teaching. We promote cordial relationship among learners and educators, between the home and the school. We produce a disciplined society through the behaviour of our learners. We inculcate in our children faith in God through Religious and Moral Education. The children are encouraged to accept responsibility for their actions. It is our Mission to develop the whole child – physically, intellectually, emotionally and spiritually.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Vision Card */}
          <Col md={4}>
            <Card className="h-100 border-top border-4 border-warning shadow-sm">
              <Card.Body className="text-center p-4">
                <div className="mb-3">
                  <Eye size={48} style={{ color: '#FFD700' }} />
                </div>
                <Card.Title style={{ color: '#003366' }}>Our Vision</Card.Title>
                <Card.Text>
                  Our Vision is to mold the character of our children through spiritual guidance and quality education so that they may become useful citizens who will serve the society and the country selflessly.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Values Card */}
          <Col md={4}>
            <Card className="h-100 border-top border-4 border-success shadow-sm">
              <Card.Body className="text-center p-4">
                <div className="mb-3">
                  <Heart size={48} style={{ color: '#198754' }} />
                </div>
                <Card.Title style={{ color: '#003366' }}>Our Values</Card.Title>
                <Card.Text>
                  Celebrate our religious identity promote spiritual, academic, emotional and physical growth. Nurture mutual respect, justice and compassion in our multi-cultural society. Offer a relevant curriculum in a challenging learning environment so that all may develop to their full potential and to make a positive contribution to society and to face the future with confidence.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* School Ethos Section */}
        <section className="mb-5">
          <div className="section-header mb-4">
            <h2 className="d-flex align-items-center gap-3" style={{ color: '#003366' }}>
              <Award size={32} />
              School Ethos
            </h2>
            <div className="divider" style={{ backgroundColor: '#FFD700', height: '3px', width: '100px' }}></div>
          </div>
          
          <Card className="border-0 shadow-sm" style={{ backgroundColor: 'rgba(0, 51, 102, 0.05)' }}>
            <Card.Body className="p-4">
              <Row>
                <Col md={6}>
                  <h5 style={{ color: '#003366' }}>Our Guiding Principles</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </Col>
                <Col md={6}>
                  <h5 style={{ color: '#003366' }}>Cultural Pillars</h5>
                  <ul className="ethos-list">
                    <li>
                      <strong>Respect:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                      <strong>Excellence:</strong> Sed do eiusmod tempor incididunt ut labore et dolore.
                    </li>
                    <li>
                      <strong>Integrity:</strong> Ut enim ad minim veniam, quis nostrud exercitation.
                    </li>
                    <li>
                      <strong>Community:</strong> Duis aute irure dolor in reprehenderit in voluptate.
                    </li>
                  </ul>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </section>

        {/* School Objectives Section */}
        <section className="mb-5">
          <div className="section-header mb-4">
            <h2 className="d-flex align-items-center gap-3" style={{ color: '#003366' }}>
              <CalendarCheck size={32} />
              School Objectives
            </h2>
            <div className="divider" style={{ backgroundColor: '#FFD700', height: '3px', width: '100px' }}></div>
          </div>
          
          <Row className="g-4">
            {[
              "To facilitate a peaceful atmosphere for active learning and teaching",
              "To promote cordial relationship among learners an educators, between the home and the school",
              "To produce a disciplined society through the behaviour of our learners",
              "We inculcate in our children faith in God through Bible Studies and moral education",
              "The children are encouraged to accept responsibility for their actions",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
              "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
            ].map((objective, index) => (
              <Col md={6} lg={3} key={index}>
                <Card className="h-100 border-start border-4 border-primary">
                  <Card.Body>
                    <div className="d-flex align-items-start gap-2">
                      <div className="objective-number" style={{
                        backgroundColor: '#003366',
                        color: '#FFD700',
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        flexShrink: 0
                      }}>
                        {index + 1}
                      </div>
                      <Card.Text className="mb-0">{objective}</Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* Quick Stats Section */}
        <section className="quick-stats py-4 mb-5 rounded" style={{ backgroundColor: '#003366' }}>
          <Row className="text-center">
            <Col md={3} className="mb-3 mb-md-0">
              <div className="stat-item">
                <h3 style={{ color: '#FFD700' }}>30+</h3>
                <p className="mb-0" style={{ color: 'white' }}>Years of Excellence</p>
              </div>
            </Col>
            <Col md={3} className="mb-3 mb-md-0">
              <div className="stat-item">
                <h3 style={{ color: '#FFD700' }}>700+</h3>
                <p className="mb-0" style={{ color: 'white' }}>Students Enrolled</p>
              </div>
            </Col>
            <Col md={3} className="mb-3 mb-md-0">
              <div className="stat-item">
                <h3 style={{ color: '#FFD700' }}>30+</h3>
                <p className="mb-0" style={{ color: 'white' }}>Qualified Staff</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="stat-item">
                <h3 style={{ color: '#FFD700' }}>98%</h3>
                <p className="mb-0" style={{ color: 'white' }}>Pass Rate</p>
              </div>
            </Col>
          </Row>
        </section>

        {/* Community Section */}
        <section>
          <div className="section-header mb-4">
            <h2 className="d-flex align-items-center gap-3" style={{ color: '#003366' }}>
              <Users size={32} />
              School Community
            </h2>
            <div className="divider" style={{ backgroundColor: '#FFD700', height: '3px', width: '100px' }}></div>
          </div>
          
          <Card>
            <Card.Body>
              <Row className="align-items-center">
                <Col md={8}>
                  <h5 style={{ color: '#003366' }}>Global Citizens Program</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </Col>
                <Col md={4} className="text-center">
                  <div className="p-4">
                    <Globe size={80} style={{ color: '#003366' }} />
                    <h6 className="mt-3" style={{ color: '#003366' }}>International Standards</h6>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </section>
      </Container>
    </div>
  );
}

export default OurSchool;