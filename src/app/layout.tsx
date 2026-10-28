import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { Grain, MotionProvider, ScrollProgress, Spotlight } from "@/components/motion/Effects";
import { Cursor } from "@/components/motion/Interactive";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const title = "Talha Bin Saleh — Full-Stack Developer";
const description =
  "Portfolio of Talha Bin Saleh, a full-stack developer from Dhaka building web apps with React, Next.js, TypeScript and MongoDB.";

export const metadata: Metadata = {
  metadataBase: new URL("https://talha-bin-saleh-dev.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  icons: { icon: "/talha.jpg" },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <MotionProvider>
          <ScrollProgress />
          <Spotlight />
          <Grain />
          <Cursor />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
