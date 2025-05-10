import { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Resume from './components/sections/Resume';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Technologies from './components/sections/Technologies';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white text-3xl font-bold animate-pulse">
          <span className="text-blue-500">S</span>
          <span className="text-purple-500">J</span>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Resume />
          <Skills />
          <Projects />
          <Technologies />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;