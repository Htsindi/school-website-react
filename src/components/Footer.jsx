import React from 'react';
import { Link } from 'react-router-dom';

function SchoolFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'linear-gradient(135deg, #0052CC 0%, #1E90FF 50%, #FFD700 100%)',
        color: 'white',
        padding: '1rem 0',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
        zIndex: 1000
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 text-center text-md-start mb-2 mb-md-0">
            <p className="mb-0 fw-bold">Light - Truth - Love</p>
          </div>
          <div className="col-md-4 text-center mb-2 mb-md-0">
            <p className="mb-0" style={{ fontSize: '0.9rem' }}>
              © {currentYear} All Rights Reserved
            </p>a
          </div>
          <div className="col-md-4 text-center text-md-end">
            <a href="tel:+27123456789" className="text-white text-decoration-none me-3">
              📞 Contact
            </a>
            <Link to="/contact" className="text-white text-decoration-none">
              ✉️ Email
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SchoolFooter;