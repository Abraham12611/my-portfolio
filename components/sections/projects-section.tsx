import { ProjectCard } from "../ui/project-card"

interface Project {
  title: string;
  description: string;
  status: "Published" | "In Progress";
  technologies: string[];
  link: string;
}

export function ProjectsSection() {
  const publishedProjects: Project[] = [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform built with Next.js and Stripe",
      status: "Published" as const,
      technologies: ["Next.js", "React", "Stripe", "Tailwind CSS"],
      link: "https://example.com/ecommerce"
    },
    {
      title: "AI-powered Chat Application",
      description: "Real-time chat app with AI-powered responses using OpenAI",
      status: "Published" as const,
      technologies: ["React", "Node.js", "Socket.io", "OpenAI API"],
      link: "https://example.com/ai-chat"
    }
  ]

  const inProgressProjects = [
    {
      title: "Blockchain Explorer",
      description: "A web application to explore and analyze blockchain transactions",
      status: "In Progress" as const,
      technologies: ["Vue.js", "Express", "Web3.js", "MongoDB"],
      link: "https://example.com/blockchain"
    },
    {
      title: "Fitness Tracking Mobile App",
      description: "Cross-platform mobile app for tracking workouts and nutrition",
      status: "In Progress" as const,
      technologies: ["React Native", "Redux", "Firebase", "HealthKit"],
      link: "https://example.com/fitness"
    }
  ]

  return (
    <section id="work" className="py-20 bg-[#06141B]">
      <div className="max-w-7xl mx-auto px-8">
        <h1 className="text-5xl font-bold text-[#CCD0CF] mb-4">My Projects</h1>
        
        {/* Published Projects */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-[#9BA8AB] mb-8">Published Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {publishedProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>

        {/* Projects in Progress */}
        <div>
          <h2 className="text-3xl font-semibold text-[#9BA8AB] mb-8">Projects in Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {inProgressProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 