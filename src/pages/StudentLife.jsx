import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { studentLifeData } from '../data/studentLife';

const StudentLife = () => {
  const { images, videos, mainVideo } = studentLifeData;

  return (
    <div className="min-h-screen pt-16">
      <Container className="py-5">
        <h1 className="text-center mb-5 text-primary">
          Student Life
        </h1>
        
        {/* Introductory Video Section */}
        <section className="mb-5">
          <h2 className="mb-4 text-primary">
            Welcome to Our School
          </h2>
          <Row className="justify-content-center">
            <Col xl={10} lg={12} md={12}>
              <div className="p-3 rounded overflow-hidden border-4 border-warning shadow-lg">
                <div className="ratio ratio-16x9">
                  <iframe 
                    src={`${mainVideo.url}?controls=1&modestbranding=1`}
                    title={mainVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </Col>
          </Row>
        </section>

        {/* School Videos Gallery */}
        <section className="mb-5">
          <h2 className="mb-4 text-primary">
            School Videos
          </h2>
          <Row className="g-4">
            {videos.slice(0, 2).map((video, index) => (
              <Col key={index} md={6} xs={12}>
                <div className="p-3 rounded overflow-hidden border-4 border-warning shadow-lg">
                  <div className="ratio ratio-16x9">
                    <iframe 
                      src={`${video.url}?controls=1&modestbranding=1`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </section>

        {/* Galleries Section */}
        <section>
          <h2 className="mb-5 text-primary">
            School Galleries
          </h2>
          
          {/* Extracurricular Activities Gallery */}
          <div className="mb-5">
            <h3 className="mb-3 text-warning bg-primary p-3 rounded">
              Extracurricular Activities
            </h3>
            <Row className="g-4">
              {images.activities.map((item, index) => (
                <Col key={index} md={6} xs={12}>
                  <div className="p-3 rounded overflow-hidden border-4 border-warning shadow-lg h-100">
                    <img 
                      src={item.url}
                      alt={item.alt}
                      className="w-100 h-100 object-fit-cover hover-scale"
                      style={{ minHeight: '250px' }}
                      onError={(e) => {
                        console.error(`Error loading image ${index + 1}`);
                        e.target.onerror = null;
                        e.target.src = item.fallback;
                      }}
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </div>

          {/* Clubs Gallery */}
          <div className="mb-5">
            <h3 className="mb-3 text-warning bg-primary p-3 rounded">
              Clubs & Societies
            </h3>
            <Row className="g-4">
              {images.clubs.map((item, index) => (
                <Col key={index} md={6} xs={12}>
                  <div className="p-3 rounded overflow-hidden border-4 border-warning shadow-lg h-100">
                    <img 
                      src={item.url}
                      alt={item.alt}
                      className="w-100 h-100 object-fit-cover hover-scale"
                      style={{ minHeight: '250px' }}
                      onError={(e) => {
                        console.error(`Error loading image ${index + 1}`);
                        e.target.onerror = null;
                        e.target.src = item.fallback;
                      }}
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </div>

          {/* Events Gallery */}
          <div className="mb-5">
            <h3 className="mb-3 text-warning bg-primary p-3 rounded">
              School Events
            </h3>
            <Row className="g-4">
              {images.events.map((item, index) => (
                <Col key={index} md={6} xs={12}>
                  <div className="p-3 rounded overflow-hidden border-4 border-warning shadow-lg h-100">
                    <img 
                      src={item.url}
                      alt={item.alt}
                      className="w-100 h-100 object-fit-cover hover-scale"
                      style={{ minHeight: '250px' }}
                      onError={(e) => {
                        console.error(`Error loading image ${index + 1}`);
                        e.target.onerror = null;
                        e.target.src = item.fallback;
                      }}
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </div>

          {/* Campus Life Gallery */}
          <div className="mb-5">
            <h3 className="mb-3 text-warning bg-primary p-3 rounded">
              Campus Life
            </h3>
            <Row className="g-4">
              {images.campus.map((item, index) => (
                <Col key={index} md={6} xs={12}>
                  <div className="p-3 rounded overflow-hidden border-4 border-warning shadow-lg h-100">
                    <img 
                      src={item.url}
                      alt={item.alt}
                      className="w-100 h-100 object-fit-cover hover-scale"
                      style={{ minHeight: '250px' }}
                      onError={(e) => {
                        console.error(`Error loading image ${index + 1}`);
                        e.target.onerror = null;
                        e.target.src = item.fallback;
                      }}
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </div>

          {/* Student Interviews Gallery */}
          <div className="mb-5">
            <h3 className="mb-3 text-warning bg-primary p-3 rounded">
              Student Interviews
            </h3>
            <Row className="g-4">
              {videos.slice(2).map((video, index) => (
                <Col key={index} md={6} xs={12}>
                  <div className="p-3 rounded overflow-hidden border-4 border-warning shadow-lg">
                    <div className="ratio ratio-16x9">
                      <iframe 
                        src={`${video.url}?controls=1&modestbranding=1`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </section>
      </Container>

      {/* Add custom styles for hover effect */}
      <style jsx>{`
        .hover-scale {
          transition: transform 0.3s ease;
        }
        .hover-scale:hover {
          transform: scale(1.05);
        }
        .border-warning {
          border-color: #FFD700 !important;
        }
        .text-primary {
          color: #003366 !important;
        }
        .bg-primary {
          background-color: #003366 !important;
        }
        .text-warning {
          color: #FFD700 !important;
        }
      `}</style>
    </div>
  );
};

export default StudentLife;