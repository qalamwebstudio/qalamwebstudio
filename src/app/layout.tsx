import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Optimize font loading with display swap for better performance
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Emtrix - IT Services & Digital Solutions",
  description: "Empowering startups and growing businesses with cutting-edge web development, mobile apps, and digital solutions. Transform your ideas into scalable digital products.",
  keywords: ["web development", "mobile app development", "IT services", "digital solutions", "startup", "business"],
  authors: [{ name: "Emtrix Team" }],
  creator: "Emtrix",
  publisher: "Emtrix",
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://emtrix.com',
    title: 'Emtrix - IT Services & Digital Solutions',
    description: 'Empowering startups and growing businesses with cutting-edge web development, mobile apps, and digital solutions.',
    siteName: 'Emtrix',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emtrix - IT Services & Digital Solutions',
    description: 'Empowering startups and growing businesses with cutting-edge web development, mobile apps, and digital solutions.',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased scrollbar-hide`}
      >
        {children}
      </body>
    </html>
  );
}
