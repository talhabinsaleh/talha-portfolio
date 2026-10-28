import Image from "next/image";
import { FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { profile } from "@/data/portfolio";

const socials = [
  { href: profile.github, label: "GitHub", icon: FiGithub },
  { href: profile.linkedin, label: "LinkedIn", icon: FiLinkedin },
  { href: `https://wa.me/${profile.whatsapp.replace(/\D/g, "")}`, label: "WhatsApp", icon: FaWhatsapp },
  { href: `mailto:${profile.email}`, label: "Email", icon: FiMail },
];

export default function ProfileCard() {
  return (
    <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] bg-paper p-6 text-center text-neutral-900 shadow-2xl shadow-black/50">
      <svg
        className="pointer-events-none absolute -top-10 -left-10 size-56 text-accent"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden
      >
        <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="2.5" strokeDasharray="8 9" />
      </svg>

      <div className="relative mx-auto aspect-[4/5] w-full overflow-hidden rounded-3xl bg-accent">
        <Image
          src={profile.photo}
          alt={`Photo of ${profile.name}`}
          fill
          priority
          sizes="(min-width: 1024px) 260px, 340px"
          className="object-cover object-top"
        />
        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          <span className="size-1.5 animate-pulse rounded-full bg-lime" /> Open to work
        </span>
      </div>

      <h2 className="mt-6 font-display text-2xl font-bold tracking-tight">{profile.name}</h2>
      <p className="mt-1 font-display text-sm font-semibold text-accent">{profile.role}</p>
      <p className="mx-auto mt-3 max-w-60 text-sm leading-relaxed text-neutral-500">
        A developer from {profile.location} who turns designs into fast, real-world web apps.
      </p>

      <ul className="mt-5 flex justify-center gap-2">
        {socials.map(({ href, label, icon: Icon }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="grid size-10 place-items-center rounded-full border border-neutral-200 text-neutral-600 transition hover:border-accent hover:bg-accent hover:text-white"
            >
              <Icon size={17} />
            </a>
          </li>
        ))}
      </ul>

      <a
        href={profile.resume}
        download
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent"
      >
        <FiDownload /> Download Resume
      </a>
    </div>
  );
}
