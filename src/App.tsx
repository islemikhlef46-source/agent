import React, { useState } from 'react';
import { SYSTEM_CHAPTERS } from './data/chapters';
import Sidebar from './components/Sidebar';
import PrintPlaybook from './components/PrintPlaybook';
import { 
  ChevronRight, 
  ChevronLeft, 
} from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState('print'); // 'print' | 'playbook'
  const [selectedChapterId, setSelectedChapterId] = useState(SYSTEM_CHAPTERS[0].id);

  // Find the currently active chapter
  const activeChapter = SYSTEM_CHAPTERS.find(c => c.id === selectedChapterId) || SYSTEM_CHAPTERS[0];
  const activeChapterIdx = SYSTEM_CHAPTERS.findIndex(c => c.id === selectedChapterId);

  const handleNextChapter = () => {
    if (activeChapterIdx < SYSTEM_CHAPTERS.length - 1) {
      setSelectedChapterId(SYSTEM_CHAPTERS[activeChapterIdx + 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevChapter = () => {
    if (activeChapterIdx > 0) {
      setSelectedChapterId(SYSTEM_CHAPTERS[activeChapterIdx - 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex bg-zinc-950 text-zinc-100 min-h-screen font-sans selection:bg-purple-900/50 selection:text-white">
      
      {/* 1. Sidebar Navigation */}
      <Sidebar 
        currentView={currentView}
        setCurrentView={setCurrentView}
        selectedChapterId={selectedChapterId}
        setSelectedChapterId={setSelectedChapterId}
        chapters={SYSTEM_CHAPTERS}
      />

      {/* 2. Main Content Workspace */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        
        {/* Top Control Bar / Global Status */}
        <header id="app-header" className="bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900 px-8 py-4 flex items-center justify-between sticky top-0 z-40 print:hidden select-none">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">CONSOLE CONTROL</span>
            <span className="text-zinc-700">|</span>
            <span className="text-xs font-mono font-bold text-zinc-300">
              {currentView === 'playbook' && `PLAYBOOK MANUAL • MODULE ${activeChapter.number}`}
              {currentView === 'print' && 'HIGH-FIDELITY BOOK COMPILER'}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800/80 px-2.5 py-1 rounded-lg text-[10px] font-mono text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
              <span>SERVER OK</span>
            </div>
          </div>
        </header>

        {/* Content View Canvas */}
        <div id="view-canvas" className="flex-1 p-8 md:p-12 max-w-6xl w-full mx-auto space-y-12 pb-24">
          
          {/* A. Print & Export PDF View */}
          {currentView === 'print' && <PrintPlaybook />}

          {/* B. Playbook Chapter Viewer */}
          {currentView === 'playbook' && (
            <div className="space-y-10 max-w-4xl mx-auto">
              
              {/* Chapter Header Card */}
              <div className="border-b border-zinc-900 pb-8">
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="font-mono text-xs text-purple-400 bg-purple-950/40 border border-purple-900/40 px-2.5 py-1 rounded font-bold uppercase tracking-wider">
                    MODULE {activeChapter.number}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase font-semibold">
                    {activeChapter.category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-white tracking-tight leading-tight">
                  {activeChapter.title}
                </h2>
                <p className="text-base text-zinc-400 mt-2 font-medium font-sans">
                  {activeChapter.subtitle}
                </p>
                <div className="mt-5 p-4 bg-zinc-900/20 border border-zinc-900 rounded-xl text-sm leading-relaxed text-zinc-400 font-sans">
                  {activeChapter.summary}
                </div>
              </div>

              {/* Core Sections of the Chapter */}
              <div className="space-y-12">
                {activeChapter.sections.map((section, idx) => (
                  <div key={idx} className="space-y-4">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2 border-l-2 border-purple-500 pl-3">
                      {section.title}
                    </h3>
                    <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                      {section.content}
                    </p>

                    {/* Table Render */}
                    {section.table && (
                      <div className="overflow-x-auto my-4 border border-zinc-900 rounded-xl bg-zinc-950">
                        <table className="w-full text-left text-xs border-collapse">
                          <thead>
                            <tr className="bg-zinc-900 text-zinc-400 font-mono border-b border-zinc-800">
                              {section.table.headers.map((h, hIdx) => (
                                <th key={hIdx} className="py-3 px-4 uppercase font-semibold">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-zinc-900 font-sans">
                            {section.table.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="hover:bg-zinc-900/10">
                                {row.map((cell, cIdx) => (
                                  <td key={cIdx} className="py-3 px-4 text-zinc-300 leading-relaxed">{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Bullets Render */}
                    {section.bullets && (
                      <ul className="list-disc pl-6 space-y-2 text-sm text-zinc-400 font-sans leading-relaxed">
                        {section.bullets.map((bullet, bIdx) => (
                          <li key={bIdx}>{bullet}</li>
                        ))}
                      </ul>
                    )}

                    {/* Callout Render */}
                    {section.callout && (
                      <div className={`p-4 rounded-xl border leading-relaxed text-xs ${
                        section.callout.type === 'success' 
                          ? 'bg-emerald-950/20 border-emerald-900/50 text-emerald-300'
                          : 'bg-zinc-900/80 border-zinc-800 text-zinc-300'
                      }`}>
                        <h4 className="font-bold mb-1 uppercase font-mono tracking-wider">{section.callout.title}</h4>
                        <p className="font-sans leading-relaxed">{section.callout.text}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Action Steps Operating Module */}
              {activeChapter.actionStep && (
                <div className="bg-zinc-900/30 border border-zinc-800/80 rounded-2xl p-6 space-y-6">
                  <div className="border-b border-zinc-800 pb-3 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-mono tracking-widest text-purple-400 uppercase font-bold">
                        ✓ Operational Execution Framework
                      </h4>
                      <p className="text-xs text-zinc-400 mt-1">
                        {activeChapter.actionStep.text}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs font-sans">
                    {/* Checklist */}
                    <div className="space-y-2.5">
                      <h5 className="font-bold text-zinc-300 uppercase font-mono tracking-wider">✓ Action Checklist</h5>
                      <ul className="space-y-1.5 text-zinc-400">
                        {activeChapter.actionStep.checklist.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2 leading-relaxed">
                            <span className="text-emerald-500 font-bold font-mono">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Common Mistakes */}
                    <div className="space-y-2.5">
                      <h5 className="font-bold text-zinc-300 uppercase font-mono tracking-wider">✗ Common Mistakes</h5>
                      <ul className="space-y-1.5 text-zinc-400">
                        {activeChapter.actionStep.commonMistakes.map((mistake, mistakeIdx) => (
                          <li key={mistakeIdx} className="flex items-start gap-2 leading-relaxed">
                            <span className="text-red-500 font-bold font-mono">✗</span>
                            <span>{mistake}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs border-t border-zinc-800 pt-5 font-sans">
                    {/* Pro Tips */}
                    <div className="space-y-2.5">
                      <h5 className="font-bold text-zinc-300 uppercase font-mono tracking-wider">★ Operations Pro Tips</h5>
                      <ul className="space-y-1.5 text-zinc-400">
                        {activeChapter.actionStep.proTips.map((tip, tipIdx) => (
                          <li key={tipIdx} className="flex items-start gap-2 leading-relaxed">
                            <span className="text-amber-500 font-bold font-mono">★</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Expected Result */}
                    <div className="space-y-2.5">
                      <h5 className="font-bold text-zinc-300 uppercase font-mono tracking-wider">✦ Expected Outcome</h5>
                      <p className="text-zinc-400 leading-relaxed italic">
                        {activeChapter.actionStep.expectedResult}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Pagination Controls */}
              <div className="flex justify-between items-center pt-8 border-t border-zinc-900 font-mono text-xs select-none">
                <button
                  id="btn-prev-chapter"
                  onClick={handlePrevChapter}
                  disabled={activeChapterIdx === 0}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg border transition-all ${
                    activeChapterIdx === 0
                      ? 'border-zinc-900 text-zinc-600 cursor-not-allowed'
                      : 'border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900/50'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous Chapter</span>
                </button>

                <span className="text-zinc-500">
                  {activeChapterIdx + 1} / {SYSTEM_CHAPTERS.length}
                </span>

                <button
                  id="btn-next-chapter"
                  onClick={handleNextChapter}
                  disabled={activeChapterIdx === SYSTEM_CHAPTERS.length - 1}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg border transition-all ${
                    activeChapterIdx === SYSTEM_CHAPTERS.length - 1
                      ? 'border-zinc-900 text-zinc-600 cursor-not-allowed'
                      : 'border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900/50'
                  }`}
                >
                  <span>Next Chapter</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          )}

        </div>
      </main>

    </div>
  );
}

