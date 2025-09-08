import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/providers/theme-provider";
import { ToastProvider } from "@/providers/toast-provider";
import { ModalProvider } from "@/providers/modal-provider";

const InterFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Store',
  description: 'E-Commerce Store',
  keywords: ['E-Commerce', 'Store', 'Shop', 'HavanaShop'],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={InterFont.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ToastProvider/>
            <ModalProvider/>
             {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
