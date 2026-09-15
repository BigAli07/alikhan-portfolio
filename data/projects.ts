export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  status: string;
  summary: string;
  problem: string;
  approach: string[];
  challenges: string[];
  lessons: string[];
  technologies: string[];
  future: string[];
  github?: string;
  demo?: string;
};
export const projects: Project[] = [
  {
    slug: "unioncad",
    title: "UnionCAD",
    tagline: "From natural language to intentional geometry.",
    category: "AI SYSTEMS / CAD / AGENTS",
    status: "In development",
    summary:
      "A conversational CAD system exploring how an intelligent software layer can translate a user's intent into structured, validated CAD operations.",
    problem:
      "Describing a part is easy. Turning that description into the right sequence of geometry operations—without losing track of software state, permissions, or errors—is a much harder systems problem.",
    approach: [
      "Translate natural language into explicit intent and constraints.",
      "Plan ordered CAD operations through structured tool calls.",
      "Validate geometry, permissions, and software state before execution.",
      "Design fail-safe execution and recovery paths when an operation fails.",
    ],
    challenges: [
      "Maintaining consistent state between an agent and the CAD environment.",
      "Choosing tools and ordering operations under ambiguous instructions.",
      "Separating a plausible plan from an operation that is safe to execute.",
    ],
    lessons: [
      "A useful agent needs explicit boundaries, not just a capable model.",
      "Validation and error recovery belong in the architecture from the beginning.",
    ],
    technologies: [
      "AI agents",
      "Structured tool calls",
      "CAD automation",
      "State management",
    ],
    future: [
      "Develop the execution and validation layers further.",
      "Evaluate recovery behavior on increasingly complex modeling tasks.",
    ],
  },
  {
    slug: "kazakh-tts",
    title: "Kazakh Neural TTS",
    tagline: "Learning to give a language a voice.",
    category: "MACHINE LEARNING / SPEECH",
    status: "Research / experiment",
    summary:
      "Exploring Kazakh neural text-to-speech with the ISSAI KazakhTTS dataset: approximately 49,500 audio files, a training pipeline, and a lot of debugging.",
    problem:
      "A speech training pipeline depends on more than a model architecture. Audio metadata, sample rates, preprocessing, and training configuration all have to agree.",
    approach: [
      "Prepared and inspected approximately 49,500 audio files and their metadata.",
      "Built and debugged a training pipeline using VITS and Coqui TTS.",
      "Experimented with neural TTS architecture and GPU training configuration.",
      "Investigated STFT, sample-rate, and audio preprocessing issues.",
    ],
    challenges: [
      "Tracing training failures back to audio preprocessing and configuration.",
      "Understanding the relationship between waveform properties and spectral transforms.",
    ],
    lessons: [
      "Dataset inspection is an engineering task in its own right.",
      "Training failures are useful signals when the pipeline is observable. This work remains an experiment, not a production speech model.",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "VITS",
      "Coqui TTS",
      "Audio preprocessing",
    ],
    future: [
      "Improve dataset validation and reproducibility.",
      "Continue controlled training experiments and evaluate speech quality.",
    ],
  },
  {
    slug: "semesterly",
    title: "Semesterly",
    tagline: "One academic calendar. Agents that stay in sync.",
    category: "AI AGENTS / PRODUCTIVITY",
    status: "Concept / prototype",
    summary:
      "An academic planning system designed to bring syllabi, Canvas assignments, deadlines, and office hours into one calendar through cooperating agents.",
    problem:
      "Course information is scattered and changes over time. A calendar is only useful if updates are accurate—and an uncertain integration does not silently invent information.",
    approach: [
      "Separate syllabus, Canvas, calendar, notification, and monitoring responsibilities.",
      "Detect an assignment change, validate it, then pass it to the Calendar Agent.",
      "Notify the user after a validated calendar update.",
      "Place credentials behind a security layer and fail closed when a source changes or confidence drops.",
    ],
    challenges: [
      "Coordinating agents without allowing uncertain information to propagate.",
      "Detecting degraded integrations and surfacing them instead of guessing.",
    ],
    lessons: [
      "Agent reliability is a communication and state-management problem.",
      "A degraded integration should stop, preserve known information, and notify the user or developer.",
    ],
    technologies: [
      "AI agents",
      "API integration",
      "Validation",
      "Credential isolation",
    ],
    future: [
      "Prototype source-change detection and monitoring.",
      "Test degraded-state and notification behavior before extending integrations.",
    ],
  },
  {
    slug: "chess-productivity",
    title: "Chess Productivity",
    tagline: "Make your next move count.",
    category: "FULL STACK / ALGORITHMS",
    status: "Prototype",
    summary:
      "A productivity experiment connecting time management with chess improvement, including 50+ personalized practice problems generated during experimentation.",
    problem:
      "An alarm is easy to dismiss. Could a small chess challenge turn that habitual action into a moment of deliberate practice?",
    approach: [
      "Explored game analysis across openings, middlegames, and endgames.",
      "Experimented with personalized chess exercises and gamified alarms.",
      "Connected task completion mechanics with solving chess problems.",
    ],
    challenges: [
      "Matching exercises to useful practice rather than adding arbitrary friction.",
      "Balancing productivity flows with a game-like interaction.",
    ],
    lessons: [
      "A technical feature needs to fit the habit it is meant to support.",
      "Personalization requires understanding the user's context and the difficulty of the exercise.",
    ],
    technologies: ["Game analysis", "Algorithms", "Full-stack development"],
    future: [
      "Refine exercise selection and alarm interactions.",
      "Evaluate whether the workflow helps both focus and chess practice.",
    ],
  },
];
