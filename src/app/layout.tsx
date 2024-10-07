import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Панкратов Вячеслав",
  description: "Панкратов Вячеслав — фрилансер, создающий доступные и функциональные веб-сайты с использованием Next.js и WordPress.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
