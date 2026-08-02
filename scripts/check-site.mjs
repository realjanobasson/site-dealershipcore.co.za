import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('../public/', import.meta.url).pathname;
const walk = directory => readdirSync(directory).flatMap(name => {
  const path = join(directory, name);
  return statSync(path).isDirectory() ? walk(path) : [path];
});

const files = walk(root);
const pages = files.filter(file => file.endsWith('index.html'));

if (pages.length !== 38) {
  throw new Error(`Expected 38 index pages, found ${pages.length}`);
}

for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  for (const required of [
    '<title>',
    'rel="canonical"',
    'application/ld+json',
    '/assets/styles.css',
    '/assets/app.js',
  ]) {
    if (!html.includes(required)) {
      throw new Error(`${file} missing ${required}`);
    }
  }
}

for (const file of [
  'sitemap.xml',
  'robots.txt',
  'llms.txt',
  'favicon.svg',
  'assets/styles.css',
  'assets/app.js',
]) {
  if (!existsSync(join(root, file))) {
    throw new Error(`Missing ${file}`);
  }
}

console.log(`Validated ${pages.length} DealershipCore pages.`);
