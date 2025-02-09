import type { Metadata } from "next";
import "./globals.css";
import { FontOptimo, FontBBRollerMono } from "@/theme/fonts";
import { TsInitProvider } from "@/components/ts-init-provider/ts-init-provider";

export const metadata: Metadata = {
  title: "ThoughtSpot Impersonator",
  description: "Impersonation for ThoughtSpot Embedded",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${FontOptimo.variable} ${FontBBRollerMono.variable}`}
    >
      <body>
        <TsInitProvider>{children}</TsInitProvider>
      </body>
    </html>
  );
}
