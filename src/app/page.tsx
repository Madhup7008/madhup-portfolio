import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";

function SectionCTA({ href, label }: { href: string; label: string }) {
  return (
    <div className="flex justify-center py-16 relative z-20">
      <Link
        href={href}
        className="group flex items-center gap-3 px-7 py-3.5 bg-transparent border border-[rgba(0,255,135,0.2)] text-[#00ff87] rounded-xl font-mono text-[10px] uppercase tracking-[0.25em] transition-all duration-400 hover:bg-[rgba(0,255,135,0.08)] hover:border-[rgba(0,255,135,0.45)]"
      >
        {label}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <SectionCTA href="/about" label="→ Read Full Story" />

      <Projects />
      <SectionCTA href="/builds" label="→ Explore All Builds" />

      <Skills />
      <SectionCTA href="/learn" label="→ View Learning Logs" />

      <Contact />

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-[rgba(0,255,135,0.08)]" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#00ff87]" />
            <span className="font-mono text-[10px] tracking-wider text-[var(--text-muted)] uppercase">MKY · Full Stack Developer</span>
          </div>
          <p className="font-mono text-[10px] text-[var(--text-muted)] tracking-wider">
            © {new Date().getFullYear()} Madhup Kumar Yadav. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00ff87] animate-pulse" />
            <span className="font-mono text-[10px] text-[#00ff87] opacity-60 tracking-wider uppercase">Available for work</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
