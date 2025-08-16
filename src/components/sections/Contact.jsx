import { TypeAnimation } from 'react-type-animation';
import { RevealOnScroll } from '../RevealOnScroll';
import { useNavigate } from 'react-router-dom';
import { MdOutlineContactMail } from 'react-icons/md';

const Contact = () => {

  const navigate = useNavigate();

  const redirectToContact = () => {
    navigate('/contact');
  }
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl mx-auto w-fit text-transparent font-bold mb-8 bg-gradient-to-r from-amber-400 to-blue-800 bg-clip-text">
            Contact Me
          </h2>
          <div
            onClick={redirectToContact}
            className="w-[320px] py-1 text-xl md:text-2xl sm:w-[500px] lg:w-2xl border-2 border-gray-400 rounded-3xl px-16 cursor-pointer relative bg-white/30 shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            <MdOutlineContactMail
              size={26}
              className="absolute top-1 md:top-2 left-4 text-amber-500"
            />
            <TypeAnimation
              sequence={[
                'example@gmail.com',
                1000,
                'contact.me@gmail.com',
                1000,
              ]}
              wrapper="span"
              speed={15}
              style={{
                
                display: 'inline-block',
                background: 'linear-gradient(to top, #fbbf24, #1e3a8a)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
              repeat={Infinity}
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
export default Contact;
