import { useEffect, useRef } from 'react';

interface SkillProps {
  title: string;
  percentage: number;
  color: string;
  delay: number;
}

const skillsData = [
  { title: 'React / Next.js', percentage: 95, color: 'bg-blue-600 dark:bg-blue-500', delay: 0 },
  { title: 'JavaScript / TypeScript', percentage: 90, color: 'bg-yellow-500 dark:bg-yellow-600', delay: 200 },
  { title: 'Node.js / Express', percentage: 85, color: 'bg-green-600 dark:bg-green-500', delay: 400 },
  { title: 'MongoDB / MySQL / MSSQL', percentage: 80, color: 'bg-purple-600 dark:bg-purple-500', delay: 600 },
  { title: 'HTML / CSS / Tailwind', percentage: 90, color: 'bg-pink-500 dark:bg-pink-600', delay: 800 },
  { title: 'UI/UX Design', percentage: 75, color: 'bg-indigo-600 dark:bg-indigo-500', delay: 1000 },
];

const Skill = ({ title, percentage, color, delay }: SkillProps) => {
  const progressRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (progressRef.current) {
            progressRef.current.style.width = `${percentage}%`;
            progressRef.current.style.opacity = '1';
          }
        }
      },
      { threshold: 0.1 }
    );
    
    if (progressRef.current) {
      observer.observe(progressRef.current);
    }
    
    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, [percentage]);
  
  return (
    <div className="mb-8 last:mb-0 animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex justify-between mb-2">
        <span className="text-lg font-medium text-slate-800 dark:text-white">{title}</span>
        <span className="text-slate-600 dark:text-slate-400">{percentage}%</span>
      </div>
      <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <div
          ref={progressRef}
          className={`h-full ${color} rounded-full transition-all duration-1000 ease-out opacity-0`}
          style={{ width: '0%' }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl text-center">
            A comprehensive overview of my technical expertise and proficiency levels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 max-w-4xl mx-auto">
          {skillsData.map((skill, index) => (
            <Skill 
              key={index}
              title={skill.title}
              percentage={skill.percentage}
              color={skill.color}
              delay={skill.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;