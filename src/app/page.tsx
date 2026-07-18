import dynamic from 'next/dynamic';
import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/layout/Navbar";
import { BrandIntro } from "@/components/layout/BrandIntro";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

// Lazy load below-the-fold sections
const Capabilities = dynamic(() => import("@/components/sections/Capabilities").then(mod => mod.Capabilities));
const Services = dynamic(() => import("@/components/sections/Services").then(mod => mod.Services));
const Projects = dynamic(() => import("@/components/sections/Projects").then(mod => mod.Projects));
const About = dynamic(() => import("@/components/sections/About").then(mod => mod.About));
const Contact = dynamic(() => import("@/components/sections/Contact").then(mod => mod.Contact));
const FinalCTA = dynamic(() => import("@/components/sections/FinalCTA").then(mod => mod.FinalCTA));
const Footer = dynamic(() => import("@/components/layout/Footer").then(mod => mod.Footer));

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
