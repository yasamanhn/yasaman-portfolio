"use client";

import { ArrowUpLeft, MessageCircle, Phone, Sparkles } from "lucide-react";

export default function Contact() {
  const phoneNumber = "0915 594 6573";

  return (
    <section id="contact" className="overflow-hidden scroll-mt-20 py-20 ">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid items-center gap-12 md:gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          {/* Right - Content */}
          <div className="min-w-0 text-right">
            <h2 className="text-center text-2xl font-extrabold leading-[1.6] tracking-tight text-zinc-900 sm:text-4xl md:text-right">
              آماده همکاری در پروژه‌های جدید
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-center text-sm leading-8 text-zinc-500 sm:mt-6 sm:text-base md:mx-0 md:text-right">
              اگر به دنبال یک توسعه‌دهنده فرانت‌اند برای پیاده‌سازی، توسعه یا
              بهبود پروژه خود هستید، خوشحال می‌شوم درباره جزئیات پروژه و فرصت
              همکاری گفتگو کنیم.
            </p>

            {/* Phone */}
            <a
              href={`tel:${phoneNumber}`}
              dir="ltr"
              className="
                group mx-auto mt-7 flex w-fit max-w-full
                items-center justify-center gap-3
                rounded-2xl border border-violet-100
                bg-white/70 px-4 py-2
                shadow-[0_12px_40px_rgba(124,58,237,0.06)]
                backdrop-blur-xl
                transition-all duration-300
                hover:-translate-y-1
                hover:border-violet-200
                hover:shadow-[0_18px_45px_rgba(124,58,237,0.12)]
                sm:mt-9 sm:gap-4 sm:px-5
                md:mx-0
              "
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition-all duration-300 group-hover:bg-violet-400 group-hover:text-white sm:h-11 sm:w-11">
                <Phone size={18} />
              </span>

              <span className="whitespace-nowrap text-sm font-bold text-zinc-800 transition-colors group-hover:text-violet-700 sm:text-base">
                {phoneNumber}
              </span>
            </a>
          </div>

          {/* Left - Visual */}
          <div className="order-first hidden w-full max-w-lg justify-self-center md:flex lg:order-first">
            <div className="relative w-full">
              {/* Glow */}
              <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300/20 blur-3xl sm:h-72 sm:w-72" />

              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/50 shadow-[0_30px_80px_rgba(124,58,237,0.10)] backdrop-blur-xl sm:rounded-[2rem]">
                {/* Decorative gradient */}
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-violet-400/15 blur-3xl sm:-right-20 sm:-top-20 sm:h-56 sm:w-56" />

                <div className="absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-fuchsia-400/10 blur-3xl sm:-bottom-24 sm:-left-20 sm:h-64 sm:w-64" />

                {/* Dotted pattern */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, rgba(124,58,237,0.18) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />

                {/* Main conversation card */}
                <div className="absolute left-1/2 top-1/2 w-[82%] -translate-x-1/2 -translate-y-1/2 sm:w-[76%]">
                  <div className="rounded-[1.4rem] border border-white bg-white/80 p-3.5 shadow-[0_25px_60px_rgba(124,58,237,0.12)] backdrop-blur-xl sm:rounded-[1.75rem] sm:p-5">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-zinc-100 pb-3 sm:pb-4">
                      <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-violet-500/20 sm:h-10 sm:w-10">
                          <MessageCircle size={17} />
                        </div>

                        <div className="min-w-0 text-right">
                          <div className="truncate text-xs font-bold text-zinc-800 sm:text-sm">
                            ارتباط مستقیم
                          </div>

                          <div className="mt-1 flex items-center gap-1.5 text-[9px] text-zinc-400 sm:text-[10px]">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                            آماده گفتگو
                          </div>
                        </div>
                      </div>

                      <div className="flex shrink-0 gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-zinc-200 sm:h-2 sm:w-2" />
                        <span className="h-1.5 w-1.5 rounded-full bg-violet-200 sm:h-2 sm:w-2" />
                        <span className="h-1.5 w-1.5 rounded-full bg-violet-400 sm:h-2 sm:w-2" />
                      </div>
                    </div>

                    {/* Messages */}
                    <div className="space-y-2.5 py-4 sm:space-y-3 sm:py-5">
                      <div className="mr-auto max-w-[75%] rounded-2xl rounded-br-md bg-zinc-50 px-3 py-2.5 sm:px-4 sm:py-3">
                        <div className="h-1.5 w-20 rounded-full bg-zinc-200 sm:h-2 sm:w-24" />
                        <div className="mt-2 h-1.5 w-14 rounded-full bg-zinc-100 sm:h-2 sm:w-16" />
                      </div>

                      <div className="ml-auto max-w-[70%] rounded-2xl rounded-bl-md bg-gradient-to-br from-violet-500 to-violet-600 px-3 py-2.5 shadow-lg shadow-violet-500/15 sm:px-4 sm:py-3">
                        <div className="h-1.5 w-16 rounded-full bg-white/50 sm:h-2 sm:w-20" />
                        <div className="mt-2 h-1.5 w-10 rounded-full bg-white/30 sm:h-2 sm:w-12" />
                      </div>

                      <div className="mr-auto flex items-center gap-1.5 rounded-2xl bg-violet-50 px-3 py-2.5 sm:gap-2 sm:px-4 sm:py-3">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400 sm:h-2 sm:w-2" />
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-300 [animation-delay:150ms] sm:h-2 sm:w-2" />
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-200 [animation-delay:300ms] sm:h-2 sm:w-2" />
                      </div>
                    </div>

                    {/* Input */}
                    <div className="flex items-center gap-2 rounded-xl border border-zinc-100 bg-zinc-50 p-1.5 sm:p-2">
                      <div className="h-7 flex-1 rounded-lg bg-white sm:h-8" />

                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-violet-600 text-white sm:h-8 sm:w-8">
                        <ArrowUpLeft size={14} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white bg-white/80 px-3 py-2 shadow-lg shadow-violet-500/10 backdrop-blur-xl sm:bottom-6 sm:left-6 sm:px-3.5 sm:py-2.5">
                  <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-violet-400 opacity-50" />
                    <span className="relative h-2 w-2 rounded-full bg-violet-500 sm:h-2.5 sm:w-2.5" />
                  </span>

                  <span className="text-[10px] font-medium text-zinc-600 sm:text-xs">
                    آماده همکاری
                  </span>
                </div>

                {/* Floating icon */}
                <div className="absolute right-4 top-4 flex h-9 w-9 rotate-6 items-center justify-center rounded-xl border border-white bg-white/80 text-violet-500 shadow-lg shadow-violet-500/10 backdrop-blur-xl sm:right-6 sm:top-6 sm:h-11 sm:w-11 sm:rounded-2xl">
                  <Phone size={15} className="sm:hidden" />
                  <Phone size={17} className="hidden sm:block" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
