import { Section } from "./Section";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've contributed."
    >
      <div className="reveal relative rounded-2xl border border-border bg-card/60 p-8 backdrop-blur shadow-card">
        <div className="absolute -top-4 left-8 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
          <Briefcase className="h-5 w-5" />
        </div>
        <div className="flex flex-wrap items-baseline justify-between gap-2 pt-2">
          <h3 className="text-xl font-semibold">Summer Volunteering Intern</h3>
          <span className="text-sm text-muted-foreground">Sai Dham Foundation</span>
        </div>
        <p className="mt-3 text-muted-foreground">
          Worked as a volunteer trainer in a vocational training program, teaching students
          essential digital and technical skills.
        </p>
        <ul className="mt-5 grid gap-2.5 text-sm text-foreground/90 md:grid-cols-2">
          {[
            "Taught MS Excel, PowerPoint, and Canva for practical use",
            "Introduced basics of Python and C programming",
            "Provided an overview of AI tools and their applications",
            "Helped learners build foundational technical skills",
          ].map((item) => (
            <li key={item} className="flex gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}