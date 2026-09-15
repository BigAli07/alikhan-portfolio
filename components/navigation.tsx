"use client";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Sun,
  Moon,
  Command,
  Github,
  Linkedin,
  ArrowUpRight,
  Search,
} from "lucide-react";
import { navigation, profile } from "@/data/profile";

const subscribeTheme = (callback: () => void) => {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
};
export function Navbar() {
  const pathname = usePathname();
  const theme = useSyncExternalStore(
    subscribeTheme,
    () => document.documentElement.dataset.theme || "dark",
    () => "dark",
  );
  const [active, setActive] = useState("");
  const [drawer, setDrawer] = useState(false);
  const [palette, setPalette] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const search = useRef<HTMLInputElement>(null);
  const commands = [...navigation, "Education"]
    .map((label) => ({ label, href: `/#${label.toLowerCase()}` }))
    .concat([
      ...(profile.github ? [{ label: "GitHub", href: profile.github }] : []),
      ...(profile.resume ? [{ label: "Resume", href: profile.resume }] : []),
    ]);
  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase()),
  );
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setDrawer(false);
        setPalette((v) => !v);
      }
    };
    document.addEventListener("keydown", key);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((s) => observer.observe(s));
    return () => {
      document.removeEventListener("keydown", key);
      observer.disconnect();
    };
  }, [pathname]);
  useEffect(() => {
    if (palette || drawer) {
      dialog.current?.showModal();
      document.body.style.overflow = "hidden";
      if (palette) search.current?.focus();
    } else {
      dialog.current?.close();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [palette, drawer]);
  const close = () => {
    setPalette(false);
    setDrawer(false);
    setQuery("");
    setSelected(0);
  };
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };
  return (
    <>
      <header className="navbar">
        <div className="nav-inner">
          <Link className="brand" href="/" aria-label="Alikhan Yedilbayev home">
            <span className="brand-mark">
              a<span>y</span>.
            </span>
            <span>Alikhan Yedilbayev</span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((n) => (
              <Link
                key={n}
                className={(pathname === "/" && active === n.toLowerCase()) ? "active" : ""}
                href={`/#${n.toLowerCase()}`}
                aria-current={
                  (pathname === "/" && active === n.toLowerCase()) ? "location" : undefined
                }
              >
                {n}
              </Link>
            ))}
          </nav>
          <div className="nav-actions">
            {profile.github && (
              <a
                className="icon-button"
                href={profile.github}
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            )}
            {profile.linkedin && (
              <a
                className="icon-button"
                href={profile.linkedin}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            )}
            <button
              className="icon-button command-trigger"
              aria-label="Open command palette"
              onClick={() => setPalette(true)}
            >
              <Command size={17} />
              <span>K</span>
            </button>
            <button
              className="icon-button"
              onClick={toggle}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            {profile.resume && (
              <a className="button small" href={profile.resume}>
                Resume <ArrowUpRight size={15} />
              </a>
            )}
            <button
              className="icon-button mobile-menu"
              onClick={() => setDrawer(true)}
              aria-label="Open navigation"
            >
              <Menu />
            </button>
          </div>
        </div>
      </header>
      <dialog
        ref={dialog}
        className={palette ? "command-dialog" : "drawer-dialog"}
        onCancel={close}
        onClick={(e) => {
          if (e.target === dialog.current) close();
        }}
        onClose={close}
        aria-label={palette ? "Command palette" : "Navigation menu"}
      >
        <div className="dialog-content">
          <div className="dialog-top">
            {palette ? (
              <>
                <Search size={20} />
                <input
                  ref={search}
                  placeholder="Where would you like to go?"
                  value={query}
                  aria-label="Search navigation"
                  role="combobox"
                  aria-expanded="true"
                  aria-controls="command-results"
                  aria-activedescendant={
                    filtered.length ? `command-${selected}` : undefined
                  }
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSelected(0);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowDown") {
                      e.preventDefault();
                      setSelected(
                        (i) => (i + 1) % Math.max(1, filtered.length),
                      );
                    }
                    if (e.key === "ArrowUp") {
                      e.preventDefault();
                      setSelected(
                        (i) =>
                          (i - 1 + filtered.length) %
                          Math.max(1, filtered.length),
                      );
                    }
                    if (e.key === "Enter" && filtered[selected]) {
                      window.location.href = filtered[selected].href;
                      close();
                    }
                  }}
                />
              </>
            ) : (
              <span>Explore the portfolio</span>
            )}
            <button
              className="icon-button"
              aria-label="Close dialog"
              onClick={close}
            >
              <X size={20} />
            </button>
          </div>
          {palette ? (
            <div role="listbox" id="command-results">
              {filtered.map((c, i) => (
                <a
                  id={`command-${i}`}
                  role="option"
                  aria-selected={selected === i}
                  className={`command-option ${selected === i ? "selected" : ""}`}
                  key={c.label}
                  href={c.href}
                  onClick={close}
                  onMouseMove={() => setSelected(i)}
                >
                  {c.label}
                  <ArrowUpRight size={16} />
                </a>
              ))}
              {!filtered.length && (
                <p className="empty">No matching sections.</p>
              )}
              <p className="command-hint">
                ↑ ↓ navigate <span>↵ open · esc close</span>
              </p>
            </div>
          ) : (
            <nav className="drawer-links">
              {commands.map((c) => (
                <Link href={c.href} key={c.label} onClick={close}>
                  {c.label}
                  <ArrowUpRight size={20} />
                </Link>
              ))}
            </nav>
          )}
        </div>
      </dialog>
    </>
  );
}
