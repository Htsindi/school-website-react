import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import staffData from '../data/staff';

function Staff() {
  const fallback = '/assets/default-staff.jpg';

  return (
    <Row className="g-3 justify-content-center mt-1">
      {staffData.map((member, idx) => (
        <Col xs={12} sm={6} md={4} lg={3} key={idx}>
          <Card className="h-100">
            <Card.Img
              className="rounded-circle profile-pict img-fluid d-block mx-auto staff-photo"
              variant="top"
              src={member.image || fallback}
              alt={member.name}
                         />
            <Card.Body>
              <Card.Title className="mb-1">{member.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{member.position}</Card.Subtitle>
              <Card.Text className="mb-0"><small>{member.department}</small></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Staff;