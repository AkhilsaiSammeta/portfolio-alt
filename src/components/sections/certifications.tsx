"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, ExternalLink } from "lucide-react"

const certifications = [
  {
    name: "React - The Complete Guide",
    issuer: "Udemy",
    date: "2024",
    icon: "⚛️",
    link: "#",
    driveLink: "https://drive.google.com/file/d/your-file-id/view"
  },
  {
    name: "Firebase Developer",
    issuer: "Google",
    date: "2024",
    icon: "🔥",
    link: "#",
    driveLink: "https://drive.google.com/file/d/your-file-id/view"
  },
  {
    name: "JavaScript Algorithms",
    issuer: "FreeCodeCamp",
    date: "2023",
    icon: "📚",
    link: "#",
    driveLink: "https://drive.google.com/file/d/your-file-id/view"
  },
  {
    name: "Git & GitHub",
    issuer: "Coursera",
    date: "2023",
    icon: "🐙",
    link: "#",
    driveLink: "https://drive.google.com/file/d/your-file-id/view"
  },
  {
    name: "Python for Everybody",
    issuer: "University of Michigan",
    date: "2023",
    icon: "🐍",
    link: "#",
    driveLink: "https://drive.google.com/file/d/your-file-id/view"
  },
  {
    name: "Web Development",
    issuer: "The Odin Project",
    date: "2022",
    icon: "🌐",
    link: "#",
    driveLink: "https://drive.google.com/file/d/your-file-id/view"
  }
]

export function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certifications" className="section-base bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
      <div className="container-base" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="center-all mb-16 mt-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications and courses that validate my expertise
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group mb-6"
            >
              <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 h-full flex flex-col items-center justify-center text-center">
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl mb-6 mx-auto">
                  <span className="text-3xl text-center">{cert.icon}</span>
                </div>
                
                {/* Content */}
                <div className="text-center flex-1 flex flex-col items-center justify-center">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 leading-tight text-center">
                    {cert.name}
                  </h3>
                  
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-1 text-center">
                    {cert.issuer}
                  </p>
                  
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 text-center">
                    {cert.date}
                  </p>
                  
                  {/* Link */}
                  <div className="mt-auto flex justify-center">
                    <a
                      href={cert.link}
                      className="inline-flex items-center justify-center text-blue-600 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 font-medium text-sm transition-colors duration-200"
                    >
                      View Certificate
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-28 md:mt-32 text-center"
        >
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-yellow-500 mr-2" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Continuous Learning
              </h3>
            </div>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              Always staying updated with the latest technologies and best practices through 
              certified courses and hands-on projects. These certifications represent my 
              commitment to professional growth and technical excellence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}