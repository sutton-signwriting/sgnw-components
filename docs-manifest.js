import fs from 'fs';
import { customElementsManifestToMarkdown } from '@custom-elements-manifest/to-markdown';

if (!fs.existsSync('./dist')){
  fs.mkdirSync('./dist');
}

const manifest = JSON.parse(fs.readFileSync('./dist/custom-elements.json'));
const markdown = customElementsManifestToMarkdown(manifest);
fs.writeFileSync('./dist/custom-elements.md', markdown);
