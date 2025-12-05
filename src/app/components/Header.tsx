"use client";

import { usePathname } from "next/navigation";
import { Arrow } from "./Arrow";
import Link from "next/link";

export function Header() {
  const pathname = usePathname();

  return (
    <>
      {pathname !== "/" && (
        <Link className="button back-button" href="/" prefetch={false}>
          <Arrow /> Back
        </Link>
      )}
    </>
  );
}
