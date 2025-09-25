"use client"

import { motion } from "framer-motion"
import { ArrowDown, MapPin, Phone, Mail, Github, Linkedin } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.querySelector("#about")
    nextSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="relative w-32 h-32 mx-auto mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
              <Image
                src="/profile-placeholder.jpg"
                alt="Profile"
                width={128}
                height={128}
                className="relative z-10 w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = `data:image/svg+xml;base64,${btoa(`
                    <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="64" cy="64" r="64" fill="#f3f4f6"/>
                      <circle cx="64" cy="48" r="20" fill="#9ca3af"/>
                      <path d="M64 80c-20 0-36 16-36 36v12h72v-12c0-20-16-36-36-36z" fill="#9ca3af"/>
                    </svg>
                  `)}`
                }}
              />
            </div>
          </motion.div>

          {/* Name & Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient bg-clip-text text-transparent">
                Sammeta Akhil Sai
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
              Full-Stack Developer & CS Engineering Student
            </p>
          </motion.div>

          {/* Location & Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8 space-y-2"
          >
            <div className="flex items-center justify-center text-gray-600 dark:text-gray-400">
              <MapPin size={16} className="mr-2" />
              <span>Karimnagar, Telangana, India</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-gray-600 dark:text-gray-400">
              <a href="tel:+918466867596" className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Phone size={14} className="mr-1" />
                +91-8466867596
              </a>
              <a href="mailto:22r01a05j1@gmail.com" className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Mail size={14} className="mr-1" />
                22r01a05j1@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-12"
          >
            <div className="flex justify-center space-x-6">
              <a
                href="https://linkedin.com/in/akhilsai-sammeta"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Linkedin size={20} />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href="https://github.com/AkhilsaiSammeta"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Github size={20} />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href="mailto:22r01a05j1@gmail.com"
                className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Mail size={20} />
                <span className="hidden sm:inline">Email</span>
              </a>
            </div>
          </motion.div>

          {/* Brief Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Computer Science Engineering student specializing in full-stack development and AI/ML technologies. 
              Passionate about building scalable web applications and exploring innovative solutions with modern technologies.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Let&apos;s Connect
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
            >
              View Projects
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.button>
    </section>
  )
}