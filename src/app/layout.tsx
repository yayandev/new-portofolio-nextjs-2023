import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yayan Faturrohman - Fullstack Web Developer",
  description: "Hai Saya Yayan Faturrohman seorang Fullstack Web Developer.",
  openGraph: {
    title: "Yayan Faturrohman - Fullstack Web Developer",
    description: "Hai Saya Yayan Faturrohman seorang Fullstack Web Developer.",
    url: "https://yayanfaturrohman.my.id/",
    siteName: "Yayan Faturrohman",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
      },
    ],
  },
  icons: {
    icon: "/android-chrome-512x512.png",
    shortcut: "/android-chrome-512x512.png",
    apple: "/android-chrome-512x512.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-7xl mx-auto xl:px-0 px-5">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
