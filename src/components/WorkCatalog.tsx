"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "UI/UX", "Branding", "Social", "Event", "E-commerce"] as const;

export function WorkCatalog({ initialCategory = "All" }: { initialCategory?: string }) {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);

  const filtered =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-8">
      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer",
              activeCategory === cat
                ? "bg-neutral-900 text-white font-semibold shadow-xs"
                : "bg-neutral-100 hover:bg-neutral-200 text-neutral-600"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filtered.map((item: Project) => (
          <Link
            key={item.slug}
            href={`/work/${item.slug}`}
            className="group flex flex-col rounded-3xl overflow-hidden bg-white border border-neutral-200/80 shadow-xs hover:shadow-xl transition-all duration-300"
          >
            {/* Image Wrap */}
            <div className="relative aspect-[4/3] w-full bg-neutral-100 overflow-hidden">
              <Image
                src={item.coverImage}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[11px] font-mono uppercase tracking-wider text-neutral-800 font-semibold shadow-2xs">
                {item.category}
              </div>
            </div>

            {/* Info */}
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-neutral-700 transition-colors">
                    {item.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
                </div>
                <p className="font-sans text-xs sm:text-sm text-neutral-500 line-clamp-2 leading-relaxed">
                  {item.tagline}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>{item.client}</span>
                <span>{item.year}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
