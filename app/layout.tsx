import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Traveon | Travel Hygiene Essentials",
  description: "Simple, affordable hygiene kits for travelers and hostels",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}