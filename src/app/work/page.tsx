"use client";

import React, { useEffect, useRef } from "react";
import Script from "next/script";
import { RAW_WORK_HTML } from "@/data/raw-html";

export default function WorkPage() {
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

    // Category chips filter logic on work page
    const chips = Array.prototype.slice.call(document.querySelectorAll(".chips button, .chip")) as HTMLElement[];
    const cards = Array.prototype.slice.call(document.querySelectorAll(".pcard, .work__card")) as HTMLElement[];

    chips.forEach((ch) => {
      ch.addEventListener("click", () => {
        chips.forEach((c) => c.classList.remove("active"));
        ch.classList.add("active");
        const filter = ch.getAttribute("data-filter") || ch.innerText.trim().toLowerCase();

        cards.forEach((card) => {
          const cardCat = (card.getAttribute("data-cat") || "").toLowerCase();
          if (filter === "all" || cardCat.includes(filter)) {
            card.style.display = "";
          } else {
            card.style.display = "none";
          }
        });
      });
    });

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
        dangerouslySetInnerHTML={{ __html: RAW_WORK_HTML }}
        suppressHydrationWarning
      />
    </>
  );
}
