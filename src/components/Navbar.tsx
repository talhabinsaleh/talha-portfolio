"use client";

import { useState } from "react";
import Link from "next/link";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { navLinks, profile } from "@/data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-fit items-center gap-1 rounded-full border border-line bg-surface/80 p-1.5 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <Link
          href="/"
          className="grid size-9 place-items-center rounded-full bg-accent font-display text-sm font-bold text-accent-ink"
          aria-label="Home"
        >
          T
        </Link>

        <ul className="hidden items-center lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={profile.resume}
          download
          className="ml-1 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-bg transition hover:bg-lime"
        >
          <FiDownload size={14} /> Resume
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid size-9 place-items-center rounded-full text-muted hover:text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>
      </nav>

      {open && (
        <ul className="mx-auto mt-2 max-w-xs space-y-1 rounded-3xl border border-line bg-surface/95 p-2 shadow-2xl shadow-black/50 backdrop-blur-xl lg:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-muted hover:bg-surface-2 hover:text-ink"
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
