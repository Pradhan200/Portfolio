import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaGraduationCap, FaCode, FaHeart } from 'react-icons/fa';

const About = () => {
  const aboutInfo = [
    {
      icon: FaMapMarkerAlt,
      text: 'Melbourne, Australia',
      color: 'text-red-400'
    },
    {
      icon: FaGraduationCap,
      text: 'Masters in Information Technology, RMIT University',
      color: 'text-blue-400'
    },
    {
      icon: FaCode,
      text: '3 years of development experience',
      color: 'text-green-400'
    }
  ];

  return (
    <section id="about" className="py-20 bg-dark-blue/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              About Me
            </h2>
            
            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <p>
                I'm a passionate full-stack and Gen AI developer with a Master's degree in Information Technology from RMIT University. 
                My journey in technology began when I stsarted to work as a Associate Software Engineer in EY GDS and it has evolved 
                into a deep love for creating digital solutions that make a difference.
              </p>
              
              <p>
                I thrive in collaborative environments and continuously seek to refine my skills while staying updated 
                with industry trends. Outside of coding, I'm driven by a curiosity to learn, build, and make a meaningful 
                impact through technology.
              </p>
            </div>

            {/* Key Information */}
            <div className="space-y-4">
              {aboutInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <IconComponent className={`w-6 h-6 ${info.color}`} />
                    <span className="text-white/90">{info.text}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Skills Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
               {['C#', '.NET', 'Angular', 'JavaScript', 'CSS', 'HTML', 'SQL', 'Python', 'Java', 'NLP', 'Prompt Engineering', 'AWS', 'Hadoop'].map((skill, index) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm text-white/80 hover:bg-white/20 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Picture Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Profile Picture */}
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <img 
                  src="./profile.jpg" 
                  alt="Pradhan" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center hidden">
                  <FaHeart className="w-32 h-32 text-white/40" />
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center"
              >
                <FaCode className="w-8 h-8 text-blue-400" />
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center"
              >
                <FaHeart className="w-6 h-6 text-purple-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
