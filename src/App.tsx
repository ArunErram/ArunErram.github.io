import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import DevJourney from './components/DevJourney';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Apply theme to the document root
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Toggle theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <main>
        {/* Pass the toggleTheme function and theme state to the Hero component */}
        <Hero toggleTheme={toggleTheme} theme={theme} />
        <DevJourney />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="bg-gray-50 dark:bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-black-600 dark:text-black-400">
          © {new Date().getFullYear()} Developed by Arun Erram All rights reserved.
        </p>
      </div>
    </footer>

    </div>
  );
}

export default App;
