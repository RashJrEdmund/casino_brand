import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components/molecules";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s Casino brand",
    default: "Casino brand",
  },
  description: "Casino home page. A take home assessment",
  keywords: ["casino", "brand", "Casino brand", "assessment", "bluewindowltd", "Rash", "R"],
  manifest: "/manifest.json",
  authors: [
    {
      url: "https://twitter.com/orashus",
      name: "Rash Edmund"
    }
  ],
  openGraph: {
    type: "website",
    description: "Casino home page. A take home assessment",
    siteName: "Casino brand",
    title: "Casino brand",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        <main className="w-full h-fit">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
