import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RNEXT.in | Boutique Digital Lab",
  description: "We Build Smart Digital Experiences. A Boutique Digital Lab with Sharp Opinions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-midnight-indigo text-foreground flex flex-col relative">
        {/* We will add Navbar here later */}
        <main className="flex-grow">{children}</main>
        {/* We will add Footer here later */}
      </body>
    </html>
  );
}
