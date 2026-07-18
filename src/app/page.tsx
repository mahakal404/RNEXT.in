import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Capabilities } from "@/components/sections/Capabilities";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

import { FinalCTA } from "@/components/sections/FinalCTA";
import { BrandIntro } from "@/components/layout/BrandIntro";

export default function Home() {
  return (
    <>
      <BrandIntro />
      <Navbar />
      <ScrollIndicator />
      <div className="w-full flex flex-col items-center">
        <div className="w-full">
          <Hero />
          <Capabilities />
          <Services />
          <Projects />
          <About />
          <Contact />
        </div>
      </div>
      <FinalCTA />
      <Footer />
    </>
  );
}
