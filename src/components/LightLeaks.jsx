export function LightLeaks({ count = 5 }) {
  const leaks = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: 8 + (i * 17) % 84,
    top: 12 + (i * 23) % 76,
    size: 120 + (i % 3) * 80,
    color: i % 3 === 0 ? "rgba(245,135,31,0.08)" : i % 3 === 1 ? "rgba(108,142,214,0.07)" : "rgba(255,255,255,0.04)",
    duration: 14 + i * 3,
    delay: i * 1.2,
    drift: 18 + (i % 2) * 12,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {leaks.map((l) => (
        <span
          key={l.id}
          className="light-leak absolute rounded-full blur-[18px] will-change-transform"
          style={{
            left: `${l.left}%`,
            top: `${l.top}%`,
            width: `${l.size}px`,
            height: `${l.size * 0.7}px`,
            background: `radial-gradient(ellipse at center, ${l.color} 0%, transparent 70%)`,
            animation: `leak-drift ${l.duration}s ease-in-out ${l.delay}s infinite alternate, leak-pulse ${l.duration * 0.7}s ease-in-out ${l.delay}s infinite alternate`,
            ["--drift"]: `${l.drift}px`,
          }}
        />
      ))}
      <style>{`
        @keyframes leak-drift {
          from { transform: translate(0, 0) }
          to { transform: translate(var(--drift), calc(var(--drift) * -0.6)) }
        }
        @keyframes leak-pulse {
          from { opacity: 0.7 }
          to { opacity: 1 }
        }
        @media (prefers-reduced-motion: reduce) {
          .light-leak { animation: none !important; opacity: 0.5 !important; }
        }
      `}</style>
    </div>
  );
}
