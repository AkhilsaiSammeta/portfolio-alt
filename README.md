# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth animations, dark mode support, and a clean, professional design inspired by srb.codes.

## Features

- 🌗 **Dark/Light Mode**: Seamless theme switching with system preference detection
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- ⚡ **Performance Optimized**: Built with Next.js 14 for optimal performance
- 🎨 **Modern Design**: Clean, professional interface with smooth animations
- 🔧 **TypeScript**: Fully typed for better development experience
- 🎭 **Framer Motion**: Smooth animations and transitions
- 📧 **Contact Form**: Functional contact form with validation
- 🎯 **SEO Optimized**: Meta tags and proper structure for search engines

## Sections

1. **Hero Section**: Introduction with profile image, contact info, and social links
2. **About Section**: Personal introduction and key statistics
3. **Experience Section**: Timeline of work experience and education
4. **Projects Section**: Showcase of featured and other notable projects
5. **Skills Section**: Technical skills with proficiency levels and tools
6. **Contact Section**: Contact form and additional contact information

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-2025
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`src/components/sections/hero.tsx`):
   - Name and title
   - Location and contact information
   - Social media links
   - Profile image

2. **About Section** (`src/components/sections/about.tsx`):
   - Personal description
   - Statistics (years of experience, projects, etc.)

3. **Experience Section** (`src/components/sections/experience.tsx`):
   - Work experience
   - Education
   - Certifications

4. **Projects Section** (`src/components/sections/projects.tsx`):
   - Project details
   - Technologies used
   - GitHub and live demo links

5. **Skills Section** (`src/components/sections/skills.tsx`):
   - Technical skills and proficiency levels
   - Tools and software

6. **Contact Section** (`src/components/sections/contact.tsx`):
   - Contact information
   - Social media links

### Styling

The website uses Tailwind CSS for styling. You can customize:

- Colors: Update the color palette in the components
- Fonts: Change the font in `src/app/layout.tsx`
- Animations: Modify Framer Motion animations in each component

### Images

Replace placeholder images in the `public` folder:
- `profile-placeholder.jpg`: Your profile image
- `project-placeholder.jpg`: Project screenshots

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms

The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Build Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Performance

The website is optimized for performance with:
- Static generation where possible
- Optimized images with Next.js Image component
- Efficient CSS with Tailwind CSS
- Minimal JavaScript bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

If you have any questions or suggestions, feel free to reach out:

- Email: your@email.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- GitHub: [Your GitHub](https://github.com/yourusername)

---

Built with ❤️ using Next.js and Tailwind CSS
