import Image from "next/image";
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
import { BlurIn } from "@/components/motion/TiltCard";
import { profile } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="glow">
        <div className="mx-auto max-w-6xl px-4 pt-28 sm:px-6 lg:grid lg:grid-cols-[300px_1fr] lg:gap-14 lg:pt-32">
          {/* Desktop: the profile card sits in a sticky left column. */}
          <aside className="hidden lg:sticky lg:top-28 lg:block lg:self-start">
            <ProfileCard />
          </aside>

          <main className="min-w-0 space-y-28 lg:space-y-36">
            <div>
              {/* Mobile/tablet: a small identity strip above the headline. */}
              <BlurIn className="mb-8 flex items-center gap-3 lg:hidden">
                <span className="relative size-12 overflow-hidden rounded-full ring-2 ring-accent">
                  <Image src={profile.photo} alt="" fill sizes="48px" className="object-cover object-top" />
                </span>
                <span>
                  <span className="block font-display font-semibold">{profile.name}</span>
                  <span className="flex items-center gap-1.5 text-xs text-muted">
                    <span className="size-1.5 animate-pulse rounded-full bg-lime" /> Open to work · {profile.location}
                  </span>
                </span>
              </BlurIn>
              <Hero />
              <div className="mt-16 lg:hidden">
                <ProfileCard />
              </div>
            </div>
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
