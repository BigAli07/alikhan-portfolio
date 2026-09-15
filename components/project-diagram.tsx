import {
  Box,
  Braces,
  Check,
  CalendarDays,
  Bell,
  ShieldCheck,
  FileText,
  ArrowRight,
  Workflow,
} from "lucide-react";
export function ProjectDiagram({ slug }: { slug: string }) {
  if (slug === "unioncad")
    return (
      <div
        className="diagram cad-diagram"
        aria-label="CAD architecture: user intent, planning, operations, validation, model"
      >
        <div className="diagram-caption">
          <span>INTENT → GEOMETRY</span>
          <span>01 / SYSTEM STUDY</span>
        </div>
        <div className="prompt-line">
          <span className="prompt-cursor">›</span> Create a mounting bracket
        </div>
        <div className="pipeline">
          <div>
            <Braces />
            <span>Intent engine</span>
          </div>
          <ArrowRight className="connector" />
          <div>
            <Workflow />
            <span>Planning agent</span>
          </div>
          <ArrowRight className="connector" />
          <div>
            <Box />
            <span>CAD operations</span>
          </div>
        </div>
        <div className="validation-line">
          <span>
            <ShieldCheck size={15} /> Validation layer
          </span>
          <span>Permissions · State · Geometry</span>
        </div>
        <div className="diagram-bottom">
          <span className="model-label">
            <Box size={15} /> Structured model
          </span>
          <span>PLAN. VALIDATE. EXECUTE.</span>
        </div>
      </div>
    );
  if (slug === "kazakh-tts")
    return (
      <div
        className="diagram speech-diagram"
        aria-label="Illustrative audio waveform for the Kazakh text-to-speech training pipeline"
      >
        <div className="diagram-caption">
          <span>KAZAKH / NEURAL SPEECH</span>
          <span>02 / EXPERIMENT</span>
        </div>
        <div className="waveform" aria-hidden="true">
          {Array.from({ length: 58 }, (_, i) => (
            <i
              key={i}
              style={{
                height: `${12 + Math.abs(Math.sin(i * 1.7) * Math.cos(i * 0.17)) * 85}%`,
              }}
            />
          ))}
        </div>
        <div className="audio-axis">
          <span>DATASET</span>
          <span>PREPROCESS</span>
          <span>VITS</span>
          <span>AUDIO</span>
        </div>
        <div className="diagram-bottom">
          <span>~49,500 audio files explored</span>
          <span>TRAINING PIPELINE</span>
        </div>
      </div>
    );
  if (slug === "semesterly")
    return (
      <div
        className="diagram semester-diagram"
        aria-label="Syllabus and Canvas agents validate updates before calendar and notification agents act; a security and monitoring layer stops uncertain updates"
      >
        <div className="diagram-caption">
          <span>COORDINATED, NOT GUESSING</span>
          <span>03 / PROTOTYPE</span>
        </div>
        <div className="agent-sources">
          <span>
            <FileText size={18} /> Syllabus Agent
          </span>
          <span>
            <Braces size={18} /> Canvas Agent
          </span>
        </div>
        <div className="agent-flow">
          <span>
            <Check size={17} /> Validate
          </span>
          <ArrowRight size={16} />
          <span>
            <CalendarDays size={17} /> Calendar
          </span>
          <ArrowRight size={16} />
          <span>
            <Bell size={17} /> Notify
          </span>
        </div>
        <div className="validation-line">
          <span>
            <ShieldCheck size={15} /> Security + monitoring
          </span>
          <span>Uncertain? Fail closed.</span>
        </div>
        <div className="diagram-bottom">
          <span>One calendar. Clear boundaries.</span>
          <span>AGENT ARCHITECTURE</span>
        </div>
      </div>
    );
  return (
    <div
      className="diagram chess-diagram"
      aria-label="Illustrative chess practice interface"
    >
      <div className="diagram-caption">
        <span>A LITTLE FRICTION. A BETTER HABIT.</span>
        <span>04 / PROTOTYPE</span>
      </div>
      <div className="chess-content">
        <div className="chessboard" aria-hidden="true">
          {Array.from({ length: 16 }, (_, i) => (
            <span
              key={i}
              className={(Math.floor(i / 4) + i) % 2 ? "dark-square" : ""}
            >
              {i === 5 ? "♞" : i === 14 ? "♔" : ""}
            </span>
          ))}
        </div>
        <div>
          <span className="eyebrow">YOUR NEXT MOVE</span>
          <div className="chess-headline">
            Think. Solve.
            <br />
            Get back to it.
          </div>
          <p>
            Chess practice meets
            <br />
            daily focus.
          </p>
        </div>
      </div>
      <div className="diagram-bottom">
        <span>50+ personalized practice problems</span>
        <span>EXPERIMENTATION</span>
      </div>
    </div>
  );
}
