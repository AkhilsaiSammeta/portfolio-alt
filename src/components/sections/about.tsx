"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="section-base bg-transparent">
      <div className="container-base">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="center-all mb-16 mt-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I&apos;m Sammeta Akhil Sai, a passionate developer with expertise in Full-Stack Development, Data Science, Machine Learning, and Cloud Security. 
              I love building innovative solutions and contributing to open-source projects that make a difference.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Currently, I&apos;m working on Data Science & ML projects and Java DSA roadmaps while learning advanced Cloud Security with GCP and Terraform. 
              I enjoy creating tools that simplify complex problems and am actively looking to collaborate on Web Development and Machine Learning projects.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My technical journey spans across JavaScript, Python, Java, React, Node.js, and various cloud technologies. 
              I&apos;m particularly passionate about combining traditional development skills with modern AI/ML capabilities to build the future, one commit at a time.
            </p>

            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                What I Do
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-600 dark:text-gray-300">Full-Stack Development</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <span className="text-gray-600 dark:text-gray-300">Data Science & ML</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span className="text-gray-600 dark:text-gray-300">Cloud Security</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                  <span className="text-gray-600 dark:text-gray-300">Open Source</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Years Learning</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">15+</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Projects Built</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">10+</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">50+</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">Commits Monthly</div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-60 animate-pulse delay-1000"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}