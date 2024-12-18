import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export function remarkReadingTime() {
  return function (tree, vfile) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);

    // Add `minutesRead` to frontmatter (via VFile)
    if (!vfile.data.astro) vfile.data.astro = {};
    if (!vfile.data.astro.frontmatter) vfile.data.astro.frontmatter = {};
    vfile.data.astro.frontmatter.minutesRead = readingTime.minutes;
  };
}
