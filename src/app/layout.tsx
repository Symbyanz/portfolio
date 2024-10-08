import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { Metrika } from "@/components/Metrika/Metrika";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Панкратов Вячеслав",
  description: "Frontend-разработчик, создающий доступные и функциональные веб-сайты с использованием Next.js и WordPress.",
  openGraph: {
    title: "Панкратов Вячеслав",
    description: "Frontend-разработчик, создающий доступные и функциональные веб-сайты с использованием Next.js и WordPress.",
    locale: "ru_RU",
    siteName: "Панкратов Вячеслав",
    type: "website",
    url: `https://${process.env.PROD_URL}`,
    images: [
      {
        url: `https://${process.env.PROD_URL}/og.jpg`,
        width: 800,
        height: 420,
        alt: "Изображение сайта Панкратова Вячеслава",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <Suspense>
          <Metrika />
        </Suspense>
      </head>
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
