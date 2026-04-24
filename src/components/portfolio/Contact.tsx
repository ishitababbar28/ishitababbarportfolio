import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "ishitababbar28@gmail.com",
    href: "mailto:ishitababbar28@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "ishita-babbar",
    href: "https://www.linkedin.com/in/ishita-babbar-219355320/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "ishitababbar28",
    href: "https://github.com/ishitababbar28",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="reveal relative overflow-hidden rounded-3xl border border-border bg-card/60 p-10 text-center backdrop-blur shadow-card md:p-16">
          <div className="pointer-events-none absolute inset-0 bg-hero opacity-60" />
          <div className="relative">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Contact
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              Let's build <span className="text-gradient">something together</span>.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Open to internships, collaborations, and conversations about tech, learning,
              and ideas worth chasing.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex flex-col items-start gap-3 rounded-2xl border border-border bg-background/40 p-5 text-left transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                    <c.icon className="h-4 w-4" />
                  </div>
                  <div className="w-full">
                    <div className="flex items-center justify-between text-xs uppercase tracking-wider text-muted-foreground">
                      <span>{c.label}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                    <div className="mt-1 truncate text-sm font-medium text-foreground">
                      {c.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ishita Babbar · Crafted with care.
        </p>
      </div>
    </section>
  );
}