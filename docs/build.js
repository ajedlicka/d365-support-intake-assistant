#!/usr/bin/env node
/*
 * Inlines INTAKE-PROMPT.md into docs/index.html so the page is fully self-contained
 * (no external requests) and the "Copy prompt" button copies the exact prompt text.
 *
 * Run this whenever INTAKE-PROMPT.md changes:
 *     node docs/build.js
 *
 * Zero dependencies. It replaces everything between the two marker comments:
 *     <!-- PROMPT:START -->  ...  <!-- PROMPT:END -->
 * inside docs/index.html with the HTML-escaped contents of INTAKE-PROMPT.md.
 * HTML comments are excluded from an element's textContent, so the copy button
 * still yields the prompt verbatim.
 */
"use strict";

const fs = require("fs");
const path = require("path");

const docsDir = __dirname;
const repoRoot = path.join(docsDir, "..");
const promptPath = path.join(repoRoot, "INTAKE-PROMPT.md");
const htmlPath = path.join(docsDir, "index.html");

const START = "<!-- PROMPT:START -->";
const END = "<!-- PROMPT:END -->";

function escapeHtml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function main() {
  const md = fs.readFileSync(promptPath, "utf8");
  const escaped = escapeHtml(md);

  let html = fs.readFileSync(htmlPath, "utf8");
  const region = new RegExp(
    START.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") +
      "[\\s\\S]*?" +
      END.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );

  if (!region.test(html)) {
    console.error(
      "ERROR: could not find the " + START + " ... " + END + " markers in docs/index.html."
    );
    process.exit(1);
  }

  // No surrounding whitespace: keeps the copied text identical to the source file.
  html = html.replace(region, START + escaped + END);
  fs.writeFileSync(htmlPath, html);

  console.log(
    "Injected " + md.length + " chars from INTAKE-PROMPT.md into docs/index.html."
  );
  console.log(
    "Reminder: if the content changed materially, bump the 'Last updated' date in docs/index.html."
  );
}

main();
