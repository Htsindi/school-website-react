import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

function NoticeBoard() {
  const [currentDate] = useState(new Date());
  
  // Latest Message State - Updated for 2026
  const [latestMessage, setLatestMessage] = useState({
    title: "Welcome to 2026 Academic Year",
    content: "School reopens on January 12th, 2026. Please ensure all students arrive by 7:30 AM for the opening assembly.",
    date: "2026-01-03",
    priority: "high"
  });

  // Calculate term status based on current date
  const calculateTermStatus = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    if (currentDate > end) return 'completed';
    if (currentDate >= start && currentDate <= end) return 'current';
    return 'upcoming';
  };

  // Academic Quarters Data for 2026
  const academicQuarters = [
    {
      id: 1,
      name: 'Term 1 (Jan - Mar 2026)',
      status: calculateTermStatus('2026-01-12', '2026-03-27'),
      image: '/assets/summer.png',
      activities: [
        { name: 'School Opening & Orientation', status: 'completed' },
        { name: 'First Term Assessments', status: 'completed' },
        { name: 'Sports Day', status: 'upcoming' },
        { name: 'Parent-Teacher Meeting', status: 'upcoming' }
      ],
      startDate: '2026-01-12',
      endDate: '2026-03-27',
      googleFolder: 'https://drive.google.com/drive/folders/YOUR_TERM1_FOLDER_ID'
    },
    {
      id: 2,
      name: 'Term 2 (Apr - Jun 2026)',
      status: calculateTermStatus('2026-04-08', '2026-06-26'),
      image: '/assets/autumn.png',
      activities: [
        { name: 'Second Term Begins', status: 'upcoming' },
        { name: 'Mid-Year Exams', status: 'upcoming' },
        { name: 'Cultural Day', status: 'upcoming' },
        { name: 'Science Fair', status: 'upcoming' }
      ],
      startDate: '2026-04-08',
      endDate: '2026-06-26',
      googleFolder: 'https://drive.google.com/drive/folders/YOUR_TERM2_FOLDER_ID'
    },
    {
      id: 3,
      name: 'Term 3 (Jul - Sep 2026)',
      status: calculateTermStatus('2026-07-21', '2026-09-23'),
      image: '/assets/winter.png',
      activities: [
        { name: 'Third Term Begins', status: 'upcoming' },
        { name: 'Art Exhibition', status: 'upcoming' },
        { name: 'Career Guidance Week', status: 'upcoming' },
        { name: 'Inter-school Competition', status: 'upcoming' }
      ],
      startDate: '2026-07-21',
      endDate: '2026-09-23',
      googleFolder: 'https://drive.google.com/drive/folders/YOUR_TERM3_FOLDER_ID'
    },
    {
      id: 4,
      name: 'Term 4 (Oct - Dec 2026)',
      status: calculateTermStatus('2026-10-06', '2026-12-11'),
      image: '/assets/spring.png',
      activities: [
        { name: 'Final Term Begins', status: 'upcoming' },
        { name: 'Graduation Preparations', status: 'upcoming' },
        { name: 'Final Exams', status: 'upcoming' },
        { name: 'Prize Giving Day', status: 'upcoming' }
      ],
      startDate: '2026-10-06',
      endDate: '2026-12-11',
      googleFolder: 'https://drive.google.com/drive/folders/YOUR_TERM4_FOLDER_ID'
    }
  ];

  // Function to get status indicator
  const getStatusIndicator = (status) => {
    switch(status) {
      case 'completed':
        return <span className="status-indicator completed"></span>;
      case 'current':
        return <span className="status-indicator current"></span>;
      case 'upcoming':
        return <span className="status-indicator upcoming"></span>;
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
    return activities;
  };

  return (
    <div className="noticeboard-page">
      <Container className="py-4">
        {/* Page Header */}
        <div className="text-center mb-5">
          <h1 className="mb-3" style={{ color: '#003366' }}>School Noticeboard 2026</h1>
          <p className="lead" style={{ color: '#555' }}>
            Stay updated with the latest announcements and academic calendar for 2026
          </p>
          <div className="badge bg-info text-dark p-2">
            Today: {currentDate.toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
        </div>

        {/* Latest Message Banner */}
        <div className="latest-message-banner mb-5">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h3 className="mb-2" style={{ color: '#FFD700' }}>
                📢 {latestMessage.title}
              </h3>
              <p className="mb-0">{latestMessage.content}</p>
              <small className="text-muted">
                Posted on: {formatDate(latestMessage.date)}
              </small>
            </div>
            <div className="d-none d-md-block">
              <span className={`badge ${latestMessage.priority === 'high' ? 'bg-danger' : 'bg-warning'} p-2`}>
                {latestMessage.priority === 'high' ? 'HIGH PRIORITY' : 'IMPORTANT'}
              </span>
            </div>
          </div>
        </div>

        {/* Academic Quarters Section */}
        <section className="mb-5">
          <h2 className="mb-4 text-center" style={{ color: '#003366' }}>
            2026 Academic Calendar
          </h2>
          <p className="text-center mb-4" style={{ color: '#666' }}>
            Track the progress of each academic term with color-coded status indicators
          </p>

          {/* Status Legend */}
          <div className="d-flex justify-content-center gap-4 mb-4 flex-wrap">
            <div className="d-flex align-items-center">
              <span className="status-indicator completed me-2"></span>
              <span>Completed</span>
            </div>
            <div className="d-flex align-items-center">
              <span className="status-indicator current me-2"></span>
              <span>Current</span>
            </div>
            <div className="d-flex align-items-center">
              <span className="status-indicator upcoming me-2"></span>
              <span>Upcoming</span>
            </div>
          </div>

          {/* Academic Quarters Grid */}
          <div className="academic-quarters-grid">
            {academicQuarters.map((term) => {
              const updatedActivities = updateActivityStatus(term.activities, term.status);
              
              return (
                <div 
                  key={term.id} 
                  className={`quarter-card ${term.status}`}
                >
                  {/* Term Header */}
                  <div className="quarter-header mb-3">
                    <h3 className="h4 mb-2">{term.name}</h3>
                    <div className="d-flex align-items-center justify-content-between">
                      <span className={`badge ${term.status === 'completed' ? 'bg-secondary' : term.status === 'current' ? 'bg-primary' : 'bg-success'}`}>
                        {getStatusText(term.status)}
                      </span>
                      <small className="text-muted">
                        {formatDate(term.startDate)} - {formatDate(term.endDate)}
                      </small>
                    </div>
                  </div>

                  {/* Term Image */}
                  <div className="quarter-image mb-3">
                    <img 
                      src={term.image} 
                      alt={`${term.name} visual`}
                      className="img-fluid rounded"
                      style={{ height: '150px', width: '100%', objectFit: 'cover' }}
                    />
                  </div>

                  {/* Activities List */}
                  <div className="quarter-activities">
                    <h4 className="h6 mb-2">Key Activities:</h4>
                    <ul className="list-unstyled mb-0">
                      {updatedActivities.map((activity, index) => (
                        <li key={index} className="mb-2 d-flex align-items-center">
                          {getStatusIndicator(activity.status)}
                          <span className="flex-grow-1">{activity.name}</span>
                          <small className={`badge ${
                            activity.status === 'completed' ? 'bg-secondary' : 
                            activity.status === 'current' ? 'bg-primary' : 'bg-success'
                          }`}>
                            {activity.status}
                          </small>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Progress Indicator */}
                  <div className="quarter-progress mt-3 pt-3 border-top">
                    <div className="d-flex justify-content-between align-items-center">
                      <small>Progress:</small>
                      <div className="progress" style={{ width: '70%', height: '8px' }}>
                        <div 
                          className={`progress-bar ${
                            term.status === 'completed' ? 'bg-secondary' : 
                            term.status === 'current' ? 'bg-primary' : 'bg-success'
                          }`}
                          style={{ 
                            width: term.status === 'completed' ? '100%' : 
                                   term.status === 'current' ? '30%' : '0%' 
                          }}
                          role="progressbar"
                        ></div>
                      </div>
                    </div>
                    
                    {/* Photos & Videos Button */}
                    <button
                      className="btn btn-sm w-100 mt-3"
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
                </div>
              );
            })}
          </div>
        </section>

        {/* Additional Announcements for 2026 */}
        <section className="additional-announcements">
          <h3 className="mb-4 text-center" style={{ color: '#003366' }}>
            Recent Updates for 2026
          </h3>
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="card h-100 border-start border-4 border-warning">
                <div className="card-body">
                  <h5 className="card-title">📅 2026 School Calendar</h5>
                  <p className="card-text">
                    The complete 2026 academic calendar is now available. Download it from the school portal.
                  </p>
                  <small className="text-muted">Posted: December 15, 2025</small>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="card h-100 border-start border-4 border-info">
                <div className="card-body">
                  <h5 className="card-title">🎓 Grade 7 Applications</h5>
                  <p className="card-text">
                    Applications for Grade 7 (2026 intake) open on February 1st, 2026. Early applications encouraged.
                  </p>
                  <small className="text-muted">Posted: December 20, 2025</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Term Dates Summary */}
        <section className="term-summary mt-5">
          <div className="card border-primary">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">2026 Term Dates Summary</h4>
            </div>
            <div className="card-body">
              <div className="row">
                {academicQuarters.map((term) => (
                  <div key={term.id} className="col-md-3 col-6 mb-3">
                    <div className={`p-3 rounded ${term.status === 'current' ? 'bg-light border border-primary' : 'bg-white'}`}>
                      <h6 className="fw-bold">{term.name}</h6>
                      <small className="d-block">{formatDate(term.startDate)}</small>
                      <small className="d-block">to {formatDate(term.endDate)}</small>
                      <span className={`badge mt-2 ${
                        term.status === 'completed' ? 'bg-secondary' : 
                        term.status === 'current' ? 'bg-primary' : 'bg-success'
                      }`}>
                        {getStatusText(term.status)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default NoticeBoard;