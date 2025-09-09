import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Layout = ({ menuOpen, setMenuOpen }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); 
      }
    }
  }, [location]);
  
  return (
    <div className="flex h-screen relative">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="fixed top-0 left-0 w-full z-50 h-24 bg-gradient-to-t from-transparent to-amber-100 pointer-events-none"></div>
      <main className="flex-1 h-full bg-amber-100 overflow-auto">
        <Outlet />
      </main>
      <div className="fixed bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-amber-100  pointer-events-none"></div>
    </div>
  );
};

export default Layout;
