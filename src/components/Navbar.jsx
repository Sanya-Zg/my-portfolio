import { GiHamburgerMenu } from 'react-icons/gi';
import MainMenu from './MainMenu';

const Navbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <nav
      className="fixed top-0 left-0 w-full z-60 md:z-40 h-16 bg-transparent flex items-center
        md:static md:w-1/5 md:h-full"
    >
      {!menuOpen && <button
        className="absolute right-4 cursor-pointer md:hidden"
        onClick={() => setMenuOpen(true)}
        aria-label="Open Menu"
      >
        <GiHamburgerMenu size={30} />
      </button>}

      <MainMenu />
    </nav>
  );
};

export default Navbar;
