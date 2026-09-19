"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, CheckCircle2, Mail, MapPin } from "lucide-react";

import { skillsData } from "@/data/skills";
import { aboutData } from "@/data/about";

const icons = {
  experience: BriefcaseBusiness,
  position: MapPin,
  email: Mail,
  status: CheckCircle2,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden scroll-mt-20 sm:pt-20"
    >
      <div className="container-custom">
        <div className="grid items-stretch gap-10 sm:gap-14 lg:grid-cols-2 lg:gap-20">
          {/* ================================= */}
          {/* About */}
          {/* ================================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="order-2 h-full rounded-2xl bg-violet-100/20 p-5 sm:p-6 lg:order-1"
          >
            {/* Eyebrow */}
            <div className="mb-4">
              <span className="relative inline-block text-xl font-bold text-zinc-900 after:bg-leaner-to-l after:bg-linear-to-l after:from-violet-500 after:to-fuchsia-400 after:from-violet-500 after:to-fuchsia-400 after:absolute after:-bottom-2 after:right-0 after:h-0.75 after:w-12 after:rounded-full after:bg-violet-600">
                {aboutData.eyebrow}
              </span>
            </div>

            {/* Description */}
            <p className=" max-w-xl text-justify text-[14px] sm:text-[16px] leading-8 text-zinc-500 sm:text-lg">
              {aboutData.description}
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4">
              {aboutData.stats.map((stat, index) => {
                const Icon = icons[stat.icon as keyof typeof icons];

                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="
                      group
                      rounded-2xl
                      border border-violet-100
                      bg-violet-100/40  
                      p-2
                      shadow-sm
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-violet-200
                      hover:shadow-lg
                      hover:shadow-violet-100/40
                      
                    "
                  >
                    <div className="flex items-center gap-1">
                      <div className=" flex items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition-colors duration-300 group-hover:bg-violet-100">
                        <Icon size={17} />
                      </div>
                      <p className="text-xs font-medium text-zinc-400">
                        {stat.label}
                      </p>
                    </div>
                    <p
                      className={`mt-1 min-w-0 truncate font-bold text-violet-600 ${
                        stat.label === "ایمیل"
                          ? "text-[10px] sm:text-sm"
                          : "text-xs sm:text-sm"
                      }`}
                    >
                      {stat.value}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ================================= */}
          {/* Skills */}
          {/* ================================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="order-1 h-full rounded-2xl bg-violet-100/20 p-5 sm:p-6 lg:order-2"
          >
            {/* Heading */}
            <div className="mb-8">
              <div className="mb-4">
                <span className="relative inline-block text-xl font-bold text-zinc-900 after:absolute after:-bottom-2 after:right-0 after:h-[3px] after:bg-gradient-to-l after:from-violet-500 after:to-fuchsia-400 after:w-12 after:rounded-full after:bg-violet-600">
                  مهارت‌های من
                </span>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {skillsData.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.035,
                    }}
                    whileHover={{ y: -4 }}
                    className="
  group flex min-h-14 items-center justify-center gap-2
  rounded-2xl border border-zinc-100 bg-white
  px-2.5 py-2
  shadow-sm transition-all duration-300
  hover:border-violet-200 hover:bg-violet-50/50
  hover:shadow-lg hover:shadow-violet-100/40
"
                  >
                    <Icon
                      size={18}
                      style={{ color: skill.color }}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />

                    <span className="text-xs font-semibold text-zinc-600 transition-colors duration-300 group-hover:text-violet-700">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
