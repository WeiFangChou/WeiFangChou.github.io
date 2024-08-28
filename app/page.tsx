
import { NaviBar } from "./components/navbar";

import HeroSection from "@/app/components/pages/HeroSection";
import Projects from "@/app/components/pages/Projects";
import About from "@/app/components/pages/About";
import Contact from "@/app/components/pages/Contact";
import { metadata } from "./layout";


export default function Home() {
  return (
    <main>
      <NaviBar />
      <main className=" min-h-screen">
        <HeroSection />
        <About />
        <Projects />
        <Contact />
      </main>
    </main>
  );
}
