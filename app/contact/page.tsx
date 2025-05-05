import React from 'react';
import { Instagram, Github, ExternalLink } from 'lucide-react';

interface Contributor {
  name: string;
  role: string;
  github?: string;
  instagram?: string;
}

const contributors: Contributor[] = [
  {
    name: "Adarsh Kumar",
    role: "Lead Developer",
    github: "https://github.com/adarsh4957",
    instagram: "https://instagram.com/adarsh4957",
  },
  {
    name: "Arpit Bala",
    role: "Lead Photographer",
    github: "https://github.com/adarsh4957",
    instagram: "https://www.instagram.com/arpit_creates/",
  }
  // Add more contributors as needed
];

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      
      <div className="max-w-3xl mx-auto">
        <section className="mb-12 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-800/20">
          <h2 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 inline-block text-transparent bg-clip-text">
            About IOET
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-gray-300">
            IOET is a technology company that specializes in building innovative software solutions.
            Visit our official website to learn more about our work and opportunities.
          </p>
          <div className="flex items-center gap-4">
            <a 
              href="https://dhsgsu.edu.in/index.php/en/departments01/institute-of-engineering-and-technology" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Visit Official Website
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 inline-block text-transparent bg-clip-text">
              Website Contributors
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contributors.map((contributor, index) => (
              <div 
                key={index} 
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5"
              >
                <h3 className="text-xl font-medium mb-2">{contributor.name}</h3>
                <p className="text-gray-400 mb-4">{contributor.role}</p>
                <div className="flex gap-4">
                  {contributor.github && (
                    <a 
                      href={contributor.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors px-4 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-800"
                    >
                      <Github className="w-5 h-5" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {contributor.instagram && (
                    <a 
                      href={contributor.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-pink-400 transition-colors px-4 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-800"
                    >
                      <Instagram className="w-5 h-5" />
                      <span>Instagram</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
} 