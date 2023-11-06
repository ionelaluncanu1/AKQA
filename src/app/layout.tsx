import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import { redirect } from "next/navigation";
import "./globals.css";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AKQA Fashion Store",
  description: "Generated by Ionela Luncanu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (children) {
    redirect("/women");
  }
  return (
    <html lang="en">
      <body className={mulish.className}>{children}</body>
    </html>
  );
}