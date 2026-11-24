import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OneCrew Technologies",
  description:
    "OneCrew builds modern web apps, mobile products, cloud & DevOps infrastructure, AI agents with deployment, and compliance systems.",
  icons: {
    icon: "/OneCrewLogo.png",
    apple: "/OneCrewLogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="font-body min-h-full">{children}</body>
    </html>
  );
}
