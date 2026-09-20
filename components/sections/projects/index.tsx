"use client";

import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { projects, type Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const swiperRef = useRef<any>(null);

  return (
    <section
      id="projects"
      className="overflow-hidden scroll-mt-20 pt-14 sm:pt-20"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        {/* Header */}
        <div className="mb-12">
          <span className="relative inline-block text-xl font-bold text-zinc-900 after:absolute after:-bottom-2 after:right-0 after:h-[3px] after:w-12 after:rounded-full after:bg-gradient-to-l after:from-violet-500 after:to-fuchsia-400">
            نمونه کارها
          </span>
        </div>

        {/* Projects Slider */}
        <div className="relative overflow-hidden rounded-3xl pb-20 flex gap-10">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={700}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1.1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
            className="pb-2!"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="h-auto">
                <ProjectCard project={project} onClick={setSelectedProject} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Previous */}
          <button
            type="button"
            className="
      projects-prev
      absolute
      bottom-6
      left-1/2
      z-20
      mr-2
      flex
      h-8
      w-8
      -translate-x-full
      items-center
      justify-center
      rounded-full
      bg-white
      text-zinc-700
      shadow-sm
      transition-all
      duration-200
      hover:scale-105
      hover:bg-violet-50
      hover:text-violet-600
    "
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="نمونه کار قبلی"
          >
            <ChevronLeft size={17} />
          </button>
          {/* Next */}
          <button
            type="button"
            className="
      projects-next
      absolute
      bottom-6
      left-1/2
      z-20
      ml-4
      flex
      h-8
      w-8
      -translate-x-0
      items-center
      justify-center
      rounded-full
      bg-white
      text-zinc-700
      shadow-sm
      transition-all
      duration-200
      hover:scale-105
      hover:bg-violet-50
      hover:text-violet-600
    "
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="نمونه کار بعدی"
          >
            <ChevronRight size={17} />
          </button>
        </div>
      </div>

      {/* Project Dialog */}
      <Dialog
        open={selectedProject !== null}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedProject(null);
          }
        }}
      >
        <DialogContent
          showCloseButton={false}
          className="
            w-[calc(100%-1rem)]
            max-w-4xl!
            overflow-hidden
            rounded-[24px]
            border
            border-zinc-200
            bg-white
            p-0
            shadow-2xl
            sm:w-[calc(100%-2rem)]
            lg:max-h-[88vh]
          "
        >
          {selectedProject && (
            <div className="relative flex max-h-[88vh] flex-col">
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="بستن"
                className="
                  absolute
                  right-4
                  top-4
                  z-50
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-black/55
                  text-white
                  shadow-lg
                  backdrop-blur-md
                  transition-all
                  duration-200
                  hover:scale-105
                  hover:bg-black/75
                  sm:right-5
                  sm:top-5
                  sm:h-10
                  sm:w-10
                "
              >
                <X size={18} />
              </button>

              {/* Main Content */}
              <div
                className="
                  grid
                  min-h-0
                  overflow-y-auto
                  lg:grid-cols-[1fr_1fr]
                  lg:overflow-hidden
                "
              >
                {/* =========================
                    RIGHT — Gallery
                ========================== */}
                <div
                  className="
                    min-w-0
                    p-3
                    sm:p-5
                    lg:h-full                  
                    lg:p-7
                  "
                >
                  {selectedProject.gallery &&
                  selectedProject.gallery.length > 0 ? (
                    <Swiper
                      modules={[Pagination, Navigation, Autoplay]}
                      pagination={{
                        clickable: true,
                        dynamicBullets: true,
                      }}
                      navigation={{
                        nextEl: ".project-gallery-next",
                        prevEl: ".project-gallery-prev",
                      }}
                      autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                      }}
                      speed={700}
                      spaceBetween={20}
                      slidesPerView={1}
                      className="project-gallery-swiper border rounded-2xl  h-full pb-10"
                    >
                      {selectedProject.gallery.map((item) => (
                        <SwiperSlide key={item.id} className="h-auto">
                          <div className="flex h-full flex-col overflow-hidden rounded-2xl  shadow-sm">
                            {/* Image */}
                            <div
                              className="
                                flex
                                min-h-[220px]
                                flex-1
                                items-center
                                justify-center
                                bg-zinc-100
                                p-3
                                sm:min-h-[340px]
                                sm:p-4
                                lg:min-h-0
                                lg:p-5
                              "
                            >
                              <img
                                src={item.image}
                                alt={item.title}
                                loading="lazy"
                                draggable={false}
                                className="
                                  max-h-[38vh]
                                  w-full
                                  rounded-xl
                                  object-contain
                                  sm:max-h-[46vh]
                                  lg:max-h-[48vh]
                                "
                              />
                            </div>

                            {/* Gallery Description */}
                            <div className="shrink-0 border-t border-zinc-100  p-4 sm:p-5 ">
                              <h3 className="text-base font-bold text-zinc-900 sm:text-lg">
                                {item.title}
                              </h3>

                              <p className="mt-2 text-xs leading-6 text-zinc-600 sm:text-sm sm:leading-7">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}

                      {/* Previous */}
                      <button
                        type="button"
                        className="
                          project-gallery-prev
                          absolute
                          right-3
                          top-[42%]
                          z-20
                          flex
                          h-9
                          w-9
                          -translate-y-1/2
                          items-center
                          justify-center
                          rounded-full
                          bg-white/90
                          text-zinc-700
                          shadow-md
                          backdrop-blur
                          transition-all
                          duration-200
                          hover:scale-105
                          hover:bg-white
                          sm:h-10
                          sm:w-10
                        "
                        aria-label="تصویر قبلی"
                      >
                        <ChevronRight size={18} />
                      </button>

                      {/* Next */}
                      <button
                        type="button"
                        className="
                          project-gallery-next
                          absolute
                          left-3
                          top-[42%]
                          z-20
                          flex
                          h-9
                          w-9
                          -translate-y-1/2
                          items-center
                          justify-center
                          rounded-full
                          bg-white/90
                          text-zinc-700
                          shadow-md
                          backdrop-blur
                          transition-all
                          duration-200
                          hover:scale-105
                          hover:bg-white
                          sm:h-10
                          sm:w-10
                        "
                        aria-label="تصویر بعدی"
                      >
                        <ChevronLeft size={18} />
                      </button>
                    </Swiper>
                  ) : (
                    <div className="flex h-full items-center justify-center overflow-hidden rounded-2xl bg-white">
                      <div className="flex min-h-[300px] w-full items-center justify-center bg-zinc-100 p-5">
                        <img
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          loading="lazy"
                          className="max-h-[65vh] w-full rounded-xl object-contain"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* =========================
                    LEFT — Project Information
                ========================== */}
                <div
                  className="
                    flex
                    min-h-0
                    flex-col
                    bg-white
                    p-5
                    sm:p-7
                    lg:h-full
                    lg:overflow-y-auto
                    lg:p-7
                  "
                >
                  {/* Title & Description */}
                  <div>
                    <DialogTitle className="text-xl font-bold leading-9 text-zinc-900 sm:text-2xl lg:text-2xl">
                      {selectedProject.title}
                    </DialogTitle>

                    <DialogDescription className="mt-3 text-xs leading-7 text-zinc-600 sm:text-sm sm:leading-8 lg:mt-4 lg:text-14 md:text-justify">
                      {selectedProject.details}
                    </DialogDescription>
                  </div>

                  {/* Divider */}
                  <div className="my-5 h-px bg-zinc-200 sm:my-6 lg:my-7" />

                  {/* Technologies */}
                  <div>
                    <h3 className="mb-3 text-sm font-bold text-zinc-900 sm:mb-4">
                      تکنولوژی‌های استفاده شده
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="
                            rounded-full
                            bg-violet-50
                            px-2.5
                            py-1.5
                            text-[11px]
                            font-medium
                            text-violet-700
                            sm:px-3
                            sm:py-2
                            sm:text-xs
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  {(selectedProject.github || selectedProject.demo) && (
                    <div
                      className="
                        mt-7
                        flex
                        flex-col
                        gap-2.5
                        pt-2
                        sm:flex-row
                        lg:mt-auto
                        lg:flex-col
                        lg:pt-8
                      "
                    >
                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            rounded-xl
                            bg-zinc-900
                            px-5
                            py-3
                            text-center
                            text-xs
                            font-medium
                            text-white
                            transition-all
                            duration-200
                            hover:-translate-y-0.5
                            hover:bg-zinc-800
                            sm:text-sm
                          "
                        >
                          GitHub
                        </a>
                      )}

                      {selectedProject.demo && (
                        <a
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            rounded-xl
                            bg-violet-600
                            px-5
                            py-3
                            text-center
                            text-xs
                            font-medium
                            text-white
                            transition-all
                            duration-200
                            hover:-translate-y-0.5
                            hover:bg-violet-700
                            sm:text-sm
                          "
                        >
                          مشاهده پروژه
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
