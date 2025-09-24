import type { Metadata } from "next";
import "@ic-wallet/ui/global.css";
import "./globals.css";
import { Pretendard } from "@ic-wallet/ui/typography";

export const metadata: Metadata = {
  title: "IC Wallet",
  description: "i-Castle Web3 Lifestyle Wallet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={Pretendard.variable}>
      <body>{children}</body>
    </html>
  );
}
