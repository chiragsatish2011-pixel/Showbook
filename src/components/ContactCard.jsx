import { LightLeaks } from "./LightLeaks";
export function ContactCard() {
  return (
    <section id="contact" className="relative bg-[#0d0d12] overflow-hidden py-12 md:py-16">
      <LightLeaks count={4} />
      {/* Pro washes like homepage */}
      <div className="absolute inset-[-10%] pointer-events-none opacity-40">
        <div className="absolute inset-0" style={{ background: `radial-gradient(38vw 34vw at 8% 12%, rgba(245,135,31,0.14), transparent 66%), radial-gradient(34vw 32vw at 92% 18%, rgba(108,142,214,0.08), transparent 66%), radial-gradient(40vw 34vw at 12% 88%, rgba(122,148,220,0.07), transparent 66%)` }} />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42vw] h-[48vh] bg-[#7e808e]/[0.05] blur-[28px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`, backgroundSize: `32px 32px` }} />
      </div>

      {/* Dark card - Let's Design - BIG */}
      <div className="relative w-[min(960px,94vw)] mx-auto bg-[#151519] rounded-[24px] md:rounded-[28px] shadow-[0_28px_80px_rgba(0,0,0,0.5),0_10px_20px_rgba(0,0,0,0.35)] border border-white/[0.07] overflow-hidden">
        <div className="px-6 md:px-12 py-10 md:py-14 text-center">
          <div className="relative inline-block">
            <span className="absolute -top-5 md:-top-6 left-1/2 -translate-x-1/2 font-script text-[#f9a43c] text-[24px] md:text-[32px] rotate-[-6deg] whitespace-nowrap">say hello</span>
            <h2 className="font-anton text-[clamp(56px,11vw,112px)] leading-[0.84] tracking-[-0.015em] text-white mt-3">LET'S DESIGN</h2>
          </div>

          <h3 className="font-sans font-medium text-[clamp(22px,4.2vw,34px)] leading-[1.05] tracking-[-0.02em] text-white mt-6">
            Websites like the demos above —<br className="hidden md:block" /> built for your brand.
          </h3>

          <p className="text-[14px] md:text-[15px] leading-[1.6] text-white/55 mt-5 max-w-[48ch] mx-auto">
            I design sites like these 06 demos for clients<br className="hidden md:block" /> — founders, studios, shops. Minimal, fast, built to convert.<br className="hidden md:block" /> This is not my portfolio. It's your next website.
          </p>

          <div className="mt-8 md:mt-10 grid md:grid-cols-2 gap-3.5 max-w-[640px] mx-auto text-left">
            <a href="mailto:chiragsatish2011@gmail.com" className="group relative bg-white/[0.05] border border-white/10 rounded-[14px] px-5 py-5 pr-11 hover:bg-white/[0.07] hover:border-white/15 transition flex flex-col">
              <span className="text-[10px] tracking-[0.16em] font-mono text-[#f9a43c]">EMAIL</span>
              <span className="text-[13px] md:text-[15px] font-medium text-white mt-1 truncate">chiragsatish2011@gmail.com</span>
              <span className="absolute top-5 right-4 text-[11px] text-white/30 group-hover:text-white transition">↗</span>
            </a>
            <a href="tel:+916363403353" className="group relative bg-white/[0.05] border border-white/10 rounded-[14px] px-5 py-5 pr-11 hover:bg-white/[0.07] hover:border-white/15 transition flex flex-col">
              <span className="text-[10px] tracking-[0.16em] font-mono text-[#f9a43c]">PHONE</span>
              <span className="text-[14px] md:text-[15px] font-medium text-white mt-1">+91 63634 03353</span>
              <span className="absolute top-5 right-4 text-[11px] text-white/30 group-hover:text-white transition">↗</span>
            </a>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="https://www.youtube.com/@chiragworks-15" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 bg-white text-black rounded-full pl-2.5 pr-5 py-2.5 hover:bg-white/90 transition shadow-[0_8px_20px_rgba(0,0,0,0.15)]">
              <span className="w-7 h-7 rounded-full bg-[#ff0033] grid place-items-center">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white"><path d="M23.498 6.186a2.977 2.977 0 0 0-2.094-2.094C19.36 3.536 12 3.536 12 3.536s-7.36 0-9.404.556A2.977 2.977 0 0 0 .502 6.186 31.13 31.13 0 0 0 0 12a31.13 31.13 0 0 0 .502 5.814 2.977 2.977 0 0 0 2.094 2.094C4.64 20.464 12 20.464 12 20.464s7.36 0 9.404-.556a2.977 2.977 0 0 0 2.094-2.094A31.13 31.13 0 0 0 24 12a31.13 31.13 0 0 0-.502-5.814zM9.75 15.5v-7l6.5 3.5-6.5 3.5z"/></svg>
              </span>
              <span className="text-[13px] md:text-[14px] font-medium">YouTube</span>
              <span className="text-[10px] text-black/40">↗</span>
            </a>
            <a href="https://www.instagram.com/its_chiragxo/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 bg-white text-black rounded-full pl-2.5 pr-5 py-2.5 hover:bg-white/90 transition shadow-[0_8px_20px_rgba(0,0,0,0.15)]">
              <span className="w-7 h-7 rounded-[8px] bg-gradient-to-br from-[#f9a43c] via-[#e1306c] to-[#833ab4] grid place-items-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.362 6.162 6.162 0 0 0 0-12.362zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </span>
              <span className="text-[13px] md:text-[14px] font-medium">Instagram</span>
              <span className="text-[10px] text-black/40">↗</span>
            </a>
            <a href="https://chirag-s-showcase.my.canva.site/chirag-s" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 bg-[#f5871f] text-white rounded-full pl-2.5 pr-5 py-2.5 hover:bg-[#f9a43c] transition shadow-[0_8px_20px_rgba(0,0,0,0.15)]">
              <span className="w-7 h-7 rounded-[8px] bg-white/20 grid place-items-center">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </span>
              <span className="text-[13px] md:text-[14px] font-medium">Showcase</span>
              <span className="text-[10px] text-white/70">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
