"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Rocket, KeyRound, Database, Mail } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel } from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";

export default function Home() {

	return (
		<main className="min-h-screen text-white flex flex-col items-center justify-center px-4 py-8" style={{background: "linear-gradient(135deg, #18181b 0%, #27272a 50%, #0f172a 100%)"}}>
			{/* Hero Section */}
			<section className="w-full max-w-3xl text-center mb-16">
				<motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
					<Avatar className="mx-auto mb-4 h-16 w-16 bg-zinc-900">
						<AvatarImage src="/api-logo.png" alt="API Logo" />
						<AvatarFallback className="bg-zinc-800 text-white flex items-center justify-center">API</AvatarFallback>
					</Avatar>
					<h1 className="text-4xl font-bold mb-2 text-white flex items-center justify-center gap-2">
						<Rocket className="w-8 h-8 text-blue-400" /> Veridion Studios API
					</h1>
					<p className="text-lg text-zinc-400 mb-4">Build, connect, and scale with our powerful API platform.</p>
					<div className="flex justify-center gap-2 mb-4">
						<Badge className="bg-zinc-800 text-white flex items-center gap-1"><Database className="w-4 h-4" />REST</Badge>
						<Badge className="bg-zinc-800 text-white flex items-center gap-1"><KeyRound className="w-4 h-4" />GraphQL</Badge>
						<Badge className="bg-zinc-800 text-white flex items-center gap-1"><Mail className="w-4 h-4" />Webhooks</Badge>
					</div>
					<motion.div whileHover={{ scale: 1.05 }}>
						<Button size="lg" className="mt-2 bg-zinc-900 text-white hover:bg-zinc-800" asChild>
							<a href="#get-started">Get Started</a>
						</Button>
					</motion.div>
				</motion.div>
			</section>

			{/* Call to Action Section */}
			<section id="get-started" className="w-full max-w-xl text-center">
				<motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
					<div className="p-8 rounded-xl bg-zinc-900 border border-zinc-800">
						<h2 className="text-2xl font-bold mb-2 text-white flex items-center justify-center gap-2">
							<KeyRound className="w-6 h-6 text-blue-400" /> Ready to build?
						</h2>
						<p className="text-zinc-400 mb-6">Sign up for an API key and start integrating in minutes.</p>
						<AlertDialog>
							<AlertDialogTrigger asChild>
								<Button size="lg" className="bg-zinc-800 text-white hover:bg-zinc-700 flex items-center gap-2"><KeyRound className="w-5 h-5" />Request API Key</Button>
							</AlertDialogTrigger>
							<AlertDialogContent className="bg-zinc-900 border border-zinc-800 text-white">
								<AlertDialogHeader>
									<AlertDialogTitle className="flex items-center gap-2"><KeyRound className="w-5 h-5 text-blue-400" />Request API Key</AlertDialogTitle>
									<AlertDialogDescription>
										Enter your email to receive an API key.
									</AlertDialogDescription>
								</AlertDialogHeader>
								<Input type="email" placeholder="you@example.com" className="mb-4 bg-zinc-800 text-white border-zinc-700" />
								<AlertDialogFooter>
									<AlertDialogCancel className="bg-zinc-800 text-white hover:bg-zinc-700">Cancel</AlertDialogCancel>
									<AlertDialogAction className="bg-blue-600 text-white hover:bg-blue-500">Submit</AlertDialogAction>
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialog>
					</div>
				</motion.div>
			</section>
		</main>
	);
}
