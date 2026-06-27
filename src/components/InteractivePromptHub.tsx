import React, { useState, useEffect } from 'react';
import { Terminal, Copy, Check, Info } from 'lucide-react';
import { SYSTEM_PROMPTS } from '../data/chapters';

export default function InteractivePromptHub() {
  const [selectedPromptId, setSelectedPromptId] = useState(SYSTEM_PROMPTS[0].id);
  const [copied, setCopied] = useState(false);
  
  // Track variable values as a key-value dictionary
  const [varValues, setVarValues] = useState<Record<string, string>>({});

  const activePrompt = SYSTEM_PROMPTS.find(p => p.id === selectedPromptId) || SYSTEM_PROMPTS[0];

  // Initialize variables when prompt selection changes
  useEffect(() => {
    const initialValues: Record<string, string> = {};
    activePrompt.variables.forEach(v => {
      initialValues[v.name] = v.defaultValue;
    });
    setVarValues(initialValues);
    setCopied(false);
  }, [selectedPromptId]);

  const handleVariableChange = (name: string, value: string) => {
    setVarValues(prev => ({ ...prev, [name]: value }));
  };

  // Replace variables in the raw prompt
  const getCompiledPrompt = () => {
    let text = activePrompt.rawPrompt;
    Object.keys(varValues).forEach((key) => {
      const val = varValues[key];
      text = text.replaceAll(`[${key}]`, val || `[${key}]`);
    });
    return text;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCompiledPrompt());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="prompt-hub-panel" className="space-y-8 max-w-5xl mx-auto">
      {/* Title */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Terminal className="w-5 h-5 text-amber-500" />
          <span className="text-xs font-mono tracking-widest text-amber-500 uppercase">SYSTEM UTILITY</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-white">Interactive Prompt Workspace</h2>
        <p className="text-sm text-zinc-400 mt-1">
          Select an algorithm-optimized prompt template below, bind your niche/concept variables on the fly, and copy the fully compiled output.
        </p>
      </div>

      {/* Grid containing select sidebar and compiler workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Prompt Selector Sidebar */}
        <div className="lg:col-span-4 space-y-3">
          <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-1">AVAILABLE TEMPLATES</span>
          <div className="space-y-2">
            {SYSTEM_PROMPTS.map((prompt) => (
              <button
                key={prompt.id}
                id={`prompt-select-${prompt.id}`}
                onClick={() => setSelectedPromptId(prompt.id)}
                className={`w-full text-left p-4 rounded-xl border text-xs transition-all space-y-2 ${
                  selectedPromptId === prompt.id
                    ? 'bg-amber-950/20 text-amber-100 border-amber-500/50 shadow-sm'
                    : 'bg-zinc-900/40 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-zinc-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] bg-zinc-950 px-1.5 py-0.5 rounded border border-zinc-800 uppercase">
                    {prompt.tool.split(' ')[0]}
                  </span>
                </div>
                <h4 className="font-semibold leading-tight">{prompt.purpose}</h4>
              </button>
            ))}
          </div>
        </div>

        {/* Compile Workspace */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-6 bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6">
          
          {/* Variables Configuration (Left half of compiler) */}
          <div className="md:col-span-5 space-y-6">
            <h3 className="text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase">
              1. BIND PARAMETERS
            </h3>

            {activePrompt.variables.length > 0 ? (
              <div className="space-y-4">
                {activePrompt.variables.map((variable) => (
                  <div key={variable.name} className="space-y-2">
                    <label className="block text-xs font-medium text-zinc-300">
                      {variable.label}
                    </label>
                    <input
                      id={`input-var-${variable.name}`}
                      type="text"
                      value={varValues[variable.name] || ''}
                      onChange={(e) => handleVariableChange(variable.name, e.target.value)}
                      placeholder={variable.placeholder}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500 transition-all font-mono"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 bg-zinc-950/50 border border-zinc-900 rounded-lg text-center text-xs text-zinc-500 italic">
                No custom parameters needed for this strategy audit.
              </div>
            )}

            {/* Pro Tip Card */}
            <div className="bg-amber-950/10 border border-amber-900/30 p-4 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-amber-400">
                <Info className="w-4 h-4" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider">SYSTEM PRO-TIP</span>
              </div>
              <p className="text-[11px] leading-relaxed text-amber-200">
                {activePrompt.proTip}
              </p>
            </div>
          </div>

          {/* Compiled Output Preview (Right half of compiler) */}
          <div className="md:col-span-7 flex flex-col h-full space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase">
                2. COMPILED OUTPUT
              </h3>
              
              <button
                id="btn-copy-prompt"
                onClick={handleCopy}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  copied 
                    ? 'bg-emerald-900/50 text-emerald-200 border border-emerald-800' 
                    : 'bg-zinc-800 text-zinc-200 border border-zinc-700 hover:bg-zinc-700'
                }`}
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Prompt'}</span>
              </button>
            </div>

            <div className="relative flex-1 bg-zinc-950 border border-zinc-800/80 rounded-xl p-4 overflow-hidden flex flex-col">
              <div className="absolute top-2 right-2 flex gap-1.5 font-mono text-[9px] text-zinc-600 uppercase">
                <span>FORMAT: {activePrompt.outputFormat.slice(0, 15)}...</span>
              </div>
              
              <textarea
                id="textarea-compiled-prompt"
                readOnly
                value={getCompiledPrompt()}
                className="w-full h-[280px] bg-transparent resize-none text-[11px] font-mono leading-relaxed text-zinc-300 focus:outline-none focus:ring-0 border-0 p-0 overflow-y-auto"
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
