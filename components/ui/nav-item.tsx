import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItemProps {
  href: string
  label: string
  icon: LucideIcon
  isActive?: boolean
}

export function NavItem({ href, label, icon: Icon, isActive = false }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex flex-col items-center justify-center",
        "w-12 h-12 rounded-lg transition-all duration-300",
        isActive ? "text-[#CCD0CF] bg-[#253745]" : "text-[#4A5C6A]",
        "hover:text-[#9BA8AB]"
      )}
    >
      {/* Icon */}
      <Icon className={cn(
        "w-6 h-6 transition-transform duration-300",
        isActive && "scale-110"
      )} />

      {/* Text Label - Hidden by default, shown on hover */}
      <span className="absolute right-full mr-4 px-2 py-1 rounded bg-[#11212D] text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {label}
      </span>
    </Link>
  )
} 