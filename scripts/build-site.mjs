import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const partsDirectory = join(root, 'scripts', 'newsiteparts');
const files = readdirSync(partsDirectory)
  .filter(file => /^part-\d+\.b64$/.test(file))
  .sort();

if (files.length !== 4) {
  throw new Error(`Expected 4 generator parts, found ${files.length}`);
}

const source = Buffer.concat(
  files.map(file => Buffer.from(readFileSync(join(partsDirectory, file), 'utf8').trim(), 'base64')),
);

if (source.length !== 31692) {
  throw new Error(`Expected 31692 generator bytes, found ${source.length}`);
}

const digest = createHash('sha256').update(source).digest('hex');
const expected = '68d4bb3099888330a3a2a60d8907512dbd2ccc19bbacb6b12eb53bb7a90b8de2';

if (digest !== expected) {
  throw new Error(`Generator checksum mismatch: ${digest}`);
}

const output = join(root, 'scripts', 'generate-site.mjs');
writeFileSync(output, source);
await import(`${pathToFileURL(output).href}?build=${Date.now()}`);
