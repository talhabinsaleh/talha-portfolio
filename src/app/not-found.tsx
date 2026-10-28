import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="glow grid flex-1 place-items-center px-4 py-40 text-center">
        <div>
          <p className="font-display text-[28vw] leading-none font-extrabold tracking-tighter text-surface-2 sm:text-[12rem]">
            404
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold uppercase sm:text-4xl">Page not found</h1>
          <p className="mx-auto mt-3 max-w-sm text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-ink transition hover:bg-lime"
          >
            <FiArrowLeft /> Back to home
          </Link>
        </div>
      </main>
    </>
  );
}
