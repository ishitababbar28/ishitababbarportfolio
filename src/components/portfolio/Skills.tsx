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
    <span className="rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-sm text-foreground/90 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-foreground">
      {label}
    </span>
  );
}

function Group({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="reveal rounded-2xl border border-border bg-card/40 p-6 backdrop-blur">
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
        <Group title="Technical" items={technical} />
        <Group title="Tools & Tech" items={tools} />
        <Group title="Currently Learning" items={learning} />
      </div>
    </Section>
  );
}