import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { projects } from "./data";
import { ProjectCard } from "./ProjectCard";
import { ProjectExpansionTransition } from "./ProjectExpansionTransition";
import { LightLeaks } from "../LightLeaks";

export function ProjectDeck() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const pinRef = useRef(null);
  const deckRef = useRef(null);

  const active = projects[activeIndex];
  const next = useCallback(() => setActiveIndex((i) => Math.min(i + 1, projects.length - 1)), []);
  const prev = useCallback(() => setActiveIndex((i) => Math.max(i - 1, 0)), []);

  useEffect(() => {
    const onKey = (e) => {
      if (expanded) { if (e.key === "Escape") setExpanded(null); return; }
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [expanded, next, prev]);

  useEffect(() => {
    document.body.style.overflow = expanded ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [expanded]);

  // Pinned scroll - unskippable, rAF throttled for smoothness
  useEffect(() => {
    let ticking = false;
    const update = () => {
      if (!pinRef.current || expanded) { ticking = false; return; }
      const rect = pinRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height - vh;
      if (total <= 0) { ticking = false; return; }
      const progress = Math.min(Math.max(-rect.top / total, 0), 1);
      const idx = Math.min(projects.length - 1, Math.floor(progress * projects.length + 0.0001));
      setActiveIndex((prev) => (prev !== idx ? idx : prev));
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [expanded]);

  // Wheel to drive deck when hovered or when section is at top
  useEffect(() => {
    const el = deckRef.current?.closest("section");
    if (!el) return;
    let lock = false;
    const onWheel = (e) => {
      if (expanded) return;
      const rect = el.getBoundingClientRect();
      const atTop = Math.abs(rect.top) < 8;
      if (!atTop && !isHovered) return;
      if (Math.abs(e.deltaY) < 10) return;
      if (lock) return;
      // Only intercept if we can move in that direction
      if (e.deltaY > 0 && activeIndex >= projects.length - 1) return;
      if (e.deltaY < 0 && activeIndex <= 0) return;
      e.preventDefault();
      lock = true;
      if (e.deltaY > 0) next(); else prev();
      setTimeout(() => (lock = false), 620);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [expanded, isHovered, activeIndex, next, prev]);

  // Touch swipe
  useEffect(() => {
    const el = deckRef.current;
    if (!el) return;
    let sx = 0;
    const onTouchStart = (e) => { sx = e.touches[0].clientX; };
    const onTouchEnd = (e) => {
      const dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) < 40) return;
      if (dx < 0) next(); else prev();
    };
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [next, prev]);

  const handleSelect = (idx, project) => {
    if (idx === activeIndex) setExpanded(project);
    else setActiveIndex(idx);
  };

  const progress = ((activeIndex + 1) / projects.length) * 100;

  return (
    <section
      id="work"
      ref={pinRef}
      className="relative z-[2] bg-[#101014] border-t border-white/[0.06]"
      style={{ height: `${projects.length * 100}vh` }}
    >
      <LightLeaks count={5} />
      <motion.div
        initial={{ y: "40vh", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
        className="sticky top-0 h-[100svh] min-h-[620px] overflow-hidden flex flex-col bg-[#101014] border-t border-white/[0.06] shadow-[0_-50px_80px_rgba(0,0,0,0.6)]"
        style={{ willChange: "transform" }}
      >
      <div className="absolute top-0 left-[6vw] w-[clamp(72px,9vw,150px)] h-[3px] bg-[#f5871f] z-10" />
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{ background: `radial-gradient(60% 50% at 50% 28%, rgba(245,135,31,0.09), transparent 68%)` }} />
      </div>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`, backgroundSize: `32px 32px` }} />

      {/* Header */}
      <div className="relative shrink-0 w-[min(1320px,100%-12vw)] mx-auto pt-8 md:pt-10 pb-4">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-white/[0.06] pb-4">
          <div className="min-w-0">
            <p className="text-[11px] tracking-[0.18em] font-mono text-white/30">DEMO SHOWCASE — 06 WEBSITES BUILT FOR CLIENTS</p>
            <h2 className="font-anton text-[clamp(36px,5.4vw,68px)] leading-[0.84] tracking-[-0.015em] text-white mt-2">
              YOUR NEXT <span className="text-[#f5871f]">WEBSITE</span>
            </h2>
          </div>
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[12px] font-mono">
              <span className="text-white">{String(activeIndex + 1).padStart(2, "0")}</span>
              <span className="text-white/20">/</span>
              <span className="text-white/40">{String(projects.length).padStart(2, "0")}</span>
            </div>
          </div>
        </div>
        <div className="mt-3 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <motion.div className="h-full bg-[#f5871f]" animate={{ width: `${progress}%` }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} />
        </div>
      </div>

      {/* Deck viewport */}
      <div
        ref={deckRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex-1 relative w-[min(1320px,100%-12vw)] mx-auto min-h-0 flex items-center justify-center"
      >
        <div className="relative w-[min(980px,96vw)] md:w-[min(1040px,90vw)] h-[640px] md:h-[680px] perspective-[1200px]" style={{ perspective: "1200px" }}>
          <div className="absolute inset-0 will-change-transform" style={{ transformStyle: "preserve-3d" }}>
            {projects.map((p, idx) => (
              <ProjectCard key={p.id} project={p} index={idx} activeIndex={activeIndex} onSelect={handleSelect} total={projects.length} />
            ))}
          </div>

          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-2 md:-left-10 lg:-left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#f5871f] text-white grid place-items-center text-[26px] md:text-[32px] font-black leading-none shadow-[0_12px_32px_rgba(0,0,0,0.4)] hover:bg-[#f9a43c] hover:scale-105 active:scale-95 transition"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-2 md:-right-10 lg:-right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white text-black grid place-items-center text-[26px] md:text-[32px] font-black leading-none shadow-[0_12px_32px_rgba(0,0,0,0.4)] hover:bg-white/90 hover:scale-105 active:scale-95 transition"
          >
            ›
          </button>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-2 translate-x-[72px]">
            {projects.map((p, i) => (
              <button key={p.id} onClick={() => handleSelect(i, p)} className="group flex items-center gap-2.5">
                <span className={`text-[10px] font-mono tracking-[0.14em] ${i === activeIndex ? "text-white" : "text-white/20 group-hover:text-white/50"}`}>{p.index}</span>
                <span className={`h-[2px] transition-all ${i === activeIndex ? "w-10 bg-[#f5871f]" : "w-5 bg-white/10"}`} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="shrink-0 w-[min(1320px,100%-12vw)] mx-auto pb-4 md:pb-6">
        <div className="flex justify-center gap-1.5 mb-3">
          {projects.map((_, i) => (
            <button key={i} onClick={() => handleSelect(i, projects[i])} aria-label={`Go to ${i+1}`} className={`h-1 rounded-full transition-all ${i === activeIndex ? "w-7 bg-[#f5871f]" : "w-1.5 bg-white/15"}`} />
          ))}
        </div>
        <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-white/35 border-t border-white/[0.06] pt-3">
            <span>{active.title}</span>
            <span className="text-white/15">—</span>
            <span className="text-white/60">{active.subtitle}</span>
          </div>
        </div>
      </motion.div>

      <ProjectExpansionTransition project={expanded} onClose={() => setExpanded(null)} />
    </section>
  );
}
