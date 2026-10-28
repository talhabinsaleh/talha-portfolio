import Link from "next/link";
import { navLinks, profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <p className="font-display text-[13vw] leading-none font-extrabold tracking-tighter text-surface-2 uppercase select-none lg:text-[9rem]">
          Talha.
        </p>
        <div className="mt-8 flex flex-col gap-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {profile.name}. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-ink">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
