import Image from "next/image"
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'
import Link from "next/link"
import { BlogPostCard } from "@/components/blog-post-card"

export default function Portfolio() {
  // Mock data for blog posts
  const blogPosts = [
    {
      title: "Getting Started with Next.js",
      excerpt: "Learn how to build modern web applications with Next.js",
      date: "2023-05-15",
      readTime: "5 min read",
      slug: "getting-started-with-nextjs"
    },
    {
      title: "Mastering TypeScript",
      excerpt: "Dive deep into TypeScript and improve your code quality",
      date: "2023-06-01",
      readTime: "8 min read",
      slug: "mastering-typescript"
    },
    {
      title: "The Power of Tailwind CSS",
      excerpt: "Discover how Tailwind CSS can streamline your styling workflow",
      date: "2023-06-15",
      readTime: "6 min read",
      slug: "power-of-tailwind-css"
    },
    // Add more blog posts as needed
  ]

  return (
    <div className="min-h-screen bg-[#06141B]">
      {/* Navigation */}
      <nav className="fixed right-0 top-0 h-screen w-24 flex flex-col items-center justify-center bg-[#11212D]/50 backdrop-blur-sm z-50">
        <div className="space-y-8">
          <NavItem href="#home" label="Home" isActive />
          <NavItem href="#about" label="About" />
          <NavItem href="#posts" label="Posts" />
          <NavItem href="#work" label="Work" />
          <NavItem href="#contact" label="Contact" />
        </div>
      </nav>

      {/* Social Icons */}
      <div className="fixed top-8 right-32 flex gap-6 z-50">
        <SocialIcon href="https://github.com" icon={Github} />
        <SocialIcon href="https://twitter.com" icon={Twitter} />
        <SocialIcon href="https://linkedin.com" icon={Linkedin} />
        <SocialIcon href="mailto:contact@example.com" icon={Mail} />
      </div>

      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-[#06141B]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#06141B] to-transparent opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06141B] to-transparent opacity-70" />
          {/* Accent Light Effect */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#253745] opacity-20 blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-8 w-full flex justify-between items-center">
            <div className="max-w-2xl space-y-6">
              <span className="text-[#4A5C6A] text-sm tracking-wider uppercase">
                Software Developer | Technical writer
              </span>
              <h1 className="text-[#CCD0CF] text-6xl font-bold tracking-tight">
                Hello, I'm Abraham<br />
                Dahunsi
              </h1>
              <p className="text-[#9BA8AB] text-xl max-w-xl">
                Creative Developer & Digital Artist crafting immersive web experiences
              </p>
              <div className="pt-4 flex gap-4">
                <Link
                  href="#work"
                  className="inline-block px-8 py-4 bg-[#253745] text-[#CCD0CF] rounded-lg hover:bg-[#4A5C6A] transition-colors"
                >
                  View My Work
                </Link>
                <Link
                  href="#contact"
                  className="inline-block px-8 py-4 border border-[#253745] text-[#CCD0CF] rounded-lg hover:bg-[#253745]/10 transition-colors"
                >
                  Contact Me
                </Link>
              </div>
            </div>

            {/* Previous Partnerships */}
            <div className="max-w-xs">
              <h3 className="text-[#CCD0CF] text-2xl font-semibold mb-6">Previous Partnerships</h3>
              <div className="grid grid-cols-2 gap-4">
                <CompanyBadge name="Vultr" />
                <CompanyBadge name="FreeCodeCamp" />
                <CompanyBadge name="SitePoint" />
                <CompanyBadge name="DigitalOcean" />
                <CompanyBadge name="GitHub" />
                <CompanyBadge name="Netlify" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Section */}
      <section id="posts" className="py-20 bg-[#06141B]">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-[#CCD0CF] mb-12">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogPostCard key={index} {...post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function NavItem({ href, label, isActive = false }: { href: string; label: string; isActive?: boolean }) {
  return (
    <Link
      href={href}
      className={`block text-sm font-medium ${
        isActive ? "text-[#CCD0CF]" : "text-[#4A5C6A]"
      } hover:text-[#9BA8AB] transition-colors writing-mode-vertical transform rotate-180`}
      style={{ writingMode: "vertical-rl" }}
    >
      {label}
    </Link>
  )
}

function SocialIcon({ href, icon: Icon }: { href: string; icon: any }) {
  return (
    <Link
      href={href}
      className="text-[#4A5C6A] hover:text-[#9BA8AB] transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="w-6 h-6" />
    </Link>
  )
}

function CompanyBadge({ name }: { name: string }) {
  return (
    <div className="bg-[#11212D] p-4 rounded-lg flex items-center justify-center">
      <span className="text-[#9BA8AB] font-medium">{name}</span>
    </div>
  )
}

