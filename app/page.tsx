'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Code, Download, Mail, User, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Portfolio() {
  const projects = [
    { id: 1, name: "To-Do List App", type: "Web Application", description: "A basic application where users can add, edit, and delete tasks. It helps users keep track of their daily activities." },
    { id: 2, name: "Weather App", type: "Web Application", description: "An app that fetches and displays the current weather information for a specified location using a weather API." },
    { id: 3, name: "YouTube Clone", type: "Web Application", description: "A simple video-sharing platform where users can upload, view, and comment on videos. It includes features like video search and user profiles." },
    { id: 4, name: "Chatbot", type: "AI Project", description: "A basic chatbot that can answer common questions and provide information. It can be integrated into websites or messaging apps." },
    { id: 5, name: "Image Classifier", type: "AI Project", description: "A machine learning project that classifies images into different categories. It can be trained to recognize objects like cats, dogs, and more." },
    // Add more projects to reach the total of 15
  ]

  const webApps = projects.filter(project => project.type === "Web Application").slice(0, 10)
  const aiProjects = projects.filter(project => project.type === "AI Project").slice(0, 5)

  const programmingLanguages = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "Ruby",
    "TypeScript",
    "Go",
    "Swift",
    "Kotlin",
    "Rust"
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <div className="min-h-screen bg-black text-amber-50 p-8">
      <motion.div 
        className="container mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.header 
          className="mb-12 text-center"
          variants={itemVariants}
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-red-500 text-transparent bg-clip-text">
            Rohil Gugunta
          </h1>
          <p className="text-2xl text-amber-300">
            Full-Stack Web Developer
          </p>
        </motion.header>

        <Tabs defaultValue="about" className="mb-12">
          <TabsList className="bg-amber-900/20 border-amber-500/30 border">
            <TabsTrigger value="about" className="data-[state=active]:bg-amber-700"><User className="mr-2 h-4 w-4" /> About Me</TabsTrigger>
            <TabsTrigger value="resume" className="data-[state=active]:bg-amber-700"><BookOpen className="mr-2 h-4 w-4" /> Resume</TabsTrigger>
            <TabsTrigger value="projects" className="data-[state=active]:bg-amber-700"><Code className="mr-2 h-4 w-4" /> Projects</TabsTrigger>
            <TabsTrigger value="contact" className="data-[state=active]:bg-amber-700"><Mail className="mr-2 h-4 w-4" /> Contact</TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <Card className="bg-amber-900/20 border-amber-500/30">
              <CardHeader>
                <CardTitle className="text-amber-400">About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  I am a full-stack web developer with a passion for creating interactive and responsive web applications. 
                  I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. 
                  I am a quick learner and always eager to expand my knowledge and skill set. 
                  I am a team player, excited to collaborate with others to build amazing applications.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <h3 className="text-xl font-semibold mt-6 mb-3 text-amber-400">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {programmingLanguages.map((lang, index) => (
                      <motion.span
                        key={index}
                        className="bg-gradient-to-r from-amber-600 to-red-600 px-3 py-1 rounded-full text-sm"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                      >
                        {lang}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="resume">
            <Card className="bg-amber-900/20 border-amber-500/30">
              <CardHeader>
                <CardTitle className="text-amber-400">Resume</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-[3/4] bg-amber-800/20 mb-4">
                  <object
                    data="/assets/resume.pdf"
                    type="application/pdf"
                    width="100%"
                    height="600px"
                    className="rounded-lg"
                  >
                    <p>It appears you do not have a PDF plugin for this browser. 
                    You can <a href="/assets/resume.pdf" className="text-amber-400 hover:underline">click here to download the PDF file.</a></p>
                  </object>
                </div>
                <div className="flex space-x-4">
                  <Button asChild className="bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600 transition-all duration-300">
                    <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
                      <BookOpen className="mr-2 h-4 w-4" /> View Resume
                    </a>
                  </Button>
                  <Button asChild className="bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600 transition-all duration-300">
                    <a href="/assets/resume.pdf" download>
                      <Download className="mr-2 h-4 w-4" /> Download Resume
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="projects">
            <motion.div 
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[...webApps, ...aiProjects].map((project) => (
                <motion.div key={project.id} variants={itemVariants}>
                  <Card className="bg-amber-900/20 border-amber-500/30 h-full">
                    <CardHeader>
                      <CardTitle className="text-amber-400">{project.name}</CardTitle>
                      <CardDescription className="text-amber-200">{project.type}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{project.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
          <TabsContent value="contact">
            <Card className="bg-amber-900/20 border-amber-500/30">
              <CardHeader>
                <CardTitle className="text-amber-400">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.p 
                  className="mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Email: <Link href="mailto:rohilgugunta@gmail.com" className="text-amber-400 hover:underline">rohilgugunta@gmail.com</Link>
                </motion.p>
                <motion.div 
                  className="flex space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <Link href="https://github.com/RGcoderA" target="_blank" rel="noopener noreferrer" className="flex items-center text-amber-400 hover:text-amber-300 transition-colors duration-300">
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </Link>
                  <Link href="https://www.linkedin.com/in/rohil-gugunta-a50617262/" target="_blank" rel="noopener noreferrer" className="flex items-center text-amber-400 hover:text-amber-300 transition-colors duration-300">
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </Link>
                </motion.div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}