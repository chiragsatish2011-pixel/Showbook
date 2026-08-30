import { motion, AnimatePresence } from "framer-motion";

export function ProjectExpansionTransition({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 bg-[#0d0d12]/80 backdrop-blur-[8px]"
            onClick={onClose}
          />
          <motion.div
            layoutId={`deck-card-${project.id}`}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 pointer-events-none"
          >
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 340 }}
              className="pointer-events-auto relative w-full max-w-[1060px] max-h-[86vh] bg-[#0f0f12] rounded-[18px] overflow-hidden border border-white/[0.08] shadow-[0_32px_96px_rgba(0,0,0,0.7)] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-[44px] shrink-0 flex items-center justify-between px-4 border-b border-white/[0.06] bg-[#151519]">
                <div className="flex items-center gap-2.5">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>
                  <span className="ml-2 hidden md:inline text-[11px] tracking-[0.14em] font-mono text-white/60">
                    {project.index} — {project.title} — LIVE PREVIEW
                  </span>
                  <span className="md:hidden text-[11px] font-mono tracking-[0.12em] text-white/60">{project.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <a href={project.href} className="hidden md:inline-flex items-center gap-1.5 bg-white text-black rounded-full px-4 py-1.5 text-[11px] tracking-[0.12em] font-mono hover:bg-white/90 transition">OPEN LIVE ↗</a>
                  <button onClick={onClose} aria-label="Close" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 grid place-items-center text-white transition">×</button>
                </div>
              </div>

              <div className="relative flex-1 min-h-[340px] bg-[#08080a] overflow-hidden flex items-center justify-center">
                {project.preview ? (
                  <img src={project.preview} alt={project.title} className="absolute inset-0 w-full h-full object-contain bg-[#0a0a0f] p-2" loading="lazy" decoding="async" />
                ) : (
                  <h3 className="font-anton text-[clamp(36px,8vw,64px)] tracking-[0.02em] text-white">COMING SOON</h3>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f12] via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-0 inset-x-0 p-5 md:p-7 flex flex-col md:flex-row md:items-end justify-between gap-5">
                  <div className="min-w-0">
                    <p className="text-[11px] tracking-[0.14em] font-mono text-white/50">{project.category} • {project.year}</p>
                    <h3 className="font-anton text-[24px] md:text-[32px] leading-none tracking-[0.02em] text-white mt-1">
                      {project.title} <span className="font-script normal-case tracking-normal font-normal text-white/60 text-[18px] md:text-[20px]">{project.subtitle}</span>
                    </h3>
                    <p className="text-white/60 text-[13px] leading-relaxed max-w-[56ch] mt-2 line-clamp-2">{project.description}</p>
                    <div className="flex gap-1.5 mt-3 flex-wrap">
                      {project.tags.map(t => (
                        <span key={t} className="text-[10px] tracking-[0.12em] font-mono border border-white/12 rounded-full px-2.5 py-1 text-white/60 bg-white/[0.04]">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="hidden md:flex flex-col items-end gap-3 shrink-0">
                    <div className="flex gap-5 text-[11px] font-mono">
                      <span className="text-white/30">PAGES<br/><span className="text-white text-[13px]">{project.stats.pages}</span></span>
                      <span className="text-white/30">SCORE<br/><span className="text-white text-[13px]">{project.stats.score}</span></span>
                      <span className="text-white/30">PRESS<br/><span className="text-white text-[13px]">{project.stats.aw}</span></span>
                    </div>
                    <a href={project.href} className="inline-flex items-center gap-2 bg-[#f5871f] hover:bg-[#f9a43c] text-white rounded-full px-5 py-2.5 text-[12px] tracking-[0.12em] font-mono transition">ENTER EXPERIENCE →</a>
                  </div>
                </div>
              </div>

              <div className="md:hidden p-3 bg-[#151519] border-t border-white/[0.06] flex gap-2">
                <button onClick={onClose} className="flex-1 py-2.5 rounded-full border border-white/15 text-white text-[12px] font-mono">CLOSE</button>
                <a href={project.href} className="flex-1 py-2.5 rounded-full bg-[#f5871f] text-white text-[12px] font-mono text-center">OPEN LIVE</a>
              </div>

              {/* cody detail */}
              <div className="hidden md:flex items-center justify-between px-4 py-2 bg-[#0d0d12] border-t border-white/[0.04] text-[10px] font-mono tracking-[0.12em] text-white/20">
                <span>{`// ${project.id}.studio — built with obsessive performance`}</span>
                <span className="text-[#f5871f]/60">● live</span>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
