"use client";

import Header from "@/components/layout/Header";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen text-foreground">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
