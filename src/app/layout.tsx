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
  metadataBase: new URL('https://rnextin.netlify.app'),
  title: "RNEXT | Boutique Digital Lab",
  description: "Premium Websites, Web Apps & AI Solutions.",
  alternates: {
    canonical: 'https://rnextin.netlify.app',
  },
  openGraph: {
    title: "RNEXT | Boutique Digital Lab",
    description: "Premium Websites, Web Apps & AI Solutions.",
    url: 'https://rnextin.netlify.app',
    siteName: 'RNEXT',
    type: 'website',
    images: [
      {
        url: '/rnext.jpg',
        width: 1200,
        height: 630,
        alt: 'RNEXT Logo',
      }
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "RNEXT | Boutique Digital Lab",
    description: "Premium Websites, Web Apps & AI Solutions.",
    images: ['/rnext.jpg'],
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
    icon: '/rnext.jpg',
    shortcut: '/rnext.jpg',
    apple: '/rnext.jpg',
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
