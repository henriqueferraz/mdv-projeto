import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const open_sans = Open_Sans({
  weight: "800",
  style: "italic",
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
      <body className={open_sans.className}>
        <div>{children}</div>
      </body>
    </html>
  );
}
