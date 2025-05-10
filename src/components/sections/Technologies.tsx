import { useEffect, useState } from 'react';

interface TechItem {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'other';
}

const technologies: TechItem[] = [
  { name: 'React', icon: '⚛️', category: 'frontend' },
  { name: 'Next.js', icon: '▲', category: 'frontend' },
  { name: 'JavaScript', icon: '📜', category: 'frontend' },
  { name: 'TypeScript', icon: '🔷', category: 'frontend' },
  { name: 'HTML5', icon: '📄', category: 'frontend' },
  { name: 'CSS3', icon: '🎨', category: 'frontend' },
  { name: 'Tailwind CSS', icon: '🌊', category: 'frontend' },
  { name: 'Redux', icon: '🔄', category: 'frontend' },
  { name: 'Node.js', icon: '🟢', category: 'backend' },
  { name: 'Express.js', icon: '🚂', category: 'backend' },
  { name: 'GraphQL', icon: '⬡', category: 'backend' },
  { name: 'REST API', icon: '🔌', category: 'backend' },
  { name: 'MongoDB', icon: '🍃', category: 'database' },
  { name: 'MySQL', icon: '🐬', category: 'database' },
  { name: 'MSSQL', icon: '📊', category: 'database' },
  { name: 'PostgreSQL', icon: '🐘', category: 'database' },
  { name: 'Git', icon: '📋', category: 'other' },
  { name: 'Docker', icon: '🐳', category: 'other' },
  { name: 'AWS', icon: '☁️', category: 'other' },
  { name: 'Firebase', icon: '🔥', category: 'other' },
];

const Technologies = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [filteredTech, setFilteredTech] = useState<TechItem[]>(technologies);
  
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredTech(technologies);
    } else {
      setFilteredTech(technologies.filter((tech) => tech.category === activeCategory));
    }
  }, [activeCategory]);
  
  return (
    <section id="technologies" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Technologies
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl text-center">
            The technologies, languages, and tools I work with.
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveCategory('frontend')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeCategory === 'frontend'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600'
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setActiveCategory('backend')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeCategory === 'backend'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600'
              }`}
            >
              Backend
            </button>
            <button
              onClick={() => setActiveCategory('database')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeCategory === 'database'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600'
              }`}
            >
              Database
            </button>
            <button
              onClick={() => setActiveCategory('other')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeCategory === 'other'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600'
              }`}
            >
              Other
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {filteredTech.map((tech, index) => (
            <div
              key={tech.name}
              className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 text-center animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-3xl mb-2">{tech.icon}</div>
              <h3 className="font-medium text-slate-800 dark:text-white">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;