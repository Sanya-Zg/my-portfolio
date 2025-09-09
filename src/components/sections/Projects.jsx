import { Link } from 'react-router-dom';
import eCommerceImg from '../../assets/e-commerce.png';
// import { FaArrowRightLong } from 'react-icons/fa6';
import { FaListUl } from 'react-icons/fa';
import { RevealOnScroll } from '../RevealOnScroll';
import Project from '../Project';

import blog_1 from '../../assets/Blog-img/Blog_img1.png';
import blog_2 from '../../assets/Blog-img/Blog_img2.png';
import blog_3 from '../../assets/Blog-img/Blog_img3.png';
import blog_4 from '../../assets/Blog-img/Blog_img4.png';
import blog_5 from '../../assets/Blog-img/Blog_img5.png';

const Projects = () => {

  const imgBlog = [blog_1, blog_2, blog_3, blog_4, blog_5];
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl mx-auto w-fit text-transparent font-bold mb-8 bg-gradient-to-r from-amber-400 to-blue-800 bg-clip-text">
            My Projects
          </h2>

          <div className="grid gap-6 justify-center grid-cols-[repeat(auto-fit,minmax(360px,1fr))]">
            <Project
              title="My Blog"
              description="My personal blog where I showcase my skills of building a full-stack application using React for the frontend, Node.js for the backend, and MongoDB for the database."
              image={blog_1}
              images={imgBlog}
              technologies={['React', 'NodeJS', 'Express', 'MongoDB']}
              site={'https://mern-blog-hlak.onrender.com'}
              code={'https://github.com/Sanya-Zg/MERN_STACK-blog'}
            />

            <Project
              title="E-commerce Site"
              description="IN PROGRESS"
              image={eCommerceImg}
              images={imgBlog}
              technologies={['Next.js', 'MongoDB']}
              color="text-red-500"
            />
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
