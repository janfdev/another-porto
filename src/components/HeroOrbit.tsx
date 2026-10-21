"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";

export function HeroOrbit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const rotateProgress = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const orbitProjects = PROJECTS.slice(0, 8);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden bg-white"
    >
      {/* Background Soft Orbital Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-50 via-white to-white opacity-80" />

      {/* Orbiting Cards Showcase Ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.div
          style={{ rotate: rotateProgress, scale: scaleProgress }}
          className="relative w-[780px] h-[780px] sm:w-[960px] sm:h-[960px] rounded-full border border-dashed border-neutral-200/60"
        >
          {orbitProjects.map((p, idx) => {
            const angle = (idx * (360 / orbitProjects.length) * Math.PI) / 180;
            const radius = 380; // Distance from center
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <div
                key={p.slug}
                style={{
                  transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                }}
                className="absolute top-1/2 left-1/2 w-28 sm:w-36 aspect-[360/389] rounded-2xl overflow-hidden shadow-lg shadow-black/8 border border-neutral-200/80 bg-neutral-100 pointer-events-auto hover:scale-110 hover:z-20 transition-transform duration-300"
              >
                <Link href={`/work/${p.slug}`} className="block w-full h-full relative">
                  <Image
                    src={p.coverImage}
                    alt={p.title}
                    fill
                    sizes="(max-width: 640px) 112px, 144px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-neutral-900/10 hover:bg-transparent transition-colors" />
                </Link>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Hero Center Editorial Copy */}
      <div className="relative z-10 max-w-2xl text-center space-y-6 px-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/80 text-xs text-neutral-600 font-medium shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-neutral-800" />
          <span>Multidisciplinary Designer & Creative Strategist</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-neutral-900 leading-[1.08]">
          Hi, Fachri here. <br />
          <span className="italic font-light text-neutral-600">A Multidisciplinary Designer.</span>
        </h1>

        <p className="font-sans text-neutral-500 text-sm sm:text-base md:text-lg max-w-lg mx-auto font-normal leading-relaxed">
          I turn business needs into clear visual communication, coherent branding systems, and meaningful digital experiences.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium shadow-md transition-all group"
          >
            <span>See my work</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/meet-me"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-100 hover:bg-neutral-200/80 text-neutral-800 text-sm font-medium border border-neutral-200 transition-colors"
          >
            <span>Take a closer look</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
