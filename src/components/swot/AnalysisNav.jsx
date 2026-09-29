import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AnalysisNav = () => {
  const location = useLocation();
  
  const navItems = [
    { label: 'STRENGTHS', path: '/strengths' },
    { label: 'WEAKNESSES', path: '/weaknesses' },
    { label: 'OPPORTUNITIES', path: '/opportunities' },
    { label: 'THREATS', path: '/threats' }
  ];

  return (
    <nav className="flex items-center mb-16 md:mb-20 w-full relative z-20">
      <div className="flex flex-wrap items-center gap-4 sm:gap-6">
        <span className="text-[10px] sm:text-xs font-bold text-zinc-600 uppercase tracking-[0.4em] mr-2">
          ANALYSIS
        </span>
        
        <div className="flex items-center gap-3 sm:gap-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`group flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] transition-all duration-300 ${
                  isActive 
                    ? 'text-[#F0442E]' 
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                <span className={`text-zinc-700 transition-colors duration-300 ${isActive ? 'text-[#F0442E]/70' : 'group-hover:text-zinc-500'}`}>[</span>
                {item.label}
                <span className={`text-zinc-700 transition-colors duration-300 ${isActive ? 'text-[#F0442E]/70' : 'group-hover:text-zinc-500'}`}>]</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default AnalysisNav;
