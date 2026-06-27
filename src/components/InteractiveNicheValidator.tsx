import React, { useState } from 'react';
import { Compass, CheckCircle, AlertTriangle, HelpCircle } from 'lucide-react';
import { NicheScore } from '../types';

export default function InteractiveNicheValidator() {
  const [nicheName, setNicheName] = useState('Ancient Sunken Civilizations');
  const [scores, setScores] = useState<NicheScore>({
    retention: 4,
    compatibility: 5,
    competition: 3,
    monetization: 4,
    stability: 4,
  });

  const handleScoreChange = (key: keyof NicheScore, value: number) => {
    setScores((prev) => ({ ...prev, [key]: value }));
  };

  const totalPoints = scores.retention + scores.compatibility + scores.competition + scores.monetization + scores.stability;
  const maxPossible = 25;
  const ratingPercentage = (totalPoints / maxPossible) * 100;

  let recommendation = {
    status: 'Excellent Candidate',
    desc: 'This niche has outstanding visual compatibility, a massive retention ceiling, and healthy monetization options. Lock this concept in immediately.',
    color: 'border-emerald-500 bg-emerald-950/20 text-emerald-200',
    iconColor: 'text-emerald-400'
  };

  if (totalPoints < 15) {
    recommendation = {
      status: 'Discard Concept',
      desc: 'The concept has severe fatal flaws in either viewer retention, asset production, or basic monetization viability. Immediately select another concept.',
      color: 'border-red-500 bg-red-950/20 text-red-200',
      iconColor: 'text-red-400'
    };
  } else if (totalPoints < 19) {
    recommendation = {
      status: 'Conditional Pivot',
      desc: 'Viable, but you must narrow your focus or pivot your angle. Increase the specificity of your storytelling, or find stronger high-ticket affiliate fits.',
      color: 'border-amber-500 bg-amber-950/20 text-amber-200',
      iconColor: 'text-amber-400'
    };
  }

  const metricDescriptions = {
    retention: {
      label: '1. Retention Potential',
      help: 'Does the subject support narrative hooks, open curiosity loops, or high psychological tension?',
    },
    compatibility: {
      label: '2. Faceless Compatibility',
      help: 'Can we create top-tier visual value using only static, highly textured cinematic stills + AI audio?',
    },
    competition: {
      label: '3. Entry Point Feasibility',
      help: 'Are there channels with under 300K subs performing exceptionally well with under 50 videos published?',
    },
    monetization: {
      label: '4. Monetization Alignment',
      help: 'Are there direct high-ticket SaaS affiliate programs or obvious digital products to create in Month 2?',
    },
    stability: {
      label: '5. Trend Stability',
      help: 'Is this concept immune to sudden viral decay? Does it have consistent, stable 12-month search history?',
    },
  };

  return (
    <div id="niche-validator-panel" className="space-y-8 max-w-4xl mx-auto">
      {/* Title block */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Compass className="w-5 h-5 text-purple-400" />
          <span className="text-xs font-mono tracking-widest text-purple-400 uppercase">SYSTEM UTILITY</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-white">Algorithmic Niche Validation Workspace</h2>
        <p className="text-sm text-zinc-400 mt-1">
          Never build a channel on gut feeling. Run your potential concept through our rigorous scorecard.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Sliders Area */}
        <div className="md:col-span-7 bg-zinc-900/60 border border-zinc-800 p-6 rounded-xl space-y-6">
          <div>
            <label className="block text-xs font-mono text-zinc-400 uppercase mb-2">Concept Name</label>
            <input
              id="input-concept-name"
              type="text"
              value={nicheName}
              onChange={(e) => setNicheName(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500 font-medium transition-all"
              placeholder="e.g. Lost Maritime Disasters"
            />
          </div>

          <div className="h-px bg-zinc-800 my-4" />

          <div className="space-y-5">
            {Object.keys(metricDescriptions).map((key) => {
              const k = key as keyof NicheScore;
              return (
                <div key={k} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-zinc-300" title={metricDescriptions[k].help}>
                      {metricDescriptions[k].label}
                    </span>
                    <span className="text-xs font-mono font-semibold text-purple-400 bg-purple-950/40 border border-purple-900/40 px-2 py-0.5 rounded">
                      {scores[k]} / 5
                    </span>
                  </div>
                  <input
                    id={`slider-${k}`}
                    type="range"
                    min="1"
                    max="5"
                    value={scores[k]}
                    onChange={(e) => handleScoreChange(k, parseInt(e.target.value))}
                    className="w-full accent-purple-500 cursor-pointer h-1.5 bg-zinc-950 rounded-lg appearance-none"
                  />
                  <p className="text-[10px] text-zinc-500 font-mono italic">{metricDescriptions[k].help}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Real-time Scoring Console */}
        <div className="md:col-span-5 space-y-6">
          <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-xl text-center space-y-4">
            <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">SCORE CONSOLE</span>
            
            <div className="relative w-32 h-32 mx-auto flex flex-col items-center justify-center rounded-full border-4 border-zinc-900 bg-zinc-900/20 shadow-inner">
              <span className="text-4xl font-extrabold text-white tracking-tight">{totalPoints}</span>
              <span className="text-[10px] font-mono text-zinc-500 uppercase">/ 25 POINTS</span>
            </div>

            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-zinc-200">Algorithmic Viability</h3>
              <p className="text-[11px] font-mono text-zinc-500">
                Current Strength: {Math.round(ratingPercentage)}%
              </p>
            </div>

            {/* Custom visual bar */}
            <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 h-full transition-all duration-300"
                style={{ width: `${ratingPercentage}%` }}
              />
            </div>
          </div>

          {/* Expert Recommendation Block */}
          <div className={`border p-5 rounded-xl space-y-3 transition-all duration-300 ${recommendation.color}`}>
            <div className="flex items-center gap-2">
              {totalPoints >= 15 ? (
                <CheckCircle className={`w-5 h-5 ${recommendation.iconColor}`} />
              ) : (
                <AlertTriangle className={`w-5 h-5 ${recommendation.iconColor}`} />
              )}
              <h4 className="text-xs font-mono font-bold tracking-wider uppercase">
                {recommendation.status}
              </h4>
            </div>
            <p className="text-xs leading-relaxed">{recommendation.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
