import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const BASE_DIR = path.resolve(__dirname, '..');
const OUTPUT_FILE = path.join(BASE_DIR, 'public', 'ipf-wiki-knowledge-base.md');
const EXTENSIONS = ['.md', '.mdx', '.mermaid'];
const EXCLUDE_DIRS = ['node_modules', '.git', 'dist', '.astro', '.github', '.vscode'];
const EXCLUDE_FILES = [
  'CODE_OF_CONDUCT.md',
  'SECURITY.md',
  'CONTRIBUTING.md',
  'README.md',
  'old-wiki.mdx',
  'ipf-wiki-knowledge-base.md'
];

function getFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      if (!EXCLUDE_DIRS.includes(file)) {
        getFiles(filePath, fileList);
      }
    } else {
      if (EXTENSIONS.includes(path.extname(file)) && !EXCLUDE_FILES.includes(file)) {
        fileList.push(filePath);
      }
    }
  });
  return fileList;
}

function mergeFiles() {
  console.log('Searching for files...');
  let allFiles = getFiles(BASE_DIR);
  console.log(`Found ${allFiles.length} files.`);

  // Ordina i file: new-wiki.mdx come indice principale (primo posto), il resto in ordine alfabetico
  allFiles.sort((a, b) => {
    if (a.endsWith('new-wiki.mdx')) return -1;
    if (b.endsWith('new-wiki.mdx')) return 1;
    return a.localeCompare(b);
  });

  let content = '# Italia Personal Finance - Full Content\n\n';
  content += `Generated on: ${new Date().toISOString()}\n\n`;

  allFiles.forEach((file) => {
    const relativePath = path.relative(BASE_DIR, file);
    console.log(`Processing: ${relativePath}`);
    
    const fileContent = fs.readFileSync(file, 'utf8');
    
    content += `\n\n--- FILE: ${relativePath} ---\n\n`;
    
    // Wrap mermaid files in code blocks
    if (path.extname(file) === '.mermaid') {
      content += '```mermaid\n';
      content += fileContent;
      content += '\n```\n';
    } else {
      content += fileContent;
    }
  });

  fs.writeFileSync(OUTPUT_FILE, content);
  console.log(`\nSuccessfully merged into: ${OUTPUT_FILE}`);
}

mergeFiles();
