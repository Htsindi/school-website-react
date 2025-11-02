
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            src="/assets/InClass.jpg"
            className="carousel-image d-block w-100"
            alt="Students in Class"
          />
          <Carousel.Caption>
            <h3>In-Class Learning</h3>
            <p>Empowering learners for a brighter future.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="/assets/Atheletics.jpg"
            className="carousel-image d-block w-100"
            alt="Athletics Event"
          />
          <Carousel.Caption>
            <h3>Athletics</h3>
            <p>Building teamwork and sportsmanship.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="/assets/ScienceExpo.jpg"
            className="carousel-image d-block w-100"
            alt="Science Expo"
          />
          <Carousel.Caption>
            <h3>Science Expo</h3>
            <p>Exploring innovation and creativity.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="/assets/Playgrounds.jpg"
            className="carousel-image d-block w-100"
            alt="School Playgrounds"
          />
          <Carousel.Caption>
            <h3>Playgrounds</h3>
            <p>Fun and recreation for all students.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>
  );
}

export default Home;