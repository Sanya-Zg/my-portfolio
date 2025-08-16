import SmoothNavLink from "./SmoothNavlink";

const MainMenu = () => {
  return (
    <div className="hidden md:flex w-full h-full items-center justify-center relative bg-amber-50">
      <div className="text-center">
        <SmoothNavLink
          toId="home"
          className="text-gray-500 text-2xl font-bold hover:text-amber-400 hover:underline transition-colors block mb-6 w-full"
        >
          Home
        </SmoothNavLink>
        <SmoothNavLink
          toId="about"
          className="text-gray-500 text-2xl font-bold hover:text-amber-400 hover:underline transition-colors block mb-6"
        >
          About
        </SmoothNavLink>
        <SmoothNavLink
          toId="projects"
          className="text-gray-500 text-2xl font-bold hover:text-amber-400 hover:underline transition-colors block mb-6"
        >
          Projects
        </SmoothNavLink>
        <SmoothNavLink
          toId="contact"
          className="text-gray-500 text-2xl font-bold hover:text-amber-400 hover:underline transition-colors block mb-6"
        >
          Contact
        </SmoothNavLink>
      </div>
      <div className="absolute inset-0 bg-gradient-to-l from-amber-100 via-transparent to-amber-100 pointer-events-none"></div>
    </div>
  );
};
export default MainMenu