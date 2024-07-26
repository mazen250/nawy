import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";

const cairo = Cairo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nawy",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cairo.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
