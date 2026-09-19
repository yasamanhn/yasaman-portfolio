"use client";

import { motion } from "framer-motion";
import { Braces, Code2, Sparkles } from "lucide-react";
import CurvedArrow from "./CurvedArrow";
import HeroImage from "./HeroImage";
import FloatingCodeCard from "./FloatingCodeCard";
import FloatingBracesCard from "./FloatingBracesCard";

export default function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.9,
        ease: "easeOut",
      }}
      className="order-2"
    >
      <div className="relative mx-auto w-full max-w-[560px]">
        {/* Main Glow */}
        <div
          className="
            absolute
            inset-[8%]
            rounded-[35%]
            bg-leaner-to-br
            from-violet-200/70
            via-purple-100/70
            to-fuchsia-100/50
            blur-2xl
          "
        />

        {/* Curved Arrow */}
        <CurvedArrow />

        <div className="relative aspect-square">
          <HeroImage />

          <FloatingCodeCard />
          <FloatingBracesCard />

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="
              absolute
              bottom-[25%]
              left-[12%]
              h-4
              w-4
              rounded-full
              bg-violet-400
            "
          />

          <div className="absolute right-[8%] top-[20%] text-violet-400">
            <Sparkles size={25} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
