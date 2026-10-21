import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fachri All Khijaro · Portfolio",
  description:
    "Fachri All Khijaro - Multidisciplinary Designer across visual design, branding, marketing, UI/UX, and digital products.",
  icons: {
    icon: "/assets/favicon-32.png",
    apple: "/assets/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fustat:wght@400;500&family=Inter:wght@300;400;500;600&family=Instrument+Serif&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/motion.css" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
