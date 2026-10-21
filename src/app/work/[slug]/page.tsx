import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Tag, UserCheck, Layers } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} · Case Study · Fachri All Khijaro`,
    description: project.tagline,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 pt-28 pb-16 space-y-16">
      {/* Back button */}
      <Link
        href="/work"
        className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to My Lab</span>
      </Link>

      {/* Case Study Header */}
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-neutral-100 text-xs font-mono font-semibold text-neutral-700">
            {project.category}
          </span>
          <span className="text-xs font-mono text-neutral-400">· {project.platform}</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-neutral-900 leading-tight">
          {project.tagline}
        </h1>

        <p className="font-sans text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
          {project.summary}
        </p>

        {/* Project Meta Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80 text-xs font-mono">
          <div className="space-y-1">
            <span className="text-neutral-400 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5" />
              Role
            </span>
            <p className="font-bold text-neutral-900">{project.role}</p>
          </div>
          <div className="space-y-1">
            <span className="text-neutral-400 flex items-center gap-1">
              <UserCheck className="w-3.5 h-3.5" />
              Client
            </span>
            <p className="font-bold text-neutral-900">{project.client}</p>
          </div>
          <div className="space-y-1">
            <span className="text-neutral-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              Year
            </span>
            <p className="font-bold text-neutral-900">{project.year}</p>
          </div>
          <div className="space-y-1">
            <span className="text-neutral-400 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5" />
              Scope
            </span>
            <p className="font-bold text-neutral-900">{project.category} Systems</p>
          </div>
        </div>
      </div>

      {/* Featured Cover Image */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden shadow-xl border border-neutral-200 bg-neutral-100">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 896px"
          className="object-cover"
        />
      </div>

      {/* Case Study Visual Gallery */}
      <section className="space-y-8">
        <div>
          <span className="text-xs uppercase tracking-widest font-mono text-neutral-400 font-semibold">
            Visual Documentation
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 mt-1">
            Selected Frames & Deliverables
          </h2>
        </div>

        <div className="space-y-8">
          {project.images.map((img, idx) => (
            <div
              key={idx}
              className="relative w-full rounded-2xl overflow-hidden shadow-md border border-neutral-200/80 bg-neutral-100"
            >
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9]">
                <Image
                  src={img}
                  alt={`${project.title} deliverable ${idx + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Next Projects Footer */}
      <div className="pt-12 border-t border-neutral-200 flex items-center justify-between">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-900 hover:text-neutral-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Case Studies</span>
        </Link>
        <Link
          href="/meet-me"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-900 hover:text-neutral-600 transition-colors"
        >
          <span>Meet the Designer</span>
        </Link>
      </div>
    </div>
  );
}
