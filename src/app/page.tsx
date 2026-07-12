import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center">
        <div className="w-full">
          <Hero />
          <About />
          <Projects />
          <Services />
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
}
