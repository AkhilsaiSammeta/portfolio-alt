"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Calendar, MapPin, Building, GraduationCap, Award, Eye, X } from "lucide-react"

const experiences = [
  {
    type: "work",
    title: "Software Engineer (Freelance)",
    company: "AICTE",
    location: "Remote, India",
    period: "Jun 2025 - Aug 2025",
    description: "Built Stratos Edge web platform end-to-end using React and Firebase. Led development of a full-stack, AI-powered e-learning platform supporting over 1,000 concurrent users. Implemented RBAC with custom claims, Security Rules, and CI/CD via GitHub Actions.",
    skills: ["React", "TypeScript", "Firebase", "Firestore", "Cloud Functions", "GitHub Actions", "RBAC"]
  },
  {
    type: "education",
    title: "B.Tech - Computer Science & Engineering",
    company: "CMR Institute of Technology",
    location: "Hyderabad, Telangana",
    period: "2022 - 2026",
    description: "Currently pursuing Bachelor of Technology in Computer Science & Engineering. Maintaining a CGPA of 7.62/10. Focus on software development, data structures, algorithms, and emerging technologies.",
    skills: ["Computer Science", "Software Engineering", "Data Structures", "Algorithms", "Web Development"]
  },
  {
    type: "education",
    title: "Intermediate (12th Grade)",
    company: "Board of Intermediate Education",
    location: "Telangana, India",
    period: "2020 - 2022",
    description: "Completed intermediate education with 89.20% marks, focusing on Mathematics, Physics, and Chemistry. Strong foundation in analytical thinking and problem-solving.",
    skills: ["Mathematics", "Physics", "Chemistry", "Analytical Thinking"]
  },
  {
    type: "education",
    title: "Secondary School (10th Grade)",
    company: "Board of Secondary Education",
    location: "Telangana, India",
    period: "2019 - 2020",
    description: "Completed secondary education with 75.60% marks. Built strong fundamentals in core subjects and developed interest in technology and programming.",
    skills: ["Core Subjects", "Basic Programming", "Problem Solving"]
  }
]

const certifications = [
  {
    name: "Google AI-ML Virtual Internship",
    issuer: "Google",
    date: "2024",
    icon: "🤖",
    driveLink: "https://drive.google.com/file/d/your-google-ai-cert/view"
  },
  {
    name: "UiPath RPA Developer Virtual Internship",
    issuer: "UiPath",
    date: "2024",
    icon: "🔧",
    driveLink: "https://drive.google.com/file/d/your-uipath-cert/view"
  },
  {
    name: "Business Analysis & Process Management",
    issuer: "Professional Certification",
    date: "2024",
    icon: "📊",
    driveLink: "https://drive.google.com/file/d/your-business-cert/view"
  },
  {
    name: "Full-Stack Web Development",
    issuer: "AICTE",
    date: "2025",
    icon: "💻",
    driveLink: "https://drive.google.com/file/d/your-fullstack-cert/view"
  }
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCert, setSelectedCert] = useState<string | null>(null)

  const openCertificate = (driveLink: string) => {
    setSelectedCert(driveLink)
  }

  const closeCertificate = () => {
    setSelectedCert(null)
  }

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeCertificate()
      }
    }

    if (selectedCert) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [selectedCert])

  return (
    <section id="experience" className="section-base bg-gray-50 dark:bg-gray-900">
      <div className="container-base">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="center-all mb-16 mt-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and educational background that shaped my expertise in technology
          </p>
        </motion.div>

  <div className="grid lg:grid-cols-3 gap-8 md:gap-10">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-start md:items-stretch gap-4 md:gap-6 mb-16"
                >
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-white dark:bg-gray-800 rounded-full border-4 border-blue-600 flex items-center justify-center z-10">
                    {exp.type === "work" ? (
                      <Building className="w-6 h-6 text-blue-600" />
                    ) : (
                      <GraduationCap className="w-6 h-6 text-purple-600" />
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 lg:p-9 shadow-lg ring-1 ring-gray-200/60 dark:ring-gray-700/60">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">
                        {exp.type === "work" ? "Work" : "Education"}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                      {exp.title}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Building className="w-4 h-4 mr-1" />
                        {exp.company}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-7 md:p-8 shadow-lg ring-1 ring-gray-200/60 dark:ring-gray-700/60 sticky top-24"
            >
              <div className="flex items-center mb-6">
                <Award className="w-6 h-6 text-yellow-500 mr-2" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Certifications
                </h3>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors relative"
                  >
                    <span className="text-2xl">{cert.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
                        {cert.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {cert.issuer}
                      </p>
                      <p className="text-gray-500 dark:text-gray-500 text-xs">
                        {cert.date}
                      </p>
                    </div>
                    {/* View Button */}
                    <button
                      onClick={() => openCertificate(cert.driveLink)}
                      className="absolute bottom-2 right-2 w-8 h-8 bg-blue-600 hover:bg-purple-600 text-white rounded-full flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg group opacity-80 hover:opacity-100"
                      title="View Certificate"
                    >
                      <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Full Screen Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeCertificate}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative w-full h-full max-w-7xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-lg shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeCertificate}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl"
              title="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Certificate Content */}
            <div className="w-full h-full">
              <iframe
                src={selectedCert.replace('/view', '/preview')}
                className="w-full h-full border-none"
                title="Certificate Preview"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}