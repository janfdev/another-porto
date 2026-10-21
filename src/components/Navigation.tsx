"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Home, User, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Come In", icon: Home },
    { href: "/meet-me", label: "Meet Me", icon: User },
    { href: "/work", label: "My Lab", icon: Briefcase },
  ];

  return (
    <header className="fixed top-4 sm:top-5 left-0 right-0 z-50 pointer-events-none flex justify-center px-4">
      <div className="pointer-events-auto flex items-center justify-between gap-3 w-full max-w-4xl bg-white/90 backdrop-blur-md border border-neutral-200/80 rounded-full px-4 py-2 sm:px-6 sm:py-2.5 shadow-sm shadow-black/5 transition-all">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-neutral-900 font-sans font-medium text-sm sm:text-base hover:opacity-80 transition-opacity"
        >
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden bg-neutral-100 flex items-center justify-center border border-neutral-200/60">
            <Image
              src="/assets/memoji.png"
              alt="Fachryall Avatar"
              fill
              sizes="36px"
              className="object-contain p-0.5 group-hover:rotate-12 transition-transform duration-300"
            />
          </div>
          <span className="font-semibold tracking-tight text-neutral-900">Fachryall</span>
        </Link>

        {/* Center Pill Nav */}
        <nav aria-label="Main Navigation">
          <ul className="flex items-center gap-1 bg-neutral-100/90 p-1 rounded-full border border-neutral-200/60">
            {links.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all",
                      isActive
                        ? "bg-white text-neutral-900 shadow-xs font-semibold"
                        : "text-neutral-500 hover:text-neutral-900 hover:bg-white/60"
                    )}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CTA Say Hello */}
        <a
          href="https://www.linkedin.com/in/fachriallkhijaro/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs sm:text-sm font-medium shadow-xs transition-colors"
        >
          <span>👋</span>
          <span>Say Hello</span>
        </a>
      </div>
    </header>
  );
}
