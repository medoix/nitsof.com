import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NITSOF - Powerful Shopify Apps",
  description:
    "Explore our collection of powerful Shopify applications designed to optimize your store, enhance customer engagement, and boost your sales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-gray-900`}
    >
      <body className="flex min-h-screen flex-col text-gray-200">
        <Header />
        <main
          className="relative flex-grow bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/75 sm:bg-transparent sm:from-black/95 sm:to-black/25 sm:bg-gradient-to-r" />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
