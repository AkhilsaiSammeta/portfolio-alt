import type { NextConfig } from "next";

// Configure for static export (GitHub Pages friendly)
const isGithubPages = process.env.GITHUB_PAGES === 'true'
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]

const nextConfig: NextConfig = {
  output: 'export',
  // If deploying to <username>.github.io/<repo>, set basePath/assetPrefix
  basePath: isGithubPages && repoName ? `/${repoName}` : undefined,
  assetPrefix: isGithubPages && repoName ? `/${repoName}/` : undefined,
  // Optional but recommended for GH Pages hosting
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
