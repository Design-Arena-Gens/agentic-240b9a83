import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CardioLife Heart Hospital - Advanced Cardiac Care",
  description: "Leading heart hospital providing world-class cardiac care with state-of-the-art technology and expert cardiologists.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
