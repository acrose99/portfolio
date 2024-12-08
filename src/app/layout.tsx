import type { ReactNode } from "react";

import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import localFont from "next/font/local";

import "@/app/globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const serif = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Alex Rose",
  description: "Alex Rose is a developer based in Chicago, IL.",
  abstract:
    "Alex Rose is a developer based in Chicago, IL. He is extremely passionate about using technology for good",
  keywords: [
    "digital humanities",
    "cultural understanding",
    "non-profit",
    "innovative digital projects",
    "digital history",
    "digital art",
    "digital culture",
    "digital literature",
    "digital music",
    "digital philosophy",
    "digital religion",
    "digital science",
    "digital social science",
    "digital technology",
    "digital theory",
    "digital writing",
    "computer science",
  ],
  category: "Personal",
  robots: "noindex, nofollow",
  creator: "Alex Rose",
  publisher: "Alex Rose",

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Alex Rose",
    title: "Alex Rose",
    description: "Alex Rose is a developer based in Chicago, IL.",
    url: "alexrose.xyz",
    images: [
      {
        // url: 'https://digitalhumanities.app/images/ogLogo.svg',
        url: "https://alexrose.xyz/images/ogs.svg",
        width: 1200,
        height: 630,
        alt: "Digital Humanities Showcase",
      },
    ],
  },
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    // ? https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
    // ? https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors
    <html suppressHydrationWarning lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${serif.variable} overflow-hidden bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
};

export default Layout;
