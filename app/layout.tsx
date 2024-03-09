import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vocab Builder",
  description: "Inreach your vocabulary with Vocan Builder. Join now!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={poppins.className}>
          <Toaster />
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
