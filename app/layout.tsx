import { Footer, Header, Navbar, Sidebar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SACCI App",
  description: "Software de Suporte a Conteúdos e Contatos Agrolink",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        
          <Header />
        {children}
       
      </body>
    </html>
  );
}
