import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { WorkCatalog } from "@/components/WorkCatalog";

export const metadata = {
  title: "My Lab · Work Archive · Fachri All Khijaro",
  description: "Curated work and case studies across UI/UX, Branding, Events, and E-Commerce.",
};

export default function WorkPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-28 pb-16 space-y-12">
      {/* Breadcrumb */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Come In</span>
      </Link>

      {/* Header */}
      <div className="space-y-4 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-xs font-mono text-neutral-600 font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>My Lab · Selected Works (2019 - Present)</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-neutral-900 leading-tight">
          Where Design Meets Business.
        </h1>
        <p className="font-sans text-sm sm:text-base text-neutral-500 font-light leading-relaxed">
          Welcome to my creative archive. Explore selected case studies across UI/UX digital products, brand identities, high-converting e-commerce storefronts, and event activations.
        </p>
      </div>

      {/* Interactive Filterable Catalog */}
      <WorkCatalog initialCategory="All" />
    </div>
  );
}
