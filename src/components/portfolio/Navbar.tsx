import { useEffect, useState, useRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [progress, setProgress] = useState(0);
  const navRef = useRef<HTMLUListElement | null>(null);
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number; opacity: number }>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy: track which section is in view
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Move the highlight pill under the active link
  useEffect(() => {
    if (!navRef.current) return;
    const el = navRef.current.querySelector<HTMLElement>(
      `[data-nav-id="${active}"]`
    );
    if (!el) {
      setPillStyle((p) => ({ ...p, opacity: 0 }));
      return;
    }
    const parentRect = navRef.current.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    setPillStyle({
      left: rect.left - parentRect.left,
      width: rect.width,
      opacity: 1,
    });
  }, [active]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group flex items-center gap-2 font-semibold tracking-tight"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary text-sm font-bold text-primary-foreground shadow-glow">
            IB
          </span>
          <span className="hidden sm:inline text-foreground">Ishita Babbar</span>
        </a>
        <ul ref={navRef} className="relative hidden items-center gap-1 md:flex">
          <span
            aria-hidden
            className="pointer-events-none absolute top-1/2 -translate-y-1/2 h-9 rounded-full bg-gradient-primary/20 ring-1 ring-primary/40 shadow-glow transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              left: pillStyle.left,
              width: pillStyle.width,
              opacity: pillStyle.opacity,
            }}
          />
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  data-nav-id={l.id}
                  onClick={(e) => handleClick(e, l.id)}
                  className={`relative z-10 rounded-full px-3.5 py-2 text-sm transition-colors duration-300 ${
                    isActive
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-1">
          <a
            href="https://github.com/ishitababbar28"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-md p-2 text-muted-foreground transition-all hover:-translate-y-0.5 hover:bg-secondary hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/ishita-babbar-219355320/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-md p-2 text-muted-foreground transition-all hover:-translate-y-0.5 hover:bg-secondary hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:ishitababbar28@gmail.com"
            aria-label="Email"
            className="rounded-md p-2 text-muted-foreground transition-all hover:-translate-y-0.5 hover:bg-secondary hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </nav>
      {/* Scroll progress bar */}
      <div
        aria-hidden
        className="h-0.5 origin-left bg-gradient-primary transition-transform duration-150"
        style={{ transform: `scaleX(${progress / 100})` }}
      />
    </header>
  );
}