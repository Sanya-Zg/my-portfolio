import { IoMdCloseCircle } from 'react-icons/io';
import { FaCircleChevronRight, FaCircleChevronLeft } from 'react-icons/fa6';
import { useState } from 'react';

const ModalImage = ({ onClose, images }) => {
  const [currImg, setCurrImg] = useState(0);

  const prevImg = () => {
    setCurrImg(currImg === 0 ? images.length - 1 : currImg - 1);
  };
  const nextImg = () => {
    setCurrImg(currImg === images.length - 1 ? 0 : currImg + 1);
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-[999] flex items-center justify-center p-4">
      <div className="w-2/3 mx-auto relative">
        <button>
          <FaCircleChevronLeft
            size={40}
            className="text-white hover:text-white/90 active:text-white/60 cursor-pointer transition-all duration-200 absolute -left-20 top-60"
            onClick={prevImg}
          />
        </button>
        <button>
          <FaCircleChevronRight
            size={40}
            className="text-white hover:text-white/90 active:text-white/60 cursor-pointer transition-all duration-200 absolute -right-20 top-60"
            onClick={nextImg}
          />
        </button>

        <div className="flex justify-start gap-100 overflow-hidden">
          {images.map((image, index) => (
            <img
              src={image}
              alt={`image ${index}`}
              key={index}
              className={`${currImg === index ? 'block' : 'hidden'}`}
            />
          ))}
        </div>
      </div>

      <button
        onClick={onClose}
        className="text-white text-2xl mb-4 hover:text-orange-500 absolute top-15 right-45 cursor-pointer transition-all duration-300"
      >
        <IoMdCloseCircle size={50} />
      </button>
    </div>
  );
};
export default ModalImage;
