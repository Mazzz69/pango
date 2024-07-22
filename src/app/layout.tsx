import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/navbar";
import Divider from "./(components)/divider";
import Footer from "./(components)/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pango",
  description: "The official Pango Webdev Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/*<Divider/>*/}
      {/*<Navbar/>*/}
        {children}
      {/*<Footer/>*/}
      </body>
    </html>
  );
}