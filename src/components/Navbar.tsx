"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { FiArrowUpRight, FiDownload, FiMenu, FiX } from "react-icons/fi";
import { navLinks, profile } from "@/data/portfolio";
import { ScrambleText } from "./motion/Text";

const ease = [0.76, 0, 0.24, 1] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-[90] px-4">
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
                  className="block rounded-full text-sm text-muted transition-colors hover:bg-surface-2 hover:text-ink"
                >
                  <ScrambleText text={link.label} className="block px-4 py-2 font-mono text-[13px] uppercase" />
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
      </header>

      {/* Full-screen mobile menu: an orange panel wipes down and the links rise in one by one. */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] flex flex-col justify-between bg-accent px-6 pt-28 pb-8 text-neutral-950 lg:hidden"
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.7, ease }}
          >
            <ul className="space-y-1">
              {navLinks.map((link, i) => (
                <li key={link.href} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "110%" }}
                    transition={{ duration: 0.6, delay: 0.15 + i * 0.06, ease }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-3 font-display text-5xl font-extrabold tracking-tight uppercase"
                    >
                      <span className="font-mono text-xs font-normal">0{i + 1}</span>
                      {link.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>

            <motion.div
              className="space-y-2 border-t border-neutral-950/20 pt-5 text-sm font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.5 } }}
              exit={{ opacity: 0 }}
            >
              <a href={`mailto:${profile.email}`} className="flex items-center justify-between">
                {profile.email} <FiArrowUpRight />
              </a>
              <a href={`tel:+${profile.phone.replace(/\D/g, "")}`} className="flex items-center justify-between">
                {profile.phone} <FiArrowUpRight />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
