import { RevealOnScroll } from "../RevealOnScroll";

const About = () => {

  const frontendSkills = ['React', 'TailwindCSS', 'HTML', 'CSS', 'Javascript', 'Typescript'];

  const backendSkills = ['NodeJS', 'ExpresJS', 'MongoDB']
  return (
    <section
      id="about"
      className="min-h-screen flex justify-center items-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl mx-auto w-fit text-transparent font-bold mb-8 bg-gradient-to-r from-amber-400 to-blue-800 bg-clip-text">
            About Me
          </h2>

          <div className="rounded-xl border-white/10 border hover:-translate-y-1 transition-all relative">
            <p className="text-gray-500 text-[22px] mb-6 shadow-[inset_0_0_50px_35px_rgb(254,243,199)] bg-amber-50 px-6">
              I’m a full-stack developer transitioning into tech after gaining
              experience in various fields. While I’m at the start of my
              professional journey, web development has become my true calling —
              a space where creativity meets logic. I find nothing more
              rewarding than turning ideas into functional, visually polished
              solutions. I thrive on continuous learning and get genuinely
              excited about applying new technologies to my projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-2xl font-bold mb-4 text-gray-700">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-800/10 text-blue-800 py-1 px-3 rounded-full  hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-2xl font-bold mb-4 text-gray-700">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-800/10 text-blue-800 py-1 px-3 rounded-full hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-gray-700">
                Education
              </h3>
              <h4 className="text-lg font-semibold">
                Ternopil Academy of National Economy
              </h4>
              <p className="text-gray-500 text-sm">
                Finance in the Customs System
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
export default About