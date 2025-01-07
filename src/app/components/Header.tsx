"use client";

import { usePathname } from "next/navigation";
import { Arrow } from "./Arrow";
import { TransitionLink } from "./TransitionLink";

export function Header() {
  const pathname = usePathname();

  return (
    <>
      {pathname !== "/" && (
        <TransitionLink className="button back-button" href="/">
          <Arrow /> Back
        </TransitionLink>
      )}
    </>
  );
}
