import React, { useState } from 'react';
import { 
  TrendingUp, 
  Eye, 
  Users, 
  DollarSign, 
  Activity, 
  CheckCircle2, 
  Play, 
  Settings, 
  Percent,
  Link
} from 'lucide-react';

interface DayProgress {
  day: number;
  goal: string;
  deliverable: string;
  kpi: string;
  time: string;
  expected: string;
  completed: boolean;
}

export default function KPIDashboard() {
  const [completedDays, setCompletedDays] = useState<number[]>([1, 2, 3]); // default some finished days

  const schedule: DayProgress[] = [
    { day: 1, goal: 'Choose niche', deliverable: '3 niche options with rationale', kpi: 'Niche locked in workspace', time: '2 hrs', expected: 'Niche locked. Not reconsidered until Day 31.', completed: false },
    { day: 2, goal: 'Build brand identity', deliverable: 'Channel name, banner, profile icon', kpi: 'Banner uploaded to YT', time: '2 hrs', expected: 'Channel looks professional. Identity is fixed.', completed: false },
    { day: 3, goal: 'Master hook writing', deliverable: '20 original hooks in Hook Bank', kpi: 'Top 5 hooks rated in sheet', time: '1.5 hrs', expected: 'First hook formula emerges from best 5.', completed: false },
    { day: 4, goal: 'Write first script', deliverable: 'Script #1 (120w, 3-part structure)', kpi: 'Script passes read-aloud test', time: '1.5 hrs', expected: 'First script ready for image generation.', completed: false },
    { day: 5, goal: 'Generate images', deliverable: '10 cinematic images for Video #1', kpi: 'Images match script scene beats', time: '2 hrs', expected: 'All images named and sorted in folder.', completed: false },
    { day: 6, goal: 'Record audio', deliverable: 'MP3 voiceover + 2 ambient layers', kpi: 'Music at 15-20% narration volume', time: '1.5 hrs', expected: 'Audio mixed, exported, ready for edit.', completed: false },
    { day: 7, goal: 'Publish Short #1', deliverable: 'Video live on YouTube', kpi: 'Upload confirmed. Link saved.', time: '2 hrs', expected: 'FIRST VIDEO LIVE. Start 48-hour wait for data.', completed: false },
    { day: 8, goal: 'Analyze retention', deliverable: 'Screenshot of curve + written notes', kpi: 'Exact second of first drop-off found', time: '30 min', expected: 'First data insight. Understand attention leak.', completed: false },
    { day: 9, goal: 'Rewrite hook formula', deliverable: 'Revised Script #2 with stronger hook', kpi: 'Hook under 10 words, triggers curiosity', time: '1 hr', expected: 'Script improved based on data, not guesswork.', completed: false },
    { day: 10, goal: 'Publish Short #2', deliverable: 'Video #2 live', kpi: 'Compare Day 7 vs Day 10 retention %', time: '2 hrs', expected: 'Second data point. Pattern begins forming.', completed: false },
    { day: 11, goal: 'Add affiliate link', deliverable: 'Description template updated', kpi: 'Affiliate link live across all videos', time: '30 min', expected: 'MONETIZATION ACTIVATED. Every future view has leverage.', completed: false },
  ];

  const handleToggleDay = (dayNum: number) => {
    setCompletedDays(prev => 
      prev.includes(dayNum) 
        ? prev.filter(d => d !== dayNum) 
        : [...prev, dayNum]
    );
  };

  const percentProgress = Math.round((completedDays.length / schedule.length) * 100);

  return (
    <div id="kpi-dashboard-panel" className="space-y-8 max-w-6xl mx-auto">
      {/* Title block */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-5 h-5 text-purple-400" />
            <span className="text-xs font-mono tracking-widest text-purple-400 uppercase">REAL-TIME TELEMETRY</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white">Channel Operations Control Center</h2>
          <p className="text-sm text-zinc-400 mt-1">
            Simulate and track key benchmarks. Complete your daily checkpoints to unlock subsequent pipeline modules.
          </p>
        </div>
        
        {/* Status indicator */}
        <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl text-xs font-mono">
          <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-zinc-300">CHANNEL STATUS: LIVE & BROADCASTING</span>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-zinc-900/40 border border-zinc-800 p-5 rounded-xl space-y-3">
          <div className="flex items-center justify-between text-zinc-500">
            <span className="text-xs font-mono uppercase font-semibold">Total Channel Views</span>
            <Eye className="w-4 h-4 text-purple-500" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white font-mono">4,200</span>
            <span className="text-xs text-emerald-400 font-mono font-medium">+15.4%</span>
          </div>
          <p className="text-[10px] text-zinc-500 font-mono">Month 1 baseline simulation data</p>
        </div>

        <div className="bg-zinc-900/40 border border-zinc-800 p-5 rounded-xl space-y-3">
          <div className="flex items-center justify-between text-zinc-500">
            <span className="text-xs font-mono uppercase font-semibold">Total Subscribers</span>
            <Users className="w-4 h-4 text-blue-500" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white font-mono">203</span>
            <span className="text-xs text-emerald-400 font-mono font-medium">+22.1%</span>
          </div>
          <p className="text-[10px] text-zinc-500 font-mono">Benchmark target met on Day 28</p>
        </div>

        <div className="bg-zinc-900/40 border border-zinc-800 p-5 rounded-xl space-y-3">
          <div className="flex items-center justify-between text-zinc-500">
            <span className="text-xs font-mono uppercase font-semibold">Avg Retention (AVD)</span>
            <Percent className="w-4 h-4 text-green-500" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white font-mono">61.0%</span>
            <span className="text-xs text-green-400 font-mono font-medium">(Strong Hook)</span>
          </div>
          <p className="text-[10px] text-zinc-500 font-mono">Target benchmark is &gt;55% AVD</p>
        </div>

        <div className="bg-zinc-900/40 border border-zinc-800 p-5 rounded-xl space-y-3">
          <div className="flex items-center justify-between text-zinc-500">
            <span className="text-xs font-mono uppercase font-semibold">Earned Commission</span>
            <DollarSign className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white font-mono">$14.00</span>
            <span className="text-xs text-emerald-400 font-mono font-medium">ElevenLabs Affiliate</span>
          </div>
          <p className="text-[10px] text-zinc-500 font-mono">First payout recorded on Day 28</p>
        </div>

      </div>

      {/* Production Tracker Calendar Dashboard */}
      <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h3 className="text-base font-bold text-white">Interactive 30-Day Execution Roadmap</h3>
            <p className="text-xs text-zinc-400 mt-1">Check off days as you execute the sequential operations protocol.</p>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-zinc-400">OPERATIONS SCHEDULE PROGRESS:</span>
            <span className="text-xs font-mono font-bold text-purple-400 bg-purple-950/40 border border-purple-900/40 px-3 py-1 rounded-lg">
              {percentProgress}% COMPLETE
            </span>
          </div>
        </div>

        {/* Visual schedule timeline bar */}
        <div className="w-full bg-zinc-950 h-3 rounded-full overflow-hidden border border-zinc-800">
          <div 
            className="bg-gradient-to-r from-purple-600 to-indigo-500 h-full transition-all duration-500"
            style={{ width: `${percentProgress}%` }}
          />
        </div>

        {/* Table representation of daily progress */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-500 font-mono">
                <th className="py-3 px-4 uppercase font-semibold">Day</th>
                <th className="py-3 px-4 uppercase font-semibold">Core Goal</th>
                <th className="py-3 px-4 uppercase font-semibold">SOP Deliverable</th>
                <th className="py-3 px-4 uppercase font-semibold">Telemetry KPI</th>
                <th className="py-3 px-4 uppercase font-semibold text-right">Target Duration</th>
                <th className="py-3 px-4 uppercase font-semibold text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-900">
              {schedule.map((day) => (
                <tr 
                  key={day.day} 
                  id={`dashboard-row-day-${day.day}`}
                  className={`hover:bg-zinc-900/30 transition-all ${
                    completedDays.includes(day.day) ? 'bg-zinc-900/20 text-zinc-400' : 'text-zinc-200'
                  }`}
                >
                  <td className="py-3.5 px-4 font-mono font-bold text-purple-400">
                    Day {day.day < 10 ? `0${day.day}` : day.day}
                  </td>
                  <td className="py-3.5 px-4 font-semibold">{day.goal}</td>
                  <td className="py-3.5 px-4 font-sans text-xs text-zinc-400">{day.deliverable}</td>
                  <td className="py-3.5 px-4 font-mono text-[11px] text-zinc-500">{day.kpi}</td>
                  <td className="py-3.5 px-4 font-mono text-right text-zinc-400">{day.time}</td>
                  <td className="py-3.5 px-4 text-center">
                    <button
                      id={`btn-complete-day-${day.day}`}
                      onClick={() => handleToggleDay(day.day)}
                      className={`px-3 py-1.5 rounded-lg font-medium text-[10px] font-mono transition-all uppercase ${
                        completedDays.includes(day.day)
                          ? 'bg-purple-950/40 text-purple-200 border border-purple-900/40'
                          : 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700 border border-zinc-700'
                      }`}
                    >
                      {completedDays.includes(day.day) ? '✓ Completed' : 'Mark Done'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
