import { Github, Twitter, Linkedin, Mail, Home, User, Briefcase, FileText, Phone, Layout } from 'lucide-react'
import { HeroSection } from "@/components/sections/hero-section"
import { PostsSection } from "@/components/sections/posts-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ServicesSection } from "@/components/sections/services-section"
import { NavItem } from "@/components/ui/nav-item"
import { SocialIcon } from "@/components/ui/social-icon"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#06141B]">
      {/* Navigation */}
      <nav className="fixed right-0 top-0 h-screen w-20 flex flex-col items-center justify-center bg-[#11212D]/50 backdrop-blur-sm z-50">
        <div className="space-y-6">
          <NavItem href="#home" label="Home" icon={Home} isActive />
          <NavItem href="#about" label="About" icon={User} />
          <NavItem href="#services" label="Services" icon={Layout} />
          <NavItem href="#work" label="Work" icon={Briefcase} />
          <NavItem href="#posts" label="Posts" icon={FileText} />
          <NavItem href="#contact" label="Contact" icon={Phone} />
        </div>
      </nav>

      {/* Social Icons */}
      <div className="fixed top-8 right-32 flex gap-6 z-50">
        <SocialIcon href="https://github.com" icon={Github} />
        <SocialIcon href="https://twitter.com" icon={Twitter} />
        <SocialIcon href="https://linkedin.com" icon={Linkedin} />
        <SocialIcon href="mailto:contact@example.com" icon={Mail} />
      </div>

      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <PostsSection />
    </div>
  )
}

