import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="glow">
        <main className="mx-auto max-w-7xl space-y-28 px-3 pt-24 sm:px-6 lg:space-y-36 lg:pt-28">
          <Hero />
          <Marquee />
          <About />
          <Skills />
          <Education />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
      <Footer />
    </>
  );
}
