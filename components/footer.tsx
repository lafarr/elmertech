import { Code2, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
	return (
		<footer className="border-t bg-muted/50">
			<div className="container mx-auto px-4 py-12">
				<div className="grid md:grid-cols-4 gap-8">
					{/* Brand */}
					<div className="space-y-4">
						<Link href="/" className="flex items-center space-x-2">
							<Code2 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
							<span className="text-xl font-bold">ElmerTech</span>
						</Link>
						<p className="text-sm text-muted-foreground">
							Transforming ideas into digital reality with professional software development services.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="/"
									className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href="/projects"
									className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
								>
									Projects
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					{/* Services */}
					<div>
						<h3 className="font-semibold mb-4">Services</h3>
						<ul className="space-y-2 text-sm text-muted-foreground">
							<li>Web Development</li>
							<li>Mobile Apps</li>
							<li>Custom Software</li>
							<li>Consultation</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className="font-semibold mb-4">Contact</h3>
						<ul className="space-y-2 text-sm text-muted-foreground">
							<li className="flex items-center space-x-2">
								<Mail className="h-4 w-4" />
								<span>hello@elmertech.com</span>
							</li>
							<li className="flex items-center space-x-2">
								<Phone className="h-4 w-4" />
								<span>+1 (555) 123-4567</span>
							</li>
							<li className="flex items-center space-x-2">
								<MapPin className="h-4 w-4" />
								<span>Available Worldwide</span>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
					<p>&copy; {new Date().getFullYear()} ElmerTech. All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}
