import { useEffect, useRef } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import SchoolNavbar, { navLinks } from './components/Navbar';
import SchoolFooter from './components/Footer';
import Home from './pages/Home';
import NoticeBoard from './pages/NoticeBoard';
import OurSchool from './pages/OurSchool';
import Staff from './pages/Staff';
import Contact from './pages/Contact';
import Media from './pages/Media';
import StudentLife from './pages/StudentLife';

const pages = {
  '/': Home,
  '/noticeboard': NoticeBoard,
  '/ourschool': OurSchool,
  '/media': Media,
  '/studentlife': StudentLife,
  '/staff': Staff,
  '/contact': Contact,
};

function App() {
  const contentRef = useRef(null);
  const touchStartY = useRef(null);
  const navigationLock = useRef(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
    navigationLock.current = false;
  }, [location.pathname]);

  const navigateAtBoundary = (direction) => {
    const currentIndex = navLinks.findIndex(({ path }) => path === location.pathname);
    const content = contentRef.current;

    if (navigationLock.current || currentIndex < 0 || !content) {
      return;
    }

    const atTop = content.scrollTop <= 0;
    const atBottom = content.scrollTop + content.clientHeight >= content.scrollHeight - 1;
    const targetIndex = direction > 0 && atBottom
      ? currentIndex + 1
      : direction < 0 && atTop
        ? currentIndex - 1
        : currentIndex;

    if (targetIndex >= 0 && targetIndex < navLinks.length && targetIndex !== currentIndex) {
      navigationLock.current = true;
      navigate(navLinks[targetIndex].path);
    }
  };

  return (
    <div className="app-container">
      <SchoolNavbar />
      
      {/* Main content area */}
      <div
        className="main-content"
        ref={contentRef}
        onScroll={(event) => {
          const content = event.currentTarget;
          if (
            content.scrollHeight > content.clientHeight &&
            content.scrollTop + content.clientHeight >= content.scrollHeight - 1
          ) {
            navigateAtBoundary(1);
          }
        }}
        onWheel={(event) => navigateAtBoundary(event.deltaY)}
        onTouchStart={(event) => {
          touchStartY.current = event.changedTouches[0].clientY;
        }}
        onTouchEnd={(event) => {
          if (touchStartY.current !== null) {
            const swipeDistance = touchStartY.current - event.changedTouches[0].clientY;
            if (Math.abs(swipeDistance) >= 60) {
              navigateAtBoundary(swipeDistance);
            }
            touchStartY.current = null;
          }
        }}
      >
        <Routes>
          {navLinks.map(({ path }) => {
            const Page = pages[path];
            return <Route key={path} path={path} element={<Page />} />;
          })}
        </Routes>
      </div>
      
      <SchoolFooter />
    </div>
  );
}

export default App;