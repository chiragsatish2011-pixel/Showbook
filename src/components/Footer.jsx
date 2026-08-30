import { LightLeaks } from "./LightLeaks";
export function Footer() {
  return (
    <footer className="relative bg-[#0d0d12] border-t border-white/[0.06] py-5 overflow-hidden">
      <LightLeaks count={3} />
      <div className="relative z-10 w-[min(1320px,100%-10vw)] mx-auto flex flex-col md:flex-row justify-between gap-2 text-[11px] tracking-[0.12em] font-mono text-white/25">
        <span>© 2026 CHIRAG® — MUMBAI / REMOTE</span>
        <span className="flex gap-4">
          <a href="#" className="hover:text-white/60">INSTAGRAM</a>
          <a href="#" className="hover:text-white/60">LINKEDIN</a>
          <a href="mailto:hello@chirag.studio" className="hover:text-white/60">EMAIL</a>
        </span>
        <span className="hidden md:inline">LAST SECTION — CONTACT CARD ABOVE</span>
      </div>
    </footer>
  );
}
