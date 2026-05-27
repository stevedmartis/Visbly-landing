import puppeteer from 'puppeteer-core';
import { createServer } from 'http';
import { readFileSync, existsSync, writeFileSync } from 'fs';
import { join, extname, resolve } from 'path';
import { platform } from 'os';

const DIST = resolve(process.cwd(), 'dist');
const PORT = 4567;
const ROUTES = ['/', '/privacy', '/terms', '/support', '/delete-data'];

const MIME = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
};

let server;

function startServer() {
  return new Promise((resolveServer) => {
    server = createServer((req, res) => {
      let filePath = join(DIST, req.url === '/' ? 'index.html' : req.url);
      if (!extname(filePath)) {
        filePath = join(DIST, 'index.html');
      }
      if (existsSync(filePath)) {
        const content = readFileSync(filePath);
        const ext = extname(filePath);
        res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
        res.end(content);
      } else {
        const fallback = join(DIST, 'index.html');
        if (existsSync(fallback)) {
          const content = readFileSync(fallback);
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content);
        } else {
          res.writeHead(404);
          res.end('Not found');
        }
      }
    });
    server.listen(PORT, '127.0.0.1', () => {
      console.log(`Static server running on http://127.0.0.1:${PORT}`);
      resolveServer();
    });
  });
}

async function findChrome() {
  const isLinux = platform() === 'linux';

  // 1) On Linux (Vercel): use @sparticuz/chromium
  if (isLinux) {
    try {
      const { default: chromium } = await import('@sparticuz/chromium');
      const path = await chromium.executablePath();
      if (path && existsSync(path)) {
        console.log(`Using @sparticuz/chromium: ${path}`);
        return { executablePath: path, args: chromium.args };
      }
    } catch {
      // fall through
    }
  }

  // 2) Fall back to system Chrome (macOS / Linux dev)
  const candidates = [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
    '/snap/bin/chromium',
  ];
  for (const path of candidates) {
    if (existsSync(path)) {
      console.log(`Using system Chrome: ${path}`);
      return { executablePath: path, args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'] };
    }
  }

  throw new Error('Chrome/Chromium not found. Install @sparticuz/chromium or have Chrome on your system.');
}

async function prerender() {
  console.log('Starting prerender...');

  if (!existsSync(DIST)) {
    console.error(`dist directory not found at ${DIST}. Build first.`);
    process.exit(1);
  }

  await startServer();

  const { executablePath: chromePath, args: chromeArgs } = await findChrome();

  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: chromeArgs,
  });

  try {
    for (const route of ROUTES) {
      const url = `http://127.0.0.1:${PORT}${route}`;
      console.log(`Prerendering ${route}...`);

      const page = await browser.newPage();
      await page.setViewport({ width: 1920, height: 1080 });

      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

      // Wait for React to hydrate and render content
      await page.waitForSelector('h1, h2, #root', { timeout: 15000 });

      // Give framer-motion animations time to settle
      await new Promise(r => setTimeout(r, 3000));

      const html = await page.content();

      let outputFile;
      if (route === '/') {
        outputFile = join(DIST, 'index.html');
      } else {
        outputFile = join(DIST, `${route.slice(1)}.html`);
      }

      writeFileSync(outputFile, html);
      console.log(`  ✓ Saved ${outputFile} (${(html.length / 1024).toFixed(1)} KB)`);

      await page.close();
    }

    console.log('Prerendering complete!');
  } finally {
    await browser.close();
    server.close();
  }
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  if (server) server.close();
  process.exit(1);
});
