import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Trotaglobo - Track Your Travel Adventures",
    template: "%s | Trotaglobo"
  },
  description: "Track and visualize your travel adventures around the world. Keep a record of past trips and plan future destinations with our interactive travel map.",
  keywords: ["travel tracker", "travel map", "travel journal", "travel statistics", "travel planning", "world map", "travel memories"],
  authors: [{ name: "Trotaglobo Team" }],
  creator: "Trotaglobo",
  publisher: "Trotaglobo",
  metadataBase: new URL("https://globe-trotter.vercel.app"),
  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.ico",
    apple: "/logo.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://globe-trotter.vercel.app",
    title: "Trotaglobo - Track Your Travel Adventures",
    description: "Track and visualize your travel adventures around the world. Keep a record of past trips and plan future destinations with our interactive travel map.",
    siteName: "Trotaglobo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Trotaglobo Travel Tracker"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Trotaglobo - Track Your Travel Adventures",
    description: "Track and visualize your travel adventures around the world. Keep a record of past trips and plan future destinations with our interactive travel map.",
    images: ["/og-image.jpg"],
    creator: "@trotaglobo"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
