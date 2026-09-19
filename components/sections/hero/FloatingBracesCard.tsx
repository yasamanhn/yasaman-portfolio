"use client";

import { motion } from "framer-motion";
import { Braces } from "lucide-react";

export default function FloatingBracesCard() {
  return (
    <motion.div
      animate={{
        y: [0, 12, 0],
      }}
      transition={{
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute
        bottom-[15%]
        right-[0%]
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-2xl
        border
        border-violet-100
        bg-white
        shadow-xl
        shadow-violet-200/40
      "
    >
      <Braces className="text-purple-600" size={27} />
    </motion.div>
  );
}
