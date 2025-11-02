import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// Add image URLs for each season
const seasonImages = [
  '/assets/summer.png',   // Term 1: Summer
  '/assets/autumn.png',   // Term 2: Autumn
  '/assets/winter.png',   // Term 3: Winter
  '/assets/spring.png',   // Term 4: Spring
];

// Google Drive folder URLs for each term (replace with your actual folder URLs)
const googleFolders = [
  'https://drive.google.com/drive/folders/YOUR_TERM1_FOLDER_ID',
  'https://drive.google.com/drive/folders/YOUR_TERM2_FOLDER_ID',
  'https://drive.google.com/drive/folders/YOUR_TERM3_FOLDER_ID',
  'https://drive.google.com/drive/folders/YOUR_TERM4_FOLDER_ID',
];

const termDates = [
  { name: 'Term 1', start: '2025-01-10', end: '2025-03-31' },
  { name: 'Term 2', start: '2025-04-10', end: '2025-06-30' },
  { name: 'Term 3', start: '2025-07-10', end: '2025-09-30' },
  { name: 'Term 4', start: '2025-10-10', end: '2025-12-15' },
];

const activities = [
  [{ name: 'Orientation', done: true }, { name: 'Orientation', done: true }, { name: 'Orientation', done: true }],
  [{ name: 'Midterm Exams', done: true }, { name: 'Orientation', done: true }, { name: 'Midterm Exams', done: true }],
  [{ name: 'Career Dress Up Day', done: true }, { name: 'Entreprenuer Day', done: true }, { name: 'Art and Science Fare', done: true }],
  [{ name: 'Grade 7 Graduation', done: false }, { name: 'Foundation Phase Field Trip', done: false }, { name: 'End of Term Exams', done: false }],
];

function getTermStatus(date = new Date()) {
  if (date.getMonth() === 0 && date.getDate() === 1) {
    return termDates.map((term, idx) => ({
      name: term.name,
      status: 'upcoming',
      activities: activities[idx],
    }));
  }

  return termDates.map((term, idx) => {
    const start = new Date(term.start);
    const end = new Date(term.end);

    let status = 'upcoming';
    if (date > end) status = 'past';
    else if (date >= start && date <= end) status = 'current';

    return {
      name: term.name,
      status,
      activities: activities[idx],
    };
  });
}

function getColor(status) {
  if (status === 'past') return 'secondary';
  if (status === 'current') return 'warning';
  return 'info';
}

function NoticeBoard() {
  const terms = getTermStatus();

  const handleMediaClick = (folderUrl) => {
    window.open(folderUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="row justify-content-center mt-3 g-2 g-md-3">
      {terms.map((term, idx) => (
        <div className="col-12 col-sm-6 col-lg-3 mb-2 mb-md-3" key={idx}>
          <Card 
            bg={getColor(term.status)} 
            text="white" 
            className="h-100"
            style={{ minHeight: '320px' }}
          >
            <Card.Header className="text-center py-2 fw-bold">
              {term.name}
            </Card.Header>
            <Card.Img 
              variant="top" 
              src={seasonImages[idx]} 
              alt={`${term.name} Season`} 
              style={{ height: '250px', objectFit: 'cover' }} 
            />
            <Card.Body className="p-2 d-flex flex-column">
              <div className="flex-grow-1" style={{ fontSize: '0.9rem' }}>
                {term.activities.map((act, i) => (
                  <p key={i} className="mb-1" style={{ lineHeight: '1.3' }}>
                    <small>{act.name} - {act.done ? '✅' : '⏳'}</small>
                  </p>
                ))}
              </div>
              <Button
                variant="light"
                size="sm"
                className="mt-2 w-100"
                onClick={() => handleMediaClick(googleFolders[idx])}
              >
                📸 Photos & Videos
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default NoticeBoard;