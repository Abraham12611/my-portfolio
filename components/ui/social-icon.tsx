import Link from "next/link"
import { LucideIcon } from "lucide-react"

export function SocialIcon({ href, icon: Icon }: { href: string; icon: LucideIcon }) {
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