
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import CourseSectionView from './components/CourseSectionView';
import AIAssistant from './components/AIAssistant';
import ShortcutGuide from './components/ShortcutGuide';
import { COURSE_SECTIONS } from './data/courseContent';

const App: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = useState(COURSE_SECTIONS[0].id);
  const [completedSections, setCompletedSections] = useState<string[]>([]);

  // Calculate progress
  const progress = (completedSections.length / COURSE_SECTIONS.length) * 100;

  useEffect(() => {
    // Add active section to completed when visited
    if (!completedSections.includes(activeSectionId)) {
      setCompletedSections(prev => [...prev, activeSectionId]);
    }
  }, [activeSectionId, completedSections]);

  const activeSection = COURSE_SECTIONS.find(s => s.id === activeSectionId) || COURSE_SECTIONS[0];
  const activeIdx = COURSE_SECTIONS.findIndex(s => s.id === activeSectionId);
  const isLast = activeIdx === COURSE_SECTIONS.length - 1;

  const handleNext = () => {
    if (!isLast) {
      setActiveSectionId(COURSE_SECTIONS[activeIdx + 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Layout 
      activeId={activeSectionId} 
      onSectionSelect={setActiveSectionId} 
      progress={progress}
    >
      {/* Welcome Banner (only on first section) */}
      {activeIdx === 0 && (
        <div className="mb-12 p-8 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold mb-2">আসসালামু আলাইকুম! 👋</h2>
            <p className="text-blue-100 text-lg max-w-2xl">
              এই মাস্টারক্লাসে আপনাকে স্বাগতম। আমরা একদম শূন্য থেকে শুরু করে একজন প্রফেশনাল লেভেলে VS Code কিভাবে ব্যবহার করতে হয় তা শিখব।
            </p>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl -ml-16 -mb-16"></div>
        </div>
      )}

      {/* Active Section Content */}
      <CourseSectionView 
        section={activeSection} 
        onNext={handleNext} 
        isLast={isLast} 
      />

      {/* Extra Component: Shortcuts (Only visible on section 5) */}
      {activeSectionId === 'shortcuts' && <ShortcutGuide />}

      {/* AI Assistant - Floating Chat */}
      <AIAssistant />
    </Layout>
  );
};

export default App;
