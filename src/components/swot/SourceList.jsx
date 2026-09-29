import React from 'react';
import { ExternalLink } from 'lucide-react';

const SourceList = ({ sources }) => {
  if (!sources || sources.length === 0) return null;

  return (
    <div className="mt-8 pt-8 border-t border-zinc-800/50">
      <h4 className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] mb-4">
        Referensi
      </h4>
      <div className="flex flex-wrap gap-4">
        {sources.map((source, index) => (
          <a 
            key={index}
            href={source.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-4 py-2 border border-zinc-800/80 rounded hover:border-[#F0442E]/50 hover:bg-[#F0442E]/5 transition-all duration-300"
          >
            <span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200 uppercase tracking-widest transition-colors">
              {source.name || "Sumber Eksternal"}
            </span>
            <ExternalLink className="w-3 h-3 text-zinc-600 group-hover:text-[#F0442E] transition-colors" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SourceList;
