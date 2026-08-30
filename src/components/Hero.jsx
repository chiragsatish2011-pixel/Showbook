import { useEffect, useState } from "react";

export function Hero() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className={`relative h-[100svh] min-h-[560px] bg-[#0d0d12] overflow-hidden isolate hero sticky top-0 ${ready ? "is-ready" : ""}`}>
      {/* Book video - kept, no repeat, light overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        >
          <source src="/hero-book.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#0d0d12]/28" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12]/65 via-[#0d0d12]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d12]/15 via-transparent to-transparent" />
        {/* Vignette at corners to hide Gemini logo at bottom right */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 58%, #0d0d12 92%)", opacity: 0.85 }} />
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_180px_rgba(13,13,18,0.9)]" />
        <div className="absolute bottom-0 right-0 w-[380px] h-[140px] bg-[#0d0d12] blur-[14px] opacity-[0.96] pointer-events-none rounded-tl-[20px]" />
        <div className="absolute bottom-0 right-0 w-[260px] h-[90px] bg-gradient-to-t from-[#0d0d12] via-[#0d0d12]/90 to-transparent pointer-events-none" />
      </div>
      {/* Corner washes */}
      <div className="hero__corners absolute inset-[-10%] pointer-events-none">
        <div className="absolute inset-0 opacity-60" style={{
          background: `
            radial-gradient(38vw 34vw at 4% 2%, rgba(245,135,31,0.22), transparent 66%),
            radial-gradient(34vw 32vw at 97% 6%, rgba(108,142,214,0.14), transparent 66%),
            radial-gradient(40vw 34vw at 2% 98%, rgba(122,148,220,0.12), transparent 66%),
            radial-gradient(42vw 36vw at 99% 96%, rgba(245,135,31,0.16), transparent 66%)
          `
        }} />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[9vh] bg-gradient-to-t from-[#0d0d12] to-transparent pointer-events-none" />

      {/* Nav */}
      <nav className="absolute top-0 inset-x-0 z-40 flex items-center justify-between px-[6vw] lg:px-[7vw] pt-[4.4vh]">
        <a href="#" className="nav__brand text-[#f5871f] tracking-[0.09em] text-[13px] md:text-[16px] font-semibold">CHIRAG®</a>
        <div className="hidden md:flex items-center gap-[clamp(22px,5.6vw,108px)] absolute left-1/2 -translate-x-1/2">
          <a href="#work" className="nav__link text-[clamp(14px,1.28vw,18px)] text-white relative" style={{"--i": 0}}>Work</a>
          <a href="#about" className="nav__link text-[clamp(14px,1.28vw,18px)] text-white relative" style={{"--i": 1}}>About</a>
          <a href="#contact" className="nav__link text-[clamp(14px,1.28vw,18px)] text-white relative" style={{"--i": 2}}>Contact</a>
        </div>
        <a href="mailto:hello@chirag.studio" className="nav__brand hidden md:inline text-[12px] tracking-[0.16em] text-white/60">hello@chirag.studio</a>
        <div className="flex md:hidden items-center gap-3 text-[11px] tracking-[0.12em] text-white/70">
          <a href="#work">WORK</a>
          <a href="#contact" className="text-[#f5871f]">EMAIL</a>
        </div>
      </nav>

      {/* Glow */}
      <div className="hero__glow absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[44vw] h-[72vh] bg-[#7e808e]/[0.07] blur-[22px] rounded-full pointer-events-none hidden md:block" />



      {/* Splatters - animated like reference */}
      <div className="splashes absolute inset-0 pointer-events-none">
        {[
          { x: 22, y: 12, size: "180px", delay: "0.2s", spin: "-14deg" },
          { x: 82, y: 28, size: "220px", delay: "0.45s", spin: "18deg" },
          { x: 48, y: 42, size: "320px", delay: "0.7s", spin: "6deg" },
        ].map((s, i) => (
          <div key={i} className={`splat ${ready ? "has-landed" : ""}`} style={{"--x": s.x, "--y": s.y, "--size": s.size, "--delay": s.delay, "--spin": s.spin}}>
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r={i === 0 ? 38 : 30} fill={i === 0 ? "rgba(245,135,31,0.18)" : i === 1 ? "rgba(108,142,214,0.14)" : "rgba(255,255,255,0.03)"} />
            </svg>
          </div>
        ))}
      </div>

      {/* Stage */}
      <div className="absolute inset-0 flex flex-col items-center justify-center hero__stage">
        <div className="relative flex flex-col items-center">
          {/* Script with typewriter */}
          <div className="hero__script absolute bottom-full left-1/2 -translate-x-1/2 mb-1 md:mb-2 pointer-events-none z-10">
            <span className="inline-block font-script text-[#f9a43c] text-[clamp(20px,4.6vw,42px)] md:text-[clamp(24px,3vw,48px)] leading-none rotate-[-8deg] whitespace-nowrap">
              <i>selected</i><b />
            </span>
          </div>
          <h1 className="hero__title font-anton uppercase leading-[0.84] tracking-[0.012em] text-white text-center">
            <span className="block text-[clamp(72px,20vw,160px)] md:text-[min(15vw,30vh)] lg:text-[min(13.5vw,32vh)]">STUDIO</span>
          </h1>
        </div>
        <p className="hero__sub mt-4 md:mt-5 text-[10px] md:text-[11px] tracking-[0.22em] font-mono text-white/30 text-center">
          DEMO WEBSITES — 06 • BUILT FOR CLIENTS LIKE YOU
        </p>
      </div>

      {/* Meta - client-focused */}
      <div className="hero__meta absolute bottom-[22%] md:bottom-[18%] left-[6vw] right-[6vw] lg:left-[8vw] lg:right-[8vw] flex flex-col md:flex-row justify-between gap-2 md:gap-6 text-center md:text-left z-10">
        <p className="hero__role text-[13px] md:text-[clamp(13px,1.1vw,16px)] leading-[1.48] text-white">
          I design sites like the 06 below —<br className="hidden md:block" />
          <span className="text-white/50">for brands, studios & shops. Built to convert.</span>
        </p>
        <p className="hero__credit text-[13px] md:text-[clamp(13px,1.1vw,16px)] leading-[1.48] text-white md:text-right">
          Available for new projects<br className="hidden md:block" />
          <span className="text-white/50">Mumbai / Remote — Your site in 7 days</span>
        </p>
      </div>

      {/* Foot */}
      <div className="absolute bottom-[4.8%] md:bottom-[12.4%] left-[6vw] right-[6vw] lg:left-[7vw] lg:right-[7vw] flex items-center justify-between z-10">
        <div className="hero__actions flex items-center gap-2">
          <a href="https://github.com" className="w-[22px] h-[22px] md:w-[26px] md:h-[26px] rounded-full bg-[#f5871f] text-white grid place-items-center hover:bg-[#f9a43c] transition text-[11px]">↗</a>
          <a href="mailto:hello@chirag.studio" className="w-[22px] h-[22px] md:w-[26px] md:h-[26px] rounded-full bg-[#f5871f] text-white grid place-items-center hover:bg-[#f9a43c] transition text-[11px]">✉</a>
        </div>
        <a href="#work" className="hero__scroll inline-flex items-center gap-3 text-[11px] tracking-[0.22em] text-white/40">
          <span className="hidden md:inline">SCROLL TO INDEX</span>
          <span className="md:hidden">SCROLL</span>
          <i className="block w-[30px] md:w-[46px] h-[1px] bg-white/20 overflow-hidden relative">
            <span className="absolute inset-y-0 left-0 w-[40%] bg-[#f5871f] animate-[scroll_2.4s_cubic-bezier(0.65,0,0.35,1)_infinite]" />
          </i>
        </a>
      </div>

      <style>{`
        .hero__corners{opacity:0; will-change:opacity}
        .hero__glow{opacity:0; will-change:opacity}
        .nav__brand, .nav__link{opacity:0; transform:translateY(14px); will-change:transform,opacity}
        .nav__link{transition:color .25s}
        .hero__title span{clip-path:inset(-60% 0 100%); transform:translateY(18%); will-change:clip-path,transform}
        .hero__script span{opacity:0; transform:rotate(-18deg) scale(0.86); will-change:transform,opacity}
        .hero__script i{clip-path:inset(-45% 100% -45% 0); font-style:normal; display:inline-block}
        .hero__script b{background:var(--accent, #f5871f); opacity:0; border-radius:2px; width:0.045em; position:absolute; top:6%; bottom:16%; left:0}
        .hero__sub, .hero__role, .hero__credit, .hero__actions, .hero__scroll, .hero__tag{opacity:0; transform:translateY(14px); will-change:transform,opacity}
        .splat{left:calc(var(--x) * 1%); top:calc(var(--y) * 1%); width:var(--size); aspect-ratio:1; opacity:0; translate:-50% -50%; scale:0.18; rotate:calc(var(--spin) - 40deg); filter:blur(0.3px); transition:opacity 0.5s ease var(--delay), scale 0.95s cubic-bezier(0.2,1.5,0.35,1) var(--delay), rotate 1.1s cubic-bezier(0.2,1.2,0.35,1) var(--delay); position:absolute}
        .splat.has-landed{opacity:0.18; scale:1; rotate:var(--spin)}
        .hero.is-ready .hero__corners{animation:1.6s 0.1s both fade-in}
        .hero.is-ready .hero__glow{animation:1.8s 0.35s both fade-in}
        .hero.is-ready .nav__brand{animation:0.9s cubic-bezier(0.22,1,0.36,1) 0.15s both rise}
        .hero.is-ready .nav__link{animation:0.9s cubic-bezier(0.22,1,0.36,1) both rise; animation-delay:calc(0.25s + var(--i) * 90ms)}
        .hero.is-ready .hero__title span{animation:1.35s cubic-bezier(0.16,1,0.3,1) 0.35s both wipe-up}
        .hero.is-ready .hero__script span{animation:0.8s cubic-bezier(0.34,1.3,0.5,1) 1s both script-in}
        .hero.is-ready .hero__script i{animation:1.15s steps(9,end) 1.5s both type}
        .hero.is-ready .hero__script b{animation:1.15s steps(9,end) 1.5s both caret-track, 0.62s step-end 1.5s 6 caret-blink}
        .hero.is-ready .hero__sub{animation:0.9s cubic-bezier(0.22,1,0.36,1) 1.1s both rise}
        .hero.is-ready .hero__role{animation:0.9s cubic-bezier(0.22,1,0.36,1) 1.15s both rise}
        .hero.is-ready .hero__credit{animation:0.9s cubic-bezier(0.22,1,0.36,1) 1.24s both rise}
        .hero.is-ready .hero__actions{animation:0.9s cubic-bezier(0.22,1,0.36,1) 1.33s both rise}
        .hero.is-ready .hero__scroll{animation:0.9s cubic-bezier(0.22,1,0.36,1) 1.42s both rise}
        .hero.is-ready .hero__tag{animation:0.7s cubic-bezier(0.22,1,0.36,1) both rise}
        @keyframes fade-in{to{opacity:1}}
        @keyframes rise{from{opacity:0; transform:translateY(14px)} to{opacity:1; transform:translateY(0)}}
        @keyframes wipe-up{from{clip-path:inset(-60% 0 100%); transform:translateY(18%)} to{clip-path:inset(-60% 0 0); transform:translateY(0)}}
        @keyframes script-in{from{opacity:0; transform:rotate(-18deg) scale(0.86)} to{opacity:1; transform:rotate(-8deg) scale(1)}}
        @keyframes type{from{clip-path:inset(-45% 100% -45% 0)} to{clip-path:inset(-45% -12% -45% 0)}}
        @keyframes caret-track{0%{opacity:1; left:0} 99%{opacity:1; left:100%} to{opacity:0; left:100%}}
        @keyframes caret-blink{0%,50%{background:#f5871f} 51%,100%{background:transparent}}
        @keyframes scroll{0%{transform:translateX(-100%)}60%{transform:translateX(250%)}100%{transform:translateX(250%)}}
        @media (prefers-reduced-motion:reduce){
          .hero__corners, .hero__glow, .hero__sub, .hero__role, .hero__credit, .hero__actions, .hero__scroll, .nav__brand, .nav__link, .hero__tag{opacity:1; transform:none; animation:none}
          .hero__title span{clip-path:none; transform:none; animation:none}
          .hero__script span{opacity:1; transform:rotate(-8deg) scale(1); animation:none}
          .hero__script i{clip-path:none; animation:none}
          .hero__script b{display:none}
          .splat{opacity:0.12; scale:1; rotate:var(--spin); transition:none}
        }
      `}</style>
    </section>
  );
}

