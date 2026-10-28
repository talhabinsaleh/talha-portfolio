"use client";

import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { navLinks } from "@/data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open ? "border-b border-line bg-bg/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="font-mono text-sm font-semibold tracking-tight">
          <span className="text-accent">~/</span>talha
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-sm text-muted transition-colors hover:text-ink">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/#contact"
          className="hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-ink transition hover:brightness-110 lg:inline-block"
        >
          Hire me
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 place-items-center rounded-lg border border-line lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>
      </nav>

      {open && (
        <ul className="space-y-1 border-t border-line px-4 py-4 lg:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-muted hover:bg-surface hover:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
