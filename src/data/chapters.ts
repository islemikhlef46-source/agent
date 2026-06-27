import { Chapter, AIPrompt } from '../types';

export const SYSTEM_CHAPTERS: Chapter[] = [
  {
    id: 'quick-start',
    number: '00',
    title: 'Beginner Quick Start & 60-Minute Launch',
    subtitle: 'Zero to published in one hour — bypass analysis paralysis.',
    category: 'GETTING STARTED',
    summary: 'The biggest failure point for new creators is taking weeks to set up a channel. This sprint guides you from zero to your first published Short in exactly 60 minutes.',
    sections: [
      {
        title: 'The 60-Minute Launch Timeline',
        content: 'Follow this exact minute-by-minute protocol. Do not aim for perfection. The goal of this sprint is to break the psychological barrier of publishing.',
        table: {
          headers: ['Time Window', 'Task Focus', 'Core Deliverable', 'Tool Used'],
          rows: [
            ['00:00 - 00:10', 'Niche Commitment', 'Select 1 from 3 validated starter niches', 'Niche Decision Tree'],
            ['00:10 - 00:20', 'Identity Assembly', 'Generate Name, Logo & Banner', 'ChatGPT + Canva'],
            ['00:20 - 00:30', 'Script & Voiceover', 'Write 120w script & generate voiceover', 'ChatGPT + Google AI Studio'],
            ['00:30 - 00:45', 'Cinematic Visuals', 'Generate 8-12 scene-specific images', 'Leonardo AI'],
            ['00:45 - 00:55', 'Assembly & Captioning', 'Align media, add auto-captions & sound', 'CapCut Web'],
            ['00:55 - 01:00', 'Live Deployment', 'Publish on YouTube with metadata', 'YouTube Studio']
          ]
        }
      },
      {
        title: 'The Niche Decision Matrix (The 3 Best Starters)',
        content: 'If you are stuck, choose Psychological Mystery Stories. It has the highest viewer-retention floor, requires no advanced editing, and has a practically infinite supply of historical/archival source material.',
        bullets: [
          'Option A: Psychological Mystery Stories (Best for high-interest narrative loops)',
          'Option B: Dark History & Unsolved Crimes (Best for high emotional resonance & historical imagery)',
          'Option C: Sci-Fi "What If" Scenarios (Best for high-concept technological and cosmic visualizations)'
        ]
      }
    ],
    actionStep: {
      text: 'Execute the 60-Minute Launch Timeline. Commit to your brand elements in under 10 minutes.',
      checklist: [
        'Channel created on a clean Google Account',
        'Profile Picture and Banner uploaded',
        'First 120-word script successfully generated and voice-rendered',
        '10 scene images generated in 9:16 vertical ratio',
        'Completed Short exported at 1080x1920, 30fps and published'
      ],
      commonMistakes: [
        'Spending hours selecting the "perfect" name (nobody cares about the name on day 1)',
        'Trying to generate 4K hyper-detailed images instead of simple, atmospheric visual moods',
        'Over-complicating CapCut transitions instead of sticking to simple, hard cinematic cuts'
      ],
      proTips: [
        'Use an atmospheric, high-contrast dark profile picture with a single strong focal point (like an eye or silhouette). This immediately signals the tone of your mystery channel.'
      ],
      expectedResult: 'A fully functional YouTube channel and your very first published Short live on the platform.'
    }
  },
  {
    id: 'operating-model',
    number: '01',
    title: 'The Faceless Channel Operating Model',
    subtitle: 'Deconstruct the three-engine system that runs on pure pattern recognition.',
    category: 'FOUNDATION',
    summary: 'A profitable faceless YouTube channel is not a creative playground; it is a media business built on predictable, systematic components that run entirely on pattern recognition.',
    sections: [
      {
        title: 'The Three-Engine Architecture',
        content: 'Your media system comprises three independent engines. When properly structured, these engines allow you to step back from technical execution and focus entirely on asset coordination.',
        bullets: [
          'The Content Engine: Standard Operating Procedures (SOPs) that translate an abstract concept into structured scripts, voice tracks, and custom imagery using AI tools.',
          'The Distribution Machine: Leveraging YouTube\'s recommendation algorithms by systematically optimizing early retention (0-5s) and average viewer duration.',
          'The Monetization Stack: A multi-tiered revenue collection system that begins on Day 11 with affiliate programs, scaling into digital assets, AdSense, and direct sponsorships.'
        ],
        callout: {
          title: 'The Core Shift',
          text: 'Traditional content creation relies on expensive gear, personal charisma, and manual labor. This operating system relies entirely on pattern recognition—the ability to study data, identify attention leaks, and systematically patch them.',
          type: 'success'
        }
      }
    ],
    actionStep: {
      text: 'Configure your local work workspace directories and prepare to operate your content engine with production discipline.',
      checklist: [
        'Create a dedicated "YouTube Production" folder on your local computer or cloud drive',
        'Set up subdirectories: /01_Concepts, /02_Scripts, /03_Voiceovers, /04_Images, /05_Exports',
        'Bookmark the core tools: ChatGPT, Leonardo, Google AI Studio, and CapCut Web'
      ],
      commonMistakes: [
        'Treating the channel as a personal creative outlet instead of a systematic business asset',
        'Failing to maintain folder hygiene, causing production bottlenecks by losing source files'
      ],
      proTips: [
        'Name every file with the format [YYMMDD]_[VideoID]_[AssetName] (e.g. 260627_Short01_Voice.mp3) to ensure you can locate any asset in under 10 seconds.'
      ],
      expectedResult: 'A structured local filing system and clean workspace ready for rapid, high-frequency daily production.'
    }
  },
  {
    id: 'niche-intelligence',
    number: '02',
    title: 'Niche Intelligence & Validation',
    subtitle: 'Eliminate risk using the 5-criteria algorithmic validation framework.',
    category: 'FOUNDATION',
    summary: 'Do not guess your niche. Run it through our 5-criteria framework to ensure high-retention compatibility, easy faceless asset generation, and multiple paths to monetization.',
    sections: [
      {
        title: 'The 5-Criteria Niche Validation Framework',
        content: 'Before committing to any niche, score it out of 5 on each of these metrics. Any niche scoring lower than 18/25 total points must be immediately discarded or reframed.',
        table: {
          headers: ['Criteria', 'What to Measure', 'Pass Threshold'],
          rows: [
            ['1. Retention Potential', 'Does the topic naturally create tension, mystery, or deep curiosity?', 'Yes on 3/5 top competitor videos'],
            ['2. Faceless Compatibility', 'Can it be built entirely with cinematic stills and an AI voiceover?', 'No on-camera presence required'],
            ['3. Entry Point Feasibility', 'Are there top channels under 300K subscribers succeeding?', 'At least 2 channels with <50 videos active'],
            ['4. Monetization Alignment', 'Are there direct affiliate products or high CPM digital product angles?', 'At least 2 distinct revenue paths'],
            ['5. Trend Stability', 'Is search volume growing or stable over a 12-month rolling cycle?', 'Stable trend on Google Trends (no seasonal spikes)']
          ]
        }
      }
    ],
    actionStep: {
      text: 'Run your top 3 niche concepts through the interactive Niche Validator Tool to calculate their Algorithmic Viability Score.',
      checklist: [
        'Verified target niches on Google Trends over 12 months',
        'Found at least 3 active competitor channels with under 300K subscribers',
        'Identified at least 2 affiliate programs matching the niche theme',
        'Calculated total score and locked in the primary starting niche'
      ],
      commonMistakes: [
        'Choosing a highly seasonal niche (like Olympic sports or political campaigns) that dies off in 30 days',
        'Picking a broad niche (like general self-improvement) instead of a hyper-targeted angle (like stoic response to failure)'
      ],
      proTips: [
        'The best sub-niches are "emotionally charged subcultures." Instead of "history," focus on "Unsolved Maritime Mysteries" or "Ancient Architectural Anomalies."'
      ],
      expectedResult: 'An algorithmically validated primary niche with a clear entry-point gap and a pre-defined monetization strategy.'
    }
  },
  {
    id: 'brand-identity',
    number: '03',
    title: 'Brand Identity & Channel Architecture',
    subtitle: 'Assemble a dark, atmospheric, high-trust brand system in under 2 hours.',
    category: 'FOUNDATION',
    summary: 'Your brand elements are signals of premium authority. They must evoke a specific, consistent feeling. Spend a maximum of 2 hours setting up your identity assets.',
    sections: [
      {
        title: 'The "Atmosphere Test" for Naming',
        content: 'Your channel name should communicate the emotional territory of your content in 2 to 4 words. Avoid generic personal or generic descriptive names.',
        table: {
          headers: ['Formula', 'Asset Pattern', 'Example Name', 'Target Feeling'],
          rows: [
            ['[Emotion] + [Mystery Noun]', 'Silent + Void', 'Silent Void', 'Solitude & Dread'],
            ['[Dark Adjective] + [Realm]', 'Obsidian + Records', 'Obsidian Records', 'Historical Secrecy'],
            ['[Number] + [Time] + [Mystery]', 'Midnight + Frequencies', 'Midnight Frequencies', 'Late-Night Investigation'],
            ['[Cryptic Word] + [Common Noun]', 'Cipher + Vault', 'Cipher Vault', 'Classified Files'],
            ['[AI/Tech Signal] + [Journal]', 'Neural + Logs', 'Neural Logs', 'Cold, Algorithmic Truth']
          ]
        },
        callout: {
          title: 'The Atmosphere Rule',
          text: 'Say your channel name out loud. If it does not immediately evoke a movie scene, a cold evening, or a classified file, scrap it. "Echoes of the Unknown" passes the test. "John\'s Stories" is a total failure.',
          type: 'warning'
        }
      }
    ],
    actionStep: {
      text: 'Create and apply your channel assets using Canva and update your YouTube Studio account.',
      checklist: [
        'Channel name selected and passes the "Atmosphere Test"',
        'Logo designed with high-contrast, minimalist focus (1 shadow/silhouette)',
        'Clean, textless banner uploaded (e.g. dark textured gradient or abstract nebula)',
        'YouTube handle matched closely to your channel name',
        'Channel "About" section written to clearly describe the target feeling'
      ],
      commonMistakes: [
        'Using amateur, bright colors or default clip art on a channel supposed to feel mysterious',
        'Writing a long, generic channel description instead of a punchy, atmospheric mission statement'
      ],
      proTips: [
        'Never use text on your channel banner. Modern viewers watch on multiple devices, and text frequently gets awkwardly cropped. Keep the banner entirely abstract and atmospheric.'
      ],
      expectedResult: 'A cohesive, professional YouTube channel appearance that immediately builds viewer trust and retention.'
    }
  },
  {
    id: 'production-pipeline',
    number: '04',
    title: 'The 6-Stage Daily Production System',
    subtitle: 'The highly coordinated workflow to produce a video in under 90 minutes.',
    category: 'PRODUCTION ENGINE',
    summary: 'The difference between an amateur and a systematic media brand is the pipeline. Build your content sequentially, finishing each phase entirely before starting the next.',
    sections: [
      {
        title: 'The Modular Daily Pipeline',
        content: 'Never attempt to multi-task or jump back and forth between script writing and editing. Follow this modular sequence during every production session:',
        bullets: [
          'Stage 1: Concept & Hook Selection (20 Min) — Rate 10 hooks. Lock the best. Save backups in your Hook Bank.',
          'Stage 2: Script Writing (25 Min) — Write a tight, 120-word script. Execute the 3-part narrative arc.',
          'Stage 3: Image Generation (35 Min) — Translate script scene beats into 8-12 high-impact cinematic stills.',
          'Stage 4: Voiceover & Audio Layering (20 Min) — Render voice track, layer ambient drones, and adjust levels.',
          'Stage 5: Editing & Caption Assembly (25 Min) — Import assets, align timing to beats, and apply hard cuts.',
          'Stage 6: Metadata Optimization (10 Min) — Write a click-maximizing title and publish/schedule.'
        ]
      }
    ],
    actionStep: {
      text: 'Run a mock production run using this sequence. Track your actual time spent on each module to identify execution bottlenecks.',
      checklist: [
        'Concept locked in before launching any asset generator',
        'Script written entirely before generating any images',
        'Images generated and cataloged by scene beat number (01 to 10)',
        'Audio rendered and layered before importing media into the editor',
        'Captions generated automatically and manually checked for spacing errors'
      ],
      commonMistakes: [
        'Editing while still generating images (causes heavy cognitive fatigue and extends production time by hours)',
        'Failing to set strict timers for each stage, allowing a 90-minute process to drag into a full-day chore'
      ],
      proTips: [
        'Treat your production session as a factory assembly line. If an image prompt doesn\'t output a perfect result on the first try, move on immediately. Speed and consistency always beat micro-adjustments.'
      ],
      expectedResult: 'Your entire production timeline compressed down to under 2 hours with zero loss in visual and audio quality.'
    }
  },
  {
    id: 'ai-hook-database',
    number: '05',
    title: 'AI Hook Database & Retention Science',
    subtitle: 'Leverage the Zeigarnik Effect to instantly stop the scroll reflex.',
    category: 'PRODUCTION ENGINE',
    summary: 'A video that fails to capture attention in the first 3 seconds is buried by the algorithm. The hook is not creative writing—it is an algorithmic psychological trigger with a single function: open an unanswerable curiosity loop.',
    sections: [
      {
        title: 'The Zeigarnik Effect & Incomplete Information',
        content: 'The human brain experiences incomplete information as a cognitive "itch" that it is biologically forced to scratch. Your opening line must immediately violate the viewer\'s model of reality, creating cognitive dissonance that demands resolution.'
      },
      {
        title: 'The Constantly Updated Notion Hook Database',
        content: 'Instead of memorizing hundreds of static hooks or looking at outdated lists inside a PDF, you must use our live, constantly updated, and fully categorized Notion database.',
        bullets: [
          'The database is divided into 8 distinct psychological categories (Impossible Events, Curiosity Gaps, Fear & Threat, etc.).',
          'Each formula includes direct psychology breakdowns and instant copy-paste variations.',
          'The database is updated weekly with real-time algorithmically validated hooks from top-performing creators.',
          'Much faster to search, filter, and adapt than a static, flat document.'
        ],
        callout: {
          title: 'Access the Live Database',
          text: 'Access the constantly updated database here: https://luxurious-punch-55e.notion.site/ccf0f7b3dad54193b239052e9bd32b78?v=f54cd6bdf231462dae0f4fdccfd13c2b',
          type: 'success'
        }
      }
    ],
    actionStep: {
      text: 'Bookmark the Notion Hook Database and pull 5 distinct hooks into your local Hook Bank to use in your next production run.',
      checklist: [
        'Notion Hook Database successfully bookmarked on your browser',
        'Extracted 3 "Impossible Event" hooks matching your chosen niche',
        'Extracted 2 "Curiosity Gap" hooks as backup templates',
        'Identified the core psychological trigger behind each chosen hook'
      ],
      commonMistakes: [
        'Using descriptive or introductory hooks (e.g. "Today we are looking at this case") instead of starting mid-crisis',
        'Failing to match the visual pacing to the psychological urgency of the hook line'
      ],
      proTips: [
        'The absolute strongest hooks are written in the passive voice with specific timestamps. For example: "At 3:17 AM, a text was sent from a phone that had been disconnected for seven years."'
      ],
      expectedResult: 'A systematic understanding of early-retention mechanics and instant access to a database of tested, high-CTR hook variations.'
    }
  },
  {
    id: 'script-writing',
    number: '06',
    title: 'Script Writing Mastery',
    subtitle: 'The 3-part script architecture and the mandatory Read-Aloud Protocol.',
    category: 'PRODUCTION ENGINE',
    summary: 'A Short is a highly concentrated 38-second narrative experience. Every sentence must escalate the emotional stakes, ending with a sharp reveal that closes the loop while leaving a lingering sense of unease.',
    sections: [
      {
        title: 'The 3-Part Script Architecture',
        content: 'Your script must follow this exact structural breakdown to hold retention from start to finish. Never deviate from this framework.',
        table: {
          headers: ['Section', 'Optimal Timestamp', 'Word Count Limit', 'Core Function', 'Audio Pacing'],
          rows: [
            ['1. Hook', '0.0 - 3.0s', '8 - 14 words', 'Violate reality, open the core curiosity loop', 'Complete silence or single heavy sub-bass drop'],
            ['2. Rising Tension', '3.0 - 28.0s', '75 - 90 words', 'Add specific details, sensory cues, and escalate stakes', 'Continuous drone + heartbeat loop at 0.9x speed'],
            ['3. The Reveal', '28.0 - 38.0s', '15 - 25 words', 'Deliver the final chilling fact that resolves the loop', 'Total audio drop followed by a single final note']
          ]
        }
      },
      {
        title: 'The Mandatory Read-Aloud Test Protocol',
        content: 'The biggest failure point of AI-written scripts is that they look fine on screen but sound incredibly robotic when spoken. Before rendering any audio, stand up and read your script out loud. You must revise or cut any phrase that causes you to:',
        bullets: [
          'Stumble or pause naturally (indicates poor syntax flow)',
          'Breathe in an unnatural place (indicates a sentence is too long)',
          'Use flat, generic adjectives instead of hard, sensory verbs',
          'Repeat a word from the previous sentence unnecessarily',
          'Feel a mild desire to skip ahead or lose focus'
        ]
      }
    ],
    actionStep: {
      text: 'Draft your first 120-word script using the Script Writing Workspace and perform the Read-Aloud Protocol twice.',
      checklist: [
        'Script falls within the strict 110-125 word limit',
        'Hook is under 14 words and starts with zero introduction',
        'Sensory details (e.g. cold, damp, metallic, hum) included in the tension build',
        'Passed the complete Read-Aloud Test with zero verbal stumbles'
      ],
      commonMistakes: [
        'Including introductory filler like "Welcome back to the channel" or "Have you ever wondered..."',
        'Ending with a weak call-to-action like "Like and subscribe" instead of leaving the audience completely stunned'
      ],
      proTips: [
        'Never use adjectives to describe emotions. Do not write "The terrifying creature arrived." Write "The breathing was heard on the other side of the heavy oak door." Let the audience feel the fear themselves.'
      ],
      expectedResult: 'A perfectly paced, highly physical script ready for high-quality audio rendering.'
    }
  },
  {
    id: 'image-generation',
    number: '07',
    title: 'Cinematic Visual Generation',
    subtitle: 'Generate high-contrast, atmospheric vertical stills with Leonardo & Higgsfield.',
    category: 'PRODUCTION ENGINE',
    summary: 'Faceless channels do not need advanced animation. They require high-contrast, atmospheric visual stills that reinforce the emotional texture of your narrative. Keep your prompts ultra-consistent.',
    sections: [
      {
        title: 'The Cinematic Prompts Architecture',
        content: 'To generate visual consistency across your scene beats, use this highly structured prompt template inside Leonardo AI or Higgsfield. Do not change the styling variables:',
        bullets: [
          'Core Formula: "cinematic still, [SCENE_DESCRIPTION in 10-15 words], dark atmospheric lighting, [MOOD: fog/shadow/moonlight/storm], high contrast, photorealistic, 9:16 vertical aspect ratio, no text, no people or one silhouette only"',
          'Camera Setting Tip: Add "in the style of Roger Deakins cinematography" at the end of your prompt for a dramatic, cinematic film aesthetic, or "in the style of Hopper" for a cold, isolated feeling.'
        ],
        callout: {
          title: 'Higgsfield Video Tip',
          text: 'Use Higgsfield\'s image-to-video tool with a slight "camera zoom" or "slow pan" motion parameter (set to 15-20%) on your key images to add subtle, high-retention movement to your background.',
          type: 'info'
        }
      }
    ],
    actionStep: {
      text: 'Generate a cohesive set of 8 images for your first script using your chosen visual styling.',
      checklist: [
        'Selected 1 consistent visual styling (e.g., Roger Deakins style, cold blue-silver color grade)',
        'Generated exactly 8-12 images matching each narrative scene beat',
        'No visible text, garbled AI artifacts, or weird extra limbs on characters',
        'All images exported in high resolution 9:16 vertical ratio'
      ],
      commonMistakes: [
        'Mixing completely different art styles (e.g., standard photos, 3D renders, and cartoons) in the same video',
        'Accepting images with visible text anomalies instead of immediately regenerating them'
      ],
      proTips: [
        'To generate high-impact thumbnails, use the same cinematic prompt template but change the aspect ratio parameter to "16:9 aspect ratio." Focus on a single central object rather than a wide environmental shot.'
      ],
      expectedResult: 'A dedicated folder containing 10 visually stunning, highly cohesive images that perfectly fit your audio story.'
    }
  },
  {
    id: 'voiceover-audio',
    number: '08',
    title: 'Sound Design & Voiceover',
    subtitle: 'Optimize TTS voiceovers and configure the 3-layer audio stack.',
    category: 'PRODUCTION ENGINE',
    summary: 'Audio is 50% of the cinematic experience. A default, raw TTS voiceover immediately signals a low-quality, automated channel. You must optimize and layer your audio systematically.',
    sections: [
      {
        title: 'The Three-Layer Audio Stack',
        content: 'Your master audio track must comprise three distinct layers mixed at precise relative volumes to ensure maximum depth and professional quality:',
        table: {
          headers: ['Layer Type', 'Source Pattern', 'Relative Volume', 'Core Purpose'],
          rows: [
            ['1. Narration Track', 'Google AI Studio or ElevenLabs (optimized voice)', '100% volume (max output)', 'Delivers the narrative with absolute clarity and pacing'],
            ['2. Ambient Drone', 'Pixabay Music (low atmospheric drone)', '15% - 20% volume', 'Creates a continuous floor of tension that masks TTS silences'],
            ['3. Heartbeat / SFX', 'Freesound (subtle bass pulse or wind rustle)', '25% - 30% volume', 'Punctuates transitions and escalates the biological fear reflex']
          ]
        },
        callout: {
          title: 'The 0.9x Rule',
          text: 'Never play your voiceover at normal speed. Scale the playback rate to exactly 0.9x speed inside your editor. This slight elongation adds gravity, weight, and a chilling sense of reality to the voice.',
          type: 'success'
        }
      }
    ],
    actionStep: {
      text: 'Render your script voiceover, download your background tracks, and mix them together inside CapCut.',
      checklist: [
        'Voice track rendered and verified with clear, human-like cadence',
        'Narration playback rate set to exactly 0.9x speed',
        'Two royalty-free ambient audio tracks downloaded and placed in your assets folder',
        'Ambient drone mixed to be clearly audible but completely non-distracting beneath the narration'
      ],
      commonMistakes: [
        'Using loud, generic synth wave music that completely overpowers the voiceover track',
        'Failing to trim silences at the very start and end of the audio track, creating awkward dead air'
      ],
      proTips: [
        'Before the final reveal (last 2-3 seconds of the video), completely cut out all background music and ambient sounds. This sudden drop into absolute silence triggers a massive psychological focus spike in the viewer.'
      ],
      expectedResult: 'A highly cinematic, professional master audio track that keeps the viewer fully immersed in the narrative.'
    }
  },
  {
    id: 'capcut-editing',
    number: '09',
    title: 'CapCut Editing Masterclass',
    subtitle: 'Standardize visual pacing using the exact Ken Burns and caption presets.',
    category: 'PRODUCTION ENGINE',
    summary: 'Do not spend weeks learning complex video editors. CapCut Web has every premium tool you need. The key is strict restraint—focus entirely on hard cuts and clean, high-contrast captions.',
    sections: [
      {
        title: 'The "Restraint First" Editing Protocol',
        content: 'Amateur editors try to hide weak content behind flashy transitions, spins, and screen shakes. Professional editors know that restraint is sophistication. Follow these precise editing parameters:',
        bullets: [
          'Hard Cuts Only: Never use cross-dissolves, page turns, or slide transitions. Simply let one image transition cleanly into the next on a heavy audio beat.',
          'The 10% Ken Burns Rule: Every single image must have a slow, constant zoom (either constant 100% to 110% zoom-in, or 110% to 100% zoom-out). Static images immediately kill modern retention.',
          'Caption Formula: Font: Inter or Montserrat (Bold), Size: 18-20, Color: White, Stroke: 2px Black, Position: Center-Bottom. Show exactly 2-4 words per caption frame to force active reading.'
        ]
      }
    ],
    actionStep: {
      text: 'Import your assets into CapCut Web and edit your video following our strict design specifications.',
      checklist: [
        'All media imported and aligned cleanly to the voiceover narrative beats',
        '10% constant Ken Burns zoom applied to every single visual asset',
        'Auto-captions generated and styled with high-contrast borders',
        'Captions manually reviewed and split into short, punchy 3-word chunks',
        'Project exported at exactly 1080x1920 resolution, 30fps, MP4 format'
      ],
      commonMistakes: [
        'Using distracting, colorful gradient text styles on captions that make them unreadable',
        'Adding random screen glitches or animated emoji stickers that destroy the serious cinematic mood'
      ],
      proTips: [
        'Apply a very subtle "Classic Vignette" filter (opacity 15-20%) across your entire video. This darkens the corners of the frame, naturally drawing the viewer\'s eye directly to the bright, centered caption text.'
      ],
      expectedResult: 'A highly polished, cinematic Short that matches the aesthetic standards of channels with millions of views.'
    }
  },
  {
    id: 'retention-psychology',
    number: '10',
    title: 'Retention Psychology & The 38-Second Map',
    subtitle: 'The 6 core retention mechanics and the second-by-second emotional blueprint.',
    category: 'RETENTION ENGINEERING',
    summary: 'Every single element in your Short must be deliberately placed to guide the viewer through a series of emotional states. Use our second-by-second map to align your assets with the human dopamine cycle.',
    sections: [
      {
        title: 'The 6 Psychological Retention Mechanisms',
        content: 'To hold a viewer from start to finish, your video must actively trigger at least three of these psychological mechanisms:',
        table: {
          headers: ['Mechanism', 'Psychological Trigger', 'Execution Pattern', 'Example Script Line'],
          rows: [
            ['Curiosity Loop', 'An unanswered question is opened', 'Deploy a mystery fact within the first 3 seconds', '"He received a voicemail... sent 3 years after his death."'],
            ['Open Narrative Loop', 'A narrative thread is started but held back', 'State a key detail but explicitly delay the reveal', '"He left a final note. We will come back to what it said."'],
            ['Escalating Stakes', 'The situation becomes increasingly serious', 'Structure facts from normal to unexplained to impossible', '"First a whisper, then a silhouette, then a physical mark."'],
            ['Specificity Signal', 'Precise details build absolute trust', 'Replace vague time/dates with hyper-specific numbers', '"She disappeared at exactly 11:47 PM on a rainy Tuesday."'],
            ['Dopamine Pacing', 'Alternate between withholding and mini-rewards', 'Reveal a minor fact every 10 seconds while expanding the main mystery', '"The lock was broken, but not from the outside."'],
            ['Narrative Tension', 'Two competing possibilities are held in conflict', 'Force the viewer to actively guess between two outcomes', '"Either he was telling the truth—or he wanted to be found."']
          ]
        }
      },
      {
        title: 'The 38-Second Emotional Map',
        content: 'Map your visual cuts, audio volumes, and narration speed directly to this retention-maximizing timeline:',
        bullets: [
          '0:00 - 0:03 (Curiosity Spike): Slow narration pace. Full frame visual. Silence or sub-bass drop.',
          '0:03 - 0:08 (Tension Entry): Normal narration. Slow Ken Burns zoom begins. Low ambient drone begins.',
          '0:08 - 0:18 (Escalation Phase): Slightly faster narration. Subtle heartbeat sound begins.',
          '0:18 - 0:28 (Peak Tension): Fastest narration. Audio drone volume increases by 15%. Darkest, most dramatic image.',
          '0:28 - 0:32 (The Reveal): Sudden slowdown in voice. All background audio drops to absolute silence. Visual freezes.',
          '0:32 - 0:38 (Lingering Loop): Trailing narration. Faint final audio note fades. Visual holds, caption lingers on screen.'
        ]
      }
    ],
    actionStep: {
      text: 'Compare your edited video timeline directly against the 38-Second Emotional Map. Adjust keyframes to match the tension spikes.',
      checklist: [
        'Audio drone volume modulated to match tension levels',
        'Complete background sound drop applied 2 seconds before the final reveal',
        'Caption text speed increased slightly during the escalation phase',
        'Final scene visual holds on screen for exactly 5 seconds post-reveal to absorb the impact'
      ],
      commonMistakes: [
        'Maintaining a completely flat narration volume and speed across the entire 38 seconds',
        'Placing the final reveal too early, causing viewers to swipe away before the video fully ends'
      ],
      proTips: [
        'If your retention curves show a drop-off at 8 seconds, insert an explicit "Open Loop" line right at the 7-second mark. For example: "But what they found inside that drawer would change the case forever."'
      ],
      expectedResult: 'A mathematically engineered video flow that maximizes Average Viewer Duration and signals the algorithm to distribute your content.'
    }
  },
  {
    id: 'curve-diagnostics',
    number: '11',
    title: 'Analytics Diagnostics & The 48-Hour Rule',
    subtitle: 'Read your audience retention curve like an expert and patch attention leaks.',
    category: 'RETENTION ENGINEERING',
    summary: 'The biggest mistake creators make is posting a video and moving on. Your retention curve contains the exact answers to why your channel is not growing. You must perform an autopsy on every upload.',
    sections: [
      {
        title: 'The 48-Hour Retention Diagnosis Matrix',
        content: 'Wait exactly 48 hours after publishing for YouTube Studio to populate your retention data. Then, identify your curve pattern and apply the exact structural patch below:',
        table: {
          headers: ['Curve Pattern', 'Algorithmic Diagnosis', 'Immediate Technical Fix'],
          rows: [
            ['Sharp cliff drop at 0-3s', 'Hook failed completely. Too descriptive or lacks cognitive dissonance.', 'Scrap hook. Re-write using an Impossible Event formula. Test 3 title variants.'],
            ['Gradual downward slide (5-20s)', 'Narrative lost momentum. Too much filler or predictable sentences.', 'Insert an explicit "Open Loop" at 8 seconds. Cut out 20% of generic adjectives.'],
            ['Sudden sharp drop at single second', 'Visual artifact or audio glitch broke the viewer\'s immersion.', 'Locate the exact timestamp. Identify the bad frame or loud sound. Delete or replace it.'],
            ['Flat plateau followed by drop', 'The story held interest, but the reveal was highly predictable.', 'Rewrite the reveal to be more specific, less obvious, or more psychologically disturbing.'],
            ['Spike or bump midway through', 'Viewers rewound or paused to re-read or look closer at a visual.', 'Analyze that frame. Replicate that exact text/visual density in your next 3 videos.']
          ]
        },
        callout: {
          title: 'The 48-Hour Rule',
          text: 'Spend 30 minutes studying your retention curves every single week. This simple habit will double your retention rates within your first 10 uploads. Data beats guesswork every single time.',
          type: 'success'
        }
      }
    ],
    actionStep: {
      text: 'Log into YouTube Studio, open your last video\'s analytics, and diagnose the primary attention leak.',
      checklist: [
        'Identified the exact retention percentage at the 5-second mark (Target: 75%+)',
        'Located the largest percentage drop-off point on the timeline',
        'Matched the drop-off timestamp to the exact script line or visual in your video',
        'Documented the exact fix to apply on your next script draft'
      ],
      commonMistakes: [
        'Blaming the "algorithm" for poor views instead of looking at a 40% retention curve',
        'Changing your entire niche because a single video failed, instead of patching the hook'
      ],
      proTips: [
        'If a video has a high retention rate (65%+) but very low views, the problem is not the content—it is the Title/Thumbnail. A/B test a more provocative, mystery-focused title immediately.'
      ],
      expectedResult: 'A systematic optimization loop that guarantees every video you publish is mathematically superior to your last.'
    }
  },
  {
    id: 'thumbnail-psychology',
    number: '12',
    title: 'Thumbnail Psychology System',
    subtitle: 'The 4 visual archetypes that trigger mandatory clicks.',
    category: 'RETENTION ENGINEERING',
    summary: 'A title and thumbnail must work in perfect synergy. Your thumbnail must present a visual anomaly that is impossible for the brain to process without clicking to find out the truth.',
    sections: [
      {
        title: 'The 4 High-CTR Thumbnail Archetypes',
        content: 'Never upload custom thumbnails that are busy, crowded, or full of text. Stick strictly to these four validated, highly cinematic archetypes:',
        bullets: [
          'Archetype 1: The Monochromatic Silhouette — A single dark figure standing against a strong light source (dense fog, moonlight, dark forest clearing). Evokes extreme curiosity and isolation.',
          'Archetype 2: The Macro Evidence Focus — Extreme close-up of a single highly specific, out-of-context object (an old rotary phone off the hook, a dusty locked diary, an old key on a wet table).',
          'Archetype 3: The Blurred CCTV Perspective — Low-resolution, grainy security camera shot looking down an empty hallway or parking lot with a single faint figure in the distance.',
          'Archetype 4: The Closed Threshold — A heavy, locked iron or wooden door with light leaking from the bottom, or an open hatch leading into total darkness.'
        ],
        table: {
          headers: ['Archetype', 'Core Composition Rule', 'Text Overlay Rule', 'Target CTR'],
          rows: [
            ['Silhouette', 'Subject positioned on the left-third of frame', 'STRICTLY ZERO TEXT', '8.5% - 11.5%'],
            ['Evidence Focus', 'Extreme shallow depth of field (blurred background)', 'Max 2 words (e.g. "FOUND COLD")', '7.0% - 9.5%'],
            ['CCTV Perspective', 'Grainy, desaturated green-silver color grade', 'Timestamp watermark at top-right', '9.0% - 12.0%'],
            ['Threshold', 'High contrast between shadow and bright light leak', 'STRICTLY ZERO TEXT', '8.0% - 10.5%']
          ]
        }
      }
    ],
    actionStep: {
      text: 'Generate a high-impact, textless thumbnail still using Leonardo AI and apply it to your upcoming video.',
      checklist: [
        'Thumbnail style selected from the 4 validated archetypes',
        'Image generated in 16:9 widescreen ratio',
        'Composition strictly follows the rule of thirds (focal point on left or right)',
        'Zero messy, distracting graphic design overlays or cartoon elements'
      ],
      commonMistakes: [
        'Adding large, red arrows or circles (makes your brand look cheap, spammy, and untrustworthy)',
        'Including too many details, making the thumbnail completely unreadable on mobile screens'
      ],
      proTips: [
        'Test your thumbnail readability at micro-scale. Shrink your thumbnail image down to 50x50 pixels on your screen. If the central mystery object or silhouette is no longer clearly recognizable, scrap it and zoom in.'
      ],
      expectedResult: 'A clean, highly professional, cinema-grade thumbnail that naturally commands a high Click-Through Rate.'
    }
  },
  {
    id: 'monetization-blueprint',
    number: '13',
    title: 'The Full Monetization Operating Stack',
    subtitle: 'Activate 4 distinct revenue streams in a highly coordinated, realistic timeline.',
    category: 'MONETIZATION BLUEPRINT',
    summary: 'Do not wait for the YouTube Partner Program (YPP) to start earning. AdSense pays the lowest rates. Set up your monetization stack sequentially, starting on Day 11.',
    sections: [
      {
        title: 'The Multi-Tier Activation Timeline',
        content: 'A high-converting faceless channel uses its viewer attention to feed a stack of backend revenue streams. Activate these streams in this exact chronological order:',
        table: {
          headers: ['Revenue Stream', 'Optimal Activation', 'Pre-Requisite Metric', 'Average Earning Potential', 'Ease of Setup'],
          rows: [
            ['1. High-Ticket SaaS Affiliates', 'Day 11 (Week 2)', 'None (0 subscribers required)', '$15 - $200 per referral', 'Instant (15 mins)'],
            ['2. Custom Digital Products', 'Month 2 - 3', '500+ highly engaged subscribers', '$9 - $29 per direct sale', 'Medium (3 hours)'],
            ['3. YouTube Partner Program (AdSense)', 'Month 3 - 6', '1K subs + 4K watch hours', '$2.50 - $6.50 RPM', 'Automatic (once hit)'],
            ['4. Brand Sponsorships', 'Month 6+', '5K - 10K stable average views', '$300 - $1,500 per video slot', 'Hard (requires outreach)']
          ]
        }
      },
      {
        title: 'The Day-11 Affiliate Setup Protocol',
        content: 'On Day 11, apply to the affiliate programs of the exact tools you are already using to run your channel (ElevenLabs, Leonardo AI, CapCut). Place your affiliate link directly in your description template using this exact copy-writing format:',
        bullets: [
          'Line 1 of description: [Mystery-focused video hook or summary]',
          'Line 2 of description: "The voice in this video was AI-generated using ElevenLabs. Try it for free here: [YOUR_AFFILIATE_LINK]"',
          'Line 3 of description: "Cinematic visuals generated using Leonardo AI. Access free daily tokens: [YOUR_AFFILIATE_LINK]"'
        ]
      }
    ],
    actionStep: {
      text: 'Register for your first three SaaS affiliate programs and update your video description template.',
      checklist: [
        'Applied to ElevenLabs Affiliate Program via elevenlabs.io/affiliates',
        'Applied to Leonardo AI / PartnerStack affiliate networks',
        'Updated your master description notepad with the new tracking links',
        'Added the tracking links to the description of all active published videos'
      ],
      commonMistakes: [
        'Promoting completely irrelevant products (like generic diet pills or dropshipping courses) that break viewer trust',
        'Failing to disclose affiliate links, which violates platform guidelines and damages credibility'
      ],
      proTips: [
        'The best digital product to launch in Month 2 is a simple, premium "Prompt Pack" or "Hook Bank" PDF. Package the exact prompts you used to grow your channel and sell it for $9.99 on Gumroad. Your audience already wants your exact workflow.'
      ],
      expectedResult: 'A fully monetized description framework capable of generating passive referral commissions from every single view.'
    }
  },
  {
    id: 'failure-autopsy',
    number: '14',
    title: 'Failure Autopsy: 8 Fatal Mistakes',
    subtitle: 'Diagnose, patch, and prevent the exact reasons why 90% of channels fail.',
    category: 'TROUBLESHOOTING',
    summary: 'The majority of new YouTube channels fail within their first 30 days. Not because the market is saturated, but because creators make the same predictable, avoidable execution mistakes. Here is the clinical autopsy.',
    sections: [
      {
        title: 'The 8 Clinical Failure Modes & Protocols',
        content: 'If your channel is stagnating, match your symptoms to one of these eight documented failure modes and apply the exact clinical protocol immediately:',
        bullets: [
          'Failure 1: Raw AI Scripting (Symptom: 30% retention at 5s. Cure: Run the 90-second Read-Aloud Protocol on every single sentence. Strip out all generic adjectives.)',
          'Failure 2: Robotic TTS Voice (Symptom: High dislike ratio, comments pointing out AI. Cure: Pitch-down Google Journey or ElevenLabs voices. Slow speed to exactly 0.9x. Layer an atmospheric ambient drone.)',
          'Failure 3: Descriptive Opening Hooks (Symptom: Massive drop in the first 2 seconds. Cure: Scrap introductions. Start directly mid-crisis with an Impossible Event or Curiosity Gap hook.)',
          'Failure 4: Visual Pacing Monotony (Symptom: Viewers swipe away at 15 seconds. Cure: Apply the 10% constant Ken Burns zoom to every image. Swap images every 3-4 seconds.)',
          'Failure 5: Over-Editing & Graphic Noise (Symptom: Video looks busy and childish. Cure: Remove 50% of visual transitions. Stick strictly to hard cuts. Use Inter font for captions.)',
          'Failure 6: Inconsistent Brand Tone (Symptom: Occasional viral spike but zero subscriber conversions. Cure: Stick strictly to one emotional territory (e.g. mystery or dark history) for 90 days. Do not mix genres.)',
          'Failure 7: Blindly Chasing Short-Lived Trends (Symptom: Instant views that dry up in 24 hours. Cure: Build timeless narrative assets based on core psychological hooks rather than viral meme audio.)',
          'Failure 8: Uploading Without Data Analysis (Symptom: 30 videos published with flatline views. Cure: Enforce the 48-Hour Analytics Rule. Map your retention curves and patch attention leaks before exporting your next video.)'
        ]
      }
    ],
    actionStep: {
      text: 'Run your channel through the 8-point Failure Diagnostics Checklist and isolate your primary attention leak.',
      checklist: [
        'Every active video script verified to have passed the Read-Aloud Test',
        'TTS voice pitch and speed set to cinematic standards',
        'Zero promotional or introductory lines in the first 5 seconds',
        'All visual assets styled with continuous, subtle motion (Ken Burns)',
        'Weekly retention curve audit scheduled on your calendar'
      ],
      commonMistakes: [
        'Ignoring comments and analytics because they are "painful" to read',
        'Repeating the same low-retention editing habits across 50 videos hoping for a "viral miracle"'
      ],
      proTips: [
        'Treat every failure as a raw data point. A video with 10 views is not a personal failure; it is a highly specific signal that your Title/Thumbnail did not trigger click interest. Fix the signal, do not abandon the system.'
      ],
      expectedResult: 'A robust, self-correcting channel system that quickly isolates and patches attention leaks before they cause creator burnout.'
    }
  }
];

export const SYSTEM_PROMPTS: AIPrompt[] = [
  {
    id: 'niche-research',
    purpose: 'Identify 15 highly viable faceless YouTube niches with underserved sub-angles.',
    tool: 'ChatGPT / Claude',
    outputFormat: '15-row structured analysis table with estimated metrics',
    rawPrompt: `You are a world-class YouTube growth strategist specializing in faceless channels. I need you to identify 15 highly viable niches for a faceless channel launching in 2026. 

For each niche, you must provide:
1. Estimated average audience retention rate (based on historical performance of mystery/info formats).
2. Monetization difficulty rating (on a strict 1-5 scale, where 1 is easiest and 5 is hardest).
3. Content supply rating (on a 1-5 scale representing how easy it is to find infinite, unique story topics).
4. Top 2 competitor channel examples (real channels currently active with under 500K subscribers).
5. One specific, underserved sub-niche angle that allows a new creator to bypass the general competition.

Format your output as a highly polished, structured markdown table. Be brutally honest and conservative about monetization difficulty and entry barriers. Do not provide generic advice.`,
    variables: [],
    proTip: 'Ask the AI to re-run the prompt with the specific constraint: "Focus exclusively on competitor channels that have published under 50 videos total but are already averaging over 20K views per video." This reveals exact algorithmic entry-point gaps.'
  },
  {
    id: 'niche-validation',
    purpose: 'Perform a comprehensive competitive and trend audit on a single target niche.',
    tool: 'ChatGPT / Perplexity',
    outputFormat: 'Detailed 6-part Algorithmic Niche Viability Report',
    rawPrompt: `You are a senior media analyst. Perform an exhaustive competitive audit on the following target niche: "[YOUR_NICHE]". 

Your report must cover:
1. Search trend direction (growing, stable, or declining) and rolling 12-month keyword analysis.
2. Estimated competition level, including the sub counts and upload frequency of the top 5 active channels in this space.
3. Average video length performing best (Shorts vs. medium-form vs. long-form).
4. Top 3 underserved, high-curiosity topic angles that are currently ignored by the top competitors.
5. High-ticket affiliate programs and specific digital product opportunities matching this audience\'s psychological profile.
6. Recommended weekly posting cadence and optimal distribution schedule based on historical viewer activity.

Provide specific, actionable data points. Avoid vague marketing generalities.`,
    variables: [
      { name: 'YOUR_NICHE', label: 'Target Niche', placeholder: 'e.g. Ancient Maritime Mysteries', defaultValue: 'Ancient Maritime Mysteries' }
    ],
    proTip: 'Run this exact prompt inside Perplexity to leverage real-time live search indexing. This ensures your competitive metrics, sub counts, and active affiliate program commission structures are accurate to this exact day.'
  },
  {
    id: 'hook-generation',
    purpose: 'Generate 10 highly psychological opening hooks from a single story concept.',
    tool: 'ChatGPT / Claude',
    outputFormat: 'Numbered list of 10 copy-paste ready hooks under 12 words',
    rawPrompt: `You are a master conversion copywriter and retention engineer for high-retention YouTube Shorts. Generate 10 opening hooks for the following concept: "[YOUR_CONCEPT]".

You must adhere strictly to these engineering constraints:
1. Every hook must be under 12 words total.
2. Every hook must open an immediate, unanswerable question (leverage the Zeigarnik Effect).
3. Avoid cheap clickbait adjectives like "shocking", "terrifying", "insane", or "unbelievable". Create the emotion using physical context.
4. Use highly specific numbers, times, dates, or physical objects where possible to signal credibility.
5. Each hook must involve an unnamed person, place, or event to heighten the mysterious atmosphere.
6. Format the output as a simple numbered list. Do not include any introductory text, concluding text, or conversational explanations.`,
    variables: [
      { name: 'YOUR_CONCEPT', label: 'Story Concept', placeholder: 'e.g. A diary found in an old abandoned bunker', defaultValue: 'A diary found in an old abandoned bunker' }
    ],
    proTip: 'Paste the output list back into the AI and ask: "Which of these hooks would YOU click on if you saw it at 11:30 PM on a dark rainy night and why? Rank them based on raw psychological curiosity." The AI\'s reasoning will teach you the mechanics of hook design.'
  },
  {
    id: 'script-writing',
    purpose: 'Draft a high-retention, 120-word complete script matching the 3-part narrative arc.',
    tool: 'ChatGPT',
    outputFormat: '120-word ready-to-render narration script',
    rawPrompt: `You are a senior creative director specializing in mystery-focused storytelling. Write a highly cinematic, 120-word YouTube Shorts narration script based on this validated opening line: "[YOUR_HOOK]".

The script must conform strictly to this 3-part narrative architecture:
1. The Hook (0-3s, 10-15 words): Start directly with the provided hook. Absolutely no introductions.
2. Rising Tension (4-28s, 75-90 words): Escalate the mystery by adding physical details, sensory cues (sounds, dampness, cold, heavy silences), and specific timestamps. Do not explain the mystery; build the dread.
3. The Reveal (29-38s, 15-25 words): Deliver the final chilling, verified fact that resolves the immediate hook loop while leaving a lingering feeling of unease.

Style constraints:
- Use incredibly short, punchy sentences (8-12 words max).
- Write in the present tense to force immediate, real-time viewer immersion.
- Avoid passive language, corporate transitions, or generic narrative summaries.
- Deliver ONLY the script text itself. Do not include scene directions, bracketed audio cues, or conversational commentary.`,
    variables: [
      { name: 'YOUR_HOOK', label: 'Opening Hook', placeholder: 'e.g. At 3:17 AM, a text was sent from a disconnected phone.', defaultValue: 'At 3:17 AM, a text was sent from a disconnected phone.' }
    ],
    proTip: 'Once generated, copy the script into your editing notepad. Stand up, set a timer for 38 seconds, and read it out loud at a slow, deliberate narration pace. If you run out of breath or stumble, rewrite that sentence immediately.'
  }
];
