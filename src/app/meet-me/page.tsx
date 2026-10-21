"use client";

import React, { useEffect, useRef } from "react";
import Script from "next/script";
import "@/app/original-meet.css";
import { RAW_MEET_HTML } from "@/data/raw-html";

export default function MeetMePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nav = document.getElementById("nav");
    function onScrollUi() {
      if (!nav) return;
      const isCompact = window.scrollY > 80;
      nav.classList.toggle("compact", isCompact);
    }
    window.addEventListener("scroll", onScrollUi, { passive: true });
    onScrollUi();

    return () => {
      window.removeEventListener("scroll", onScrollUi);
    };
  }, []);

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/lenis@1.1.20/dist/lenis.min.js" strategy="afterInteractive" />
      <Script src="/assets/motion.js" strategy="lazyOnload" />

      <div
        ref={containerRef}
        dangerouslySetInnerHTML={{ __html: RAW_MEET_HTML }}
        suppressHydrationWarning
      />
    </>
  );
}
