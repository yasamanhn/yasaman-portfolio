"use client";

import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <div className="relative h-full w-full">
      {/* Animated Bubble */}
      <motion.div
        animate={{
          rotate: [0, 6, -5, 3, 0],
          scale: [1, 1.035, 0.985, 1.02, 1],

          borderRadius: [
            "30% 68% 60% 40% / 40% 40% 60% 60%",
            "42% 58% 52% 48% / 48% 35% 65% 52%",
            "34% 66% 58% 42% / 45% 52% 48% 58%",
            "38% 62% 55% 45% / 52% 42% 58% 48%",
            "30% 68% 60% 40% / 40% 40% 60% 60%",
          ],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          inset-x-0
          bottom-20
          h-[82%]
          bg-[#EDE9FE]
          shadow-[0_20px_80px_rgba(139,92,246,0.12)]
        "
      />

      {/* Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.25, 0.35, 0.25],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-80
          w-[320px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-violet-300/30
          blur-[80px]
        "
      />

      {/* Image */}
      <div
        className="
          absolute
          inset-[8%]
          overflow-hidden
          rounded-[32%_68%_60%_40%/40%_40%_60%_60%]
          border
          border-white/70
          bg-white/60
          shadow-2xl
          shadow-violet-200/50
          backdrop-blur-sm
        "
      >
        <img
          src="/images/pic2.png"
          alt="یاسمن - توسعه دهنده فرانت‌اند"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-violet-950/10 via-transparent to-white/10" />
      </div>
    </div>
  );
}
