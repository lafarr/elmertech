import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Smartphone, Globe, Zap, Users, Award } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
	return (
		<div className="flex flex-col min-h-screen">
			{/* Hero Section */}
			<section className="relative py-20 px-4 md:py-32 bg-gradient-to-br from-background to-purple-50 dark:to-purple-950/20">
				<div className="container mx-auto max-w-6xl">
					<div className="text-center space-y-6">
						<Badge
							variant="secondary"
							className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
						>
							Professional Software Development Services
						</Badge>
						<h1 className="text-4xl md:text-6xl font-bold tracking-tight">
							Welcome to <span className="text-purple-600 dark:text-purple-400">ElmerTech</span>
						</h1>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
							Transforming ideas into digital reality. We specialize in web development, mobile apps, and custom
							software solutions that drive business growth.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
								<Link href="/projects">
									View Our Work <ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</Button>
							<Button asChild variant="outline" size="lg">
								<Link href="/contact">Get In Touch</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="py-20 px-4">
				<div className="container mx-auto max-w-6xl">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							We offer comprehensive digital solutions tailored to your business needs
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						<Card className="border-2 hover:border-purple-200 dark:hover:border-purple-800 transition-colors">
							<CardHeader>
								<Globe className="h-12 w-12 text-purple-600 dark:text-purple-400 mb-4" />
								<CardTitle>Web Development</CardTitle>
								<CardDescription>Modern, responsive websites built with the latest technologies</CardDescription>
							</CardHeader>
							<CardContent>
								<ul className="space-y-2 text-sm text-muted-foreground">
									<li>• React & Next.js Applications</li>
									<li>• E-commerce Solutions</li>
									<li>• Custom CMS Development</li>
									<li>• Performance Optimization</li>
								</ul>
							</CardContent>
						</Card>

						<Card className="border-2 hover:border-purple-200 dark:hover:border-purple-800 transition-colors">
							<CardHeader>
								<Smartphone className="h-12 w-12 text-purple-600 dark:text-purple-400 mb-4" />
								<CardTitle>Mobile Apps</CardTitle>
								<CardDescription>Cross-platform mobile applications for iOS and Android</CardDescription>
							</CardHeader>
							<CardContent>
								<ul className="space-y-2 text-sm text-muted-foreground">
									<li>• React Native Development</li>
									<li>• Progressive Web Apps</li>
									<li>• App Store Deployment</li>
									<li>• UI/UX Design</li>
								</ul>
							</CardContent>
						</Card>

						<Card className="border-2 hover:border-purple-200 dark:hover:border-purple-800 transition-colors">
							<CardHeader>
								<Code className="h-12 w-12 text-purple-600 dark:text-purple-400 mb-4" />
								<CardTitle>Custom Software</CardTitle>
								<CardDescription>Tailored software solutions for unique business requirements</CardDescription>
							</CardHeader>
							<CardContent>
								<ul className="space-y-2 text-sm text-muted-foreground">
									<li>• API Development</li>
									<li>• Database Design</li>
									<li>• System Integration</li>
									<li>• Cloud Solutions</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Why Choose Me Section */}
			<section className="py-20 px-4 bg-muted/50">
				<div className="container mx-auto max-w-6xl">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose ElmerTech?</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							We bring expertise, dedication, and results to every project
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						<div className="text-center">
							<Zap className="h-16 w-16 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
							<h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
							<p className="text-muted-foreground">Quick turnaround times without compromising on quality.</p>
						</div>

						<div className="text-center">
							<Users className="h-16 w-16 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
							<h3 className="text-xl font-semibold mb-2">Client-Focused</h3>
							<p className="text-muted-foreground">Your success is our priority. Clear communication throughout.</p>
						</div>

						<div className="text-center">
							<Award className="h-16 w-16 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
							<h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
							<p className="text-muted-foreground">Rigorous testing and best practices ensure reliable solutions.</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 px-4">
				<div className="container mx-auto max-w-4xl text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
					<p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
						Let&apos;s discuss how we can help bring your ideas to life with custom digital solutions.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
							<Link href="/contact">
								Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
						<Button asChild variant="outline" size="lg">
							<Link href="/projects">View Portfolio</Link>
						</Button>
					</div>
				</div>
			</section>
		</div>
	)
}
