import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, Shield } from "lucide-react";

function SectionCTA({ href, label }: { href: string; label: string }) {
  return (
    <div className="flex justify-center py-16 relative z-20">
      <Link
        href={href}
        className="group flex items-center gap-3 px-7 py-3.5 bg-transparent border border-[rgba(255,0,64,0.2)] text-[#ff0040] rounded-xl font-mono text-[10px] uppercase tracking-[0.25em] transition-all duration-400 hover:bg-[rgba(255,0,64,0.08)] hover:border-[rgba(255,0,64,0.45)]"
      >
        {label}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="relative z-20 max-w-7xl mx-auto px-6">
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,0,64,0.15)] to-transparent" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      {/* Skip to content — Accessibility */}
      <a href="#about" className="skip-to-content">Skip to content</a>

      <CustomCursor />
      <Navbar />
      <Hero />

      <SectionDivider />
      <About />
      <SectionCTA href="/about" label="→ Read Full Story" />

      <SectionDivider />
      <Projects />
      <SectionCTA href="/builds" label="→ View All Projects" />

      <SectionDivider />
      <Skills />
      <SectionCTA href="/learn" label="→ Explore Skills & Learning" />

      <SectionDivider />
      <Contact />

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[rgba(255,0,64,0.08)]" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto">
          {/* Top row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-4 h-4 text-[#ff0040]" />
                <span className="font-mono text-sm font-bold text-[var(--text-primary)] tracking-wider">MKY<span className="text-[#ff0040]">.</span><span className="text-[10px] text-[var(--text-muted)] tracking-[0.2em] ml-1">DEV</span></span>
              </div>
              <p className="text-sm text-[var(--text-secondary)] max-w-sm leading-relaxed">
                Full Stack Developer based in India. Building scalable web products with thoughtful design and clean engineering.
              </p>
            </div>

            {/* Quick links */}
            <div className="flex flex-col sm:flex-row gap-8">
              <div>
                <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-[var(--text-muted)] block mb-3">Navigation</span>
                <div className="flex flex-col gap-2">
                  {[
                    { name: "About", href: "/about" },
                    { name: "Builds", href: "/builds" },
                    { name: "Learn", href: "/learn" },
                  ].map((link) => (
                    <Link key={link.name} href={link.href} className="font-mono text-xs text-[var(--text-secondary)] hover:text-[#ff0040] transition-colors">
                      /{link.name.toLowerCase()}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-[var(--text-muted)] block mb-3">Connect</span>
                <div className="flex items-center gap-3">
                  <a href="https://github.com/Madhup7008" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-[rgba(255,0,64,0.06)] flex items-center justify-center hover:bg-[rgba(255,0,64,0.15)] transition-colors group">
                    <Github className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[#ff0040] transition-colors" />
                  </a>
                  <a href="https://www.linkedin.com/in/madhup-kumar-yadav-641a85270/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-[rgba(255,0,64,0.06)] flex items-center justify-center hover:bg-[rgba(255,0,64,0.15)] transition-colors group">
                    <Linkedin className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[#ff0040] transition-colors" />
                  </a>
                  <a href="mailto:madhupyadav1809@gmail.com" className="w-9 h-9 rounded-lg bg-[rgba(255,0,64,0.06)] flex items-center justify-center hover:bg-[rgba(255,0,64,0.15)] transition-colors group">
                    <Mail className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[#ff0040] transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="pt-8 border-t border-[rgba(255,0,64,0.06)] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-mono text-[10px] text-[var(--text-muted)] tracking-wider">
              © {new Date().getFullYear()} Madhup Kumar Yadav. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ff0040] animate-pulse" />
              <span className="font-mono text-[10px] text-[#ff0040] opacity-60 tracking-wider uppercase">Available for work</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
