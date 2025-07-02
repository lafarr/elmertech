import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "https://picsum.photos/500/300?random=1",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "A collaborative project management tool with real-time updates, team collaboration, and progress tracking.",
      image: "https://picsum.photos/500/300?random=2",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Restaurant Website",
      description: "Modern restaurant website with online ordering, reservation system, and menu management.",
      image: "https://picsum.photos/500/300?random=3",
      technologies: ["Next.js", "Tailwind CSS", "Sanity CMS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Mobile Fitness App",
      description: "Cross-platform fitness tracking app with workout plans, progress monitoring, and social features.",
      image: "https://picsum.photos/500/300?random=4",
      technologies: ["React Native", "Firebase", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Real Estate Platform",
      description: "Property listing platform with advanced search, virtual tours, and agent management system.",
      image: "https://picsum.photos/500/300?random=5",
      technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Learning Management System",
      description: "Educational platform with course creation, student progress tracking, and interactive assessments.",
      image: "https://picsum.photos/500/300?random=6",
      technologies: ["React", "Django", "PostgreSQL", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-purple-600 dark:text-purple-400">Projects</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of our recent work and the solutions we've built for clients across various industries
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <span className="text-purple-600 dark:text-purple-400 mr-2">★</span>
            Featured Projects
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-purple-600 text-white">Featured</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button asChild size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                      <Link href={project.liveUrl}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.githubUrl}>
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Other Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-40 object-cover"
                />
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-sm line-clamp-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button asChild size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Link href={project.liveUrl}>
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Demo
                      </Link>
                    </Button>
                    <Button asChild size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Link href={project.githubUrl}>
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mt-20 py-16 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Like What You See?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your project ideas to life with the same attention to detail and quality
          </p>
          <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </section>
      </div>
    </div>
  )
}
