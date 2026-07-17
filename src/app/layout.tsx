import type { Metadata, Viewport } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RNEXT.in | Boutique Digital Lab",
  description: "We Build Smart Digital Experiences. A Boutique Digital Lab with Sharp Opinions.",
  metadataBase: new URL('https://rnext.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "RNEXT.in | Boutique Digital Lab",
    description: "We Build Smart Digital Experiences.",
    url: 'https://rnext.in',
    siteName: 'RNEXT',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RNEXT Digital Agency',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "RNEXT.in | Boutique Digital Lab",
    description: "We Build Smart Digital Experiences.",
    images: ['/og-image.png'],
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
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: "#060816",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${inter.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning className="min-h-screen bg-bg-primary text-text-primary flex flex-col relative font-sans">
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
