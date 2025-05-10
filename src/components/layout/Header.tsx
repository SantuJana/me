import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Code } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const navItems = [
  { title: 'Home', href: '#home' },
  { title: 'About', href: '#about' },
  { title: 'Resume', href: '#resume' },
  { title: 'Skills', href: '#skills' },
  { title: 'Projects', href: '#projects' },
  { title: 'Technologies', href: '#technologies' },
  { title: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white dark:bg-slate-900 shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a 
            href="#home" 
            className="text-xl font-bold text-blue-600 dark:text-blue-400 flex items-center"
          >
            <Code className="mr-2" />
            <span>Santu Jana</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item.title}
              </a>
            ))}
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleTheme} 
              className="p-2 mr-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-slate-700 dark:text-slate-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 shadow-lg py-4 animate-slide-down">
          <nav className="container mx-auto px-4 flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-slate-700 dark:text-slate-200 py-2 px-4 hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;