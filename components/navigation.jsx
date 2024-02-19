"use client"  // render in the backend, hydrate(interactive) in the frontend

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>{path === "/" ? "⭐" : ""}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>{path === "/about-us" ? "⭐" : ""}
        </li>
      </ul>
    </nav>
  );
}