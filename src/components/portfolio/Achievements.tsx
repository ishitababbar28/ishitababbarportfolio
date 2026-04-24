import { Section } from "./Section";
import { Trophy, Award, Medal } from "lucide-react";

const items = [
  {
    icon: Trophy,
    title: "Smart India Hackathon 2025 — Finalist",
    badge: "Top 5 / 500+",
    body: "Represented Manav Rachna University at the Grand Finale in Mumbai. Built an AI-based solution within a 36-hour environment — gained hands-on experience in teamwork, problem-solving, and real-world innovation.",
  },
  {
    icon: Medal,
    title: "Technology & Science Quiz",
    badge: "2nd Position",
    body: "Secured 2nd position in the Everyday Technology and Hidden Science Quiz at Manav Rachna University (2026).",
  },
  {
    icon: Award,
    title: "Utsav of Excellence",
    badge: "Top 20 / 540+",
    body: "Selected among the top 20 in a multi-round competition by the Career Development Centre — clearing analytical, product pitching, group discussion, and situational rounds.",
  },
];

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Some highlights I'm proud of."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((it, i) => (
          <article
            key={it.title}
            className={`${i % 2 === 0 ? "reveal-left" : "reveal-right"} tilt-card shimmer-border group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 backdrop-blur hover:border-primary/40 hover:shadow-glow`}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40" />
            <div className="relative">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                <it.icon className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" />
              </div>
              <span className="inline-block rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                {it.badge}
              </span>
              <h3 className="mt-3 text-lg font-semibold leading-tight">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}