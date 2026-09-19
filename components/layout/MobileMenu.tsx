"use client";

import { X } from "lucide-react";
import { navigation } from "@/data/navigation";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
          />

          <motion.div
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 top-0 z-50 h-screen w-72 bg-white p-6  shadow-2xl"
          >
            <div className="mb-4 flex items-center justify-between px-2">
              <h3 className="font-bold text-violet-700">منو</h3>

              <button onClick={onClose}>
                <X size={24} />
              </button>
            </div>
            <hr className="text-gray-300 my-2" />

            <nav className="">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="block rounded-xl  text-zinc-700 transition hover:bg-violet-50 hover:text-violet-700 py-4 px-3"
                >
                  {item.title}
                </a>
              ))}
            </nav>

            <a
              href="/yasaman-heshmatian-resume.pdf"
              className="mt-8 flex w-full items-center justify-center rounded-2xl bg-violet-100 py-3 text-white"
            >
              دانلود رزومه
            </a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
