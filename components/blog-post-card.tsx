import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface BlogPostCardProps {
  title: string
  excerpt: string
  date: string
  readTime: string
  slug: string
}

export function BlogPostCard({ title, excerpt, date, readTime, slug }: BlogPostCardProps) {
  return (
    <Link 
      href={`/blog/${slug}`}
      className="block bg-[#11212D] rounded-lg p-6 hover:bg-[#1A2F3D] transition-colors"
    >
      <CardHeader>
        <CardTitle className="text-[#CCD0CF]">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-[#9BA8AB]">{excerpt}</p>
      </CardContent>
      <CardFooter className="flex justify-between text-[#4A5C6A] text-sm">
        <span>{date}</span>
        <span>{readTime}</span>
      </CardFooter>
      <span className="sr-only">View {title}</span>
    </Link>
  )
}

