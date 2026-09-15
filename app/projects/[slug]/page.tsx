import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectDiagram } from "@/components/project-diagram";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return p
    ? {
        title: p.title,
        description: p.summary,
        openGraph: { title: p.title, description: p.summary },
        twitter: { card: "summary", title: p.title, description: p.summary },
      }
    : {};
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) notFound();
  const next = projects[(projects.indexOf(p) + 1) % projects.length];
  return (
    <main className="container project-page">
      <Link className="back-link" href="/#projects">
        <ArrowLeft size={16} /> Back to selected work
      </Link>
      <div className="project-page-heading">
        <span className="eyebrow">{p.category}</span>
        <span className="project-status">{p.status}</span>
        <h1>{p.title}</h1>
        <p>{p.tagline}</p>
      </div>
      <ProjectDiagram slug={p.slug} />
      <div className="project-detail-layout">
        <aside>
          <span className="eyebrow">IN THIS EXPLORATION</span>
          {[
            "Overview",
            "Problem",
            "Architecture",
            "Technical challenges",
            "Lessons learned",
            "Technology",
            "Future improvements",
          ].map((s) => (
            <a href={`#${s.replaceAll(" ", "-").toLowerCase()}`} key={s}>
              {s}
            </a>
          ))}
        </aside>
        <div className="project-details">
          <section id="overview">
            <h2>Overview</h2>
            <p>{p.summary}</p>
          </section>
          <section id="problem">
            <h2>The problem</h2>
            <p>{p.problem}</p>
          </section>
          {[
            ["Architecture", p.approach],
            ["Technical challenges", p.challenges],
            ["Lessons learned", p.lessons],
            ["Technology", p.technologies],
            ["Future improvements", p.future],
          ].map(([title, items]) => (
            <section
              id={(title as string).replaceAll(" ", "-").toLowerCase()}
              key={title as string}
            >
              <h2>{title as string}</h2>
              {title === "Technology" ? (
                <div className="project-tags">
                  {(items as string[]).map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              ) : (
                <ul>
                  {(items as string[]).map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <div className="project-resources">
            {p.github ? (
              <a className="button" href={p.github}>
                GitHub <ArrowUpRight size={16} />
              </a>
            ) : (
              <p className="muted">Repository coming soon</p>
            )}
            {p.demo && (
              <a className="button" href={p.demo}>
                Live demo <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
      <Link className="next-project" href={`/projects/${next.slug}`}>
        <div>
          <span className="eyebrow">NEXT EXPLORATION</span>
          <h2>{next.title}</h2>
        </div>
        <ArrowUpRight size={32} />
      </Link>
    </main>
  );
}
