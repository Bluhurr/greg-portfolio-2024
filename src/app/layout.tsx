import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Greg Lawrence | Portfolio 💻",
  description:
    "Greg Lawrence portfolio site, showcasing projects and work experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navHeight = 4.5;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar navHeight={navHeight}></Navbar>
        <div
          className="scroll-bg-gradient overflow-auto"
          style={{
            marginTop: `${navHeight}em`,
            height: `calc(100vh - ${navHeight}em)`,
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
