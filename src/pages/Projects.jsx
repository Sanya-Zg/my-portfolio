import blog_1 from '../assets/Blog-img/Blog_img1.png'
import blog_2 from '../assets/Blog-img/Blog_img2.png'
import blog_3 from '../assets/Blog-img/Blog_img3.png'
import blog_4 from '../assets/Blog-img/Blog_img4.png'
import blog_5 from '../assets/Blog-img/Blog_img5.png'

import project2 from '../assets/e-commerce.png';
import Project from '../components/Project';

const Projects = () => {

  const imgBlog = [blog_1, blog_2, blog_3, blog_4, blog_5];
  const eCommerce = [project2]

  return (
    <section className="min-h-screen flex items-center justify-center py-20">
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
            site={'https://mern-stack-blog-m39a.onrender.com/'}
            code={'https://github.com/Sanya-Zg/MERN_STACK-blog'}
          />
          <Project
            title="E-commerce Site"
            description="IN PROGRESS..."
            image={project2}
            images={eCommerce}
            technologies={['Next.js', 'MongoDB']}
            color="text-red-500"
          />
        </div>
      </div>
    </section>
  );
};
export default Projects;
