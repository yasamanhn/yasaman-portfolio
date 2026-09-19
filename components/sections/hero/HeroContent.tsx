"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { heroData } from "@/data/hero";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="order-1 text-center lg:text-right"
    >
      {/* Greeting */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.15,
          duration: 0.6,
        }}
        className="
          mb-5
          inline-flex
          items-center
          gap-2
          rounded-full
          px-4
          py-2
          text-sm
          font-medium
        "
      >
        <span>{heroData.greeting}</span>
      </motion.div>

      {/* Title */}
      <h1
        className="
  text-3xl
  font-black
  leading-[1.6]
  tracking-tight
  text-zinc-900
  sm:text-5xl
  lg:text-[3.4rem]
  xl:text-5xl
"
      >
        {heroData.title}

        <br />

        <span className="text-gradient ">{heroData.highlight}</span>
      </h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.6,
        }}
        className="
  mx-auto
  mt-6
  max-w-2xl
  text-sm
  leading-8
  text-zinc-600
  sm:text-base
  sm:leading-8
  lg:mx-0
"
      >
        {heroData.description}
      </motion.p>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.45,
          duration: 0.6,
        }}
        className="
          mt-8
          flex
          flex-col
          justify-center
          gap-3
          sm:flex-row
          lg:justify-start
        "
      >
        <a href={heroData.primaryAction.href} className="btn-primary group">
          <span>{heroData.primaryAction.label}</span>

          <ArrowLeft
            size={18}
            className="
              transition-transform
              duration-300
              group-hover:-translate-x-1
            "
          />
        </a>
      </motion.div>

      {/* Technologies */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.65,
          duration: 0.7,
        }}
        className="mt-10"
      >
        <p className="mb-3 text-xs font-medium text-zinc-400">
          من را در شبکه های اجتماعی دنبال کنید:{" "}
        </p>

        <div className="flex items-center justify-center gap-3 lg:justify-start">
          {heroData.socials.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-100 bg-white text-zinc-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600 hover:shadow-md"
              >
                <Icon size={19} />
              </a>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
