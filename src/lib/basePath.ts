export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Prefixes a /public-relative path with the app's basePath so static
 * assets resolve correctly when deployed under a subpath (e.g. GitHub
 * Pages project sites at /<repo>/).
 */
export function withBasePath(publicPath: string): string {
  return `${basePath}${publicPath}`;
}
