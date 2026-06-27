import React, { useState, useEffect } from 'react';
import { Volume2, RefreshCw, CheckCircle, Clock } from 'lucide-react';

export default function InteractiveScriptOptimizer() {
  const [scriptText, setScriptText] = useState(
    `He received a voicemail from himself — sent 3 years after his death. The voice was unmistakably his. Same cadence. Same slight pause before every sentence. The message lasted 47 seconds. It described, in perfect detail, the room he was sitting in when he listened to it — a room no one had been in for three years. There was no static. No distortion. Just a calm voice speaking from somewhere time doesn't reach. The phone company's records showed the call originated from his own number. At 3:17 AM. The night he died.`
  );
  
  const [wordCount, setWordCount] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    // Count words accurately
    const trimmed = scriptText.trim();
    const count = trimmed === '' ? 0 : trimmed.split(/\s+/).length;
    setWordCount(count);
  }, [scriptText]);

  // Read-aloud timer loop
  useEffect(() => {
    let interval: any;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimeElapsed((prev) => {
          if (prev >= 38) {
            setIsTimerRunning(false);
            return 38;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const handleStartTimer = () => {
    setTimeElapsed(0);
    setIsTimerRunning(true);
  };

  const handleStopTimer = () => {
    setIsTimerRunning(false);
  };

  const handleResetTimer = () => {
    setIsTimerRunning(false);
    setTimeElapsed(0);
  };

  // Diagnostic feedback based on word count
  const getWordCountFeedback = () => {
    if (wordCount === 0) return { text: 'Empty Script', color: 'text-zinc-500' };
    if (wordCount < 100) return { text: 'Too Short (Aim for 110-125 words)', color: 'text-amber-400' };
    if (wordCount > 130) return { text: 'Too Long (Will feel rushed inside 38 seconds)', color: 'text-red-400 font-bold' };
    return { text: 'Optimal Word Count (110 - 125 words)', color: 'text-emerald-400 font-semibold' };
  };

  return (
    <div id="script-optimizer-panel" className="space-y-8 max-w-4xl mx-auto">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Volume2 className="w-5 h-5 text-green-400" />
          <span className="text-xs font-mono tracking-widest text-green-400 uppercase">SYSTEM UTILITY</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-white">Script & Voice Optimizer</h2>
        <p className="text-sm text-zinc-400 mt-1">
          Perform the mandatory Read-Aloud Protocol. Check length parameters and run the interactive pacing simulation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Editor Area */}
        <div className="md:col-span-8 bg-zinc-900/60 border border-zinc-800 p-6 rounded-xl space-y-4">
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="text-zinc-400 uppercase">SCRIPT CONTENT</span>
            <span className={`${getWordCountFeedback().color}`}>
              {wordCount} words • {getWordCountFeedback().text}
            </span>
          </div>

          <textarea
            id="script-input-area"
            value={scriptText}
            onChange={(e) => setScriptText(e.target.value)}
            className="w-full h-64 bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-sm font-medium leading-relaxed text-zinc-200 focus:outline-none focus:border-green-500 font-sans"
            placeholder="Type or paste your draft script here..."
          />

          <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-zinc-950 rounded-xl border border-zinc-900">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-zinc-400">Pacing Indicator:</span>
              <span className="text-xs text-zinc-200 font-semibold">
                Estimated Duration: {Math.round(wordCount * 0.32)}s (at 0.9x speed)
              </span>
            </div>
            
            <button
              id="btn-load-sample-script"
              onClick={() => setScriptText(
                "He received a voicemail from himself — sent 3 years after his death. The voice was unmistakably his. Same cadence. Same slight pause before every sentence. The message lasted 47 seconds. It described, in perfect detail, the room he was sitting in when he listened to it — a room no one had been in for three years. There was no static. No distortion. Just a calm voice speaking from somewhere time doesn't reach. The phone company's records showed the call originated from his own number. At 3:17 AM. The night he died."
              )}
              className="flex items-center gap-1 text-[10px] font-mono text-zinc-500 hover:text-white transition-colors"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Load Sample Script</span>
            </button>
          </div>
        </div>

        {/* Read Aloud Simulation Workspace */}
        <div className="md:col-span-4 space-y-6">
          <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-xl space-y-6 text-center">
            <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block">PACING SIMULATOR</span>

            {/* Simulated Stopwatch */}
            <div className="relative w-28 h-28 mx-auto flex flex-col items-center justify-center rounded-full border-4 border-zinc-900 bg-zinc-900/25">
              <Clock className="w-5 h-5 text-green-500 absolute top-4 opacity-40" />
              <span className="text-3xl font-mono font-bold text-white tracking-tight">
                0:{timeElapsed < 10 ? `0${timeElapsed}` : timeElapsed}
              </span>
              <span className="text-[9px] font-mono text-zinc-500">MAX: 0:38</span>
            </div>

            <div className="flex gap-2">
              {!isTimerRunning ? (
                <button
                  id="btn-pacing-start"
                  onClick={handleStartTimer}
                  className="flex-1 bg-green-600 hover:bg-green-500 text-white font-medium text-xs py-2 rounded-lg transition-colors"
                >
                  Start Read-Aloud
                </button>
              ) : (
                <button
                  id="btn-pacing-stop"
                  onClick={handleStopTimer}
                  className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium text-xs py-2 rounded-lg transition-colors"
                >
                  Pause
                </button>
              )}
              <button
                id="btn-pacing-reset"
                onClick={handleResetTimer}
                className="px-3 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white rounded-lg transition-colors"
              >
                Reset
              </button>
            </div>
            
            <p className="text-[10px] text-zinc-500 font-mono italic">
              *Read the script out loud matching the countdown. Slow down where you see punctuation. Aim to hit your reveal at exactly 0:29.
            </p>
          </div>

          {/* Quality check list */}
          <div className="bg-zinc-900/40 border border-zinc-800 p-5 rounded-xl space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-wider text-zinc-300 uppercase">
              READ-ALOUD CHECKLIST
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>Zero verbal stumbles or awkward tongue-twisters</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>Narrative starts mid-crisis with zero introduction lines</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>Sensory physical elements included in the tension rise</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>Final reveal lands cleanly inside the final 9 seconds</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
