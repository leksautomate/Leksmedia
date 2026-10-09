import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leksmedia — YouTube Personal Brand System, Outlier Intelligence & Production Scripts",
  description: "One complete platform. Your YouTube personal brand system — Ikigai blueprint, real 48-hour viral outlier data, and full-length production scripts.",
  keywords: [
    "Leksmedia",
    "personal brand",
    "Ikigai framework",
    "YouTube outlier strategy",
    "YouTube script generator",
    "brand blueprint",
    "viral scripts",
    "production scripts"
  ],
  authors: [{ name: "Leksmedia" }],
  openGraph: {
    title: "Leksmedia — YouTube Personal Brand & Outlier System",
    description: "One complete platform. Your personal brand system — Ikigai + 48h YouTube Outliers + Full Production Scripts.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased selection:bg-[#b8965a]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
