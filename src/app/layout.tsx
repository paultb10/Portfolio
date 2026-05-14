import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Cursor from "@/components/Cursor";

export const metadata: Metadata = {
  title: "Sîrbu Paul Dan — UI/UX & Frontend Developer",
  description:
    "Portfolio of Sîrbu Paul Dan, a UI/UX Designer & Frontend Developer based in Cluj-Napoca, Romania.",
  keywords: ["UI/UX", "Frontend", "React", "Next.js", "Cluj-Napoca"],
  authors: [{ name: "Sîrbu Paul Dan" }],
  openGraph: {
    title: "Sîrbu Paul Dan — UI/UX & Frontend Developer",
    description: "Crafting bold digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Cursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
