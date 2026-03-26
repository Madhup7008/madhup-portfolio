import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import HireMeCTA from "@/components/HireMeCTA";

const siteUrl = "https://madhup.dev";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Madhup Kumar Yadav | Full Stack Developer",
    template: "%s | Madhup Kumar Yadav",
  },
  description:
    "Full Stack Developer based in India. Building modern web applications with Next.js, React, Python, and Flask for product teams and businesses.",
  keywords: [
    "Madhup Kumar Yadav",
    "Full Stack Developer",
    "Full Stack Developer India",
    "Next.js Developer",
    "Python Developer",
    "TypeScript Developer",
    "Backend Developer",
    "Frontend Developer",
    "React Developer",
    "Flask Developer",
    "Hire Full Stack Developer",
    "Freelance Developer India",
    "Portfolio",
    "Developer Portfolio",
    "MKY Developer",
    "Web Developer India",
    "Software Engineer",
  ],
  authors: [{ name: "Madhup Kumar Yadav", url: siteUrl }],
  creator: "Madhup Kumar Yadav",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Madhup Kumar Yadav — Portfolio",
    title: "Madhup Kumar Yadav | Full Stack Developer",
    description:
      "Full Stack Developer based in India. Building modern web applications with Next.js, React, Python, and Flask.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Madhup Kumar Yadav — Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Madhup Kumar Yadav | Full Stack Developer",
    description:
      "Full Stack Developer based in India. Building high-performance web applications with Next.js, Python, and more.",
    images: ["/images/og-image.png"],
    creator: "@MadhupYadav",
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Madhup Kumar Yadav",
  url: siteUrl,
  jobTitle: "Full Stack Developer",
  worksFor: { "@type": "Organization", name: "Freelance" },
  sameAs: [
    "https://github.com/Madhup7008",
    "https://www.linkedin.com/in/madhup-kumar-yadav-641a85270/",
  ],
  knowsAbout: ["Full Stack Development", "Next.js", "React", "Python", "Flask", "TypeScript", "PostgreSQL", "REST APIs", "Frontend Engineering"],
  address: { "@type": "PostalAddress", addressCountry: "IN" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}>
        {children}
        <HireMeCTA />
      </body>
    </html>
  );
}
