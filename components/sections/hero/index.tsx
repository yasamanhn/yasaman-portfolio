"use client";

import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[720px] items-center overflow-hidden scroll-mt-20 py-20 sm:min-h-screen sm:py-20"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="bg-blur-small absolute left-[15%] top-[35%]" />

        <div className="absolute left-[8%] top-[18%] h-24 w-24 rounded-full bg-violet-100/50 blur-2xl" />

        <div className="absolute bottom-[10%] right-[30%] h-32 w-32 rounded-full bg-purple-100/50 blur-3xl" />
      </div>

      <div className="container-custom">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <HeroContent />

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
