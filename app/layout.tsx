import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "GymCave — The Future of Gym Management",
    template: "%s | GymCave",
  },
  description:
    "One powerful platform to manage members, track payments, and grow your fitness empire. Trusted by 500+ gym owners worldwide.",
  keywords: ["gym management", "fitness software", "member management", "gym CRM", "workout tracking"],
  openGraph: {
    title: "GymCave — The Future of Gym Management",
    description: "One powerful platform to manage members, track payments, and grow your fitness empire.",
    type: "website",
    locale: "en_US",
    siteName: "GymCave",
  },
  twitter: {
    card: "summary_large_image",
    title: "GymCave — The Future of Gym Management",
    description: "One powerful platform to manage members, track payments, and grow your fitness empire.",
  },
  icons: {
    icon: "/favicon.ico?v=3",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
