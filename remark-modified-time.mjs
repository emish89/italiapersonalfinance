import { execSync } from "child_process";

export function remarkModifiedTime() {
  return function (tree, vfile) {
    const filepath = vfile.history[0]; // Filepath should still be accessible
    try {
      const result = execSync(`git log -1 --pretty="format:%cI" ${filepath}`);
      if (!vfile.data.astro) vfile.data.astro = {};
      if (!vfile.data.astro.frontmatter) vfile.data.astro.frontmatter = {};
      vfile.data.astro.frontmatter.lastModified = result.toString().trim();
    } catch (error) {
      console.error(`Error fetching last modified time for ${filepath}:`, error);
    }
  };
}
