import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, FileText, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200/80 bg-neutral-50/50 mt-24">
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-neutral-200">
          <div className="space-y-3 max-w-md">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white border border-neutral-200 shadow-2xs">
                <Image
                  src="/assets/memoji.png"
                  alt="Fachryall Avatar"
                  fill
                  sizes="40px"
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-neutral-900 leading-none">
                  Fachri All Khijaro
                </h4>
                <span className="text-xs text-neutral-500 font-sans">Creative Designer</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed">
              Available for freelance branding, design systems, UI/UX audits, and strategic digital experiences.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:fachryall.works@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs sm:text-sm font-medium shadow-xs transition-colors"
            >
              <span>Email me</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="/assets/Fachri-All-Khijaro-CV.pdf"
              download="Fachri All Khijaro CV.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-neutral-100 text-neutral-800 text-xs sm:text-sm font-medium border border-neutral-200 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume (PDF)</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-neutral-800 fill-neutral-800" />
            <span>in Next.js 15 & Tailwind CSS</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-neutral-900 transition-colors">
              Come In
            </Link>
            <Link href="/meet-me" className="hover:text-neutral-900 transition-colors">
              Meet Me
            </Link>
            <Link href="/work" className="hover:text-neutral-900 transition-colors">
              My Lab
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
