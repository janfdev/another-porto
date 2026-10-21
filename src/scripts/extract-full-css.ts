import fs from "fs";

function extractCleanCss(htmlPath: string) {
  const content = fs.readFileSync(htmlPath, "utf-8");
  const match = content.match(/<style>([\s\S]*?)<\/style>/);
  if (!match) return "";
  let css = match[1];

  // Fix relative asset urls
  css = css.replace(/url\(['"]?assets\//g, "url(/assets/");
  css = css.replace(/url\(['"]?\.\/assets\//g, "url(/assets/");

  // Remove any em-dash in comments
  css = css.replace(/--/g, ":");

  return css;
}

const meetCss = extractCleanCss("/root/another-porto/public/original-meet-me.html");
const workCss = extractCleanCss("/root/another-porto/public/original-work.html");

fs.writeFileSync("/root/another-porto/src/app/original-meet.css", meetCss);
fs.writeFileSync("/root/another-porto/src/app/original-work.css", workCss);

console.log("Extracted original-meet.css length:", meetCss.length);
console.log("Extracted original-work.css length:", workCss.length);
