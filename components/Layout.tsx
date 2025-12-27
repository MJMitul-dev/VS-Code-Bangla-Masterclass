
import React, { useState } from 'react';
import { COURSE_SECTIONS } from '../data/courseContent';

interface LayoutProps {
  children: React.ReactNode;
  activeId: string;
  onSectionSelect: (id: string) => void;
  progress: number;
}

const Layout: React.FC<LayoutProps> = ({ children, activeId, onSectionSelect, progress }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden bg-[#0d1117]">
      {/* Sidebar */}
      <aside 
        className={`${
          isSidebarOpen ? 'w-80' : 'w-0'
        } transition-all duration-300 bg-[#161b22] border-r border-gray-800 flex flex-col h-full z-20`}
      >
        <div className="p-6 border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-white">V</div>
            <h1 className="font-bold text-lg text-white">VS Code Masterclass</h1>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-4">
          <div className="mb-4">
            <div className="flex justify-between text-xs text-gray-400 mb-1 px-2">
              <span>আপনার অগ্রগতি (Progress)</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 transition-all duration-500" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <nav className="space-y-1">
            {COURSE_SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => onSectionSelect(section.id)}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                  activeId === section.id 
                    ? 'bg-blue-600/20 text-blue-400 border border-blue-600/30' 
                    : 'text-gray-400 hover:bg-gray-800'
                }`}
              >
                <span className="text-xl">{section.icon}</span>
                <span className="text-sm font-medium truncate">{section.title}</span>
              </button>
            ))}
          </nav>
        </div>
        
        <div className="p-4 bg-[#0d1117] border-t border-gray-800 text-[10px] text-gray-500 text-center">
          © ২০২৪ | আপনার কোডিং যাত্রা শুরু হোক এখানে।
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        {/* Header */}
        <header className="h-16 bg-[#0d1117] border-b border-gray-800 flex items-center justify-between px-6 sticky top-0 z-10">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-gray-800 rounded-lg text-gray-400"
          >
            {isSidebarOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          
          <div className="hidden md:flex items-center gap-4">
             <span className="text-sm text-gray-400">শিখুন বাংলায় 🇧🇩</span>
             <a href="https://code.visualstudio.com/" target="_blank" rel="noopener" className="text-xs bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded font-medium transition-colors">
                Download VS Code
             </a>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar bg-[#0d1117] p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
