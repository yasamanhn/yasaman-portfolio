"use client";

import { motion } from "framer-motion";

export default function CurvedArrow() {
  return (
    <motion.div
      animate={{
        rotate: [8, 12, 8],
      }}
      transition={{
        repeat: Infinity,
        duration: 5,
      }}
      className="absolute -right-15 top-[46%] hidden md:block"
    >
      <svg
        width="50"
        height="80"
        viewBox="0 0 50 80"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M6 66C16 56 28 46 36 22"
          stroke="#7C3AED"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        <path
          d="M28 24L36 20L42 30"
          stroke="#7C3AED"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}
