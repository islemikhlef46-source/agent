import React, { useState, useEffect } from 'react';
import { SYSTEM_CHAPTERS } from '../data/chapters';
import { Printer, FileText, Check, AlertTriangle, ExternalLink } from 'lucide-react';

export default function PrintPlaybook() {
  const [isIframe, setIsIframe] = useState(false);
  const [printError, setPrintError] = useState(false);

  useEffect(() => {
    // Detect if running inside an iframe (such as the AI Studio preview sandbox)
    try {
      setIsIframe(window.self !== window.top);
    } catch (e) {
      setIsIframe(true);
    }
  }, []);

  const handlePrint = () => {
    try {
      setPrintError(false);
      window.print();
    } catch (error) {
      console.error('Print trigger failed inside sandboxed environment:', error);
      setPrintError(true);
    }
  };

  return (
    <div id="print-playbook-panel" className="max-w-4xl mx-auto space-y-8 select-text">
      {/* Visual Instruction Banner */}
      <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 print:hidden">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-purple-400">
            <FileText className="w-4 h-4" />
            <span className="text-xs font-mono tracking-wider font-bold uppercase">OFFLINE PUBLISHER ENGINE</span>
          </div>
          <h3 className="text-lg font-bold text-white">Generate High-Quality PDF Playbook</h3>
          <p className="text-xs text-zinc-400">
            This module compiles the entire restructured operating system into a high-contrast print format. 
            Click "Save as PDF" in your system print dialog to download it.
          </p>
        </div>

        <button
          id="btn-trigger-print"
          onClick={handlePrint}
          className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold font-mono px-5 py-3 rounded-xl transition-all shadow-lg shadow-purple-900/20 uppercase shrink-0"
        >
          <Printer className="w-4 h-4" />
          <span>Save Playbook as PDF</span>
        </button>
      </div>

      {/* Cross-origin / Sandbox Alert Box */}
      {isIframe && (
        <div className="bg-amber-950/20 border border-amber-900/50 p-5 rounded-xl space-y-3 print:hidden">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-xs font-mono font-bold tracking-wider text-amber-400 uppercase">
                ⚠️ SECURITY SANDBOX DETECTED
              </h4>
              <p className="text-xs text-amber-200/90 leading-relaxed">
                You are currently viewing this application inside the **AI Studio Preview IFrame**. 
                Browsers automatically block the print dialog inside sandboxed parent wrappers to prevent clickjacking.
              </p>
              <div className="pt-2 text-xs text-amber-300 font-semibold flex flex-wrap items-center gap-1">
                <span>To download your premium PDF successfully:</span>
                <span className="bg-zinc-900 px-2 py-1 rounded text-white font-mono flex items-center gap-1.5 text-[10px] border border-zinc-800">
                  Click the "Open in new tab" icon <ExternalLink className="w-3 h-3 text-purple-400" />
                </span>
                <span>at the top-right of your screen, then trigger print.</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Manual Fallback Instruction if print dialog failed to launch */}
      {printError && (
        <div className="bg-red-950/20 border border-red-900/50 p-5 rounded-xl space-y-2 print:hidden">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-xs font-mono font-bold tracking-wider text-red-400 uppercase">
                ✗ BROWSER DIALOG BLOCKED
              </h4>
              <p className="text-xs text-red-200/90 leading-relaxed">
                Your browser rejected the manual print trigger inside this viewport. 
                Please use the standard browser menu shortcut: press <kbd className="bg-zinc-900 px-1.5 py-0.5 rounded text-[10px] font-mono border border-zinc-800 font-bold">Ctrl + P</kbd> (or <kbd className="bg-zinc-900 px-1.5 py-0.5 rounded text-[10px] font-mono border border-zinc-800 font-bold">Cmd + P</kbd> on macOS) to launch the page print dialog directly.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Styled Book Container for screen preview */}
      <div id="printable-book-area" className="bg-zinc-950 text-zinc-100 border border-zinc-800 p-12 rounded-2xl shadow-2xl print:border-0 print:p-0 print:bg-white print:text-zinc-900 print:shadow-none space-y-16">
        
        {/* Cover Page */}
        <div className="text-center py-20 border-b border-zinc-900 print:border-b-2 print:border-zinc-300 print:py-12 page-break-after-always">
          <span className="text-xs font-mono font-bold tracking-widest text-purple-400 bg-purple-950/40 border border-purple-900/40 px-3 py-1.5 rounded-full uppercase print:text-zinc-700 print:border-zinc-300 print:bg-zinc-100">
            PREMIUM PLAYBOOK • EDITION 2026
          </span>
          <h1 className="text-5xl font-extrabold tracking-tight text-white mt-8 mb-4 print:text-zinc-950 print:font-black">
            AI YouTube Blueprint
          </h1>
          <p className="text-xl font-medium text-purple-300 tracking-tight print:text-zinc-800">
            Complete Faceless Channel Operating System
          </p>
          <div className="h-1 w-32 bg-purple-600 mx-auto my-8 print:bg-zinc-800" />
          <p className="max-w-lg mx-auto text-sm text-zinc-400 leading-relaxed print:text-zinc-600 font-sans">
            The end-to-end execution system for building a profitable, fully automated YouTube channel from zero—using AI for every stage of production.
          </p>
          <div className="mt-16 text-[10px] font-mono text-zinc-600 space-y-1 print:text-zinc-500">
            <p>© 2026 AI YouTube Blueprint. All Rights Reserved.</p>
            <p>FACELSS AI YOUTUBE OPERATING SYSTEM • PRO SYSTEM</p>
          </div>
        </div>

        {/* Content Table Signpost */}
        <div className="space-y-6 page-break-after-always">
          <h2 className="text-xs font-mono tracking-wider font-bold text-zinc-500 uppercase">
            Table of Contents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
            {SYSTEM_CHAPTERS.map((chapter) => (
              <div key={chapter.id} className="flex justify-between border-b border-zinc-900 py-2 pr-4 print:border-zinc-200">
                <span className="text-purple-400 font-bold shrink-0 print:text-zinc-800">
                  {chapter.number} — {chapter.title.split(' & ')[0]}
                </span>
                <span className="text-zinc-600 print:text-zinc-400">●●●</span>
              </div>
            ))}
          </div>
        </div>

        {/* Render Chapters Sequentially */}
        {SYSTEM_CHAPTERS.map((chapter) => (
          <div key={chapter.id} className="space-y-10 border-b border-zinc-900 pb-16 print:border-zinc-200 print:pb-12 print:page-break-after-always">
            
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs text-purple-400 bg-purple-950/40 border border-purple-900/40 px-2 py-0.5 rounded font-bold print:text-zinc-700 print:bg-zinc-100 print:border-zinc-300">
                  MODULE {chapter.number}
                </span>
                <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase font-semibold">
                  {chapter.category}
                </span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white print:text-zinc-950">
                {chapter.title}
              </h2>
              <p className="text-sm font-medium text-purple-200/80 mt-1 print:text-zinc-700 font-sans italic">
                {chapter.subtitle}
              </p>
              <p className="text-sm text-zinc-400 leading-relaxed mt-4 bg-zinc-900/30 p-4 border border-zinc-900 rounded-xl print:bg-zinc-50 print:border-zinc-200 print:text-zinc-600 font-sans">
                {chapter.summary}
              </p>
            </div>

            {/* Sections of the Chapter */}
            <div className="space-y-8 font-sans">
              {chapter.sections.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="text-lg font-bold text-zinc-100 border-l-2 border-purple-500 pl-3 print:text-zinc-900 print:border-zinc-800">
                    {section.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed print:text-zinc-700">
                    {section.content}
                  </p>

                  {/* Render Table if exists */}
                  {section.table && (
                    <div className="overflow-x-auto my-4 border border-zinc-900 rounded-lg print:border-zinc-300">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="bg-zinc-900 text-zinc-400 font-mono border-b border-zinc-800 print:bg-zinc-100 print:text-zinc-800 print:border-zinc-300">
                            {section.table.headers.map((h, hIdx) => (
                              <th key={hIdx} className="py-2.5 px-4 font-bold uppercase">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-900 print:divide-zinc-200">
                          {section.table.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-zinc-900/20 print:hover:bg-transparent">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="py-2.5 px-4 text-zinc-400 print:text-zinc-700 leading-normal">{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Render Bullets if exists */}
                  {section.bullets && (
                    <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-400 print:text-zinc-700">
                      {section.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="leading-relaxed">{bullet}</li>
                      ))}
                    </ul>
                  )}

                  {/* Render Callout if exists */}
                  {section.callout && (
                    <div className={`p-4 rounded-xl border leading-relaxed text-xs ${
                      section.callout.type === 'success' 
                        ? 'bg-emerald-950/10 border-emerald-900/50 text-emerald-300 print:bg-zinc-50 print:border-zinc-300 print:text-zinc-800'
                        : 'bg-zinc-900/80 border-zinc-800 text-zinc-300 print:bg-zinc-50 print:border-zinc-300 print:text-zinc-800'
                    }`}>
                      <h4 className="font-bold mb-1 uppercase font-mono tracking-wider">{section.callout.title}</h4>
                      <p>{section.callout.text}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Structured Operating Action Steps (Checklist, Mistakes, Pro-tips, Expected Outcome) */}
            {chapter.actionStep && (
              <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6 space-y-6 font-sans print:bg-zinc-50 print:border-zinc-300">
                <div className="border-b border-zinc-800 pb-3 print:border-zinc-300">
                  <h4 className="text-sm font-mono tracking-widest text-purple-400 uppercase font-bold print:text-zinc-800">
                    ✓ Operational Deliverables & Framework
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 print:text-zinc-600">
                    {chapter.actionStep.text}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                  {/* Checklist */}
                  <div className="space-y-2">
                    <h5 className="font-bold text-zinc-300 uppercase font-mono print:text-zinc-900">✓ Action Checklist</h5>
                    <ul className="space-y-1.5 text-zinc-400 print:text-zinc-700">
                      {chapter.actionStep.checklist.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2">
                          <span className="text-emerald-500 font-bold shrinkage-0">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Common Mistakes */}
                  <div className="space-y-2">
                    <h5 className="font-bold text-zinc-300 uppercase font-mono print:text-zinc-900">✗ Common Mistakes</h5>
                    <ul className="space-y-1.5 text-zinc-400 print:text-zinc-700">
                      {chapter.actionStep.commonMistakes.map((mistake, mistakeIdx) => (
                        <li key={mistakeIdx} className="flex items-start gap-2">
                          <span className="text-red-500 font-bold shrinkage-0">✗</span>
                          <span>{mistake}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs border-t border-zinc-800 pt-4 print:border-zinc-300">
                  {/* Pro Tips */}
                  <div className="space-y-2">
                    <h5 className="font-bold text-zinc-300 uppercase font-mono print:text-zinc-900">★ Operations Pro Tips</h5>
                    <ul className="space-y-1.5 text-zinc-400 print:text-zinc-700">
                      {chapter.actionStep.proTips.map((tip, tipIdx) => (
                        <li key={tipIdx} className="flex items-start gap-2">
                          <span className="text-amber-500 font-bold shrinkage-0">★</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expected Result */}
                  <div className="space-y-2">
                    <h5 className="font-bold text-zinc-300 uppercase font-mono print:text-zinc-900">✦ Expected Outcome</h5>
                    <p className="text-zinc-400 print:text-zinc-700 leading-relaxed font-sans italic">
                      {chapter.actionStep.expectedResult}
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>
        ))}

        {/* Global Footer in Print PDF */}
        <div className="text-center text-[10px] font-mono text-zinc-600 pt-10 border-t border-zinc-900 print:text-zinc-500 print:border-zinc-300">
          <p>This document was compiled from the live digital AI YouTube Channel Operating System.</p>
          <p>© 2026 AI YouTube Operating System. Certified Original Asset.</p>
        </div>

      </div>
    </div>
  );
}
