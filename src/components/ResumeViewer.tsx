"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FiDownload, FiExternalLink, FiEye, FiX } from "react-icons/fi";
import { profile } from "@/data/portfolio";

// "View Resume" button that opens the resume in a full-screen popup.
// The popup is portalled to <body> so transformed parents (the tilt card) can't clip it.
export default function ResumeViewer({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [used, setUsed] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setUsed(true);
          setOpen(true);
        }}
        className={className}
      >
        <FiEye /> View Resume
      </button>

      {used &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                className="fixed inset-0 z-[100] flex flex-col bg-black/80 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
                role="dialog"
                aria-modal="true"
                aria-label="Resume"
              >
                <div
                  className="flex items-center justify-between gap-3 border-b border-line bg-bg/90 px-4 py-3 sm:px-6"
                  onClick={(e) => e.stopPropagation()}
                >
                  <p className="font-display font-semibold">
                    Resume <span className="hidden text-muted sm:inline">· {profile.name}</span>
                  </p>
                  <div className="flex items-center gap-2">
                    <a
                      href={profile.resume}
                      download
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-ink transition hover:bg-lime"
                    >
                      <FiDownload /> <span className="hidden sm:inline">Download</span> PDF
                    </a>
                    <a
                      href={profile.resume}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open PDF in a new tab"
                      className="grid size-9 place-items-center rounded-full border border-line text-muted transition hover:text-ink"
                    >
                      <FiExternalLink />
                    </a>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      aria-label="Close resume"
                      className="grid size-9 place-items-center rounded-full border border-line text-muted transition hover:border-accent hover:text-accent"
                    >
                      <FiX />
                    </button>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto px-4 py-6 sm:py-10">
                  <motion.div
                    className="relative mx-auto aspect-[794/1123] w-full max-w-3xl overflow-hidden rounded-xl bg-white shadow-2xl shadow-black/60"
                    initial={{ opacity: 0, y: 40, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 40, scale: 0.96 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Image
                      src="/resume-preview.jpg"
                      alt={`Resume of ${profile.name}`}
                      fill
                      sizes="(min-width: 768px) 768px, 100vw"
                      className="object-contain"
                    />
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
