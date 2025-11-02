import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';

function SchoolNavbar() {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
  const navigate = useNavigate();
  const scrollTimeout = useRef(null);
  const lastScrollY = useRef(0);
  const isNavigating = useRef(false);
  const scrollThreshold = useRef(0);

  // Define the page sequence
  const pageSequence = [
    '/',
    '/noticeboard',
    '/ourschool',
    '/media',
    '/staff'
  ];

  const isActive = (path, exact = false) => {
    if (exact) return currentPath === path;
    if (path === '/') return currentPath === '/';
    return currentPath === path || currentPath.startsWith(path + '/');
  };

  useEffect(() => {
    const handleScroll = () => {
      // Prevent navigation during an ongoing transition
      if (isNavigating.current) return;

      const currentScrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      
      // Only enable scroll navigation if page has enough content to scroll
      const hasScrollableContent = documentHeight > windowHeight + 200;
      
      if (!hasScrollableContent) return;

      const scrollDirection = currentScrollY > lastScrollY.current ? 'down' : 'up';
      const scrolledToBottom = currentScrollY + windowHeight >= documentHeight - 100;
      const scrolledToTop = currentScrollY <= 100;

      // Track significant scroll movement to prevent accidental triggers
      const scrollDelta = Math.abs(currentScrollY - scrollThreshold.current);
      
      lastScrollY.current = currentScrollY;

      // Clear any existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Set a new timeout to detect when scrolling stops
      scrollTimeout.current = setTimeout(() => {
        const currentIndex = pageSequence.indexOf(currentPath);

        // Scroll down to next page - only if scrolled significantly
        if (scrollDirection === 'down' && scrolledToBottom && scrollDelta > 50 && currentIndex < pageSequence.length - 1) {
          isNavigating.current = true;
          scrollThreshold.current = currentScrollY;
          navigate(pageSequence[currentIndex + 1]);
          setTimeout(() => {
            window.scrollTo(0, 0);
            setTimeout(() => {
              isNavigating.current = false;
            }, 500);
          }, 100);
        }

        // Scroll up to previous page - only if scrolled significantly
        if (scrollDirection === 'up' && scrolledToTop && scrollDelta > 50 && currentIndex > 0) {
          isNavigating.current = true;
          scrollThreshold.current = currentScrollY;
          navigate(pageSequence[currentIndex - 1]);
          setTimeout(() => {
            const newDocHeight = document.documentElement.scrollHeight;
            const newWindowHeight = window.innerHeight;
            window.scrollTo(0, newDocHeight - newWindowHeight - 100);
            setTimeout(() => {
              isNavigating.current = false;
            }, 500);
          }, 100);
        }
      }, 300); // Increased delay to prevent rapid firing
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Reset navigation flag when route changes
    const resetNavigation = () => {
      setTimeout(() => {
        isNavigating.current = false;
        scrollThreshold.current = window.scrollY;
      }, 600);
    };

    resetNavigation();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [currentPath, navigate]);

  return (
    <Navbar
      expand="md"
      className="school-navbar"
      variant="dark"
      sticky="top"
    >
      <Container fluid className="px-3">
        {/* School Brand - Left Side */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="school-brand"
        >
          <img
            src="/assets/school-logo.png"
            alt="School Logo"
            className="school-logo"
          />
          <span className="brand-text">Sacred Heart Private Primary School</span>
        </Navbar.Brand>

        <Navbar.Toggle 
          aria-controls="responsive-navbar-nav"
          className="navbar-toggler-custom"
        />
        
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* Center Navigation Links */}
          <Nav className="mx-auto align-items-center nav-links-center">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={`nav-link-custom ${isActive('/', true) ? 'active' : ''}`}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/noticeboard" 
              className={`nav-link-custom ${isActive('/noticeboard') ? 'active' : ''}`}
            >
              Noticeboard
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/ourschool" 
              className={`nav-link-custom ${isActive('/ourschool') ? 'active' : ''}`}
            >
              Our School
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/media" 
              className={`nav-link-custom ${isActive('/media') ? 'active' : ''}`}
            >
              Media
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/staff" 
              className={`nav-link-custom ${isActive('/staff') ? 'active' : ''}`}
            >
              Staff
            </Nav.Link>
          </Nav>

          {/* Catholic Brand - Right Side */}
          <Navbar.Brand
            href="https://www.catholiceducation.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="catholic-brand ms-auto"
          >
            <img
              src="/assets/catholic-logo.png"
              alt="Catholic Education"
              className="catholic-logo"
            />
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SchoolNavbar;