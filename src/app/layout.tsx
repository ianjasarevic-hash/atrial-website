import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ATRIAL - Engineering & Design Solutions",
  description: "Professional engineering and design services including project documentation, architectural design, structural engineering, and urban planning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sl">
      <body className="antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}