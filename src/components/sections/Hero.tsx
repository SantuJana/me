import { useEffect, useRef } from 'react';
import { ChevronDown, Code, Database, Globe } from 'lucide-react';
import Me from "../../assets/images/me.jpg";
import moment from 'moment';

const Hero = () => {
  const typingRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const roles = ['Full Stack Developer', 'React Expert', 'Node.js Developer', 'Database Specialist'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const type = () => {
      const currentRole = roles[roleIndex % roles.length];
      
      if (isDeleting) {
        if (typingRef.current) {
          typingRef.current.textContent = currentRole.substring(0, charIndex - 1);
        }
        charIndex--;
        typingSpeed = 50;
      } else {
        if (typingRef.current) {
          typingRef.current.textContent = currentRole.substring(0, charIndex + 1);
        }
        charIndex++;
        typingSpeed = 100;
      }
      
      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 1000; // Pause at the end
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex++;
        typingSpeed = 300; // Pause before typing the next role
      }
      
      setTimeout(type, typingSpeed);
    };
    
    setTimeout(type, 1000);
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute opacity-10 dark:opacity-5 -top-20 -right-20 w-96 h-96 rounded-full bg-blue-600"></div>
        <div className="absolute opacity-10 dark:opacity-5 top-1/3 -right-10 w-72 h-72 rounded-full bg-purple-600"></div>
        <div className="absolute opacity-10 dark:opacity-5 -bottom-20 -left-20 w-96 h-96 rounded-full bg-blue-600"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 z-10">
        <div className="grid grid-cols-1 gap-12 items-center">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 flex space-x-3 animate-fade-in-up">
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Code size={20} />
              </div>
              <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <Globe size={20} />
              </div>
              <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                <Database size={20} />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-white mb-4 animate-fade-in-up animation-delay-200">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Santu Jana</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8 h-8 animate-fade-in-up animation-delay-400">
              I'm a <span ref={typingRef} className="text-purple-600 dark:text-purple-400 font-medium"></span>
              <span className="animate-blink">|</span>
            </div>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10 animate-fade-in-up animation-delay-600">
              With {moment().diff(moment("15-09-2021", "DD-MM-YYYY"), 'years')}+ years of experience building modern web applications 
              using React, Next.js, Node.js, and various databases.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-800">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all transform hover:scale-105 shadow-lg"
              >
                Get in Touch
              </a>
              <a 
                href="#projects" 
                className="px-8 py-3 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-full border border-slate-300 dark:border-slate-700 transition-all transform hover:scale-105 shadow-lg"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ChevronDown size={30} className="text-slate-500 dark:text-slate-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;