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
  title: "QalamWebStudio - IT Services & Digital Solutions",
  description: "Empowering startups and growing businesses with cutting-edge web development, mobile apps, and digital solutions. Transform your ideas into scalable digital products.",
  keywords: ["web development", "mobile app development"," Desktop Software. development"," Business custom Software development"," Startup kit", "Logo & branding", "Brand cards & marketing", "White-label services", "IT services", "digital solutions", "startup", "business"],
  authors: [{ name: "QalamWebStudio Team" }],
  creator: "QalamWebStudio",
  publisher: "QalamWebStudio",
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
    url: 'https://qalamwebstudio.com',
    title: 'QalamWebStudio - IT Services & Digital Solutions',
    description: 'Empowering startups and growing businesses with cutting-edge web development, mobile apps, and digital solutions.',
    siteName: 'QalamWebStudio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QalamWebStudio - IT Services & Digital Solutions',
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
