import type { NextConfig } from "next";

// GitHub Actions sets GITHUB_REPOSITORY to "owner/repo"; GitHub Pages
// serves a project site at https://<owner>.github.io/<repo>/, so the
// app needs that repo name as its basePath only during that build.
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const basePath = process.env.GITHUB_ACTIONS && repoName ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    // GitHub Pages serves static files only; Next's image optimization
    // API has no server to run on there.
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
