import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const robotoMono = Roboto({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ecommerce Next",
  description: "Loja virtual de compras online",
};

export default function RootLayout({
  children,
}: Readonly <{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-pt">
      <body
        className={`${roboto.variable} ${robotoMono.variable} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
