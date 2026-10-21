import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FileText } from "lucide-react";
import { HeroOrbit } from "@/components/HeroOrbit";
import { WorkCatalog } from "@/components/WorkCatalog";
import { EXPERIENCES, TESTIMONIALS } from "@/data/portfolio";

export default function Home() {
  const clients = [
    "cekat-ai",
    "subaru",
    "realfood",
    "ocistok",
    "grid-network",
    "kompas",
    "pertamina",
    "yamaha",
    "bobo",
    "national-geographic",
  ];

  return (
    <div className="space-y-24">
      {/* 1. Hero with 3D Orbit */}
      <HeroOrbit />

      {/* 2. Brand Clients Marquee / Grid */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-widest font-mono text-neutral-400">
            Trusted by Brands & High-Growth Companies
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-8 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
          {clients.map((c) => (
            <div key={c} className="relative h-10 w-28 flex items-center justify-center">
              <Image
                src={`/assets/clients/${c}.png`}
                alt={c}
                fill
                sizes="112px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 3. About Section */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 items-center bg-neutral-50/80 p-8 sm:p-12 rounded-3xl border border-neutral-200/80">
          <div className="md:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest font-mono text-neutral-500 font-semibold">
              01 · Meet Me
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
              A Bit About Me.
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed font-light">
              I work where visual design, branding, marketing, and digital products meet, and I am at home moving between creative, marketing, product, and business teams. Lately I am growing toward strategic design, so every decision ties back to user needs and business goals.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/meet-me"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs sm:text-sm font-medium shadow-sm transition-colors"
              >
                <span>Take a closer look</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="/assets/Fachri-All-Khijaro-CV.pdf"
                download="Fachri All Khijaro CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-neutral-100 text-neutral-800 text-xs sm:text-sm font-medium border border-neutral-200 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Resume in docs</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <Image
                src="/assets/portrait-meet.jpg"
                alt="Fachri All Khijaro"
                fill
                sizes="256px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Experience Timeline Overview */}
      <section className="max-w-5xl mx-auto px-6 space-y-8">
        <div>
          <span className="text-xs uppercase tracking-widest font-mono text-neutral-500 font-semibold">
            02 · Where I have Been
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mt-1">
            Different industries, one way of designing.
          </h2>
        </div>

        <div className="grid gap-4">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.company}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <span className="text-xs font-mono text-neutral-400 font-semibold">
                  0{idx + 1}
                </span>
                <h3 className="font-serif text-2xl font-bold text-neutral-900">
                  {exp.company}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500">{exp.role} · {exp.division}</p>
              </div>

              <div className="md:text-right">
                <span className="inline-block px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-mono">
                  {exp.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Selected Works Catalog */}
      <section className="max-w-5xl mx-auto px-6 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest font-mono text-neutral-500 font-semibold">
              03 · The Things
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mt-1">
              Hand-picked projects from the archive.
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-900 hover:text-neutral-600 transition-colors"
          >
            <span>Explore all projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <WorkCatalog initialCategory="All" />
      </section>

      {/* 6. Testimonials Section */}
      <section className="max-w-5xl mx-auto px-6 space-y-8">
        <div>
          <span className="text-xs uppercase tracking-widest font-mono text-neutral-500 font-semibold">
            04 · Testimonials
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mt-1">
            Nice Things People Said.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="p-8 rounded-3xl bg-neutral-50 border border-neutral-200/80 shadow-2xs flex flex-col justify-between space-y-6"
            >
              <p className="font-sans text-sm sm:text-base text-neutral-700 italic leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-neutral-200/60">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-neutral-200">
                  <Image src={t.avatar} alt={t.name} fill sizes="40px" className="object-cover" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-neutral-900 leading-none">
                    {t.name}
                  </h4>
                  <span className="text-xs text-neutral-500 font-sans">{t.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
