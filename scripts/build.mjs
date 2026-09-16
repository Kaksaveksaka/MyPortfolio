import { build } from "vite";
import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import path from "node:path";

// Both builds use the same asset hashing so the HTML and browser share URLs.
await build();
const temporary = path.resolve(".prerender");
await mkdir(temporary, { recursive: true });
try {
  await build({ build: { ssr: "src/entry-server.jsx", outDir: temporary, copyPublicDir: false,
    rollupOptions: { output: { entryFileNames: "render.mjs" } } } });
  const { render } = await import(pathToFileURL(path.join(temporary, "render.mjs")));
  const { html, schema } = render();
  const template = await readFile("dist/index.html", "utf8");
  if (!template.includes("<!--app-html-->")) throw new Error("Prerender placeholder missing");
  await writeFile("dist/index.html", template.replace("<!--app-html-->", html)
    .replace("<!--structured-data-->", `<script type="application/ld+json">${schema}</script>`));
  console.log("Prerendered portfolio and source-backed structured data.");
} finally {
  // Remove only the temporary build directory created by this script.
  await rm(temporary, { recursive: true, force: true });
}
