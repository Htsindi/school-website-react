import { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Building, 
  User, 
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Globe,
  Users,
  Shield
} from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    studentGrade: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const contactInfo = {
    address: "St. Pauls Mission, Magistrate Road, Taung, 8584, South Africa",
    phone: "+27 (53) 994-1313",
    fax: "+27 (12) 345-6788",
    email: "info@sacredhearttaung.edu",
    admissionsEmail: "admissions@sacredhearttaung.edu",
    emergencyPhone: "+27 (12) 345-6780",
    website: "www.sacredhearttaung.edu"
  };

  const officeHours = [
    { day: "Monday - Thursday", hours: "7:30 AM - 3:30 PM" },
    { day: "Friday", hours: "7:30 AM - 2:00 PM" },
    { day: "Saturday", hours: "Closed" },
    { day: "Sunday", hours: "Closed" }
  ];

  const departments = [
    { name: "Admissions", email: "admissions@sacredhearttaung.edu", phone: "Ext. 101" },
    { name: "Finance", email: "finance@sacredhearttaung.edu", phone: "Ext. 102" },
    { name: "Academic Office", email: "academic@sacredhearttaung.edu", phone: "Ext. 103" },
    { name: "Student Affairs", email: "studentaffairs@sacredhearttaung.edu", phone: "Ext. 104" }
  ];

  const subjects = [
    "General Inquiry",
    "Admissions Information",
    "Academic Program",
    "School Fees",
    "Extracurricular Activities",
    "School Transport",
    "Special Needs Support",
    "Complaints/Suggestions",
    "Other"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: "Please fill in all required fields."
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: false,
        error: true,
        message: "Please enter a valid email address."
      });
      return;
    }

    // Simulate form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: "Thank you for your message! We'll get back to you within 24-48 hours."
    });

    // Reset form after successful submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        studentGrade: '',
        subject: 'General Inquiry',
        message: ''
      });
    }, 3000);
  };

  const handleQuickContact = (type, value) => {
    switch(type) {
      case 'phone':
        window.location.href = `tel:${value}`;
        break;
      case 'email':
        window.location.href = `mailto:${value}`;
        break;
      case 'map':
        window.open(`https://maps.google.com/?q=${encodeURIComponent(value)}`, '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <div className="contact-page">
      <Container className="py-5">
        {/* Page Header */}
        <div className="text-center mb-5">
          <h1 className="mb-3" style={{ color: '#003366' }}>Contact Us</h1>
          <p className="lead" style={{ color: '#666' }}>
            Get in touch with Sacred Heart Private Primary School
          </p>
        </div>

        {/* Contact Information Cards */}
        <Row className="mb-5">
          <Col lg={4} className="mb-4">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="p-4">
                <div className="text-center mb-4">
                  <div className="rounded-circle bg-primary p-3 d-inline-flex">
                    <MapPin size={32} color="white" />
                  </div>
                </div>
                <Card.Title style={{ color: '#003366' }} className="text-center mb-3">
                  Visit Our Campus
                </Card.Title>
                <div className="text-center mb-3">
                  <p className="mb-2">
                    <strong>Address:</strong><br />
                    {contactInfo.address}
                  </p>
                  <Button 
                    variant="outline-primary"
                    className="mt-2"
                    onClick={() => handleQuickContact('map', contactInfo.address)}
                  >
                    Get Directions
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} className="mb-4">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="p-4">
                <div className="text-center mb-4">
                  <div className="rounded-circle bg-success p-3 d-inline-flex">
                    <Phone size={32} color="white" />
                  </div>
                </div>
                <Card.Title style={{ color: '#003366' }} className="text-center mb-3">
                  Call Us
                </Card.Title>
                <div className="text-center">
                  <p className="mb-1">
                    <strong>Main Line:</strong><br />
                    {contactInfo.phone}
                  </p>
                  <p className="mb-1">
                    <strong>Fax:</strong><br />
                    {contactInfo.fax}
                  </p>
                  <p className="mb-3">
                    <strong>Emergency:</strong><br />
                    {contactInfo.emergencyPhone}
                  </p>
                  <Button 
                    variant="outline-success"
                    onClick={() => handleQuickContact('phone', contactInfo.phone)}
                  >
                    Call Now
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} className="mb-4">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="p-4">
                <div className="text-center mb-4">
                  <div className="rounded-circle bg-warning p-3 d-inline-flex">
                    <Mail size={32} color="white" />
                  </div>
                </div>
                <Card.Title style={{ color: '#003366' }} className="text-center mb-3">
                  Email Us
                </Card.Title>
                <div className="text-center">
                  <p className="mb-1">
                    <strong>General Inquiries:</strong><br />
                    {contactInfo.email}
                  </p>
                  <p className="mb-3">
                    <strong>Admissions:</strong><br />
                    {contactInfo.admissionsEmail}
                  </p>
                  <Button 
                    variant="outline-warning"
                    onClick={() => handleQuickContact('email', contactInfo.email)}
                  >
                    Send Email
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Contact Form and Office Hours */}
        <Row className="mb-5">
          <Col lg={8}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="p-4">
                <Card.Title style={{ color: '#003366' }} className="mb-4">
                  <MessageSquare className="me-2" />
                  Send Us a Message
                </Card.Title>

                {formStatus.message && (
                  <Alert variant={formStatus.error ? "danger" : "success"} className="mb-4">
                    <div className="d-flex align-items-center">
                      {formStatus.error ? <AlertCircle className="me-2" /> : <CheckCircle className="me-2" />}
                      {formStatus.message}
                    </div>
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <User size={16} className="me-2" />
                          Full Name *
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <Mail size={16} className="me-2" />
                          Email Address *
                        </Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <Phone size={16} className="me-2" />
                          Phone Number
                        </Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          <Users size={16} className="me-2" />
                          Student Grade (if applicable)
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="studentGrade"
                          value={formData.studentGrade}
                          onChange={handleChange}
                          placeholder="e.g., Grade 3B"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>
                      <Shield size={16} className="me-2" />
                      Subject
                    </Form.Label>
                    <Form.Select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      {subjects.map((subject, index) => (
                        <option key={index} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>
                      <MessageSquare size={16} className="me-2" />
                      Your Message *
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Please type your message here..."
                      required
                    />
                  </Form.Group>

                  <Button 
                    type="submit" 
                    variant="primary"
                    style={{ backgroundColor: '#003366', borderColor: '#003366' }}
                    className="w-100 py-3"
                  >
                    <Send className="me-2" />
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card className="h-100 border-0 shadow-sm mb-4">
              <Card.Body className="p-4">
                <Card.Title style={{ color: '#003366' }} className="mb-4">
                  <Clock className="me-2" />
                  Office Hours
                </Card.Title>
                <div className="office-hours">
                  {officeHours.map((hour, index) => (
                    <div key={index} className="mb-3 pb-2 border-bottom">
                      <div className="fw-bold" style={{ color: '#003366' }}>
                        {hour.day}
                      </div>
                      <div className="text-muted">
                        {hour.hours}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <p className="small text-muted mb-0">
                    <strong>Note:</strong> During school holidays, office hours may vary. 
                    Please call ahead to confirm.
                  </p>
                </div>
              </Card.Body>
            </Card>

            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <Card.Title style={{ color: '#003366' }} className="mb-4">
                  <Building className="me-2" />
                  Department Contacts
                </Card.Title>
                <div className="department-contacts">
                  {departments.map((dept, index) => (
                    <div key={index} className="mb-3">
                      <div className="fw-bold" style={{ color: '#003366' }}>
                        {dept.name}
                      </div>
                      <div className="small">
                        <div>📧 {dept.email}</div>
                        <div>📞 {dept.phone}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Additional Information */}
        <Row>
          <Col md={12}>
            <Card className="border-0 shadow-sm" style={{ backgroundColor: 'rgba(0, 51, 102, 0.05)' }}>
              <Card.Body className="p-4">
                <h4 style={{ color: '#003366' }} className="mb-3">
                  <Globe className="me-2" />
                  Additional Information
                </h4>
                <Row>
                  <Col md={6}>
                    <h6 style={{ color: '#003366' }}>Response Time</h6>
                    <p className="small">
                      We strive to respond to all inquiries within 24-48 hours during 
                      business days. For urgent matters, please call our main line.
                    </p>
                  </Col>
                  <Col md={6}>
                    <h6 style={{ color: '#003366' }}>School Visits</h6>
                    <p className="small">
                      Campus tours are available by appointment. Please contact our 
                      admissions office to schedule a visit.
                    </p>
                  </Col>
                </Row>
                <div className="text-center mt-3">
                  <Button 
                    variant="outline-primary"
                    onClick={() => window.location.href = '/studentlife'}
                  >
                    Virtual Campus Tour
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;