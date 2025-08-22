import { AboutSection } from "@/components/sections/About/AboutSection";
import { HeroSection } from "@/components/sections/Hero/HeroSection";
import { ProjectsSection } from "@/components/sections/Projects/ProjectsSection";
import { SkillsSection } from "@/components/sections/Skills/SkillsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
    </>
  );
}
