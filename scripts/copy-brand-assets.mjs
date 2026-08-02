import { copyFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = fileURLToPath(new URL('../', import.meta.url));
const source = join(ROOT, 'brand-assets');
const destination = join(ROOT, 'public', 'assets');
mkdirSync(destination, { recursive: true });

for (const file of [
  'dealershipcore-dealer-shop.webp',
  'dealershipcore-product-devices.webp',
]) {
  copyFileSync(join(source, file), join(destination, file));
}

console.log('Copied DealershipCore uploaded brand assets into the production build.');
