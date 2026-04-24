import { Section } from "./Section";
import { Globe, MessagesSquare, Cpu, Accessibility, ArrowUpRight } from "lucide-react";

const projects = [
  {
    icon: Globe,
    name: "Personal Portfolio",
    tag: "Web",
    body: "The website you're looking at — built to showcase my work, skills, and journey.",
  },
  {
    icon: MessagesSquare,
    name: "College Enquiry Chatbot",
    tag: "Python",
    body: "A chatbot that answers common college FAQs for students and parents — menu-driven with dynamic responses.",
  },
  {
    icon: Cpu,
    name: "Car Parking Toll Gateway",
    tag: "Arduino · IoT",
    body: "An Arduino system using an ultrasonic sensor to detect vehicles and a servo motor to lift the barrier.",
  },
  {
    icon: Accessibility,
    name: "AccessMitra — Accessibility Portal",
    tag: "Web · Social",
    body: "A website for differently-abled individuals — helplines, tools, government schemes, and accessibility resources.",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built."
      description="A mix of web, AI, and hardware projects — each taught me something new."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <article
            key={p.name}
            className="reveal group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-7 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <div className="flex items-start justify-between">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <p.icon className="h-5 w-5" />
              </div>
              <span className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-xs text-muted-foreground">
                {p.tag}
              </span>
            </div>
            <h3 className="mt-5 flex items-center gap-2 text-xl font-semibold">
              {p.name}
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}