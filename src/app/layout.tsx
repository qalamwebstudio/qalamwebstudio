import type { Metadata } from "next";
import Script from "next/script";
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
  metadataBase: new URL("https://qalamwebstudio.online"),
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://qalamwebstudio.online',
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
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "QalamWebStudio",
            url: "https://qalamwebstudio.online",
            logo: "https://qalamwebstudio.online/logo.png",
            sameAs: [
              "https://www.instagram.com/qalamweb.studio",
              "https://www.linkedin.com/company/qalam-web-studio/",
              "https://wa.me/918141875116",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-81418-75116",
              contactType: "customer support",
              areaServed: "IN",
              availableLanguage: ["en", "hi"],
            },
          })}
        </Script>
        {children}
      </body>
    </html>
  );
}
