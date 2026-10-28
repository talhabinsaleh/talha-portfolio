import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { profile } from "@/data/portfolio";
import BigHeading from "./BigHeading";

const digits = (n: string) => n.replace(/\D/g, "");

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: FiMail },
  { label: "Phone", value: profile.phone, href: `tel:+${digits(profile.phone)}`, icon: FiPhone },
  { label: "WhatsApp", value: profile.whatsapp, href: `https://wa.me/${digits(profile.whatsapp)}`, icon: FaWhatsapp },
  { label: "LinkedIn", value: "in/talha-bin-saleh", href: profile.linkedin, icon: FiLinkedin },
  { label: "GitHub", value: "talhabinsaleh", href: profile.github, icon: FiGithub },
];

export default function Contact() {
  return (
    <section id="contact">
      <BigHeading top="Let's work" bottom="Together" />

      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
        Open to junior full-stack or frontend roles, internships and freelance projects. Reach me directly — I usually
        reply within a day.
      </p>

      <a
        href={`mailto:${profile.email}`}
        className="group mt-8 flex items-center justify-between gap-4 rounded-3xl bg-accent p-6 text-neutral-950 transition hover:bg-lime sm:p-8"
      >
        <span className="min-w-0">
          <span className="block font-mono text-xs tracking-widest uppercase">Say hello</span>
          <span className="mt-1 block truncate font-display text-xl font-bold sm:text-3xl">{profile.email}</span>
        </span>
        <FiArrowUpRight className="size-8 shrink-0 transition group-hover:rotate-45" />
      </a>

      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {channels.slice(1).map(({ label, value, href, icon: Icon }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 transition-colors hover:border-accent/50"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-surface-2 text-accent">
                <Icon size={19} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-mono text-[11px] tracking-wider text-muted uppercase">{label}</span>
                <span className="block truncate font-medium">{value}</span>
              </span>
              <FiArrowUpRight className="shrink-0 text-muted transition group-hover:text-accent" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
