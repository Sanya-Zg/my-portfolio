import myPhoto from '../../assets/Me.jpeg-removebg-preview.PNG';
import { RevealOnScroll } from '../RevealOnScroll';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative md:pr-10"
    >
      <RevealOnScroll>
        <div className="text-center px-1 z-30">
          <div className="flex flex-col md:flex-row-reverse gap-20">
            <div className="relative flex justify-center">
              <img
                src={myPhoto}
                alt="My photo"
                className="w-auto h-70 object-cover block rounded-b-md bg-gradient-to-b from-amber-100 via-amber-50 to-amber-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-100 via-transparent to-transparent"></div>
            </div>

            <div>
              <h1 className="text-4xl md:text-6xl text-transparent max-w-[600px] font-bold mb-6 bg-gradient-to-r from-amber-400 to-blue-800 bg-clip-text md:mt-10 ">
                Hi, I'm Oleksandr Maslovskyi
              </h1>
              <p className="text-gray-500 text-2xl font-semibold md:text-3xl mb-8 max-w-lg mx-auto">
                Junior Full-Stack Developer
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="/projects"
                  className="bg-gradient-to-b from-blue-900 to-blue-600 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
                >
                  View Projects
                </a>

                <a
                  href="/contact"
                  className="border border-blue-900/50 text-blue-900 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-900/10"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
export default Home;
