import { FiArrowUpRight, FiGithub, FiLinkedin, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { profile } from "@/data/portfolio";
import BigHeading from "./BigHeading";
import { Magnetic } from "./motion/Interactive";
import Tile from "./motion/Tile";

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

      <div className="mt-10 grid grid-cols-6 gap-3 lg:grid-cols-12">
        <Tile className="col-span-6 flex flex-col justify-between border-accent bg-accent p-6 text-accent-ink sm:p-9 lg:col-span-6 lg:row-span-2">
          <div>
            <p className="font-mono text-xs tracking-widest uppercase opacity-70">Have a project or role in mind?</p>
            <p className="mt-4 max-w-md font-display text-3xl leading-tight font-bold sm:text-4xl">
              Open to junior full-stack & frontend roles, internships and freelance work.
            </p>
          </div>
          <Magnetic strength={0.12} className="mt-10">
            <a
              href={`mailto:${profile.email}`}
              className="group/mail flex items-center justify-between gap-4 rounded-2xl bg-accent-ink p-5 text-ink transition-colors hover:bg-black"
            >
              <span className="min-w-0">
                <span className="block font-mono text-[11px] tracking-widest text-muted uppercase">Email me</span>
                <span className="mt-1 block truncate font-display text-lg font-semibold sm:text-xl">{profile.email}</span>
              </span>
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent text-accent-ink transition-transform duration-500 group-hover/mail:rotate-45">
                <FiArrowUpRight size={20} />
              </span>
            </a>
          </Magnetic>
        </Tile>

        {channels.map(({ label, value, href, icon: Icon }, i) => (
          <Tile key={label} delay={0.06 + i * 0.05} className="col-span-6 sm:col-span-3">
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group/c relative z-20 flex h-full items-center gap-4 p-5"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-surface-2 text-accent transition-transform duration-300 group-hover/c:-rotate-12">
                <Icon size={20} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-mono text-[11px] tracking-wider text-muted uppercase">{label}</span>
                <span className="block truncate font-medium">{value}</span>
              </span>
              <FiArrowUpRight className="shrink-0 text-muted transition group-hover/c:rotate-45 group-hover/c:text-accent" />
            </a>
          </Tile>
        ))}
      </div>
    </section>
  );
}
