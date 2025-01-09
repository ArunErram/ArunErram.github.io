import { ArrowRight } from 'lucide-react';
import styled, { keyframes } from 'styled-components';

const typewriter = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

const blink = keyframes`
  50% {
    border-color: transparent;
  }
`;

const TypewriterText = styled.span`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap; /* Ensure no wrapping initially */
  border-right: 0.15em solid #000; /* Cursor effect */
  animation: ${typewriter} 6s steps(30) infinite, ${blink} 12s step-end infinite;
  
  /* Wrapping behavior when content exceeds container width */
  @media (max-width: 550px) {
    white-space: normal; /* Allow wrapping when the container is too small */
  }

`;

interface HeroProps {
  toggleTheme: () => void;
  theme: 'light' | 'dark';
}

const Hero = ({ toggleTheme, theme }: HeroProps) => {
  return (
    <section id="hero" className="pt-24 pb-12 sm:pt-32 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center flex flex-col items-center">
          {/* Title */}
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
            Software Engineer
            <br />
            <span>
              <TypewriterText className="block text-blue-600 dark:text-blue-400">
                &lt;System Design, Code, Debug, Optimize, Repeat&gt;
              </TypewriterText>
            </span>
          </h1>
          {/* Subtitle */}
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
  
Hello, I’m Arun Erram, a dedicated software engineer with a passion for delivering innovative solutions to complex challenges through the use of cutting-edge technologies.         </p>
          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              View My Work
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Get in Touch
            </a>
          </div>
          {/* Theme Toggle */}
          <div className="mt-6">
            <button
              onClick={toggleTheme}
              className="px-4 py-2 text-base font-medium rounded-md bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Hero;
