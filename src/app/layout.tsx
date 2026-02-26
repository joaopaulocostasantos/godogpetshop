import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// components
import {} from "@/layout/Header";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GoDog | Petshop para animais de estimação",
  description:
    "GoDog é o petshop online que oferece uma ampla variedade de produtos para animais de estimação, incluindo rações, brinquedos, acessórios e muito mais. Com entrega rápida e atendimento de qualidade, cuidamos do seu melhor amigo com carinho e dedicação.",
  keywords: [
    "petshop",
    "produtos para animais de estimação",
    "ração para cães",
    "brinquedos para pets",
    "acessórios para animais",
    "entrega rápida",
    "atendimento de qualidade",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
