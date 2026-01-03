import { useState } from 'react';
import { Container, Row, Col, Card, Tab, Tabs, Image } from 'react-bootstrap';
import { 
  UserCircle, 
  BookOpen, 
  Users, 
  HelpCircle, 
  Award, 
  Mail,
  Phone,
  GraduationCap,
  Briefcase,
  Shield,
  School,
  UserCog
} from 'lucide-react';
import staffData from '../data/staff';

function Staff() {
  const [activeTab, setActiveTab] = useState('principal');
  
  const fallback = '/assets/default-staff.jpg';

  // Helper function to get image with fallback
  const getImage = (imgUrl) => {
    return imgUrl.includes('example.com') ? fallback : imgUrl;
  };

  // Categorize staff members based on your data structure
  const principal = staffData.find(member => 
    member.position.toLowerCase().includes('principal')
  ) || {
    name: "Mr. M.C. Ngaba",
    position: "Principal",
    department: "Curriculum",
    image: fallback,
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    qualifications: "M.Ed in Educational Leadership, B.Ed in Primary Education",
    yearsOfService: "12 years",
    email: "principal.mcngaba@sacredheart.edu"
  };

  const administrationStaff = staffData.filter(member => 
    member.department?.toLowerCase().includes('admin') ||
    member.position?.toLowerCase().includes('administrative') ||
    member.position?.toLowerCase().includes('deputy') ||
    member.position?.toLowerCase().includes('head of department') ||
    ['Principal', 'Deputy Principal', 'Head of Department'].some(title => 
      member.position?.toLowerCase().includes(title.toLowerCase())
    )
  );

  const academicStaff = staffData.filter(member => 
    (member.department?.toLowerCase().includes('foundation') || 
     member.department?.toLowerCase().includes('intermediate') ||
     member.department?.toLowerCase().includes('senior')) &&
    (member.position?.toLowerCase().includes('teacher') ||
     member.position?.toLowerCase().includes('afrikaans') ||
     member.position?.toLowerCase().includes('mathematics') ||
     member.position?.toLowerCase().includes('setswana') ||
     member.position?.toLowerCase().includes('music') ||
     member.position?.toLowerCase().includes('robotics') ||
     member.position?.toLowerCase().includes('social sciences') ||
     member.position?.toLowerCase().includes('life skills'))
  );

  const supportStaff = staffData.filter(member => 
    member.position?.toLowerCase().includes('assistant teacher') ||
    (member.department && !member.department.toLowerCase().includes('admin') && 
     !member.department.toLowerCase().includes('foundation') &&
     !member.department.toLowerCase().includes('intermediate') &&
     !member.department.toLowerCase().includes('senior') &&
     !member.department.toLowerCase().includes('curriculum'))
  );

  // Ensure Principal is in administration (if not already)
  if (!administrationStaff.find(member => member.position.toLowerCase().includes('principal'))) {
    administrationStaff.unshift(principal);
  }

  // Remove principal from other categories
  const filteredAcademicStaff = academicStaff.filter(member => 
    !member.position.toLowerCase().includes('principal')
  );

  // Group academic staff by department for better organization
  const staffByDepartment = {
    'Foundation Phase (Grade R - 3)': filteredAcademicStaff.filter(member => 
      member.department?.includes('Foundation Phase')
    ),
    'Intermediate to Senior Phase (Grade 4 - 7)': filteredAcademicStaff.filter(member => 
      member.department?.includes('Intermediate to Senior')
    ),
    'Specialist Subjects': filteredAcademicStaff.filter(member => 
      member.department?.includes('Foundation,Intermediate') ||
      ['Music', 'Robotics', 'Computer Studies', 'Setswana', 'Afrikaans']
        .some(subject => member.position?.includes(subject))
    )
  };

  return (
    <div className="staff-page">
      <Container className="py-5">
        {/* Page Header */}
        <div className="text-center mb-5">
          <h1 className="mb-3" style={{ color: '#003366' }}>Meet Our Staff</h1>
          <p className="lead" style={{ color: '#666' }}>
            Dedicated professionals committed to excellence in education
          </p>
        </div>

        {/* Principal's Message Section */}
        <section className="mb-5">
          <Card className="border-0 shadow-sm mb-4" style={{ backgroundColor: 'rgba(0, 51, 102, 0.05)' }}>
            <Card.Body className="p-4">
              <Row className="align-items-center">
                <Col md={4} className="text-center mb-4 mb-md-0">
                  <div className="position-relative">
                    <Image
                      src={getImage(principal.image)}
                      alt={principal.name}
                      className="rounded-circle img-fluid border border-4"
                      style={{ 
                        borderColor: '#FFD700 !important',
                        width: '250px',
                        height: '250px',
                        objectFit: 'cover'
                      }}
                    />
                    <div className="position-absolute bottom-0 end-0 bg-warning rounded-circle p-2 border border-3 border-white">
                      <Award size={24} color="#003366" />
                    </div>
                  </div>
                  <h4 className="mt-3" style={{ color: '#003366' }}>{principal.name}</h4>
                  <h5 className="text-muted">{principal.position}</h5>
                  <small className="text-muted">{principal.department}</small>
                </Col>
                <Col md={8}>
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <UserCircle size={32} style={{ color: '#003366' }} />
                    <h3 style={{ color: '#003366' }}>Principal's Message</h3>
                  </div>
                  <div className="message-content">
                    <p className="lead mb-4">
                      {principal.message}
                    </p>
                    <Row className="mt-4">
                      <Col md={6}>
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <GraduationCap size={20} style={{ color: '#003366' }} />
                          <span><strong>Qualifications:</strong> {principal.qualifications}</span>
                        </div>
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <Briefcase size={20} style={{ color: '#003366' }} />
                          <span><strong>Years of Service:</strong> {principal.yearsOfService}</span>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <Mail size={20} style={{ color: '#003366' }} />
                          <span><strong>Email:</strong> {principal.email}</span>
                        </div>
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <Shield size={20} style={{ color: '#003366' }} />
                          <span><strong>Leadership Philosophy:</strong> Student-centered approach</span>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </section>

        {/* Staff Categories Tabs */}
        <section className="mb-5">
          <div className="text-center mb-4">
            <h2 style={{ color: '#003366' }}>Our Staff Categories</h2>
            <p className="text-muted">Meet the dedicated teams that make our school exceptional</p>
          </div>

          <Tabs
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
            className="mb-4 custom-tabs"
            style={{ borderBottomColor: '#003366' }}
          >
            {/* Administration Tab */}
            <Tab 
              eventKey="administration" 
              title={
                <div className="d-flex align-items-center gap-2">
                  <Users size={20} />
                  <span>Administration</span>
                </div>
              }
            >
              <div className="mt-4">
                <h4 className="mb-4" style={{ color: '#003366' }}>
                  Administration & Leadership Team
                </h4>
                <Row className="g-4">
                  {administrationStaff.map((member, idx) => (
                    <Col xs={12} sm={6} md={4} lg={3} key={idx}>
                      <Card className="h-100 text-center border-top border-4 border-primary">
                        <Card.Body className="p-3">
                          <Image
                            src={getImage(member.image)}
                            alt={member.name}
                            className="rounded-circle mb-3"
                            style={{ 
                              width: '120px', 
                              height: '120px',
                              objectFit: 'cover'
                            }}
                          />
                          <Card.Title className="h6 mb-1" style={{ color: '#003366' }}>
                            {member.name}
                          </Card.Title>
                          <Card.Subtitle className="text-muted small mb-2">
                            {member.position}
                          </Card.Subtitle>
                          <Card.Text className="small text-muted">
                            {member.department}
                          </Card.Text>
                          {member.position.toLowerCase().includes('principal') && (
                            <div className="mt-2">
                              <span className="badge bg-warning text-dark">Leadership</span>
                            </div>
                          )}
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </Tab>

            {/* Academic Tab */}
            <Tab 
              eventKey="academic" 
              title={
                <div className="d-flex align-items-center gap-2">
                  <BookOpen size={20} />
                  <span>Academic Staff</span>
                </div>
              }
            >
              <div className="mt-4">
                {/* Foundation Phase */}
                <div className="mb-5">
                  <h5 className="mb-3 d-flex align-items-center gap-2" style={{ color: '#003366' }}>
                    <School size={20} />
                    Foundation Phase (Grade R - 3)
                  </h5>
                  <Row className="g-4">
                    {staffByDepartment['Foundation Phase (Grade R - 3)'].map((member, idx) => (
                      <Col xs={12} sm={6} md={4} lg={3} key={idx}>
                        <Card className="h-100 text-center border-top border-4 border-success">
                          <Card.Body className="p-3">
                            <Image
                              src={getImage(member.image)}
                              alt={member.name}
                              className="rounded-circle mb-3"
                              style={{ 
                                width: '100px', 
                                height: '100px',
                                objectFit: 'cover'
                              }}
                            />
                            <Card.Title className="h6 mb-1" style={{ color: '#003366' }}>
                              {member.name}
                            </Card.Title>
                            <Card.Subtitle className="text-muted small mb-2">
                              {member.position}
                            </Card.Subtitle>
                            <Card.Text className="small text-muted">
                              {member.department}
                            </Card.Text>
                            <div className="mt-2">
                              <span className="badge bg-info">Foundation Phase</span>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>

                {/* Intermediate to Senior Phase */}
                <div className="mb-5">
                  <h5 className="mb-3 d-flex align-items-center gap-2" style={{ color: '#003366' }}>
                    <School size={20} />
                    Intermediate to Senior Phase (Grade 4 - 7)
                  </h5>
                  <Row className="g-4">
                    {staffByDepartment['Intermediate to Senior Phase (Grade 4 - 7)'].map((member, idx) => (
                      <Col xs={12} sm={6} md={4} lg={3} key={idx}>
                        <Card className="h-100 text-center border-top border-4 border-info">
                          <Card.Body className="p-3">
                            <Image
                              src={getImage(member.image)}
                              alt={member.name}
                              className="rounded-circle mb-3"
                              style={{ 
                                width: '100px', 
                                height: '100px',
                                objectFit: 'cover'
                              }}
                            />
                            <Card.Title className="h6 mb-1" style={{ color: '#003366' }}>
                              {member.name}
                            </Card.Title>
                            <Card.Subtitle className="text-muted small mb-2">
                              {member.position}
                            </Card.Subtitle>
                            <Card.Text className="small text-muted">
                              {member.department}
                            </Card.Text>
                            <div className="mt-2">
                              <span className="badge bg-primary">Senior Phase</span>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>

                {/* Specialist Subjects */}
                <div className="mb-5">
                  <h5 className="mb-3 d-flex align-items-center gap-2" style={{ color: '#003366' }}>
                    <UserCog size={20} />
                    Specialist Subjects
                  </h5>
                  <Row className="g-4">
                    {staffByDepartment['Specialist Subjects'].map((member, idx) => (
                      <Col xs={12} sm={6} md={4} lg={3} key={idx}>
                        <Card className="h-100 text-center border-top border-4 border-warning">
                          <Card.Body className="p-3">
                            <Image
                              src={getImage(member.image)}
                              alt={member.name}
                              className="rounded-circle mb-3"
                              style={{ 
                                width: '100px', 
                                height: '100px',
                                objectFit: 'cover'
                              }}
                            />
                            <Card.Title className="h6 mb-1" style={{ color: '#003366' }}>
                              {member.name}
                            </Card.Title>
                            <Card.Subtitle className="text-muted small mb-2">
                              {member.position}
                            </Card.Subtitle>
                            <Card.Text className="small text-muted">
                              {member.department || 'Specialist Department'}
                            </Card.Text>
                            <div className="mt-2">
                              <span className="badge bg-success">Specialist</span>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>
            </Tab>

            {/* Support Tab */}
            <Tab 
              eventKey="support" 
              title={
                <div className="d-flex align-items-center gap-2">
                  <HelpCircle size={20} />
                  <span>Support Staff</span>
                </div>
              }
            >
              <div className="mt-4">
                <h4 className="mb-4" style={{ color: '#003366' }}>Support Staff</h4>
                <Row className="g-4">
                  {supportStaff.map((member, idx) => (
                    <Col xs={12} sm={6} md={4} lg={3} key={idx}>
                      <Card className="h-100 text-center border-top border-4 border-secondary">
                        <Card.Body className="p-3">
                          <Image
                            src={getImage(member.image)}
                            alt={member.name}
                            className="rounded-circle mb-3"
                            style={{ 
                              width: '100px', 
                              height: '100px',
                              objectFit: 'cover'
                            }}
                          />
                          <Card.Title className="h6 mb-1" style={{ color: '#003366' }}>
                            {member.name}
                          </Card.Title>
                          <Card.Subtitle className="text-muted small mb-2">
                            {member.position}
                          </Card.Subtitle>
                          <Card.Text className="small text-muted">
                            {member.department || 'Support Services'}
                          </Card.Text>
                          <div className="mt-2">
                            <span className="badge bg-secondary">Support</span>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </Tab>
          </Tabs>
        </section>

        {/* Staff Statistics */}
        <section className="staff-statistics py-4 rounded mb-5" style={{ backgroundColor: '#003366' }}>
          <Row className="text-center">
            <Col md={3} className="mb-3 mb-md-0">
              <div className="stat-item">
                <h3 style={{ color: '#FFD700' }}>{filteredAcademicStaff.length}</h3>
                <p className="mb-0" style={{ color: 'white' }}>Academic Staff</p>
              </div>
            </Col>
            <Col md={3} className="mb-3 mb-md-0">
              <div className="stat-item">
                <h3 style={{ color: '#FFD700' }}>{administrationStaff.length}</h3>
                <p className="mb-0" style={{ color: 'white' }}>Administration Staff</p>
              </div>
            </Col>
            <Col md={3} className="mb-3 mb-md-0">
              <div className="stat-item">
                <h3 style={{ color: '#FFD700' }}>{supportStaff.length}</h3>
                <p className="mb-0" style={{ color: 'white' }}>Support Staff</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="stat-item">
                <h3 style={{ color: '#FFD700' }}>{staffData.length}</h3>
                <p className="mb-0" style={{ color: 'white' }}>Total Staff Members</p>
              </div>
            </Col>
          </Row>
        </section>

        {/* Staff Commitment Statement */}
        <section className="text-center">
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-5">
              <h3 style={{ color: '#003366' }} className="mb-4">Our Commitment to Excellence</h3>
              <p className="lead mb-4">
                Our dedicated team of {staffData.length} professionals works tirelessly to provide 
                quality education and support to all our students. From classroom teaching to 
                administrative support, every staff member plays a vital role in creating a 
                nurturing environment for learning and growth.
              </p>
              <div className="d-flex justify-content-center gap-4 flex-wrap">
                <div className="d-flex align-items-center gap-2">
                  <div className="rounded-circle bg-primary p-2">
                    <GraduationCap size={20} color="white" />
                  </div>
                  <span>Continuous Professional Development</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <div className="rounded-circle bg-success p-2">
                    <Users size={20} color="white" />
                  </div>
                  <span>Student-Centered Approach</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <div className="rounded-circle bg-warning p-2">
                    <Award size={20} color="white" />
                  </div>
                  <span>Excellence in Teaching</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </section>
      </Container>
    </div>
  );
}

export default Staff;