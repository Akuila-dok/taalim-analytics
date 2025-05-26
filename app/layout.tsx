import type { Metadata } from "next";
import {  Ubuntu } from "next/font/google";  // import Ubuntu here
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const ubuntu = Ubuntu({              // add Ubuntu font here
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "700"],            // weights you want to load
});

export const metadata: Metadata = {
  title: "Taalim Analytics",
  description: "An educational analytical platforms for high school",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.variable} antialiased`}
        // ${geistSans.variable} ${geistMono.variable}
      >
        {children}
      </body>
    </html>
  );
}
