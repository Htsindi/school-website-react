import { useState } from 'react';
import { Container, Row, Col, Card, Badge, ProgressBar } from 'react-bootstrap';
import { noticeboardData } from '../data/noticeboard';

function NoticeBoard() {
  const [currentDate] = useState(noticeboardData.currentDate);
  const [latestMessage] = useState(noticeboardData.latestMessage);
  
  // Calculate term status based on current date
  const calculateTermStatus = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    if (currentDate > end) return 'completed';
    if (currentDate >= start && currentDate <= end) return 'current';
    return 'upcoming';
  };

  // Function to get status indicator
  const getStatusIndicator = (status) => {
    switch(status) {
      case 'completed':
        return <span className="status-indicator completed me-2"></span>;
      case 'current':
        return <span className="status-indicator current me-2"></span>;
      case 'upcoming':
        return <span className="status-indicator upcoming me-2"></span>;
      default:
        return null;
    }
  };

  // Function to get status text
  const getStatusText = (status) => {
    switch(status) {
      case 'completed':
        return 'Completed';
      case 'current':
        return 'Current';
      case 'upcoming':
        return 'Upcoming';
      default:
        return '';
    }
  };

  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Handle media click
  const handleMediaClick = (folderUrl) => {
    window.open(folderUrl, '_blank', 'noopener,noreferrer');
  };

  // Update activity status based on current date
  const updateActivityStatus = (activities, termStatus) => {
    if (termStatus === 'completed') {
      return activities.map(activity => ({ ...activity, status: 'completed' }));
    } else if (termStatus === 'current') {
      // Simulate some completed activities for current term
      return activities.map((activity, index) => ({
        ...activity,
        status: index < 1 ? 'completed' : index === 1 ? 'current' : 'upcoming'
      }));
    }
    return activities.map(activity => ({ ...activity, status: 'upcoming' }));
  };

  // Prepare academic quarters with calculated statuses
  const academicQuarters = noticeboardData.academicQuarters.map(term => {
    const termStatus = calculateTermStatus(term.startDate, term.endDate);
    return {
      ...term,
      status: termStatus,
      activities: updateActivityStatus(term.activities, termStatus)
    };
  });

  return (
    <div className="noticeboard-page">
      <Container className="py-4">
        {/* Page Header */}
        <div className="text-center mb-5">
          <h1 className="mb-3">School Noticeboard 2026</h1>
          <p className="lead text-secondary">
            Stay updated with the latest announcements and academic calendar for 2026
          </p>
          <Badge bg="info" className="p-2 fs-6">
            Today: {currentDate.toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </Badge>
        </div>

        {/* Latest Message Banner */}
        <Card className="latest-message-banner mb-5 border-0">
          <Card.Body className="p-4">
            <Row className="align-items-center">
              <Col md={9}>
                <h3 className="mb-2 text-warning">
                  📢 {latestMessage.title}
                </h3>
                <p className="mb-2 fs-5 text-white">{latestMessage.content}</p>
                <small className="text-light">
                  Posted on: {formatDate(latestMessage.date)}
                </small>
              </Col>
              <Col md={3} className="text-end d-none d-md-block">
                <Badge 
                  bg={latestMessage.priority === 'high' ? 'danger' : 'warning'} 
                  className="p-3 fs-6"
                >
                  {latestMessage.priority === 'high' ? 'HIGH PRIORITY' : 'IMPORTANT'}
                </Badge>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Academic Quarters Section */}
        <section className="mb-5">
          <h2 className="mb-4 text-center">
            2026 Academic Calendar
          </h2>
          <p className="text-center mb-4 text-muted fs-5">
            Track the progress of each academic term with color-coded status indicators
          </p>

          {/* Status Legend */}
          <Row className="justify-content-center mb-4">
            <Col xs="auto">
              <div className="d-flex gap-4 flex-wrap justify-content-center">
                {noticeboardData.statusLegend.map((item) => (
                  <div key={item.status} className="d-flex align-items-center">
                    <span className={`status-indicator ${item.status} me-2`}></span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </Col>
          </Row>

          {/* Academic Quarters Grid */}
          <div className="academic-quarters-grid">
            {academicQuarters.map((term) => (
              <Card key={term.id} className={`quarter-card ${term.status} h-100`}>
                <Card.Body className="d-flex flex-column">
                  {/* Term Header */}
                  <div className="quarter-header mb-3">
                    <h4 className="card-title mb-2 fs-5">{term.name}</h4>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <Badge bg={term.status === 'completed' ? 'secondary' : term.status === 'current' ? 'primary' : 'success'}>
                        {getStatusText(term.status)}
                      </Badge>
                      <small className="text-muted">
                        {formatDate(term.startDate)}
                      </small>
                    </div>
                  </div>

                  {/* Term Image */}
                  <div className="quarter-image mb-3 text-center">
                    <Card.Img 
                      variant="top" 
                      src={term.image} 
                      alt={`${term.name} visual`}
                      className="rounded"
                      style={{ height: '150px', objectFit: 'cover' }}
                    />
                  </div>

                  {/* Activities List */}
                  <div className="quarter-activities flex-grow-1 mb-3">
                    <h5 className="h6 mb-2 text-muted">Key Activities:</h5>
                    <ul className="list-unstyled mb-0">
                      {term.activities.map((activity, index) => (
                        <li key={index} className="mb-2 d-flex align-items-center">
                          {getStatusIndicator(activity.status)}
                          <span className="flex-grow-1 small">{activity.name}</span>
                          <Badge 
                            bg={activity.status === 'completed' ? 'secondary' : 
                                activity.status === 'current' ? 'primary' : 'success'}
                            className="small"
                          >
                            {activity.status}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Progress Indicator */}
                  <div className="quarter-progress mt-auto pt-3 border-top">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <small className="text-muted">Progress:</small>
                      <span className="small">
                        {term.status === 'completed' ? '100%' : 
                         term.status === 'current' ? '30%' : '0%'}
                      </span>
                    </div>
                    <ProgressBar 
                      variant={term.status === 'completed' ? 'secondary' : 
                              term.status === 'current' ? 'primary' : 'success'}
                      now={term.status === 'completed' ? 100 : 
                            term.status === 'current' ? 30 : 0}
                      style={{ height: '8px' }}
                      className="mb-3"
                    />
                    
                    {/* Photos & Videos Button */}
                    <button
                      className="btn btn-sm w-100"
                      style={{ 
                        backgroundColor: term.status === 'current' ? '#003366' : 
                                        term.status === 'completed' ? '#6c757d' : '#198754',
                        color: 'white',
                        border: 'none'
                      }}
                      onClick={() => handleMediaClick(term.googleFolder)}
                    >
                      📸 View Photos & Videos
                    </button>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </section>

        {/* Additional Announcements */}
        <section className="additional-announcements mb-5">
          <h3 className="mb-4 text-center">
            Recent Updates for 2026
          </h3>
          <Row xs={1} md={2} lg={3} className="g-4">
            {noticeboardData.additionalAnnouncements.map((announcement) => (
              <Col key={announcement.id}>
                <Card className="h-100 shadow-sm border-start border-4">
                  <Card.Body>
                    <div className="d-flex align-items-start mb-3">
                      <span className="fs-4 me-3">{announcement.icon}</span>
                      <h5 className="card-title mb-0 flex-grow-1">{announcement.title}</h5>
                    </div>
                    <Card.Text className="mb-3">
                      {announcement.content}
                    </Card.Text>
                    <small className="text-muted">
                      Posted: {announcement.date}
                    </small>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* Term Dates Summary */}
        <section className="term-summary mt-5">
          <Card className="border-primary shadow">
            <Card.Header className="bg-primary text-white">
              <h4 className="mb-0">2026 Term Dates Summary</h4>
            </Card.Header>
            <Card.Body>
              <Row xs={2} md={4} className="g-3">
                {academicQuarters.map((term) => (
                  <Col key={term.id}>
                    <Card className={`h-100 ${term.status === 'current' ? 'border-primary' : 'border-light'}`}>
                      <Card.Body className="text-center">
                        <h6 className="fw-bold mb-2">{term.name}</h6>
                        <div className="mb-2">
                          <small className="d-block text-muted">From:</small>
                          <small className="d-block">{formatDate(term.startDate)}</small>
                          <small className="d-block text-muted mt-1">To:</small>
                          <small className="d-block">{formatDate(term.endDate)}</small>
                        </div>
                        <Badge 
                          bg={term.status === 'completed' ? 'secondary' : 
                              term.status === 'current' ? 'primary' : 'success'}
                          className="mt-2"
                        >
                          {getStatusText(term.status)}
                        </Badge>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </section>
      </Container>
    </div>
  );
}

export default NoticeBoard;