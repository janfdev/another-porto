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
        R = W < 640 ? Math.max(240, W * 0.6) : Math.min(540, Math.max(380, W * 0.42));
        Ry = Math.max(140, Math.min(R - 70, cy - 180 + cs * 0.2));
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

    // 4. Testimonials Sticky Notes Deck Animation (pile -> grid)
    const words = document.getElementById("words");
    const board = document.getElementById("board");
    if (words && board) {
      const pinEl = words.querySelector(".words__pin") as HTMLElement;
      const notes = Array.prototype.slice.call(board.querySelectorAll(".note")) as HTMLElement[];
      const fanR = [-7, 5, -3, 8, -5, 3, -8, 6];
      const fanX = [-14, 10, -6, 16, -10, 6, -16, 12];
      const restR = [-2, 1.5, -1, 2.5, 1.5, -2, 1, -1.5];
      let geo: { dx: number; dy: number }[] = [];
      let pinned = false;
      let pCur = 0;
      let pRunning = false;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      function clamp(v: number, a: number, b: number) {
        return Math.min(b, Math.max(a, v));
      }

      function measureNotes() {
        if (!board || !words) return;
        pinned = window.matchMedia("(min-width: 901px) and (min-height: 640px)").matches;
        words.classList.toggle("is-pinned", pinned);
        const bw = board.clientWidth,
          bh = board.clientHeight;
        geo = notes.map((n, i) => {
          const cx = n.offsetLeft + n.offsetWidth / 2,
            cy = n.offsetTop + n.offsetHeight / 2;
          let tx = 0,
            ty = 0;
          if (pinned) {
            tx = bw / 2;
            ty = bh / 2;
          } else if (i === 0) {
            tx = cx;
            ty = cy;
          } else {
            tx = notes[i - 1].offsetLeft + notes[i - 1].offsetWidth / 2;
            ty = notes[i - 1].offsetTop + notes[i - 1].offsetHeight / 2;
          }
          return {
            dx: tx - cx + (pinned ? fanX[i] : 0),
            dy: ty - cy + (pinned ? fanX[i] * 0.4 : 0),
          };
        });
        notes.forEach((n, i) => {
          n.style.zIndex = String(notes.length - i);
        });
      }

      function ease(t: number) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      }

      function noteProgress(i: number, p: number) {
        if (pinned) {
          const st = 0.35;
          return clamp((p - (i * st) / (notes.length - 1)) / (1 - st), 0, 1);
        }
        const top = notes[i].getBoundingClientRect().top - ((notes[i] as any)._ty || 0);
        return clamp((window.innerHeight * 0.92 - top) / (window.innerHeight * 0.32), 0, 1);
      }

      function pTarget() {
        if (reduceMotion) return 1;
        if (pinned && pinEl) return clamp(-pinEl.getBoundingClientRect().top / (window.innerHeight * 0.8), 0, 1);
        return 0;
      }

      function drawNotes(p: number) {
        let spread = true;
        notes.forEach((n, i) => {
          const q = reduceMotion ? 1 : noteProgress(i, p);
          const e = ease(q);
          const g = geo[i] || { dx: 0, dy: 0 };
          const x = g.dx * (1 - e);
          const y = g.dy * (1 - e);
          const r = (pinned ? fanR[i] : fanR[i] * 0.5) * (1 - e) + restR[i] * e;
          (n as any)._ty = y;
          n.style.transform = `translate(${x.toFixed(1)}px,${y.toFixed(1)}px) rotate(${r.toFixed(2)}deg) scale(${(1 - 0.03 * (1 - e)).toFixed(3)})`;
          if (q < 0.98) spread = false;
        });
        if (board) board.classList.toggle("is-spread", spread);
      }

      function tickNotes() {
        pRunning = false;
        const t = pTarget();
        pCur += (t - pCur) * (reduceMotion ? 1 : 0.16);
        if (Math.abs(t - pCur) < 0.0008) pCur = t;
        drawNotes(pCur);
        if (pCur !== t) kickNotes();
      }

      function kickNotes() {
        if (!pRunning) {
          pRunning = true;
          requestAnimationFrame(tickNotes);
        }
      }

      measureNotes();
      drawNotes(pinned ? pTarget() : 0);
      pCur = pTarget();
      window.addEventListener("scroll", kickNotes, { passive: true });
      window.addEventListener("resize", () => {
        notes.forEach((n) => {
          n.style.transform = "";
          (n as any)._ty = 0;
        });
        measureNotes();
        kickNotes();
      });
      kickNotes();
    }

    // 5. Trigger motion.js re-scan for dynamic hydrated elements
    if (typeof (window as any).initMotion === "function") {
      (window as any).initMotion();
    }

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
