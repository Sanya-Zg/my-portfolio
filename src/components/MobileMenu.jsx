import { RiCloseLargeLine } from 'react-icons/ri';
import SmoothNavLink from './SmoothNavlink';

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed inset-0 bg-[rgba(10,10,10,0.8)] z-[9999] flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
        menuOpen
          ? 'h-screen opacity-100 pointer-events-auto'
          : 'h-0 opacity-0 pointer-events-none'
      }`}
    >
      {/* Close button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-4 right-4 text-white"
        aria-label="Close Menu"
      >
        <RiCloseLargeLine size={30} />
      </button>

      {/* Menu */}
      <div className="text-center flex flex-col space-y-6">
        <SmoothNavLink
          toId="home"
          onClick={() => setMenuOpen(false)}
          className="text-white text-2xl"
        >
          Home
        </SmoothNavLink>
        <SmoothNavLink
          toId="about"
          onClick={() => setMenuOpen(false)}
          className="text-white text-2xl"
        >
          About
        </SmoothNavLink>
        <SmoothNavLink
          toId="projects"
          onClick={() => setMenuOpen(false)}
          className="text-white text-2xl"
        >
          Projects
        </SmoothNavLink>
        <SmoothNavLink
          toId="contact"
          onClick={() => setMenuOpen(false)}
          className="text-white text-2xl"
        >
          Contact
        </SmoothNavLink>
      </div>
    </div>
  );
};

export default MobileMenu;
