import ishita from "@/assets/ishita.jpeg";
import { ArrowDown, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-hero pt-32 pb-24 md:pt-40 md:pb-32"
    >
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            SIH 2025 Finalist · Top 5 of 500+
          </span>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Hi, I'm <span className="text-gradient">Ishita</span>
            <br />
            Babbar.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            B.Tech CSE student, aspiring developer and problem solver — building
            things, breaking them, and learning every step of the way.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              View Projects
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-secondary"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-10 flex gap-8 border-t border-border/60 pt-6">
            <Stat value="2nd" label="Yr B.Tech CSE" />
            <Stat value="Top 5" label="SIH 2025" />
            <Stat value="4+" label="Projects" />
          </div>
        </div>

        <div className="relative mx-auto animate-scale-in">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-primary opacity-30 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-card animate-glow">
            <img
              src={ishita}
              alt="Portrait of Ishita Babbar"
              className="h-[420px] w-[340px] object-cover md:h-[480px] md:w-[380px]"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-bold text-gradient">{value}</div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}