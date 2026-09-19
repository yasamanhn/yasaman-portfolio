import type { Metadata } from "next";
import { Vazirmatn, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "یاسمن حشمتیان | Frontend Developer",
    template: "%s | یاسمن حشمتیان",
  },
  description:
    "پورتفولیو شخصی یاسمن حشمتیان توسعه‌دهنده Frontend با React و Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl" className={cn("font-sans", geist.variable)}>
      <body className={vazirmatn.variable}>{children}</body>
    </html>
  );
}
