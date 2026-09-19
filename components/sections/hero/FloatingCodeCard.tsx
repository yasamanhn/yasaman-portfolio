"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

export default function FloatingCodeCard() {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [0, 2, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute
        left-[2%]
        top-[28%]
        flex
        h-14
        w-14
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
      <Code2 className="text-violet-600" size={25} />
    </motion.div>
  );
}
