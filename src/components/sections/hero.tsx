"use client"

import { motion } from "framer-motion"
import { ArrowDown, MapPin, Phone, Mail, Github, Linkedin } from "lucide-react"

export function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.querySelector("#about")
    nextSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-vh-100 d-flex align-items-center position-relative section-base">
      <div className="container-base">
        <div className="row justify-content-center text-center text-md-start gy-4 gy-md-5">
          <div className="col-12 col-lg-10 col-xl-8">
            
            {/* Profile Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-4 mb-md-5"
            >
              <div className="position-relative mx-auto mx-md-0 mb-4 d-flex align-items-center justify-content-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-circle text-white fw-bold shadow-lg" 
                   style={{ width: '140px', height: '140px', fontSize: '3rem' }}>
                AS
              </div>
            </motion.div>

            {/* Name & Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4 mb-md-5"
            >
              <h1 className="h1-responsive fw-bold mb-2 mb-md-3 no-wrap-md">
                Sammeta Akhil Sai
              </h1>
              <div className="panel-blur rounded-3 px-3 px-md-4 py-2 py-md-3 d-inline-block">
                <p className="role-responsive text-white mb-0 fw-medium no-wrap-md">
                  Full-Stack Developer & CS Engineering Student
                </p>
              </div>
            </motion.div>

            {/* Location & Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-5 mb-md-6"
            >
              <div className="d-flex align-items-center justify-content-center justify-content-md-start text-white dark:text-gray-200 mb-4">
                <MapPin size={18} className="me-2 text-blue-400" />
                <span className="fs-6 fw-medium">Karimnagar, Telangana, India</span>
              </div>
              <div className="row g-3 justify-content-center justify-content-md-start">
                <div className="col-auto">
                  <a href="tel:+918466867596" className="text-decoration-none text-white dark:text-gray-200 hover:text-blue-400 d-flex align-items-center transition-colors">
                    <Phone size={16} className="me-2" />
                    <span className="fw-medium">+91-8466867596</span>
                  </a>
                </div>
                <div className="col-auto">
                  <a href="mailto:sammetaakhilsai@gmail.com" className="text-decoration-none text-white dark:text-gray-200 hover:text-blue-400 d-flex align-items-center transition-colors">
                    <Mail size={16} className="me-2" />
                    <span className="fw-medium">sammetaakhilsai@gmail.com</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-5 mb-md-6"
            >
              <div className="row g-3 g-md-4 justify-content-center justify-content-md-start">
                <div className="col-12 col-sm-6 col-md-3 d-flex">
                  <div className="stat-card w-100 text-center text-md-start panel-blur rounded-3 p-3 flex-grow-1">
                    <div className="fs-2 fw-bold text-blue-400 mb-1">3+</div>
                    <div className="small text-white dark:text-gray-300 fw-medium">Years Learning</div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3 d-flex">
                  <div className="stat-card w-100 text-center text-md-start panel-blur rounded-3 p-3 flex-grow-1">
                    <div className="fs-2 fw-bold text-purple-400 mb-1">15+</div>
                    <div className="small text-white dark:text-gray-300 fw-medium">Projects Built</div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3 d-flex">
                  <div className="stat-card w-100 text-center text-md-start panel-blur rounded-3 p-3 flex-grow-1">
                    <div className="fs-2 fw-bold text-green-400 mb-1">10+</div>
                    <div className="small text-white dark:text-gray-300 fw-medium">Technologies</div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3 d-flex">
                  <div className="stat-card w-100 text-center text-md-start panel-blur rounded-3 p-3 flex-grow-1">
                    <div className="fs-2 fw-bold text-orange-400 mb-1">50+</div>
                    <div className="small text-white dark:text-gray-300 fw-medium">Commits Monthly</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-5"
            >
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a
                  href="https://www.linkedin.com/in/sammeta-akhilsai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light d-flex align-items-center gap-2 shadow-sm border-2 hover:bg-blue-600 hover:border-blue-600 transition-all"
                >
                  <Linkedin size={18} />
                  <span className="d-none d-sm-inline">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/AkhilsaiSammeta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light d-flex align-items-center gap-2 shadow-sm border-2 hover:bg-gray-800 hover:border-gray-800 transition-all"
                >
                  <Github size={18} />
                  <span className="d-none d-sm-inline">GitHub</span>
                </a>
                <a
                  href="mailto:sammetaakhilsai@gmail.com"
                  className="btn btn-outline-light d-flex align-items-center gap-2 shadow-sm border-2 hover:bg-green-600 hover:border-green-600 transition-all"
                >
                  <Mail size={18} />
                  <span className="d-none d-sm-inline">Email</span>
                </a>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-5"
            >
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <button
                  onClick={scrollToNext}
                  className="btn btn-lg px-4 py-3 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 hover:from-blue-700 hover:to-purple-700 transition-all fw-medium"
                >
                  View My Work
                </button>
                <a
                  href="/resume.pdf"
                  download
                  className="btn btn-outline-light btn-lg px-4 py-3 shadow-sm border-2 hover:bg-white hover:text-gray-900 transition-all fw-medium"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="position-absolute bottom-0 start-50 translate-middle-x pb-4"
            >
              <button
                onClick={scrollToNext}
                className="btn btn-link text-white/70 dark:text-gray-400 p-0 border-0 d-flex flex-column align-items-center text-decoration-none hover:text-white dark:hover:text-gray-200 transition-colors"
                aria-label="Scroll to next section"
              >
                <small className="mb-2 fw-medium">Scroll Down</small>
                <ArrowDown size={20} className="animate-bounce" />
              </button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}