"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Calendar, Code } from "lucide-react"

const projects = [
  {
    title: "Multiplayer Snake Game",
    description: "A real-time multiplayer Snake game built with modern web technologies. Features live gameplay, responsive design, and smooth user experience with real-time synchronization between players.",
    image: null,
    technologies: ["JavaScript", "Node.js", "Socket.io", "HTML5 Canvas", "CSS3"],
    githubUrl: "https://github.com/AkhilsaiSammeta/Multiplayer-Snake-Game",
    liveUrl: "https://github.com/AkhilsaiSammeta/Multiplayer-Snake-Game",
    featured: true,
    period: "2024",
    status: "Completed"
  },
  {
    title: "Python Voice Chatbot",
    description: "An advanced voice-activated chatbot with speech recognition and text-to-speech capabilities. Features natural language processing and context-aware responses for seamless conversational experience.",
    image: null,
    technologies: ["Python", "Speech Recognition", "Text-to-Speech", "NLP", "Machine Learning"],
    githubUrl: "https://github.com/AkhilsaiSammeta/basic-python-voice-chatbot",
    liveUrl: "https://github.com/AkhilsaiSammeta/basic-python-voice-chatbot",
    featured: true,
    period: "2024",
    status: "Completed"
  },
  {
    title: "Java DSA Roadmap",
    description: "Comprehensive Data Structures and Algorithms learning path in Java. Contains well-documented implementations, examples, and practice problems to help developers master DSA concepts.",
    image: null,
    technologies: ["Java", "Data Structures", "Algorithms", "Object-Oriented Programming"],
    githubUrl: "https://github.com/AkhilsaiSammeta/java-dsa-roadmap",
    liveUrl: "https://github.com/AkhilsaiSammeta/java-dsa-roadmap",
    featured: true,
    period: "2024",
    status: "Ongoing"
  },
  {
    title: "Color Finder Tool",
    description: "Web-based color picker and palette generator tool that helps designers and developers find perfect color combinations. Features real-time color preview and CSS code generation.",
    image: null,
    technologies: ["HTML", "CSS", "JavaScript", "Color Theory", "Web APIs"],
    githubUrl: "https://github.com/AkhilsaiSammeta/css-codes",
    liveUrl: "https://github.com/AkhilsaiSammeta/css-codes",
    featured: false,
    period: "2024",
    status: "Completed"
  },
  {
    title: "Web Development Tools",
    description: "Collection of useful web development utilities and tools to streamline the development process. Includes code generators, formatters, and productivity enhancers for modern web development.",
    image: null,
    technologies: ["JavaScript", "React", "Node.js", "Web APIs", "Developer Tools"],
    githubUrl: "https://github.com/AkhilsaiSammeta",
    liveUrl: "#",
    featured: false,
    period: "2024",
    status: "Completed"
  },
  {
    title: "Data Science Learning Path",
    description: "Comprehensive learning resources and projects for Data Science and Machine Learning. Includes hands-on projects, tutorials, and practical implementations using Python and popular ML libraries.",
    image: null,
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Data Analysis", "Machine Learning"],
    githubUrl: "https://github.com/AkhilsaiSammeta",
    liveUrl: "#",
    featured: false,
    period: "2024",
    status: "Ongoing"
  },
  {
    title: "FortiCloud Security",
    description: "Cloud security project focusing on implementing security best practices and monitoring solutions. Features automated security checks and compliance monitoring for cloud infrastructure.",
    image: null,
    technologies: ["Cloud Security", "GCP", "Terraform", "Security Monitoring", "DevSecOps"],
    githubUrl: "https://github.com/AkhilsaiSammeta",
    liveUrl: "#",
    featured: false,
    period: "2024",
    status: "Ongoing"
  }
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="section-base bg-transparent">
      <div className="container-base">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="center-all mb-16 mt-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center overflow-hidden">
                <div className="text-6xl text-blue-600 dark:text-blue-400 opacity-20">
                  <Code />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                
                {/* Project Links */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Status Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 text-sm rounded-full backdrop-blur-sm">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.period}
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-200 mb-4 line-clamp-3 justify-text">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="relative my-12">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="inline-block bg-gray-900 text-white dark:bg-gray-800 dark:text-gray-100 px-5 py-2 rounded-full shadow-md">
                Other Projects
              </span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white text-center">
                    {project.title}
                  </h4>
                  <div className="flex space-x-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-200 mb-4 text-sm justify-text">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{project.period}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                      : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}