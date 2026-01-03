import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function SchoolNavbar() {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  
  // Navigation links - Added StudentLife
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/noticeboard', label: 'Noticeboard' },
    { path: '/ourschool', label: 'Our School' },
    { path: '/media', label: 'Media' },
    { path: '/studentlife', label: 'Student Life' },  // Added
    { path: '/staff', label: 'Staff' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  // Close navbar on link click (for mobile)
  const handleLinkClick = () => {
    setExpanded(false);
  };

  // Apply theme colors inline
  const navbarStyle = {
    backgroundColor: '#003366', // Navy blue
    borderBottom: '3px solid #FFD700', // Yellow border
  };

  const navLinkStyle = {
    color: '#FFD700', // Yellow text
    fontWeight: '500',
    margin: '0 15px',
    padding: '8px 16px',
    borderRadius: '4px',
    transition: 'all 0.3s ease',
  };

  const activeNavLinkStyle = {
    ...navLinkStyle,
    backgroundColor: '#FFD700', // Yellow background
    color: '#003366', // Navy blue text
  };

  const brandTextStyle = {
    color: '#FFD700', // Yellow text for brand
    fontWeight: 'bold',
    fontSize: '1.2rem',
    marginLeft: '10px',
  };

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      style={navbarStyle}
      fixed="top"
      className="py-2"
    >
      <Container fluid>
        {/* Left Logo - School Logo */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center"
          onClick={handleLinkClick}
        >
          <img
            src="/assets/school-logo.png"
            alt="School Logo"
            style={{
              height: '50px',
              width: 'auto',
            }}
            className="d-inline-block align-top"
          />
          <span style={brandTextStyle} className="d-none d-md-inline">
            Sacred Heart Private Primary School
          </span>
        </Navbar.Brand>

        {/* Hamburger Toggle for Mobile */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
          style={{
            borderColor: '#FFD700',
          }}
        >
          <span style={{ color: '#FFD700', fontSize: '1.5rem' }}>☰</span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Centered Navigation Links */}
          <Nav className="mx-auto my-2 my-lg-0">
            {navLinks.map((link) => (
              <Nav.Link
                key={link.path}
                as={Link}
                to={link.path}
                style={isActive(link.path) ? activeNavLinkStyle : navLinkStyle}
                onClick={handleLinkClick}
                className="text-center"
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>

          {/* Right Logo - Catholic Logo */}
          <Navbar.Brand
            href="https://www.catholiceducation.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex align-items-center ms-lg-auto"
          >
            <img
              src="/assets/catholic-logo.png"
              alt="Catholic Education"
              style={{
                height: '50px',
                width: 'auto',
              }}
              className="d-inline-block align-top"
            />
            <span className="d-none d-lg-inline" style={{ 
              ...brandTextStyle, 
              fontSize: '0.9rem',
              marginLeft: '10px'
            }}>
             
            </span>
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SchoolNavbar;