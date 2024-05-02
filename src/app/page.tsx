import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  mx-auto px-8 sm:px-12 py-4">
    <HeroSection/>
      <About/>
      <Skills/>
    </main>
  );
}
