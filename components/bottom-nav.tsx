"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Inicio" },
  { href: "/ofertas", label: "Ofertas" },
  { href: "/resgate", label: "Resgate" },
  { href: "/merchant", label: "Lojista" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="bottom-nav">
      {items.map(({ href, label }) => {
        const active = pathname === href || (href !== "/" && pathname.startsWith(href));

        return (
          <Link key={href} href={href} className={active ? "nav-item active" : "nav-item"}>
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
