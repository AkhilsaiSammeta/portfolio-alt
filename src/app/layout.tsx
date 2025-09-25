import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { AnimatedBackground } from "@/components/animated-background";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | Full-Stack Developer",
  description: "Portfolio website of a Full-Stack Developer specializing in modern web technologies and creative solutions.",
  keywords: ["portfolio", "developer", "full-stack", "react", "nextjs", "typescript"],
  authors: [{ name: "Portfolio Developer" }],
  openGraph: {
    title: "Portfolio | Full-Stack Developer",
    description: "Portfolio website showcasing modern web development projects and skills.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" 
          integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" 
          crossOrigin="anonymous"
          async
        />
      </head>
      <body className={`${inter.className} antialiased transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 relative overflow-hidden">
            <AnimatedBackground />
            <div className="relative z-10">
              <Navigation />
              <main className="min-h-screen" style={{ paddingTop: '80px' }}>
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
