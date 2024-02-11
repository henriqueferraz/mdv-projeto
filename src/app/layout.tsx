import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: "500",
  display: "swap",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Pesquisa de Satisfação - MDV",
  description: "Pesquisa de satisfação dos serviços prestados pela MDV - Maternidade Darcy Vargas de Joinville - SC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
