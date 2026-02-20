import type { Metadata, Viewport } from "next";

import "./css/globals.css";
import { Header } from "./components";

export const metadata: Metadata = {
  metadataBase: new URL("https://harmonycloud.pro"),
  title: "Harmony Cloud",
  description: "Sign up for the Harmony Cloud beta and learn more.",
  openGraph: {
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b151e",
  viewportFit: "cover",
  colorScheme: "dark",
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
