import { Link } from 'react-router-dom';
import project1 from '../../assets/Thumnails.png';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FaListUl } from 'react-icons/fa';
import { RevealOnScroll } from '../RevealOnScroll';

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl mx-auto w-fit text-transparent font-bold mb-8 bg-gradient-to-r from-amber-400 to-blue-800 bg-clip-text">
            My Projects
          </h2>

          <div className="grid gap-6 justify-center grid-cols-[repeat(auto-fit,minmax(360px,1fr))]">
            <div className="min-w-[360px] bg-white/30 p-6 rounded-xl border border-white/10 hover:scale-101 hover:border-blue-800/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all duration-500">
              <h3 className="text-xl font-bold mb-3 text-gray-700">
                Name of project
              </h3>

              <p className="text-gray-500 mb-2">Description info</p>
              <img
                src={project1}
                alt="Project 1"
                className="rounded-sm object-fill"
              />

              <div className="flex flex-wrap gap-2 my-4">
                {['React', 'NodeJS', 'MongoDB'].map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-800/10 text-blue-800 py-1 px-3 rounded-full  hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between flex-wrap font-semibold">
                <div className="flex space-x-2">
                  <p className="bg-gradient-to-r text-transparent from-blue-800 to-amber-400 bg-clip-text">
                    View Project
                  </p>
                  <FaArrowRightLong className="mt-1 text-amber-400" />
                </div>
                <div className="flex justify-center gap-4 px-2">
                  <a
                    href="#"
                    className="text-green-600 border-2 border-amber-400 rounded-md py-1 px-4 hover:bg-white/70"
                  >
                    Live
                  </a>
                  <a
                    href="#"
                    className="text-amber-900 border-2 border-amber-400 rounded-md py-1 px-4 hover:bg-white/70"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="min-w-[360px] bg-white/30 p-6 rounded-xl border border-white/10 hover:scale-101 hover:border-blue-800/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all duration-500">
              <h3 className="text-xl font-bold mb-3 text-gray-700">
                Name of project
              </h3>

              <p className="text-gray-500 mb-2">Description info</p>
              <img
                src={project1}
                alt="Project 1"
                className="rounded-sm object-fill"
              />

              <div className="flex flex-wrap gap-2 my-4">
                {['React', 'NodeJS', 'MongoDB'].map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-800/10 text-blue-800 py-1 px-3 rounded-full  hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between flex-wrap font-semibold">
                <div className="flex space-x-2">
                  <p className="bg-gradient-to-r text-transparent from-blue-800 to-amber-400 bg-clip-text">
                    View Project
                  </p>
                  <FaArrowRightLong className="mt-1 text-amber-400" />
                </div>
                <div className="flex justify-center gap-4 px-2">
                  <a
                    href="#"
                    className="text-green-600 border-2 border-amber-400 rounded-md py-1 px-4 hover:bg-white/70"
                  >
                    Live
                  </a>
                  <a
                    href="#"
                    className="text-amber-900 border-2 border-amber-400 rounded-md py-1 px-4 hover:bg-white/70"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 font-bold flex gap-2 text-blue-800 md:text-xl underline pl-6">
            <Link to={'/projects'}>All Projects</Link>
            <FaListUl className="mt-1" />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
export default Projects;
