//import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white bg-gray-100 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-white-600 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:arunerram08@gmail.com"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Mail className="w-5 h-5 text-gray-700" />
            </a>
            <a
              href="https://www.linkedin.com/in/arun-erram/"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-gray-700" />
            </a>
            <a
              href="https://github.com/arunerram"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Github className="w-5 h-5 text-gray-700" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;