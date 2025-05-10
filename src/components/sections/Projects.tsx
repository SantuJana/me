import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A complete e-commerce solution with product management, cart functionality, and payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveLink: '#',
    codeLink: '#',
  },
  {
    id: 2,
    title: 'Social Media Dashboard',
    category: 'Frontend',
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Interactive dashboard for social media analytics with real-time data visualization.',
    technologies: ['React', 'Redux', 'D3.js', 'Firebase'],
    liveLink: '#',
    codeLink: '#',
  },
  {
    id: 3,
    title: 'Task Management API',
    category: 'Backend',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'RESTful API for task management with authentication and authorization.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    liveLink: '#',
    codeLink: '#',
  },
  {
    id: 4,
    title: 'Real Estate Platform',
    category: 'Full Stack',
    image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Property listing platform with advanced search, filtering, and user management.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    liveLink: '#',
    codeLink: '#',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    category: 'Frontend',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Responsive portfolio website with smooth animations and interactive elements.',
    technologies: ['React', 'Three.js', 'GSAP', 'Tailwind'],
    liveLink: '#',
    codeLink: '#',
  },
  {
    id: 6,
    title: 'Blog CMS',
    category: 'Backend',
    image: 'https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Content management system for blogs with markdown support and image uploads.',
    technologies: ['Express', 'MongoDB', 'AWS S3', 'JWT'],
    liveLink: '#',
    codeLink: '#',
  },
];

type Category = 'All' | 'Frontend' | 'Backend' | 'Full Stack';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [visibleProjects, setVisibleProjects] = useState(projectsData);
  const projectsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (activeCategory === 'All') {
      setVisibleProjects(projectsData);
    } else {
      setVisibleProjects(projectsData.filter(project => project.category === activeCategory));
    }
    
    // Apply animation after filtering
    if (projectsRef.current) {
      const projects = projectsRef.current.querySelectorAll('.project-card');
      projects.forEach((project, index) => {
        setTimeout(() => {
          project.classList.add('show');
        }, index * 100);
      });
    }
  }, [activeCategory]);
  
  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl text-center">
            A selection of my recent work showcasing my skills and expertise.
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-2">
            {(['All', 'Frontend', 'Backend', 'Full Stack'] as Category[]).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div 
          ref={projectsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="project-card bg-white dark:bg-slate-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all opacity-0 transform translate-y-8"
              style={{ transitionDelay: `${(project.id % 3) * 100}ms` }}
            >
              <div className="relative overflow-hidden group h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-600/80 dark:bg-blue-800/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.liveLink}
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors"
                    aria-label="View live project"
                  >
                    <Eye size={18} />
                  </a>
                  <a
                    href={project.codeLink}
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors"
                    aria-label="View code on GitHub"
                  >
                    <Github size={18} />
                  </a>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.liveLink}
                  className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <span className="mr-2">View Project</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;