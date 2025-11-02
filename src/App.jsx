import { Routes, Route } from 'react-router-dom';
import SchoolNavbar from './components/Navbar';
import SchoolFooter from './components/Footer';
import Home from './pages/Home';
import NoticeBoard from './pages/NoticeBoard';
import OurSchool from './pages/OurSchool';
import Staff from './pages/Staff';
import Contact from './pages/Contact';
import Media from './pages/Media';

function App() {
  return (
     <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }} >
      <SchoolNavbar />

    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noticeboard" element={<NoticeBoard />} />
        <Route path="/ourschool" element={<OurSchool />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/media" element={<Media />} />
      </Routes>
      
      <SchoolFooter />
    </div>
  );
}

export default App;
