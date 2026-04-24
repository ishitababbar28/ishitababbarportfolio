import { Section } from "./Section";

const technical = ["HTML", "CSS", "JavaScript", "Java", "C", "Python", "React (Fundamentals)"];
const tools = ["VS Code", "Git / GitHub", "Arduino IDE", "Canva", "Google Colab", "Figma"];
const learning = [
  "Data Structures & Algorithms (Java)",
  "Problem-solving & logical thinking",
  "React fundamentals",
];

function Chip({ label }: { label: string }) {
  return (
    <span className="cursor-default rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-sm text-foreground/90 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-primary/60 hover:text-foreground hover:shadow-glow">
      {label}
    </span>
  );
}

function Group({ title, items, variant }: { title: string; items: string[]; variant: string }) {
  return (
    <div className={`${variant} shimmer-border rounded-2xl border border-border bg-card/40 p-6 backdrop-blur transition-all hover:border-primary/30`}>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((i) => (
          <Chip key={i} label={i} />
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I use & things I'm learning."
      description="A snapshot of the languages, tools, and topics I currently work with."
    >
      <div className="grid gap-5 md:grid-cols-3">
        <Group title="Technical" items={technical} variant="reveal-left" />
        <Group title="Tools & Tech" items={tools} variant="reveal-zoom" />
        <Group title="Currently Learning" items={learning} variant="reveal-right" />
      </div>
    </Section>
  );
}