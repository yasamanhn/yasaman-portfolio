"use client";

import { useEffect, useState } from "react";
import { Menu, Download } from "lucide-react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { navigation } from "@/data/navigation";
import clsx from "clsx";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setScrolled(scrollY > 20);

      // Home
      if (scrollY <= 80) {
        setActive("#home");
        return;
      }

      const headerOffset = 100;

      let currentSection = "#home";
      let closestTop = -Infinity;

      navigation.forEach((item) => {
        const section = document.querySelector(item.href) as HTMLElement | null;

        if (!section) return;

        const sectionTop = section.getBoundingClientRect().top + scrollY;

        if (sectionTop <= scrollY + headerOffset) {
          if (sectionTop > closestTop) {
            closestTop = sectionTop;
            currentSection = item.href;
          }
        }
      });

      const isAtBottom =
        window.innerHeight + scrollY >=
        document.documentElement.scrollHeight - 5;

      if (isAtBottom) {
        currentSection =
          navigation[navigation.length - 1]?.href ?? currentSection;
      }

      setActive(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 z-30 h-20 w-full transition-all duration-300",
          scrolled
            ? "border-b border-violet-100 bg-white/95 shadow-sm backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-10">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative text-sm font-medium text-zinc-700 transition-colors duration-300 hover:text-violet-700"
              >
                <span
                  className={clsx(active === item.href && "text-violet-700")}
                >
                  {item.title}
                </span>

                <span
                  className={clsx(
                    "absolute -bottom-2 right-0 h-0.5 rounded-full bg-violet-600 transition-all duration-300",
                    active === item.href ? "w-full" : "w-0 group-hover:w-full",
                  )}
                />
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="/yasaman-heshmatian-resume.pdf"
              className="flex items-center gap-2 rounded-2xl bg-violet-100 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5  hover:shadow-xs hover:shadow-violet-200"
            >
              <Download size={18} />
              دانلود رزومه
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="rounded-xl border border-violet-100 p-2 transition hover:bg-violet-50 lg:hidden"
            aria-label="باز کردن منو"
          >
            <Menu size={24} />
          </button>
        </div>

        <hr className="border-zinc-100" />
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
