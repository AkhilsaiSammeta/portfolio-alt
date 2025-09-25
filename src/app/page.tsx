import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { ExperienceSection } from "@/components/sections/experience"
import { ProjectsSection } from "@/components/sections/projects"
import { CertificationsSection } from "@/components/sections/certifications"
import { SkillsSection } from "@/components/sections/skills"

export default function Home() {
  return (
    <div className="pt-16">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <SkillsSection />
    </div>
  )
}
