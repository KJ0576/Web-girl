import fs from "fs";
import path from "path";

/**
 * Checks whether a file referenced by a /public-relative path actually
 * exists on disk. Lets components fall back to a styled placeholder
 * instead of a broken image when person photos haven't been added yet.
 */
export function imageExists(publicPath: string): boolean {
  try {
    const filePath = path.join(process.cwd(), "public", publicPath);
    return fs.existsSync(filePath);
  } catch {
    return false;
  }
}
