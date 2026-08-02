import { readdirSync, statSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
const root=new URL('../public/',import.meta.url).pathname;
const walk=d=>readdirSync(d).flatMap(n=>{const p=join(d,n);return statSync(p).isDirectory()?walk(p):[p]});
const files=walk(root), pages=files.filter(f=>f.endsWith('index.html'));
if(pages.length!==39) throw new Error(`Expected 39 pages, found ${pages.length}`);
for(const file of pages){const h=readFileSync(file,'utf8');for(const r of ['<title>','rel="canonical"','application/ld+json','/assets/dealershipcore-v4.css','/assets/dealershipcore-v4.js']) if(!h.includes(r)) throw new Error(`${file} missing ${r}`)}
for(const f of ['sitemap.xml','robots.txt','llms.txt','favicon.svg','assets/dealershipcore-v4.css','assets/dealershipcore-v4.js']) if(!existsSync(join(root,f))) throw new Error(`Missing ${f}`);
console.log(`Validated ${pages.length} pages.`);
