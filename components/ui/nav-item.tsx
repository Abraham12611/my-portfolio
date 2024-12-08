import Link from "next/link"

export function NavItem({ href, label, isActive = false }: { href: string; label: string; isActive?: boolean }) {
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