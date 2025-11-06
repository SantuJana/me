import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Eye, Lock } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'Creoo.co',
    category: 'Full Stack',
    image: '/me/projects/creoo.webp',
    description: 'Creoo is a direct mentorship platform that connects mentors and mentees through real-time scheduling, communication, and secure transactions.',
    technologies: ['Next.js', 'Node.js', 'Express', 'PostgreSQL', 'Razorpay'],
    liveLink: 'https://creoo.co',
    codeLink: null,
    private: false,
  },
  {
    id: 2,
    title: 'Soterix Systems',
    category: 'Frontend',
    image: '/me/projects/soterix.webp',
    description: 'Soterix Systems is an AI-powered VSaaS (Video Surveillance as a Service) platform designed to deliver intelligent security solutions. It leverages advanced computer vision and real-time video analytics to detect threats, manage zones, and provide actionable insights.',
    technologies: ['Next.js', 'Zustand', 'D3.js', 'Firebase', 'Websocket'],
    liveLink: 'https://www.soterixsystems.com/',
    codeLink: null,
    private: false,
  },
  {
    id: 3,
    title: 'iUdyog',
    category: 'Full Stack',
    image: '/me/projects/iUdyog.webp',
    description: `iUdyog is a robust and scalable Content Management System (CMS) designed to simplify website data management. The platform allows administrators to efficiently handle and update various website components such as pages, blogs, forms, FAQs, banners, menus, and more—all from a single, user-friendly interface.`,
    technologies: ['React.js', 'ShadCN', 'Zustand', 'Node.js', 'Express', 'Postgres', 'JWT'],
    liveLink: 'https://cms.admin.tezcommerce.com/cms',
    codeLink: null,
    private: false,
  },
  {
    id: 4,
    title: 'Leptyn',
    category: 'Backend',
    image: '/me/projects/leptyn.webp',
    description: 'Leptyn is an innovative healthcare platform designed to simplify and enhance the patient experience by providing a unified solution for health product purchases, doctor appointments, procedure bookings, and electronic medical record (EMR) management. The platform bridges the gap between patients, healthcare providers, and pharmacies—offering seamless access to essential medical services through a single digital ecosystem.',
    technologies: ['Node.js', 'Express', 'OAuth', 'JWT', 'MySQL'],
    liveLink: 'https://app.leptyn.com/',
    codeLink: null,
    private: false,
  },
  {
    id: 5,
    title: 'Data Construction Tool',
    category: 'Backend',
    image: '/me/projects/DCT.png',
    description: 'The Data Construction Tool is a comprehensive data validation and monitoring system designed to ensure data accuracy, consistency, and integrity across multiple processing layers — including the Data Layer, Technical Layer, and Business Layer. The tool automates validation checks through predefined rules and provides a centralized dashboard for tracking data quality metrics, enabling organizations to maintain reliable and actionable data pipelines.',
    technologies: ['Node.js', 'Express', 'JWT', 'MSSQL', 'Stored Procedure'],
    liveLink: null,
    codeLink: null,
    private: true,
  },
  {
    id: 6,
    title: 'DBDT',
    category: 'Full Stack',
    image: '/me/projects/dbdt.png',
    description: 'DBDT is an advanced ETL (Extract, Transform, Load) platform designed to automate and simplify data movement across multiple systems and storage types. It enables seamless data extraction from various sources — such as relational databases, FTP/SFTP servers, local storage, and cloud platforms like Google Drive — and supports flexible loading to different destinations, including reverse data flow (vice versa). The platform allows users to configure ETL pipelines, apply transformations during load, and schedule automated executions for continuous data integration.',
    technologies: ['Node.js', 'Express', 'JWT', 'MSSQL', 'Stored Procedure', 'React.js', 'Redux', 'Python', 'Flask', 'OAuth'],
    liveLink: null,
    codeLink: null,
    private: true,
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
  }, [activeCategory]);

  useEffect(() => {
    // Apply animation after filtering
    if (projectsRef.current) {
      const projects = projectsRef.current.querySelectorAll('.project-card');
      projects.forEach((project, index) => {
        setTimeout(() => {
          project.classList.add('show');
        }, index * 100);
      });
    }
  }, [visibleProjects])
  
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
                  {
                    project.liveLink &&
                    <a
                      href={project.liveLink}
                      target='_blank'
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors"
                      aria-label="View live project"
                    >
                      <Eye size={18} />
                    </a>
                  }
                  {
                    project.codeLink &&
                    <a
                      href={project.codeLink}
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors"
                      aria-label="View code on GitHub"
                    >
                      <Github size={18} />
                    </a>
                  }
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
                {
                  project.liveLink &&
                  <a
                    href={project.liveLink}
                    target='_blank'
                    className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    <span className="mr-2">View Project</span>
                    <ExternalLink size={16} />
                  </a>
                }
                {
                  project.private &&
                  <p
                    className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    <Lock size={16} />
                    <span className="ml-2">Private Project</span>
                  </p>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;