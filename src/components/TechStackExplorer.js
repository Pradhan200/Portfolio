import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaAws,
  FaCode
} from 'react-icons/fa';

const TechStackExplorer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const techStack = [
    // AI Skills
    { name: 'Python', icon: FaCode, color: 'text-green-400', category: 'AI' },
    { name: 'NLP', icon: FaCode, color: 'text-pink-400', category: 'AI' },
    { name: 'Prompt Engineering', icon: FaCode, color: 'text-indigo-400', category: 'AI' },
    { name: 'Machine Learning', icon: FaCode, color: 'text-purple-500', category: 'AI' },
    
    // Backend Skills
    { name: 'C#', icon: FaCode, color: 'text-purple-400', category: 'Backend' },
    { name: '.NET', icon: FaCode, color: 'text-blue-400', category: 'Backend' },
    { name: 'Java', icon: FaCode, color: 'text-orange-400', category: 'Backend' },
    { name: 'SQL', icon: FaCode, color: 'text-cyan-400', category: 'Backend' },
    
    // Frontend Skills
    { name: 'Angular', icon: FaCode, color: 'text-red-400', category: 'Frontend' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400', category: 'Frontend' },
    { name: 'HTML', icon: FaHtml5, color: 'text-orange-500', category: 'Frontend' },
    { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500', category: 'Frontend' },
    
    // Cloud Skills
    { name: 'AWS', icon: FaAws, color: 'text-orange-500', category: 'Cloud' },
    { name: 'Hadoop', icon: FaCode, color: 'text-yellow-500', category: 'Cloud' },
  ];

  const categories = ['AI', 'Backend', 'Frontend', 'Cloud'];
  
  // Filter skills based on search term
  const filteredSkills = searchTerm 
    ? techStack.filter(skill => 
        skill.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : techStack;

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setIsTyping(e.target.value.length > 0);
  };

  const handleCategoryClick = (category) => {
    setSearchTerm(category);
    setIsTyping(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 max-w-lg w-full shadow-2xl max-h-[80vh] overflow-y-auto"
    >
      {/* Compact Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <div>
            <h3 className="text-white font-semibold text-base">Skills Explorer</h3>
            <p className="text-white/60 text-xs">Filter by technology</p>
          </div>
        </div>
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-red-400 rounded-full opacity-60"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full opacity-60"></div>
          <div className="w-2 h-2 bg-green-400 rounded-full opacity-60"></div>
        </div>
      </div>

      {/* Compact Search Bar */}
      <div className="relative mb-4">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full pl-10 pr-10 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 backdrop-blur-sm text-sm"
          placeholder="Search skills or categories..."
        />
        {isTyping && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <div className="w-1 h-4 bg-blue-400 animate-pulse rounded-full"></div>
          </div>
        )}
        {searchTerm && (
          <button
            onClick={() => {
              setSearchTerm('');
              setIsTyping(false);
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/40 hover:text-white/80 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Compact Category Buttons */}
      <div className="mb-4">
        <p className="text-xs font-medium text-white/80 mb-2">Filter by category</p>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 transform hover:scale-105 ${
                searchTerm === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white border border-white/20'
              }`}
            >
              {category}
            </button>
          ))}
          <button
            onClick={() => {
              setSearchTerm('');
              setIsTyping(false);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 transform hover:scale-105 ${
              searchTerm === ''
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white border border-white/20'
            }`}
          >
            All
          </button>
        </div>
      </div>

      {/* Compact Tech Stack Grid */}
      <div className="grid grid-cols-3 gap-3">
        {filteredSkills.map((tech, index) => {
          const IconComponent = tech.icon;
          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-3 hover:from-white/20 hover:to-white/10 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-white/20 to-white/10 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className={`w-4 h-4 ${tech.color}`} />
                  </div>
                  <span className="text-xs font-medium text-white group-hover:text-blue-300 transition-colors duration-300">
                    {tech.name}
                  </span>
                  <span className="text-xs text-white/60 group-hover:text-white/80 transition-colors duration-300">
                    {tech.category}
                  </span>
                </div>
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Compact No Results Message */}
      {filteredSkills.length === 0 && searchTerm && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-6"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709" />
            </svg>
          </div>
          <p className="text-white/80 text-xs font-medium mb-1">No skills found for "{searchTerm}"</p>
          <p className="text-white/50 text-xs">Try: AI, Backend, Frontend, or Cloud</p>
        </motion.div>
      )}

      {/* Prominent View All Skills Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={() => {
          setSearchTerm('');
          setIsTyping(false);
        }}
        className={`w-full mt-6 py-4 text-sm font-bold transition-all duration-300 transform hover:scale-105 rounded-2xl shadow-lg ${
          searchTerm 
            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-blue-500/25 hover:shadow-blue-500/40' 
            : 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 shadow-green-500/25 hover:shadow-green-500/40'
        }`}
      >
        <div className="flex items-center justify-center space-x-2">
          {searchTerm ? (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span>View All Skills</span>
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>All Skills Shown</span>
            </>
          )}
        </div>
      </motion.button>
    </motion.div>
  );
};

export default TechStackExplorer;
