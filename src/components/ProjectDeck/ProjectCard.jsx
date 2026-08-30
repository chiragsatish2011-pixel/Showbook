import { motion } from "framer-motion";
import { ProjectPreview } from "./ProjectPreview";

export function ProjectCard({ project, index, activeIndex, onSelect, total }) {
  const diff = index - activeIndex;
  const isActive = diff === 0;

  // Exact image: vertical stack, front bottom, behind peeks from top
  let y = 0;
  let scale = 1;
  let opacity = 1;
  let z = 0;
  let rotate = 0;

  if (diff === 0) {
    // picked up - centered front
    y = 0; scale = 1; opacity = 1; z = 40;
  } else if (diff > 0) {
    // vertical column - each peeks, larger cards
    y = -diff * 16;
    scale = 0.985 - diff * 0.018;
    opacity = 1;
    z = -12 - diff * 10;
    rotate = 0;
  } else {
    // thrown away - fly down
    y = 680 + diff * 20;
    scale = 0.92;
    opacity = 0;
    z = -80;
    rotate = 0;
  }

  // clamp
  if (diff > 3) opacity = Math.max(0, 1 - diff * 0.22);
  const zIndex = isActive ? 30 : diff > 0 ? total - diff : 0;

  return (
    <motion.div
      layoutId={`deck-card-${project.id}`}
      onClick={() => onSelect(index, project)}
      className="absolute inset-0 flex items-center justify-center cursor-pointer will-change-transform"
      style={{ zIndex, perspective: 1200 }}
      initial={false}
      animate={{
        y,
        scale,
        opacity: diff < 0 ? 0 : opacity,
        rotateZ: rotate,
      }}
      transition={{ type: "spring", stiffness: 280, damping: 32, mass: 0.8 }}
      role="button"
      aria-label={`${project.title} — ${project.subtitle}`}
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') onSelect(index, project); }}
    >
      <motion.div
        className={`w-[min(980px,96vw)] md:w-[min(1020px,90vw)] aspect-[16/9] rounded-[12px] md:rounded-[14px] overflow-hidden border bg-[#0f0f12]
          ${isActive ? "border-white/14 shadow-[0_32px_80px_rgba(0,0,0,0.68),inset_0_1px_0_rgba(255,255,255,0.07)]" : "border-white/[0.07] shadow-[0_14px_36px_rgba(0,0,0,0.5)]"}`}
        style={{
          transform: `translateZ(${z}px)`,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 380, damping: 24 }}
      >
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/12 to-transparent pointer-events-none z-20" />
        <ProjectPreview project={project} />
        {isActive && (
          <div
            className="absolute inset-0 rounded-[14px] pointer-events-none"
            style={{ background: `radial-gradient(560px circle at 50% 0%, rgba(245,135,31,0.11), transparent 72%)` }}
          />
        )}
        {!isActive && diff > 0 && <div className="absolute inset-0 bg-black/12 pointer-events-none" />}
      </motion.div>

      {/* Layer index peek */}
      {!isActive && diff > 0 && diff <= 2 && (
        <div className="absolute -right-2 top-1/2 -translate-y-1/2 hidden xl:flex">
          <span className="text-[10px] font-mono tracking-[0.16em] text-white/25 rotate-90 whitespace-nowrap">
            {project.index} — {project.title}
          </span>
        </div>
      )}
    </motion.div>
  );
}
