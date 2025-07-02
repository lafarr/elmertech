"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
		projectType: "",
	})

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// Handle form submission here
		console.log("Form submitted:", formData)
		// You would typically send this to your backend or email service
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	return (
		<div className="min-h-screen py-20 px-4">
			<div className="container mx-auto max-w-6xl">
				{/* Header */}
				<div className="text-center mb-16">
					<h1 className="text-4xl md:text-5xl font-bold mb-4">
						Get In <span className="text-purple-600 dark:text-purple-400">Touch</span>
					</h1>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Ready to start your project? We'd love to hear about your ideas and discuss how we can work together
					</p>
				</div>

				<div className="grid lg:grid-cols-3 gap-12">
					{/* Contact Form */}
					<div className="lg:col-span-2">
						<Card className="border-2">
							<CardHeader>
								<CardTitle className="flex items-center text-2xl">
									<MessageCircle className="h-6 w-6 text-purple-600 dark:text-purple-400 mr-2" />
									Send Us a Message
								</CardTitle>
								<CardDescription>Fill out the form below and We'll get back to you within 24 hours</CardDescription>
							</CardHeader>
							<CardContent>
								<form onSubmit={handleSubmit} className="space-y-6">
									<div className="grid md:grid-cols-2 gap-4">
										<div className="space-y-2">
											<Label htmlFor="name">Full Name *</Label>
											<Input
												id="name"
												name="name"
												value={formData.name}
												onChange={handleChange}
												placeholder="Your full name"
												required
											/>
										</div>
										<div className="space-y-2">
											<Label htmlFor="email">Email Address *</Label>
											<Input
												id="email"
												name="email"
												type="email"
												value={formData.email}
												onChange={handleChange}
												placeholder="your.email@example.com"
												required
											/>
										</div>
									</div>

									<div className="space-y-2">
										<Label htmlFor="subject">Subject *</Label>
										<Input
											id="subject"
											name="subject"
											value={formData.subject}
											onChange={handleChange}
											placeholder="What's this about?"
											required
										/>
									</div>

									<div className="space-y-2">
										<Label htmlFor="projectType">Project Type</Label>
										<select
											id="projectType"
											name="projectType"
											value={formData.projectType}
											onChange={handleChange}
											className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
										>
											<option value="">Select project type (optional)</option>
											<option value="web-development">Web Development</option>
											<option value="mobile-app">Mobile App</option>
											<option value="custom-software">Custom Software</option>
											<option value="consultation">Consultation</option>
											<option value="other">Other</option>
										</select>
									</div>

									<div className="space-y-2">
										<Label htmlFor="message">Message *</Label>
										<Textarea
											id="message"
											name="message"
											value={formData.message}
											onChange={handleChange}
											placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
											rows={6}
											required
										/>
									</div>

									<Button type="submit" size="lg" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
										<Send className="h-4 w-4 mr-2" />
										Send Message
									</Button>
								</form>
							</CardContent>
						</Card>
					</div>

					{/* Contact Information */}
					<div className="space-y-6">
						<Card className="flex-grow">
							<CardHeader>
								<CardTitle>Contact Information</CardTitle>
								<CardDescription>Multiple ways to reach us</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="flex items-center space-x-3">
									<Mail className="h-5 w-5 text-purple-600 dark:text-purple-400" />
									<div>
										<p className="font-medium">Email</p>
										<p className="text-sm text-muted-foreground">info@elmertech.dev</p>
									</div>
								</div>

								<div className="flex items-center space-x-3">
									<Phone className="h-5 w-5 text-purple-600 dark:text-purple-400" />
									<div>
										<p className="font-medium">Phone</p>
										<p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
									</div>
								</div>

								<div className="flex items-center space-x-3">
									<MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
									<div>
										<p className="font-medium">Location</p>
										<p className="text-sm text-muted-foreground">Available Worldwide</p>
									</div>
								</div>

								<div className="flex items-center space-x-3">
									<Clock className="h-5 w-5 text-purple-600 dark:text-purple-400" />
									<div>
										<p className="font-medium">Response Time</p>
										<p className="text-sm text-muted-foreground">Within 24 hours</p>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 border-purple-200 dark:border-purple-800 flex-shrink-0">
							<CardContent className="flex flex-col justify-center h-full">
								<h3 className="font-semibold mb-2">Quick Response Guarantee</h3>
								<p className="text-sm text-muted-foreground">
									We understand that time is valuable. You&apos;ll receive a response to your inquiry within 24 hours, often
									much sooner.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</div>
	)
}
