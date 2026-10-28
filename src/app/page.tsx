import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/ProfileCard";
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
        <div className="mx-auto max-w-6xl px-4 pt-28 sm:px-6 lg:grid lg:grid-cols-[300px_1fr] lg:gap-14 lg:pt-32">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <ProfileCard />
          </aside>

          <main className="min-w-0 space-y-28 lg:space-y-36">
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
      </div>
      <Footer />
    </>
  );
}
