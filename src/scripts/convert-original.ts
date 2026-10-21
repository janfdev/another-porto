import fs from "fs";
import path from "path";

// Script to extract the exact CSS, HTML body, and Inline JS from original HTMLs
// and place them directly into Next.js App Router pages/styles so the result is 100% IDENTICAL.

const srcIndex = "/root/another-porto/public/original-index.html";
const srcMeet = "/root/another-porto/public/original-meet-me.html";
const srcWork = "/root/another-porto/public/original-work.html";

function parseHtml(filepath: string) {
  const content = fs.readFileSync(filepath, "utf-8");
  
  // Extract CSS
  const styleMatch = content.match(/<style>([\s\S]*?)<\/style>/);
  const css = styleMatch ? styleMatch[1] : "";

  // Extract Body content between <body> and </body>
  const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/);
  let body = bodyMatch ? bodyMatch[1] : "";

  // Replace links to make them Next.js router friendly
  body = body.replace(/href="index\.html"/g, 'href="/"');
  body = body.replace(/href="meet-me\.html"/g, 'href="/meet-me"');
  body = body.replace(/href="work\.html"/g, 'href="/work"');
  body = body.replace(/href="([a-zA-Z0-9_-]+)\.html"/g, 'href="/work/$1"');

  // Also extract scripts at bottom of body
  const scripts: string[] = [];
  const scriptRegex = /<script(?![^>]*src=)([^>]*)>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = scriptRegex.exec(body)) !== null) {
    scripts.push(match[2]);
  }

  // Remove script tags from raw HTML string
  body = body.replace(/<script[\s\S]*?<\/script>/gi, "");

  return { css, body, scripts };
}

const parsedIndex = parseHtml(srcIndex);
const parsedMeet = parseHtml(srcMeet);
const parsedWork = parseHtml(srcWork);

// Write master styles
fs.writeFileSync("/root/another-porto/src/app/original-portfolio.css", parsedIndex.css);
fs.writeFileSync("/root/another-porto/src/app/original-meet.css", parsedMeet.css);
fs.writeFileSync("/root/another-porto/src/app/original-work.css", parsedWork.css);

console.log("CSS files extracted successfully");
