import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Traveon | Better Rest Starts Here",
  description: "Clean, simple travel essentials designed for shared spaces, hostels, and modern accommodations.",
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
