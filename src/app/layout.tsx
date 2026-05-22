import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Reza Arda Radesta — Indie Game Developer | Programmer | 3D Artist",
  description:
    "Portfolio website of Reza Arda Radesta. Indie Game Developer, Programmer, and 3D Artist. Creating interactive and engaging gaming experiences with solid code architecture and deep visual aesthetics.",
  keywords: [
    "Reza Arda Radesta",
    "Game Developer",
    "Indie Game",
    "3D Artist",
    "Programmer",
    "Unity",
    "Unreal Engine",
    "Blender",
    "Portfolio",
  ],
  authors: [{ name: "Reza Arda Radesta" }],
  openGraph: {
    title: "Reza Arda Radesta — Indie Game Developer",
    description:
      "Creating interactive and engaging gaming experiences with solid code architecture and deep visual aesthetics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="min-h-screen grid-bg">{children}</body>
    </html>
  );
}
