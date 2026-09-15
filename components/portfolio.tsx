import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Github,
  Linkedin,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { profile } from "@/data/profile";
import { projects, type Project } from "@/data/projects";
import { ProjectDiagram } from "./project-diagram";
export function SectionHeading({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow section-number">{number}</span>
      <div>
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
}
export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="status">
          <span /> CS @ San José State University
        </div>
        <p className="hero-intro">CURIOUS MIND. BUILDER AT HEART.</p>
        <h1 id="hero-title">
          Ambitious ideas.
          <br />
          <span>Useful systems.</span>
        </h1>
        <p className="hero-description">
          I’m Alikhan, a Computer Science student building software and
          exploring AI. I like turning a rough idea into a working system—and
          understanding everything in between.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="button primary">
            Explore my work <ArrowUpRight size={18} />
          </a>
          {profile.github && (
            <a href={profile.github} className="button">
              <Github size={18} /> GitHub
            </a>
          )}
          {profile.resume && (
            <a href={profile.resume} className="text-link">
              Download résumé <ArrowDown size={16} />
            </a>
          )}
        </div>
        <p className="availability">
          <span /> Exploring software engineering, AI/ML,
          <br className="desktop-break" /> and research opportunities.
        </p>
      </div>
      <div className="portrait-wrap">
        <div className="portrait-topline">
          <span>01 — THE PERSON BEHIND THE CODE</span>
          <span>37° N / 122° W</span>
        </div>
        <div className="portrait">
          <Image
            src="/alikhanyedilbayev.jpg"
            alt="Alikhan Yedilbayev enjoying a sunset in the Bay Area"
            width={768}
            height={1024}
            priority
            sizes="(max-width: 767px) 90vw, 40vw"
          />
          <div className="portrait-caption">
            <span>Always a work in progress.</span>
            <span>
              <MapPin size={13} /> San Francisco Bay Area
            </span>
          </div>
        </div>
        <div className="portrait-bottomline">
          <span>PYTHON · JAVA · C++</span>
          <span>AI SYSTEMS / ALGORITHMS</span>
        </div>
      </div>
    </section>
  );
}
export function Metrics() {
  return (
    <div className="metrics" aria-label="Quick facts">
      {[
        ["4.0", "GPA / 4.0"],
        ["100+", "Algorithm problems"],
        ["4+", "Engineering projects"],
      ].map(([value, label]) => (
        <div className="metric" key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <Link className="project-card" href={`/projects/${project.slug}`}>
      <ProjectDiagram slug={project.slug} />
      <div className="project-copy">
        <div className="project-meta">
          <span>{project.category}</span>
          <span className="project-status">{project.status}</span>
        </div>
        <div className="project-title">
          <h3>{project.title}</h3>
          <span className="project-arrow">
            <ArrowUpRight size={22} />
          </span>
        </div>
        <p>{project.tagline}</p>
        <div className="project-tags">
          {project.technologies.slice(0, 3).map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="case-link">
          <span>Explore project</span>
          <span>
            0{index + 1} <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}
export function SelectedProjects() {
  return (
    <section id="projects" className="section">
      <SectionHeading
        number="02 / SELECTED WORK"
        title="Ideas, made tangible."
        subtitle="Four explorations in software, intelligent systems, and learning by building."
      />
      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
export function ContactSection() {
  return (
    <section id="contact" className="contact section">
      <span className="eyebrow">07 / WHAT’S NEXT</span>
      <h2>
        Let’s build
        <br />
        something <span>difficult.</span>
      </h2>
      <p>
        I’m looking for opportunities to learn from strong engineering teams and
        contribute to meaningful software, AI, and research projects.
      </p>
      <div className="contact-buttons">
        <a className="button primary" href={`mailto:${profile.email}`}>
          <Mail size={18} /> Email me <ArrowUpRight size={18} />
        </a>
        {profile.github && (
          <a className="button" href={profile.github}>
            <Github size={18} /> GitHub
          </a>
        )}
        {profile.linkedin && (
          <a className="button" href={profile.linkedin}>
            <Linkedin size={18} /> LinkedIn
          </a>
        )}
        {profile.resume && (
          <a className="button" href={profile.resume}>
            Resume <ArrowDown size={18} />
          </a>
        )}
      </div>
      <a className="email-address" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div>
        <Link href="/" className="brand-mark">
          ay.
        </Link>
        <p>
          Designed & built by Alikhan Yedilbayev.
          <br />
          <span>Computer Science · San José State University</span>
        </p>
      </div>
      <div className="footer-links">
        {profile.github && <a href={profile.github}>GitHub</a>}
        {profile.linkedin && <a href={profile.linkedin}>LinkedIn</a>}
        <a href={`mailto:${profile.email}`}>
          Email <ArrowUpRight size={13} />
        </a>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
