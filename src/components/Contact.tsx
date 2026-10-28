import { FiArrowUpRight, FiGithub, FiLinkedin, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { profile } from "@/data/portfolio";
import BigHeading from "./BigHeading";
import { Magnetic, SpotlightGroup, spotlightItem } from "./motion/Interactive";
import { ScrollWords } from "./motion/Text";

const digits = (n: string) => n.replace(/\D/g, "");

const channels = [
  { label: "Phone", value: profile.phone, href: `tel:+${digits(profile.phone)}`, icon: FiPhone },
  { label: "WhatsApp", value: profile.whatsapp, href: `https://wa.me/${digits(profile.whatsapp)}`, icon: FaWhatsapp },
  { label: "LinkedIn", value: "in/talha-bin-saleh", href: profile.linkedin, icon: FiLinkedin },
  { label: "GitHub", value: "talhabinsaleh", href: profile.github, icon: FiGithub },
];

export default function Contact() {
  return (
    <section id="contact">
      <BigHeading top="Let's work" bottom="Together" index="06" />

      <ScrollWords
        text="Open to junior full-stack or frontend roles, internships and freelance projects. Reach me directly — I usually reply within a day."
        className="mt-6 max-w-xl text-lg leading-relaxed text-ink"
      />

      <Magnetic strength={0.08} className="mt-8">
        <a
          href={`mailto:${profile.email}`}
          className="group relative flex items-center justify-between gap-4 overflow-hidden rounded-3xl bg-accent p-6 text-neutral-950 sm:p-8"
        >
          <span
            aria-hidden
            className="absolute inset-0 origin-bottom scale-y-0 bg-lime transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100"
          />
          <span className="relative min-w-0">
            <span className="block font-mono text-xs tracking-widest uppercase">Say hello</span>
            <span className="mt-1 block truncate font-display text-xl font-bold sm:text-3xl">{profile.email}</span>
          </span>
          <FiArrowUpRight className="relative size-8 shrink-0 transition-transform duration-500 group-hover:rotate-45" />
        </a>
      </Magnetic>

      <SpotlightGroup className="mt-4 grid gap-3 sm:grid-cols-2">
        {channels.map(({ label, value, href, icon: Icon }) => (
          <li key={label} className={`rounded-2xl ${spotlightItem}`}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group relative flex items-center gap-4 rounded-2xl border border-line bg-surface/60 p-4 transition-colors hover:border-accent/50"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-surface-2 text-accent transition-transform duration-300 group-hover:-rotate-12">
                <Icon size={19} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-mono text-[11px] tracking-wider text-muted uppercase">{label}</span>
                <span className="block truncate font-medium">{value}</span>
              </span>
              <FiArrowUpRight className="shrink-0 text-muted transition group-hover:rotate-45 group-hover:text-accent" />
            </a>
          </li>
        ))}
      </SpotlightGroup>
    </section>
  );
}
