"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Sun, Moon, Github, Linkedin, Mail } from "lucide-react"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
    
    // Close mobile menu if open (using vanilla JS approach)
    const navbarCollapse = document.querySelector('.navbar-collapse')
    if (navbarCollapse?.classList.contains('show')) {
      navbarCollapse.classList.remove('show')
    }
  }

  useEffect(() => {
    // Bootstrap will be loaded via CDN or layout
    // No dynamic import needed for basic functionality
  }, [])

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white/90 dark:bg-dark/90 backdrop-blur-md border-bottom border-light dark:border-dark fixed-top shadow-sm">
      <div className="container-fluid px-3 px-md-4">
        
        {/* Brand */}
        <a 
          href="#" 
          className="navbar-brand fw-bold text-decoration-none"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent fs-4">
            Portfolio
          </span>
        </a>

        {/* Mobile menu button */}
        <button 
          className="navbar-toggler border-0 shadow-none" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-3 mb-2 mb-lg-0">
            {navLinks.map((link) => (
              <li key={link.href} className="nav-item">
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="nav-link btn btn-link text-decoration-none border-0 shadow-none px-3 py-2 text-dark dark:text-light hover:text-primary"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Social Links & Theme Toggle */}
          <div className="d-flex align-items-center gap-2 flex-wrap">
            
            {/* Social Links */}
            <div className="d-flex gap-2">
              <a
                href="https://github.com/AkhilsaiSammeta"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline-secondary d-flex align-items-center justify-content-center"
                style={{ width: '36px', height: '36px' }}
                title="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://linkedin.com/in/sammeta-akhil-sai"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline-primary d-flex align-items-center justify-content-center"
                style={{ width: '36px', height: '36px' }}
                title="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:22r01a05j1@gmail.com"
                className="btn btn-sm btn-outline-success d-flex align-items-center justify-content-center"
                style={{ width: '36px', height: '36px' }}
                title="Email"
              >
                <Mail size={16} />
              </a>
            </div>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="btn btn-sm btn-outline-secondary d-flex align-items-center justify-content-center ms-2"
                style={{ width: '36px', height: '36px' }}
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}