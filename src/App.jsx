import { Hero } from "./components/Hero";
import { ProjectDeck } from "./components/ProjectDeck/ProjectDeck";
import { Footer } from "./components/Footer";
import { ContactCard } from "./components/ContactCard";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Lenis from "lenis";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true, duration: 1.05, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    return () => lenis.destroy();
  }, []);

  return (
    <div className="bg-[#0d0d12] min-h-screen text-white selection:bg-[#f5871f] selection:text-white relative">
      <div className="relative z-10">
        <Hero />
        <ProjectDeck />
        <motion.div
          initial={{ y: "40vh", opacity: 1 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
          className="sticky top-0 z-[3] min-h-[100svh] flex flex-col justify-center bg-[#0d0d12] border-t border-white/[0.06] shadow-[0_-50px_80px_rgba(0,0,0,0.6)] -mt-[100vh]"
          style={{ willChange: "transform" }}
        >
          <ContactCard />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Footer />
        </motion.div>
      </div>
    </div>
  );
}
