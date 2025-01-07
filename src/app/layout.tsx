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
      <body>
        <div className="dots" />
        <Header />
        {children}
        <div className="bottom-gradient" />
      </body>
    </html>
  );
}
