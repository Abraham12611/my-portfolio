import Image from "next/image"
import Link from "next/link"

export function CompanyLogo({ name, logo, website }: { name: string; logo: string; website: string }) {
  return (
    <Link 
      href={website}
      target="_blank"
      rel="noopener noreferrer" 
      className="bg-[#11212D] p-4 rounded-lg flex items-center justify-center group hover:bg-[#1A2F3D] transition-all duration-300"
    >
      <div className="relative w-full h-8 flex items-center justify-center">
        <Image
          src={logo}
          alt={`${name} logo`}
          fill
          className="object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300"
          style={{ 
            filter: 'invert(70%) sepia(13%) saturate(123%) hue-rotate(169deg) brightness(92%) contrast(87%)' 
          }}
        />
      </div>
    </Link>
  )
} 