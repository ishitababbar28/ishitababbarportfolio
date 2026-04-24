import { Section } from "./Section";
import { GraduationCap, Code2, Users } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Learning by doing",
    body: "Second-year B.Tech CSE at Manav Rachna University, exploring different areas of technology hands-on.",
  },
  {
    icon: Code2,
    title: "Problem solver",
    body: "Sharpening DSA in Java and strengthening React fundamentals while building real projects.",
  },
  {
    icon: Users,
    title: "Team player",
    body: "Thrive in collaborative environments — solving real-world problems and pushing past my comfort zone.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About me"
      title="Curious, hands-on, and always learning."
      description="I enjoy taking on new challenges, adapting to new situations, and continuously improving my skills through experience. I believe in continuous learning — growing both technically and personally."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {highlights.map((h, i) => (
          <div
            key={h.title}
            className="reveal group rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
              <h.icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold">{h.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}