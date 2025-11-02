import Accordion from 'react-bootstrap/Accordion';

function OurSchool() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Vision</Accordion.Header>
        <Accordion.Body>
Our Vision is to mould the character of our children through spiritual guidance and quality education so that they may become useful citizens who will serve the society and the country selflessly.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Mission</Accordion.Header>
        <Accordion.Body>
           In learning and Teaching. We promote cordial relationship among learners and educators, between the home and the school. We produce a disciplined society through the behaviour of our learners. We inculcate in our children faith in God through Religious and Moral Education. The children are encouraged to accept responsibility for their actions. It is our Mission to develop the whole child – physically, intellectually, emotionally and spiritually.
        </Accordion.Body>
      </Accordion.Item>

 <Accordion.Item eventKey="2">
        <Accordion.Header>Values</Accordion.Header>
        <Accordion.Body>
           Celebrate our religious identity promote spiritual, academic, emotional and physical growth. Nurture mutual respect, justice and compassion in our multi-cultural society. Offer a relevant curriculum in a challenging learning environment so that all may develop to their full potential and to make a positive contribution to society and to face the future with confidence.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>School Commitment</Accordion.Header>
        <Accordion.Body>

        </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="4">
        <Accordion.Header>Admission Policy</Accordion.Header>
        <Accordion.Body>Placeholder for admission policy.</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default OurSchool;