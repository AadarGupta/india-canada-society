import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "India Canada Society",
  description: "Official Website for India Canada Society",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <Navbar />
            <main className="relative overflow-hidden">{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
