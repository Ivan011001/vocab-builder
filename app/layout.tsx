import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

const macPawFixelDisplay = localFont({
  src: [
    {
      path: "../public/fonts/FixelDisplay-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/FixelDisplay-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/FixelDisplay-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/FixelDisplay-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Vocab Builder",
  description: "Inreach your vocabulary with Vocan Builder. Join now!",
  icons: {
    icon: [
      {
        url: "/logo.svg",
      },
    ],
  },
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
        <body className={macPawFixelDisplay.className}>
          <Toaster />
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
