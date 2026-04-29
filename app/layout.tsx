import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { siteUrl } from "@/lib/company";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Vehicle Hire Chard | Cars, Vans, Minibuses & Trucks",
  description: "Vehicle Hire Chard for cars, vans, minibuses and trucks. Practical rental options with UK coverage, flexible hire periods and helpful local support.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "https://sdvh.co.uk/wp-content/uploads/2023/02/cropped-FavIcon-32x32.png",
    apple: "https://sdvh.co.uk/wp-content/uploads/2023/02/cropped-FavIcon-180x180.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
