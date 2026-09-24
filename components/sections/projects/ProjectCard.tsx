"use client";

import Image from "next/image";
import { ArrowUpLeft } from "lucide-react";
import clsx from "clsx";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  onClick: (project: Project) => void;
};

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <article
      onClick={() => onClick(project)}
      className="group h-full mb-5 cursor-pointer overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/50"
    >
      {/* Image */}
      <div className="relative aspect-16/10 overflow-hidden bg-zinc-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover bg-white transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/0 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

        {/* Open icon */}
        <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white/90 text-violet-700 opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpLeft size={18} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col p-5 sm:p-6">
        <h3 className="text-lg font-bold text-zinc-900 transition-colors duration-300 group-hover:text-violet-700 sm:text-lg">
          {project.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-500">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="hidden md:flex mt-5  items-center gap-2 overflow-hidden">
          {project.technologies.slice(0, 4).map((technology) => (
            <span
              key={technology}
              className="shrink-0 rounded-full bg-violet-50 px-3 py-1.5 text-xs font-medium text-violet-700 transition-colors duration-300 group-hover:bg-violet-100"
            >
              {technology}
            </span>
          ))}

          {project.technologies.length > 4 && (
            <span className="shrink-0 rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-500">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* mobile ui */}
        <div className="md:hidden  mt-5 flex items-center gap-2 overflow-hidden">
          {project.technologies.slice(0, 3).map((technology) => (
            <span
              key={technology}
              className="shrink-0 rounded-full bg-violet-50 px-3 py-1.5 text-xs font-medium text-violet-700 transition-colors duration-300 group-hover:bg-violet-100"
            >
              {technology}
            </span>
          ))}

          {project.technologies.length > 3 && (
            <span className="shrink-0 rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-500">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
