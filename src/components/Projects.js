import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'LLM-based Privacy Violation Analysis',
      description: 'Research project analyzing privacy violations in Stack Overflow posts using Large Language Models for automated detection and classification.',
      techStack: ['Python', 'LLM', 'NLP', 'Research', 'Data Analysis', 'Privacy Analysis'],
      github: 'https://github.com/FallenUns/Detecting-Privacy-Violation-using-LLM.git',
      live: 'https://example.com',
      presentation: 'https://docs.google.com/presentation/d/1z2msv9XkzA7TuZvRwQiHKbN9l5N2IwFL/edit?usp=sharing&ouid=112751731283177135326&rtpof=true&sd=true',
      featured: true,
      period: 'Mar 2025 – Jul 2025',
      organization: 'RMIT Research'
    },
    {
      id: 2,
      title: 'Agentic Email Archive Search & Summarisation',
      description: 'Developed a local RAG system for semantic search and summarization over 50k+ Enron emails with automated data ingestion, cleaning, and retrieval pipeline.',
      techStack: ['Python', 'FAISS', 'Mistral LLM', 'RAG', 'Semantic Search', 'Data Processing'],
      github: 'https://github.com/Pradhan200/email-rag-system.git',
      live: 'https://example.com',
      featured: true,
      period: 'Jul 2025 – Present',
      organization: 'Independent Project'
    },
    {
      id: 3,
      title: 'AI Expense Formatter',
      description: 'AI tool that formats messy expense notes into structured summaries with category breakdown, total calculation, and issue flagging using GPT-3.5.',
      techStack: ['Python', 'OpenAI GPT-3.5', 'Google Sheets', 'Apps Script', 'Make.com', 'OCR', 'Automation'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
      period: 'Jul 2025 – Jul 2025',
      organization: 'Independent Project'
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 bg-dark-blue/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </motion.div>

        {/* Project Carousel */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300"
            >
              <FaChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300"
            >
              <FaChevronRight className="w-6 h-6" />
            </button>

            {/* Project Cards Container */}
            <div className="overflow-hidden rounded-2xl">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentProject * 100}%)` }}>
                {projects.map((project, index) => (
                  <div key={project.id} className="w-full flex-shrink-0">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      {/* Project Image */}
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative group"
                      >
                        <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl overflow-hidden">
                          <div className="w-full h-full flex items-center justify-center p-8">
                            {project.id === 1 && (
                              <div className="text-center text-white">
                                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                  </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Privacy Analysis</h3>
                                <div className="space-y-2 text-sm">
                                  <div className="flex items-center justify-center space-x-2">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    <span>Stack Overflow Posts</span>
                                  </div>
                                  <div className="flex items-center justify-center space-x-2">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    <span>LLM Detection</span>
                                  </div>
                                  <div className="flex items-center justify-center space-x-2">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                    <span>Research Analysis</span>
                                  </div>
                                </div>
                              </div>
                            )}
                            {project.id === 2 && (
                              <div className="text-center text-white">
                                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                  </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Email RAG System</h3>
                                <div className="space-y-2 text-sm">
                                  <div className="flex items-center justify-center space-x-2">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    <span>50k+ Enron Emails</span>
                                  </div>
                                  <div className="flex items-center justify-center space-x-2">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    <span>Semantic Search</span>
                                  </div>
                                  <div className="flex items-center justify-center space-x-2">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                    <span>Mistral LLM</span>
                                  </div>
                                </div>
                              </div>
                            )}
                            {project.id === 3 && (
                              <div className="text-center text-white">
                                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                  </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2">AI Expense Tool</h3>
                                <div className="space-y-2 text-sm">
                                  <div className="flex items-center justify-center space-x-2">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    <span>GPT-3.5 Integration</span>
                                  </div>
                                  <div className="flex items-center justify-center space-x-2">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    <span>Google Sheets</span>
                                  </div>
                                  <div className="flex items-center justify-center space-x-2">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                    <span>OCR Automation</span>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>

                      {/* Project Details */}
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                      >
                        <div>
                          <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                          <div className="flex items-center space-x-4 mb-4 text-sm text-white/60">
                            <span className="font-medium">{project.organization}</span>
                            <span>•</span>
                            <span>{project.period}</span>
                          </div>
                          <p className="text-lg text-white/80 leading-relaxed">{project.description}</p>
                        </div>

                        {/* Tech Stack */}
                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-white">Tech Stack:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-white/80 hover:bg-white/20 transition-all duration-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-4">
                          <button 
                            onClick={() => window.open(project.presentation || project.live, '_blank')}
                            className="btn-primary flex items-center space-x-2"
                          >
                            <span>{project.presentation ? 'View Presentation' : 'View Details'}</span>
                          </button>
                          <button 
                            onClick={() => window.open(project.github, '_blank')}
                            className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white transition-all duration-300"
                            title="View GitHub Repository"
                          >
                            <FaGithub className="w-5 h-5" />
                          </button>
                          {project.live && project.live !== 'https://example.com' && (
                            <button 
                              onClick={() => window.open(project.live, '_blank')}
                              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white transition-all duration-300"
                              title="View Live Demo"
                            >
                              <FaExternalLinkAlt className="w-5 h-5" />
                            </button>
                          )}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
