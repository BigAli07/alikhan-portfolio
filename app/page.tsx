import {
  ArrowDown,
  ArrowUpRight,
  GraduationCap,
  MoveUpRight,
} from "lucide-react";
import {
  Hero,
  Metrics,
  SectionHeading,
  SelectedProjects,
  ContactSection,
} from "@/components/portfolio";
import { skills, journey } from "@/data/skills";
import { profile } from "@/data/profile";
export default function Home() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    email: profile.email,
    affiliation: { "@type": "CollegeOrUniversity", name: profile.university },
    knowsAbout: [
      "Computer Science",
      "Software Engineering",
      "Artificial Intelligence",
    ],
    homeLocation: { "@type": "Place", name: profile.location },
    ...(profile.siteUrl ? { url: profile.siteUrl } : {}),
    sameAs: [profile.github, profile.linkedin].filter(Boolean),
  };
  return (
    <main className="container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(person).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <Metrics />
      <section id="about" className="section about">
        <div>
          <SectionHeading
            number="01 / HOW I THINK"
            title="More than a list of technologies."
          />
          <div className="prose">
            <p>
              I care about understanding how systems work, not just memorizing
              syntax. Whether I’m working on an AI agent, debugging a training
              pipeline, or solving an algorithm problem, I like tracing how
              information moves—and understanding why a solution works.
            </p>
            <p>
              I’m early in my CS journey. What draws me in are problems where
              software meets the real world: intelligent tools, automation, AI
              interfaces, and products that remove tedious work.
            </p>
          </div>
          <span className="small-note">
            Less “I know everything.” More “let’s figure it out.”
          </span>
        </div>
        <div className="engineering-loop">
          <div className="diagram-caption">
            THE ENGINEERING MINDSET <span>↻</span>
          </div>
          {["Think", "Model", "Build", "Test", "Debug", "Improve"].map(
            (s, i) => (
              <div className="loop-step" key={s}>
                <span>0{i + 1}</span>
                <strong>{s}</strong>
                {i < 5 ? <ArrowDown size={15} /> : <MoveUpRight size={15} />}
              </div>
            ),
          )}
        </div>
      </section>
      <SelectedProjects />
      <section className="exploring">
        <div className="exploring-heading">
          <span className="eyebrow">CURRENTLY EXPLORING</span>
          <p>
            Following the questions
            <br />
            that lead somewhere interesting.
          </p>
        </div>
        <div className="exploring-grid">
          {[
            [
              "AI agents",
              "How software can plan, call tools, recover from failures, and communicate safely.",
            ],
            [
              "Machine learning",
              "Connecting the mathematical ideas behind models to their implementation.",
            ],
            [
              "Systems",
              "How software, networks, APIs, and infrastructure interact.",
            ],
            [
              "Algorithms",
              "Building stronger fundamentals through competitive programming.",
            ],
          ].map(([t, d]) => (
            <div key={t}>
              <h3>
                {t}
                <ArrowUpRight size={16} />
              </h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section competitive">
        <div>
          <SectionHeading
            number="03 / ALGORITHMIC THINKING"
            title="Problem solving under pressure."
          />
          <p className="prose">
            Competitive programming teaches me to reason about correctness,
            efficiency, and edge cases under time constraints. The best part is
            finding the simple idea inside a difficult problem.
          </p>
          <p className="mono muted">100+ algorithm problems · C++ / Python</p>
        </div>
        <div className="algorithm-panel">
          <div className="diagram-caption">
            <span>PROBLEM → SOLUTION</span>
            <span>O(learning)</span>
          </div>
          {[
            "Understand constraints",
            "Choose representation",
            "Design algorithm",
            "Analyze complexity",
            "Implement",
            "Test edge cases",
            "Debug",
          ].map((s, i) => (
            <div key={s}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <code>{s}</code>
              {i === 6 ? (
                <span className="accent">↻</span>
              ) : (
                <ArrowDown size={13} />
              )}
            </div>
          ))}
        </div>
      </section>
      <section id="journey" className="section">
        <SectionHeading
          number="04 / THE JOURNEY"
          title="Early days. Real momentum."
          subtitle="A path shaped by curiosity, experiments, and the next difficult question."
        />
        <div className="journey-layout">
          <ol className="timeline">
            {journey.map(([t, d], i) => (
              <li key={t}>
                <span className="timeline-index">0{i + 1}</span>
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </li>
            ))}
          </ol>
          <article id="education" className="education">
            <GraduationCap size={28} />
            <span className="eyebrow">EDUCATION</span>
            <h3>
              San José State
              <br />
              University
            </h3>
            <p>
              Computer Science student
              <br />
              Engineering Technology background
            </p>
            <div className="education-facts">
              <span>Freshman</span>
              <span>Expected 2030</span>
            </div>
            <div className="education-gpa">
              4.0 <span>/ 4.0 GPA</span>
            </div>
            <p className="coursework">
              Academic interests & coursework
              <br />
              <span>
                Data Structures / CS 46B · Discrete Mathematics · Networking ·
                Biology
              </span>
            </p>
          </article>
        </div>
      </section>
      <section id="skills" className="section">
        <SectionHeading
          number="05 / THE TOOLKIT"
          title="Tools I’m learning and building with."
          subtitle="Practical experience, ongoing exploration, and a foundation to keep growing."
        />
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items], i) => (
            <div className="skill-group" key={category}>
              <span className="eyebrow">0{i + 1}</span>
              <h3>{category}</h3>
              <div>
                {items.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="personal">
        <div>
          <span className="eyebrow">06 / OUTSIDE THE TERMINAL</span>
          <h2>
            There’s a person
            <br />
            behind the projects.
          </h2>
        </div>
        <div>
          <p>
            Basketball, exploring the Bay Area, and the kind of engineering idea
            that turns into a weekend side project. I’m usually learning
            something about AI—or trying to solve one more algorithm problem.
          </p>
          <div className="personal-tags">
            <span>Basketball</span>
            <span>Exploring the Bay</span>
            <span>Side projects</span>
          </div>
        </div>
      </section>
      <ContactSection />
    </main>
  );
}
