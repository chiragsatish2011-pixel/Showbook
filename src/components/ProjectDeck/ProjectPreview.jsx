export function ProjectPreview({ project }) {
  if (!project.preview) {
    return (
      <div className="relative w-full h-full overflow-hidden bg-[#0a0a12] select-none group flex flex-col">
        <div className="absolute top-0 inset-x-0 h-[28px] bg-[#1a1a1e] border-b border-white/[0.06] flex items-center px-3 gap-1.5 z-10">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/90 border border-white/5" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/90 border border-white/5" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/90 border border-white/5" />
          <div className="ml-3 flex-1 flex justify-center">
            <div className="bg-white/[0.06] border border-white/[0.06] rounded-full px-3 py-1 flex items-center gap-2 max-w-[220px] w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f5871f]/40" />
              <span className="text-[10px] tracking-[0.14em] font-mono text-white/30 truncate">
                {project.id}.chirag.studio — soon
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center pt-[28px] bg-[#0d0d12]">
          <h3 className="font-anton text-[clamp(32px,7vw,56px)] tracking-[0.02em] text-white">COMING SOON</h3>
        </div>
        <div className="absolute bottom-0 inset-x-0 p-3.5 md:p-4 flex items-end justify-between gap-3 bg-gradient-to-t from-black/60 to-transparent">
          <div className="min-w-0">
            <p className="text-[10px] tracking-[0.16em] font-mono text-white/40 truncate">{project.category.toUpperCase()} • {project.year}</p>
            <p className="text-white font-anton text-[14px] tracking-[0.02em] leading-none mt-1">COMING SOON</p>
          </div>
          <div className="shrink-0 w-7 h-7 rounded-full bg-white/10 border border-white/15 grid place-items-center text-white/30">
            <span className="text-[11px]">↗</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#0d0d12] select-none group">
      {/* Chrome - dark cody */}
      <div className="absolute top-0 inset-x-0 h-[28px] bg-[#1a1a1e] border-b border-white/[0.06] flex items-center px-3 gap-1.5 z-10">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/90 border border-white/5" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/90 border border-white/5" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/90 border border-white/5" />
        <div className="ml-3 flex-1 flex justify-center">
          <div className="bg-white/[0.06] border border-white/[0.06] rounded-full px-3 py-1 flex items-center gap-2 max-w-[220px] w-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f5871f] animate-pulse" />
            <span className="text-[10px] tracking-[0.14em] font-mono text-white/60 truncate">
              {project.id}.chirag.studio
            </span>
          </div>
        </div>
        <span className="hidden md:inline text-[10px] font-mono tracking-[0.12em] text-white/30">↗</span>
      </div>

      <img
        src={project.preview}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-contain pt-[28px] bg-[#0a0a0f]"
        loading="lazy"
        decoding="async"
        fetchPriority="low"
        onError={(e) => { e.currentTarget.style.display = 'none'; }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent pt-[28px] pointer-events-none" />
      {/* Cody grid overlay */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none pt-[28px]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
        backgroundSize: `24px 24px`
      }} />

      <div className="absolute bottom-0 inset-x-0 p-3.5 md:p-4 flex items-end justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[10px] tracking-[0.16em] font-mono text-white/55 truncate">{project.category.toUpperCase()} • {project.year}</p>
          <p className="text-white font-anton text-[14px] md:text-[15px] tracking-[0.02em] leading-none mt-1 truncate">{project.title} <span className="font-script font-normal normal-case tracking-normal text-white/70 text-[13px]">— {project.subtitle}</span></p>
        </div>
        <div className="shrink-0 inline-flex items-center gap-2 bg-[#f5871f] text-white rounded-full pl-1 pr-3 py-1 shadow-[0_8px_20px_rgba(0,0,0,0.35)] group-hover:pl-1 transition-all">
          <span className="w-7 h-7 rounded-full bg-white text-[#f5871f] grid place-items-center text-[13px] font-medium -rotate-[8deg] group-hover:rotate-0 transition-transform">↗</span>
          <span className="text-[10px] tracking-[0.14em] font-mono">OPEN</span>
          <span className="font-script text-[11px] leading-none -rotate-2 hidden md:inline text-white/90">live</span>
        </div>
      </div>
    </div>
  );
}
