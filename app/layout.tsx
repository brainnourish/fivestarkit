import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FiveStarKit | Make Getting Google Reviews Easier",
  description:
    "Custom-branded Google review cards, QR materials, signage, and digital assets. Designed, printed, and delivered for your business.",
  openGraph: {
    title: "FiveStarKit | Make Getting Google Reviews Easier",
    description:
      "Custom-branded Google review cards, QR materials, signage, and digital assets. Designed, printed, and delivered for your business.",
    type: "website",
    siteName: "FiveStarKit",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
