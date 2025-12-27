
import React from 'react';
import { SHORTCUTS } from '../data/courseContent';

const ShortcutGuide: React.FC = () => {
  return (
    <div className="mt-16 bg-[#161b22] border border-gray-800 rounded-2xl overflow-hidden shadow-xl">
      <div className="p-6 bg-gray-800/50 border-b border-gray-700">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
          </svg>
          দ্রুত ব্যবহারের জন্য শর্টকাট (Cheatsheet)
        </h2>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SHORTCUTS.map((s, i) => (
            <div key={i} className="flex justify-between items-center p-3 rounded-lg bg-[#0d1117] border border-gray-800 group hover:border-blue-500/50 transition-colors">
              <span className="text-gray-400 text-sm group-hover:text-blue-400 transition-colors">{s.action}</span>
              <kbd className="px-2 py-1 rounded bg-gray-800 text-white font-mono text-xs shadow-inner border border-gray-700">{s.key}</kbd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShortcutGuide;
