import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Achievements } from "@/components/portfolio/Achievements";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ishita Babbar — B.Tech CSE · Aspiring Developer" },
      {
        name: "description",
        content:
          "Portfolio of Ishita Babbar — B.Tech CSE student, SIH 2025 Finalist, aspiring developer and problem solver.",
      },
      { property: "og:title", content: "Ishita Babbar — Portfolio" },
      {
        property: "og:description",
        content:
          "B.Tech CSE student, SIH 2025 Finalist, aspiring developer and problem solver.",
      },
    ],
  }),
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Achievements />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
