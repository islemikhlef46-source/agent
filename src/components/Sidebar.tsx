import React from 'react';
import { 
  Printer 
} from 'lucide-react';

interface SidebarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  selectedChapterId: string;
  setSelectedChapterId: (id: string) => void;
  chapters: { id: string; number: string; title: string; category: string }[];
}

export default function Sidebar({ 
  currentView, 
  setCurrentView, 
  selectedChapterId, 
  setSelectedChapterId, 
  chapters 
}: SidebarProps) {
  return (
    <aside id="app-sidebar" className="w-80 bg-zinc-950 border-r border-zinc-800 flex flex-col h-screen overflow-y-auto shrink-0 select-none font-sans">
      {/* Brand Header */}
      <div className="p-6 border-b border-zinc-900">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white font-bold shadow-md shadow-purple-900/30">
            YT
          </div>
          <div>
            <h1 className="text-sm font-semibold tracking-tight text-white uppercase">YouTube OS</h1>
            <p className="text-[10px] font-mono text-zinc-500">v1.4.0 • Premium System</p>
          </div>
        </div>
      </div>

      {/* Main Sections */}
      <div className="flex-1 px-4 py-6 space-y-8">
        
        {/* Print & Export Block */}
        <div className="space-y-1">
          <h3 className="px-3 text-[10px] font-mono font-medium tracking-wider text-zinc-500 uppercase font-bold">OFFLINE EXPORT</h3>
          <button
            id="nav-print"
            onClick={() => setCurrentView('print')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
              currentView === 'print' 
                ? 'bg-zinc-900 text-white shadow-sm border border-zinc-800' 
                : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'
            }`}
          >
            <Printer className="w-4 h-4 text-emerald-500" />
            <span className="font-bold">Generate Premium PDF</span>
          </button>
        </div>

        {/* Playbook Chapters Grouped */}
        <div className="space-y-4">
          <h3 className="px-3 text-[10px] font-mono font-medium tracking-wider text-zinc-500 uppercase font-bold">SYSTEM PLAYBOOK</h3>
          
          <div className="space-y-1 max-h-[380px] overflow-y-auto pr-1">
            {chapters.map((chapter) => (
              <button
                key={chapter.id}
                id={`chapter-link-${chapter.id}`}
                onClick={() => {
                  setCurrentView('playbook');
                  setSelectedChapterId(chapter.id);
                }}
                className={`w-full flex items-start gap-3 px-3 py-2 rounded-lg text-xs transition-all text-left ${
                  currentView === 'playbook' && selectedChapterId === chapter.id
                    ? 'bg-purple-950/40 text-purple-200 border border-purple-900/50 shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/30'
                }`}
              >
                <span className="font-mono text-[10px] text-zinc-600 bg-zinc-900 px-1.5 py-0.5 rounded shrink-0 border border-zinc-800">
                  {chapter.number}
                </span>
                <div className="truncate">
                  <p className="font-medium truncate">{chapter.title}</p>
                  <span className="text-[9px] font-mono text-zinc-500 tracking-wider uppercase">
                    {chapter.category}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* User Session Info / Workspace Signpost */}
      <div className="p-4 border-t border-zinc-900 bg-zinc-950/60 text-[11px] text-zinc-500 font-mono space-y-1 select-none">
        <div className="flex justify-between">
          <span>PORT:</span>
          <span className="text-emerald-500">3000 (SECURE)</span>
        </div>
        <div className="flex justify-between">
          <span>USER:</span>
          <span className="text-zinc-300 truncate max-w-[120px]" title="islemikhlef46@gmail.com">islemikhlef46@gmail.com</span>
        </div>
        <div className="flex justify-between">
          <span>STATUS:</span>
          <span className="text-purple-400 font-bold">PRO EDITION</span>
        </div>
      </div>
    </aside>
  );
}
