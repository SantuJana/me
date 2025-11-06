import { User, Award, BookOpen, Clock } from 'lucide-react';
import moment from 'moment';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl text-center">
            A passionate full stack developer with a knack for creating elegant solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="order-2 md:order-1 animate-fade-in" data-animate="fade-in">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
              Professional Journey
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              As a Full Stack Developer with over {moment().diff(moment("15-09-2021", "DD-MM-YYYY"), 'years')} years of experience, I've honed my skills
              in creating responsive and user-friendly web applications. My journey in the tech world has
              been driven by a continuous desire to learn and implement new technologies.
            </p>
            
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              I specialize in JavaScript ecosystem with React, Next.js for frontend, and Node.js with Express for backend development.
              I'm also experienced in working with various databases including MongoDB, MySQL, and MSSQL.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <Award className="text-blue-600 dark:text-blue-400 mr-3" size={20} />
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-white">Experience</h4>
                  <p className="text-slate-600 dark:text-slate-400">{moment().diff(moment("15-09-2021", "DD-MM-YYYY"), 'years')}+ Years</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <BookOpen className="text-purple-600 dark:text-purple-400 mr-3" size={20} />
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-white">Projects</h4>
                  <p className="text-slate-600 dark:text-slate-400">10+ Completed</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <User className="text-green-600 dark:text-green-400 mr-3" size={20} />
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-white">Clients</h4>
                  <p className="text-slate-600 dark:text-slate-400">5+ Happy</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <Clock className="text-orange-600 dark:text-orange-400 mr-3" size={20} />
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-white">Support</h4>
                  <p className="text-slate-600 dark:text-slate-400">24/7 Available</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 animate-fade-in animation-delay-200" data-animate="fade-in">
            <div className="relative">
              <div className="w-full h-80 sm:h-96 md:h-[450px] rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Professional developer working" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 dark:bg-blue-500 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-600 dark:bg-purple-500 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;