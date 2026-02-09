import { Poppins } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dickson Steven | Full Stack Developer",
  description:
    "Portfolio of Dickson Steven — Full Stack Developer specializing in React, Next.js, Java SpringBoot, PHP Laravel, and modern web & mobile development. Based in Dodoma, Tanzania.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "SpringBoot",
    "Laravel",
    "Software Engineer",
    "Dickson Steven",
    "Tanzania",
    "Web Development",
  ],
  authors: [{ name: "Dickson Steven" }],
  openGraph: {
    title: "Dickson Steven | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, SpringBoot, Laravel, and modern web & mobile development.",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
