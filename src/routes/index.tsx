import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Achievements } from "@/components/portfolio/Achievements";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { CustomCursor } from "@/components/portfolio/CustomCursor";
import { useReveal } from "@/hooks/use-reveal";
import { useSpotlight } from "@/hooks/use-spotlight";

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
  useSpotlight();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Achievements />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
