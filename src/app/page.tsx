"use client";

import React, { useEffect, useRef } from "react";
import Script from "next/script";
import { RAW_INDEX_HTML } from "@/data/raw-html";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Initialize TopNav compact on scroll
    const nav = document.getElementById("nav");
    function onScrollUi() {
      if (!nav) return;
      const isCompact = window.scrollY > 80;
      nav.classList.toggle("compact", isCompact);
    }
    window.addEventListener("scroll", onScrollUi, { passive: true });
    onScrollUi();

    // 2. Initialize Hero Orbit (cards riding an ellipse around the headline)
    const hero = document.getElementById("hero");
    const ring = document.getElementById("ring");
    const copy = document.getElementById("orbitCopy");

    let animFrameId: number;
    if (ring && hero && copy) {
      const cards = Array.prototype.slice.call(ring.children) as HTMLElement[];
      const N = cards.length;
      let cx = 0,
        cy = 0,
        R = 0,
        Ry = 0,
        cs = 140;
      let drift = 0;
      let last = performance.now();
      let visible = true;
      let cur = window.scrollY;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      function layout() {
        if (!hero || !copy || !ring) return;
        const W = hero.clientWidth;
        cs = W < 640 ? 96 : W < 1000 ? 120 : 140;
        cx = W / 2;
        cy = copy.offsetTop + copy.offsetHeight / 2;
        R = W < 640 ? Math.max(250, W * 0.66) : Math.min(600, Math.max(400, W * 0.45));
        Ry = Math.max(180, Math.min(R - 40, cy - 130 + cs * 0.25));
        ring.style.setProperty("--cs", cs + "px");
      }

      function frame(now: number) {
        const dt = Math.min(64, now - last);
        last = now;
        if (!reduce) drift += dt * 0.0035;
        cur += (window.scrollY - cur) * (reduce ? 1 : 0.12);
        const base = (reduce ? 0 : cur * 0.16) + drift;
        const ch = (cs * 389) / 360;

        for (let i = 0; i < N; i++) {
          const th = (((base + (i * 360) / N) % 360) + 540) % 360 - 180;
          const r = (th * Math.PI) / 180;
          const x = cx + R * Math.sin(r) - cs / 2;
          const y = cy - Ry * Math.cos(r) - ch / 2;
          const op = Math.max(0, Math.min(1, (150 - Math.abs(th)) / 35));

          cards[i].style.transform =
            "translate3d(" + x.toFixed(1) + "px," + y.toFixed(1) + "px,0) rotate(" + (th * 0.28).toFixed(2) + "deg)";
          cards[i].style.opacity = op.toFixed(2);
          cards[i].style.visibility = op < 0.02 ? "hidden" : "visible";
        }
        if (visible) animFrameId = requestAnimationFrame(frame);
      }

      layout();
      window.addEventListener("resize", layout);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(layout);
      }

      const observer = new IntersectionObserver((entries) => {
        const was = visible;
        visible = entries[0].isIntersecting;
        if (visible && !was) {
          last = performance.now();
          animFrameId = requestAnimationFrame(frame);
        }
      });
      observer.observe(hero);

      animFrameId = requestAnimationFrame(frame);
    }

    // 3. Gallery Tabs in Cabinet
    const ctabs = Array.prototype.slice.call(document.querySelectorAll(".ctab")) as HTMLElement[];
    function openTab(t: HTMLElement, focus = false) {
      ctabs.forEach((x) => {
        const on = x === t;
        x.classList.toggle("is-active", on);
        x.setAttribute("aria-selected", on ? "true" : "false");
        x.tabIndex = on ? 0 : -1;
        const panelId = x.getAttribute("aria-controls");
        if (panelId) {
          const panel = document.getElementById(panelId);
          if (panel) panel.classList.toggle("is-active", on);
        }
      });
      if (focus) t.focus();
    }

    ctabs.forEach((t, i) => {
      t.addEventListener("click", () => openTab(t));
      t.addEventListener("mouseenter", () => openTab(t));
    });

    return () => {
      window.removeEventListener("scroll", onScrollUi);
      if (animFrameId) cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/lenis@1.1.20/dist/lenis.min.js" strategy="afterInteractive" />
      <Script src="/assets/motion.js" strategy="lazyOnload" />

      {/* Render 100% exact original HTML DOM structure */}
      <div
        ref={containerRef}
        dangerouslySetInnerHTML={{ __html: RAW_INDEX_HTML }}
        suppressHydrationWarning
      />
    </>
  );
}
