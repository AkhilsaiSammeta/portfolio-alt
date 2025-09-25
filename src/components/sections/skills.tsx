"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", level: 90, color: "bg-yellow-500" },
      { name: "Python", level: 88, color: "bg-blue-500" },
      { name: "Java", level: 85, color: "bg-red-600" },
      { name: "TypeScript", level: 82, color: "bg-blue-600" },
      { name: "HTML/CSS", level: 92, color: "bg-orange-500" },
      { name: "SQL", level: 75, color: "bg-gray-600" }
    ]
  },
  {
    title: "Frontend & Web",
    skills: [
      { name: "React", level: 88, color: "bg-blue-400" },
      { name: "Next.js", level: 85, color: "bg-gray-800" },
      { name: "Node.js", level: 80, color: "bg-green-600" },
      { name: "Responsive Design", level: 90, color: "bg-purple-500" },
      { name: "Bootstrap", level: 85, color: "bg-purple-600" },
      { name: "Tailwind CSS", level: 88, color: "bg-teal-500" }
    ]
  },
  {
    title: "Data Science & ML",
    skills: [
      { name: "Machine Learning", level: 85, color: "bg-green-500" },
      { name: "Data Analysis", level: 88, color: "bg-blue-500" },
      { name: "Pandas", level: 82, color: "bg-orange-400" },
      { name: "NumPy", level: 80, color: "bg-blue-400" },
      { name: "Scikit-learn", level: 78, color: "bg-orange-600" },
      { name: "Jupyter Notebook", level: 85, color: "bg-orange-500" }
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Google Cloud Platform", level: 80, color: "bg-blue-600" },
      { name: "Terraform", level: 75, color: "bg-purple-600" },
      { name: "Git/GitHub", level: 90, color: "bg-gray-700" },
      { name: "Cloud Security", level: 78, color: "bg-red-500" },
      { name: "CI/CD", level: 75, color: "bg-green-600" },
      { name: "Docker", level: 70, color: "bg-blue-500" }
    ]
  }
]

const tools = [
  { name: "VS Code", icon: "�" },
  { name: "Git", icon: "�" },
  { name: "Firebase", icon: "🔥" },
  { name: "UiPath", icon: "🤖" },
  { name: "Google Colab", icon: "�" },
  { name: "Jupyter", icon: "�" },
  { name: "GitHub", icon: "�" },
  { name: "Figma", icon: "🎨" }
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="section-base bg-gray-50 dark:bg-gray-900">
      <div className="container-base">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="center-all mb-16 mt-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency across various technologies
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3 }}
                        className={`h-2 rounded-full ${skill.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Software */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
            Tools & Software
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                <span className="text-3xl mb-2">{tool.icon}</span>
                <span className="text-gray-700 dark:text-gray-300 text-sm font-medium text-center">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 md:p-10 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 text-center items-center">
            <div className="space-y-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-4xl md:text-5xl font-extrabold leading-none"
              >
                20+
              </motion.div>
              <div className="text-blue-100 text-sm md:text-base tracking-wide">Technologies</div>
            </div>
            
            <div className="space-y-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="text-4xl md:text-5xl font-extrabold leading-none"
              >
                3+
              </motion.div>
              <div className="text-blue-100 text-sm md:text-base tracking-wide">Years Experience</div>
            </div>
            
            <div className="space-y-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-4xl md:text-5xl font-extrabold leading-none"
              >
                50+
              </motion.div>
              <div className="text-blue-100 text-sm md:text-base tracking-wide">Projects Completed</div>
            </div>
            
            <div className="space-y-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="text-4xl md:text-5xl font-extrabold leading-none"
              >
                5+
              </motion.div>
              <div className="text-blue-100 text-sm md:text-base tracking-wide">Certifications</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}