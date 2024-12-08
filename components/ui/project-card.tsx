import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  status: "Published" | "In Progress"
  technologies: string[]
  link: string
}

export function ProjectCard({ title, description, status, technologies, link }: ProjectCardProps) {
  return (
    <Link 
      href={link}
      className="group block bg-[#11212D] rounded-lg p-6 hover:bg-[#1A2F3D] transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold text-[#CCD0CF] group-hover:text-white transition-colors">
          {title}
        </h3>
        <span className={`
          px-3 py-1 rounded-full text-sm font-medium
          ${status === "Published" 
            ? "bg-[#253745] text-[#9BA8AB]" 
            : "bg-[#1A2F3D] text-[#4A5C6A]"}
        `}>
          {status}
        </span>
      </div>
      
      <p className="text-[#9BA8AB] mb-6">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-[#06141B] rounded-full text-sm text-[#4A5C6A]"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center text-[#4A5C6A] group-hover:text-[#9BA8AB] transition-colors">
        <span className="text-sm">View Project</span>
        <svg 
          className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M17 8l4 4m0 0l-4 4m4-4H3" 
          />
        </svg>
      </div>
    </Link>
  )
} 