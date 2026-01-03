import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Tab, Tabs, Image, Alert } from 'react-bootstrap';
import { 
  UserCircle, 
  BookOpen, 
  Users, 
  HelpCircle, 
  Award, 
  Mail,
  GraduationCap,
  Briefcase,
  Shield,
  School,
  UserCog
} from 'lucide-react';
import staffData from '../data/staff';

function Staff() {
  const [activeTab, setActiveTab] = useState('administration');
  const [processedStaffData, setProcessedStaffData] = useState({
    principal: null,
    administrationStaff: [],
    academicStaff: [],
    supportStaff: [],
    staffByDepartment: {},
    allStaff: []
  });
  
  const fallback = '/assets/default-staff.jpg';

  useEffect(() => {
    processStaffData();
  }, []);

  const processStaffData = () => {
    try {
      // Ensure staffData is an array
      const staffArray = Array.isArray(staffData) ? staffData : [];
      console.log('Total staff members:', staffArray.length);
      console.log('Sample staff member:', staffArray[0]);

      // Find principal - using your actual data
      const principal = staffArray.find(member => {
        if (!member) return false;
        const position = String(member.position || '').toLowerCase();
        return position.includes('principal');
      });

      // If no principal found in data, create a default one
      const defaultPrincipal = {
        name: "Mr. M.C. Ngaba",
        position: "Principal",
        department: "Management",
        image: fallback,
        message: "Welcome to Sacred Heart Primary School. Our dedicated team of educators and staff are committed to providing a nurturing environment where every child can thrive academically, socially, and emotionally. We believe in holistic education that develops not only academic excellence but also strong character and values.",
        qualifications: "M.Ed in Educational Leadership, B.Ed in Primary Education",
        yearsOfService: "12 years",
        email: "principal.mcngaba@sacredheart.edu"
      };

      const finalPrincipal = principal || defaultPrincipal;

      // Categorize staff members based on your actual data
      const administrationStaff = staffArray.filter(member => {
        if (!member) return false;
        const position = String(member.position || '').toLowerCase();
        const department = String(member.department || '').toLowerCase();
        
        return position.includes('principal') ||
               position.includes('deputy') ||
               position.includes('head of department') ||
               department.includes('management') ||
               department.includes('administration') ||
               position.includes('administrative officer');
      });

      // Academic staff - teachers from foundation, intermediate, senior phases
      const academicStaff = staffArray.filter(member => {
        if (!member) return false;
        const position = String(member.position || '').toLowerCase();
        const department = String(member.department || '').toLowerCase();
        
        // Include all teachers except assistant teachers (they go to support)
        return position.includes('teacher') && !position.includes('assistant teacher');
      });

      // Support staff - assistant teachers and other support roles
      const supportStaff = staffArray.filter(member => {
        if (!member) return false;
        const position = String(member.position || '').toLowerCase();
        
        // Check if member is already in other categories
        const isAdmin = administrationStaff.includes(member);
        const isAcademic = academicStaff.includes(member);
        
        return !isAdmin && !isAcademic || position.includes('assistant teacher');
      });

      // Group academic staff by department based on your data structure
      const staffByDepartment = {
        'Foundation Phase (Grade R - 3)': academicStaff.filter(member => {
          const dept = String(member.department || '').toLowerCase();
          return dept.includes('foundation phase') || 
                 (dept.includes('foundation') && !dept.includes('intermediate'));
        }),
        'Intermediate to Senior Phase (Grade 4 - 7)': academicStaff.filter(member => {
          const dept = String(member.department || '').toLowerCase();
          return dept.includes('intermediate') || 
                 dept.includes('senior phase') ||
                 (dept.includes('intermediate') && dept.includes('senior'));
        }),
        'Cross-Phase Teachers': academicStaff.filter(member => {
          const dept = String(member.department || '').toLowerCase();
          return (dept.includes('foundation') && dept.includes('intermediate')) ||
                 (dept.includes('foundation') && dept.includes('senior')) ||
                 (dept.includes('intermediate') && dept.includes('senior'));
        }),
        'Specialist Subjects': academicStaff.filter(member => {
          const subjects = String(member.Subjects || '').toLowerCase();
          // Subjects that are typically specialist
          const specialistSubjects = [
            'afrikaans', 'setswana', 'computer', 'technology',
            'creative arts', 'life skills', 'life orientation',
            'religious studies', 'music', 'art', 'physical education'
          ];
          
          return specialistSubjects.some(subject => 
            subjects.includes(subject)
          );
        })
      };

      // Filter out cross-phase teachers from other categories
      const crossPhaseTeachers = staffByDepartment['Cross-Phase Teachers'];
      staffByDepartment['Foundation Phase (Grade R - 3)'] = staffByDepartment['Foundation Phase (Grade R - 3)'].filter(
        member => !crossPhaseTeachers.includes(member)
      );
      staffByDepartment['Intermediate to Senior Phase (Grade 4 - 7)'] = staffByDepartment['Intermediate to Senior Phase (Grade 4 - 7)'].filter(
        member => !crossPhaseTeachers.includes(member)
      );
      staffByDepartment['Specialist Subjects'] = staffByDepartment['Specialist Subjects'].filter(
        member => !crossPhaseTeachers.includes(member)
      );

      // Add cross-phase teachers to specialist if they teach specialist subjects
      crossPhaseTeachers.forEach(member => {
        const subjects = String(member.Subjects || '').toLowerCase();
        const isSpecialist = [
          'afrikaans', 'setswana', 'computer', 'technology',
          'creative arts', 'life skills', 'life orientation',
          'religious studies'
        ].some(subject => subjects.includes(subject));
        
        if (isSpecialist) {
          staffByDepartment['Specialist Subjects'].push(member);
        } else {
          // If not specialist, add to intermediate/senior phase
          staffByDepartment['Intermediate to Senior Phase (Grade 4 - 7)'].push(member);
        }
      });

      setProcessedStaffData({
        principal: finalPrincipal,
        administrationStaff,
        academicStaff,
        supportStaff,
        staffByDepartment,
        allStaff: staffArray
      });

    } catch (error) {
      console.error('Error processing staff data:', error);
      // Set default data if processing fails
      setProcessedStaffData({
        principal: {
          name: "Mr. M.C. Ngaba",
          position: "Principal",
          department: "Management",
          image: fallback,
          message: "Welcome to Sacred Heart Primary School. Our dedicated team of educators and staff are committed to providing a nurturing environment where every child can thrive.",
          qualifications: "M.Ed in Educational Leadership",
          yearsOfService: "12 years",
          email: "principal.mcngaba@sacredheart.edu"
        },
        administrationStaff: [],
        academicStaff: [],
        supportStaff: [],
        staffByDepartment: {},
        allStaff: []
      });
    }
  };

  // Helper function to get image with fallback
  const getImage = (imgUrl) => {
    if (!imgUrl || imgUrl.includes('example.com') || imgUrl.includes('placeholder')) {
      return fallback;
    }
    return imgUrl;
  };

  const { 
    principal, 
    administrationStaff, 
    academicStaff, 
    supportStaff, 
    staffByDepartment,
    allStaff 
  } = processedStaffData;

  // Function to get subject display text
  const getSubjectsDisplay = (member) => {
    if (!member.Subjects) return '';
    // Format the subjects string
    const subjects = member.Subjects.split(',').map(s => s.trim()).join(', ');
    return subjects;
  };

  // Show loading state if data hasn't been processed yet
  if (!principal) {
    return (
      <div className="staff-page">
        <Container className="py-5">
          <div className="text-center">
            <h1 className="mb-3" style={{ color: '#003366' }}>Loading Staff Information...</h1>
            <p>Please wait while we load the staff data.</p>
          </div>
        </Container>
      </div>
    );
  }

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
                      className="rounded-circle img-fluid border border-4 border-warning"
                      style={{ 
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
                  {principal.Subjects && (
                    <p className="mt-2">
                      <small className="text-muted">Subjects: {getSubjectsDisplay(principal)}</small>
                    </p>
                  )}
                </Col>
                <Col md={8}>
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <UserCircle size={32} style={{ color: '#003366' }} />
                    <h3 style={{ color: '#003366' }}>Principal's Message</h3>
                  </div>
                  <div className="message-content">
                    <p className="principals-message lead mb-4">
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
                  <span>Administration ({administrationStaff.length})</span>
                </div>
              }
            >
              <div className="mt-4">
                <h4 className="mb-4" style={{ color: '#003366' }}>
                  Administration & Leadership Team
                </h4>
                {administrationStaff.length > 0 ? (
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
                            {member.Subjects && (
                              <Card.Text className="small text-muted mb-2">
                                <strong>Subjects:</strong> {getSubjectsDisplay(member)}
                              </Card.Text>
                            )}
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
                ) : (
                  <Alert variant="info">
                    No administration staff found in the database.
                  </Alert>
                )}
              </div>
            </Tab>

            {/* Academic Tab */}
            <Tab 
              eventKey="academic" 
              title={
                <div className="d-flex align-items-center gap-2">
                  <BookOpen size={20} />
                  <span>Academic Staff ({academicStaff.length})</span>
                </div>
              }
            >
              <div className="mt-4">
                {/* Foundation Phase */}
                {staffByDepartment['Foundation Phase (Grade R - 3)']?.length > 0 && (
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
                              {member.Subjects && (
                                <Card.Text className="small text-muted mb-2">
                                  <strong>Grade/Subjects:</strong> {getSubjectsDisplay(member)}
                                </Card.Text>
                              )}
                              <div className="mt-2">
                                <span className="badge bg-info text-white">Foundation Phase</span>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </div>
                )}

                {/* Intermediate to Senior Phase */}
                {staffByDepartment['Intermediate to Senior Phase (Grade 4 - 7)']?.length > 0 && (
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
                              {member.Subjects && (
                                <Card.Text className="small text-muted mb-2">
                                  <strong>Subjects:</strong> {getSubjectsDisplay(member)}
                                </Card.Text>
                              )}
                              <div className="mt-2">
                                <span className="badge bg-primary">Senior Phase</span>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </div>
                )}

                {/* Specialist Subjects */}
                {staffByDepartment['Specialist Subjects']?.length > 0 && (
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
                              {member.Subjects && (
                                <Card.Text className="small text-muted mb-2">
                                  <strong>Subjects:</strong> {getSubjectsDisplay(member)}
                                </Card.Text>
                              )}
                              <div className="mt-2">
                                <span className="badge bg-success">Specialist</span>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </div>
                )}

                {academicStaff.length === 0 && (
                  <Alert variant="info">
                    No academic staff found in the database.
                  </Alert>
                )}
              </div>
            </Tab>

            {/* Support Tab */}
            <Tab 
              eventKey="support" 
              title={
                <div className="d-flex align-items-center gap-2">
                  <HelpCircle size={20} />
                  <span>Support Staff ({supportStaff.length})</span>
                </div>
              }
            >
              <div className="mt-4">
                <h4 className="mb-4" style={{ color: '#003366' }}>Support Staff</h4>
                {supportStaff.length > 0 ? (
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
                            {member.Subjects && (
                              <Card.Text className="small text-muted mb-2">
                                <strong>Subjects:</strong> {getSubjectsDisplay(member)}
                              </Card.Text>
                            )}
                            <div className="mt-2">
                              <span className="badge bg-secondary">Support</span>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                ) : (
                  <Alert variant="info">
                    No support staff found in the database.
                  </Alert>
                )}
              </div>
            </Tab>
          </Tabs>
        </section>

        {/* Staff Statistics */}
        <section className="staff-statistics py-4 rounded mb-5">
          <Row className="text-center">
            <Col md={3} className="mb-3 mb-md-0">
              <div className="stat-item">
                <h3 style={{ color: '#FFD700' }}>{academicStaff.length}</h3>
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
                <h3 style={{ color: '#FFD700' }}>{allStaff.length}</h3>
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
                Our dedicated team of {allStaff.length} professionals works tirelessly to provide 
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