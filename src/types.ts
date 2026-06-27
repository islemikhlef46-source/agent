export interface ActionStep {
  text: string;
  checklist: string[];
  commonMistakes: string[];
  proTips: string[];
  expectedResult: string;
}

export interface Chapter {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  summary: string;
  sections: {
    title: string;
    content: string; // Markdown or simple text
    table?: {
      headers: string[];
      rows: string[][];
    };
    bullets?: string[];
    callout?: {
      title: string;
      text: string;
      type: 'info' | 'warning' | 'success';
    };
  }[];
  actionStep?: ActionStep;
}

export interface AIPrompt {
  id: string;
  purpose: string;
  tool: string;
  outputFormat: string;
  rawPrompt: string;
  variables: { name: string; label: string; placeholder: string; defaultValue: string }[];
  proTip: string;
}

export interface NicheScore {
  retention: number;
  compatibility: number;
  competition: number;
  monetization: number;
  stability: number;
}
