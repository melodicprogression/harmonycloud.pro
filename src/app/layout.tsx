import type { Metadata } from "next";

import "./css/globals.css";
import "./css/fillout.css";
import { Header } from "./components";

export const metadata: Metadata = {
  title: "Harmony Cloud",
  description: "Sign up for the Harmony Cloud beta and learn more.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark-theme">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.cdnfonts.com/css/sf-pro-display"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="dots" />
        <Header />
        {children}
        <div className="bottom-gradient" />
      </body>
    </html>
  );
}
