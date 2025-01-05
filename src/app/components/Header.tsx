"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Arrow } from "./Arrow";

export function Header() {
  const pathname = usePathname();

  return (
    <>
      {pathname !== "/" && (
        <Link className="button back-button" href="/">
          <Arrow /> Home
        </Link>
      )}

      <header className="header">Welcome</header>
    </>
  );
}
