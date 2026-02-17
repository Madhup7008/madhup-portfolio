import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="min-h-screen">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Madhup Kumar Yadav. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
