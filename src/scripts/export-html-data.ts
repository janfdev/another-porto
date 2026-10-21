import fs from "fs";

function getCleanBody(filepath: string) {
  let content = fs.readFileSync(filepath, "utf-8");
  const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/);
  let body = bodyMatch ? bodyMatch[1] : "";

  // Replace links
  body = body.replace(/href="index\.html"/g, 'href="/"');
  body = body.replace(/href="meet-me\.html"/g, 'href="/meet-me"');
  body = body.replace(/href="work\.html"/g, 'href="/work"');
  body = body.replace(/href="([a-zA-Z0-9_-]+)\.html"/g, 'href="/work/$1"');

  // Strip script tags
  body = body.replace(/<script[\s\S]*?<\/script>/gi, "");
  return body;
}

const indexHtml = getCleanBody("/root/another-porto/public/original-index.html");
const meetHtml = getCleanBody("/root/another-porto/public/original-meet-me.html");
const workHtml = getCleanBody("/root/another-porto/public/original-work.html");

fs.writeFileSync("/root/another-porto/src/data/raw-html.ts", `
export const RAW_INDEX_HTML = ${JSON.stringify(indexHtml)};
export const RAW_MEET_HTML = ${JSON.stringify(meetHtml)};
export const RAW_WORK_HTML = ${JSON.stringify(workHtml)};
`);

console.log("Raw HTML exported successfully");
