import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
const root = new URL('../public/', import.meta.url).pathname;
const walk = dir => readdirSync(dir).flatMap(name => { const p=join(dir,name); return statSync(p).isDirectory()?walk(p):[p]; });
const files=walk(root); const pages=files.filter(f=>f.endsWith('index.html'));
if(pages.length!==26) throw new Error(`Expected 26 index pages, found ${pages.length}`);
for(const file of pages){const html=readFileSync(file,'utf8');for(const required of ['<title>','rel="canonical"','application/ld+json','/assets/styles.css','/assets/app.js'])if(!html.includes(required))throw new Error(`${file} missing ${required}`);}
console.log(`Validated ${pages.length} DealershipCore pages.`);
