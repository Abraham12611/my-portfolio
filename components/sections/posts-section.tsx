import { BlogPostCard } from "../blog-post-card"

export function PostsSection() {
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
      slug: "p"
    },
  ]

  return (
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
  )
} 