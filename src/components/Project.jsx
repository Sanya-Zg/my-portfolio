import { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import ModalImage from './ModalImage';
import { useLocation } from 'react-router-dom';

const Project = ({
  title,
  description,
  image,
  images,
  technologies,
  color = 'text-gray-500',
  site,
  code
}) => {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
console.log('sanya', code)

  const isProjectsPage = location.pathname === '/projects';

  return (
    <>
      <div className="min-w-[360px] bg-white/30 p-6 rounded-xl border-2 border-white/10 hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-300 transform-gpu">
        <h3 className="text-xl font-bold mb-3 text-gray-700">{title}</h3>

        <p className={`${color} mb-2 ${color === 'text-red-500'? 'font-bold' : ''}`}>{description}</p>
        <button
          className={`${
            location.pathname === '/projects' ? 'cursor-pointer' : ''
          }`}
          onClick={isProjectsPage ? () => setShowModal(true) : undefined}
          aria-label="Open image modal"
        >
          <div className="h-52 scroll-auto overflow-hidden">
            <img src={image} alt={title} className="rounded-sm object-fill" />
          </div>
        </button>

        <div className="flex flex-wrap gap-2 my-4">
          {technologies.map((tech, index) => (
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
              href={site}
              className="text-green-600 border-2 border-amber-400 rounded-md py-1 px-4 hover:bg-white/70"
            >
              Live
            </a>
            <a
              href={code}
              className="text-amber-900 border-2 border-amber-400 rounded-md py-1 px-4 hover:bg-white/70"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      {showModal && (
        <ModalImage onClose={() => setShowModal(false)} images={images} />
      )}
    </>
  );
};
export default Project;
