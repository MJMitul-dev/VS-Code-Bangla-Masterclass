
import React from 'react';
import { CourseSection } from '../types';

interface CourseSectionViewProps {
  section: CourseSection;
  onNext: () => void;
  isLast: boolean;
}

const CourseSectionView: React.FC<CourseSectionViewProps> = ({ section, onNext, isLast }) => {
  // Simple markdown-ish formatter
  const formatContent = (content: string) => {
    return content.split('\n').map((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) return <br key={idx} />;
      
      if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
        return <h3 key={idx} className="text-xl font-bold text-blue-400 mt-6 mb-3">{trimmed.replace(/\*\*/g, '')}</h3>;
      }
      
      if (trimmed.startsWith('-')) {
        return (
          <li key={idx} className="ml-6 list-disc text-gray-300 mb-2 leading-relaxed">
            {trimmed.substring(1).trim()}
          </li>
        );
      }
      
      if (trimmed.startsWith('১.') || trimmed.startsWith('২.') || trimmed.startsWith('৩.')) {
        return <p key={idx} className="text-gray-300 mb-4 font-semibold text-lg border-l-4 border-blue-500 pl-4 py-1 bg-blue-900/10">{trimmed}</p>;
      }

      return <p key={idx} className="text-gray-300 mb-4 leading-relaxed text-lg">{trimmed}</p>;
    });
  };

  return (
    <article className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-10 text-center md:text-left">
        <div className="text-6xl mb-4">{section.icon}</div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">{section.title}</h1>
        <p className="text-xl text-blue-400 font-medium">{section.subtitle}</p>
      </div>

      <div className="bg-[#161b22] border border-gray-800 rounded-2xl p-6 md:p-10 mb-8 shadow-2xl">
        <div className="prose prose-invert max-w-none">
          {formatContent(section.content)}
        </div>
      </div>

      <div className="bg-blue-600/10 border border-blue-500/30 rounded-xl p-6 mb-12 flex items-start gap-4">
        <div className="bg-blue-600 p-2 rounded-lg text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        </div>
        <div>
          <h4 className="font-bold text-blue-400 text-lg mb-1">সারাংশ (Recap)</h4>
          <p className="text-gray-300">{section.recap}</p>
        </div>
      </div>

      <div className="flex justify-between items-center pt-8 border-t border-gray-800">
        <p className="text-gray-500 text-sm italic">আপনি কি এই অধ্যায়টি বুঝতে পেরেছেন?</p>
        {!isLast && (
          <button 
            onClick={onNext}
            className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-blue-600/30 transform hover:-translate-y-1"
          >
            পরবর্তী অধ্যায় 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        )}
      </div>
    </article>
  );
};

export default CourseSectionView;
