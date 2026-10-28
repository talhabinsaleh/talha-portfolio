import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { profile } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const digits = (n: string) => n.replace(/[^\d]/g, "");

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: FiMail },
  profile.phone && { label: "Phone", value: profile.phone, href: `tel:+${digits(profile.phone)}`, icon: FiPhone },
  profile.whatsapp && {
    label: "WhatsApp",
    value: profile.whatsapp,
    href: `https://wa.me/${digits(profile.whatsapp)}`,
    icon: FaWhatsapp,
  },
  { label: "LinkedIn", value: "in/talha-bin-saleh", href: profile.linkedin, icon: FiLinkedin },
  { label: "GitHub", value: "github.com/talhabinsaleh", href: profile.github, icon: FiGithub },
].filter((c) => !!c);

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading index="06" label="Contact" title="Let's build something together" />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <p className="max-w-md text-lg leading-relaxed text-muted">
              I&apos;m open to junior full-stack or frontend roles, internships and freelance projects. Reach me
              directly by email, phone or WhatsApp — I usually reply within a day.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-accent-ink transition hover:brightness-110"
            >
              <FiMail /> Say hello
            </a>
          </div>

          <ul className="space-y-3">
            {channels.map(({ label, value, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-accent/40"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                    <Icon size={19} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-xs uppercase tracking-wider text-muted">{label}</span>
                    <span className="block truncate font-medium">{value}</span>
                  </span>
                  <FiArrowUpRight className="shrink-0 text-muted transition group-hover:text-accent" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
