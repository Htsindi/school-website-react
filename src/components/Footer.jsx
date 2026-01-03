import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Heart, Shield, Star } from 'lucide-react';

function SchoolFooter() {
  const currentYear = new Date().getFullYear();

  const handlePhoneClick = () => {
    // You can add phone call functionality here
    window.location.href = 'tel:+27123456789';
  };

  const handleEmailClick = () => {
    // You can add email functionality here
    window.location.href = 'mailto:info@sacredheart.edu';
  };

  return (
    <footer className="school-footer py-3">
      <div className="container-fluid">
        <div className="footer-content">
          {/* School Motto - Left Side */}
          <div className="footer-motto d-flex align-items-center gap-2">
            <div className="d-flex align-items-center gap-1">
              <Star size={16} color="#FFD700" />
              <Shield size={16} color="#FFD700" />
              <Heart size={16} color="#FFD700" />
            </div>
            <div>
              <p className="mb-0 fw-bold" style={{ color: '#FFD700' }}>
                Light - Truth - Love
              </p>
              <small className="text-white-50" style={{ fontSize: '0.8rem' }}>
                Guiding principles since 1995
              </small>
            </div>
          </div>

          {/* Copyright Message - Center */}
          <div className="footer-copyright text-center">
            <p className="mb-0" style={{ fontSize: '0.9rem', color: 'white' }}>
              © {currentYear} Sacred Heart Private Primary School. All Rights Reserved.
            </p>
            <small className="text-white-50" style={{ fontSize: '0.75rem' }}>
              Registered with Department of Education | NPO Registration: 123-456
            </small>
          </div>

          {/* Contact Buttons - Right Side */}
          <div className="footer-contact">
            <button 
              className="contact-btn d-flex align-items-center gap-2"
              onClick={handlePhoneClick}
              aria-label="Call School"
            >
              <Phone size={18} />
              <span>Call Us</span>
            </button>
            
            <button 
              className="contact-btn d-flex align-items-center gap-2"
              onClick={handleEmailClick}
              aria-label="Email School"
            >
              <Mail size={18} />
              <span>Email Us</span>
            </button>

            <Link 
              to="/contact" 
              className="contact-btn d-flex align-items-center gap-2"
              style={{ textDecoration: 'none' }}
              aria-label="Visit Contact Page"
            >
              <span>More Info</span>
            </Link>
          </div>
        </div>

        {/* Quick Links (Optional - Hidden on small screens) */}
        <div className="footer-links mt-3 d-none d-md-flex justify-content-center">
          <div className="d-flex gap-4">
            <Link to="/noticeboard" className="text-white-50" style={{ textDecoration: 'none', fontSize: '0.85rem' }}>
              Noticeboard
            </Link>
            <Link to="/ourschool" className="text-white-50" style={{ textDecoration: 'none', fontSize: '0.85rem' }}>
              About Us
            </Link>
            <Link to="/staff" className="text-white-50" style={{ textDecoration: 'none', fontSize: '0.85rem' }}>
              Our Staff
            </Link>
            <Link to="/studentlife" className="text-white-50" style={{ textDecoration: 'one', fontSize: '0.85rem' }}>
              Student Life
            </Link>
            <Link to="/media" className="text-white-50" style={{ textDecoration: 'none', fontSize: '0.85rem' }}>
              Media
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SchoolFooter;