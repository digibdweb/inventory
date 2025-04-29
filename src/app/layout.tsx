import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asset Mgmt. Soln. 🖥️ 🖨️ 𝄃𝄃𝄂𝄂𝄀𝄁𝄃𝄂𝄂𝄃",
  description: "Developed by: IT Division - The Premier Bank PLC.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}` }>
      <body className="antialiased min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
        <Header />
        
        <main className=" mb-1 px-16 py-16 text-sm overflow-auto h-140">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
