import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaUser, FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Volunteer Software Developer',
      role: 'Frontend Developer',
      company: 'BinStalk (Fashion Tech Startup)',
      period: 'Dec 2024 - Present',
      location: 'Melbourne',
      achievements: [
        'Developed and deployed the Post Share functionality, enabling users to share public post links, resulting in a 30% increase in content reach and team testing efficiency.',
        'Enhanced frontend user experience through layout refactoring and real-time Firestore integration, contributing to smoother UX in early alpha-stage testing.',
        'Integrated and optimized the Landing Page and SPA Post Viewer, improving initial page load times by ~40% and ensuring clean routing.',
        'Collaborated on the development of Binstalk\'s AI-powered fashion ecosystem, enabling virtual try-on, smart closet recommendations, and AI outfit planning via integrated web features.'
      ],
      techStack: ['React', 'Firebase', 'Firestore', 'AI/ML', 'Frontend Development', 'SPA', 'Real-time Integration']
    },
    {
      id: 2,
      title: 'Associate Software Developer',
      role: 'Full-Stack Developer',
      company: 'Ernst & Young GDS',
      period: '2022- 2023',
      location: 'India',
      achievements: [
        'Built a modular Employee Management Tool using .NET, C#, and Entity Framework, replacing a legacy spreadsheet system and reducing manual onboarding time by 40% through CRUD operations.',
        'Engineered an async notification system to trigger real-time emails upon team/job assignments, improving internal response time and visibility across departments.',
        'Implemented SOLID-aligned job assignment workflows, enabling structured technician-to-manager mappings and reducing feature bugs by 30% during sprint testing.',
        'Refactored data access logic using EF Code-First, streamlining entity relationships (Employee–Role–Job) and improving database query speed by ~50% in staging.',
        'Contributed to agile feature delivery across 6 sprints, collaborating with senior developers and participating in backlog refinement, increasing delivery confidence and cross-team alignment.'
      ],
      techStack: ['.NET', 'C#', 'Entity Framework', 'SOLID Principles', 'Agile', 'CRUD Operations']
    },
    {
      id: 3,
      title: 'Software Developer Intern',
      role: 'Backend Developer',
      company: 'Ernst & Young GDS',
      period: '2022 - 2023',
      location: 'India',
      achievements: [
        'Built a modular .NET banking prototype with authentication, accounts, and funds transfer, enhancing system security and functionality.',
        'Implemented OWASP-style security and role-based access control, reducing vulnerabilities in QA by 90%.'
      ],
      techStack: ['.NET', 'C#', 'OWASP Security', 'Role-Based Access Control', 'Banking Systems']
    },
    {
      id: 4,
      title: 'AI and Full Stack Head Teacher',
      role: 'Technical Instructor',
      company: 'Code Camp',
      period: '2023 - Present',
      location: 'Melbourne',
      achievements: [
        'Delivered engaging coding and robotics lessons to primary students, boosting tech fluency and increasing student participation by 80%.',
        'Embedded online safety and cybersecurity best practices into the curriculum, resulting in a 90% drop in classroom-related online safety issues.',
        'Taught AI fundamentals and full stack web development (HTML/CSS, JavaScript, backend logic) to primary school students through engaging, age-appropriate projects and robotics lessons.'
      ],
      techStack: ['AI Fundamentals', 'HTML/CSS', 'JavaScript', 'Robotics', 'Cybersecurity', 'Educational Technology']
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            My professional journey and the impact I've made
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              
              {/* Timeline Dot */}
              <div className="absolute left-6 top-16 w-4 h-4 bg-blue-500 rounded-full border-4 border-dark-blue"></div>
              
              {/* Experience Card */}
              <div className="ml-20 mb-16">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-blue-400">
                        <FaUser className="w-4 h-4" />
                        <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      </div>
                      <div className="flex items-center space-x-2 text-purple-400">
                        <FaBriefcase className="w-4 h-4" />
                        <span className="text-lg font-medium">{exp.role}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-white/80">
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                    </div>
                    
                    {/* Date and Location */}
                    <div className="mt-4 lg:mt-0 lg:text-right space-y-2">
                      <div className="flex items-center space-x-2 text-white/70">
                        <FaCalendarAlt className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-white/70">
                        <FaMapMarkerAlt className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Achievements */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white mb-4">Key Achievements:</h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: achIndex * 0.1, duration: 0.6 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                          <p className="text-white/80 leading-relaxed">{achievement}</p>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Tech Stack Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.techStack.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
