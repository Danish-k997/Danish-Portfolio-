"use client";

import Image from "next/image";
import { Download, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import LinkedinLogo from "../../public/linkedin.png";
import ScrollReveal from "./ScrollReveal";

const CONTACT = {
  name: "Danish Khan",
  title: "Full-Stack Developer",
  subtitle: "MERN Stack · Next.js · TypeScript · Node.js",
  tagline: "AI-Assisted Engineering",
  location: "Dhanbad, India",
  phone: "+91-9801285586",
  phoneHref: "tel:+919801285586",
  email: "danishkha8321@gmail.com",
  linkedin: "https://www.linkedin.com/in/danish-khan-65a61b38b/",
  github: "https://github.com/Danish-k997",
};

const SKILLS = [
  {
    label: "Frontend",
    items: "Next.js, React.js, TypeScript, JavaScript (ES6+), Tailwind CSS",
  },
  {
    label: "Backend",
    items:
      "Node.js, Express.js, REST API design, Webhook handling, MVC architecture",
  },
  {
    label: "Database",
    items: "MongoDB, Mongoose ODM, PostgreSQL, Prisma ORM",
  },
  {
    label: "Auth & Security",
    items: "JWT, OAuth concepts, RBAC, bcrypt",
  },
  {
    label: "AI-Assisted Engineering",
    items: "Claude Code, GitHub Copilot — daily scaffolding, debugging, code review",
  },
  {
    label: "DevOps & Tooling",
    items: "Git/GitHub, Vercel, Render, CORS, Postman, CI/CD (learning)",
  },
];

const PROJECTS = [
  {
    title: "Full-Stack MERN E-Commerce Platform",
    demo: "https://si-fi-store-07.vercel.app",
    github: "https://github.com/Danish-k997",
    bullets: [
      "Owned the product end-to-end: auth, cart, checkout, order management, and an admin panel — deployed across Vercel (frontend) and Render (backend).",
      "Integrated Razorpay Payment Gateway handling real-money transactions, including webhook handling and live payment status tracking.",
      "Used AI-assisted workflows (Claude Code, Copilot) to scaffold routine CRUD and UI boilerplate, cutting estimated development time by ~30% while manually reviewing every architectural decision.",
      "Built JWT authentication with secure token-based password reset, and an RBAC-driven admin layer.",
    ],
  },
  {
    title: "Doctor's Web Portal — Patient & Schedule Management",
    demo: "https://web-for-docter.vercel.app",
    bullets: [
      "Designed for scale from day one: server-side pagination and MongoDB indexing, reducing API response times by an estimated 40–50% under load, targeting 10,000+ concurrent users.",
      "Built a full Admin Dashboard with RBAC for patient records, doctor schedules, and report uploads.",
      "Took a feature from a rough problem statement to a deployed, working product — entirely solo.",
    ],
  },
  {
    title: "Secure RESTful API with Authentication System",
    bullets: [
      "Architected a clean MVC-pattern REST API (routes/controllers/models/middleware) with JWT auth, refresh tokens, and bcrypt hashing.",
      "Added input validation and standardized error-handling middleware for predictable, frontend-ready JSON responses.",
    ],
  },
];

const PHILOSOPHY = [
  "Vibe engineering, not vibe coding: I use Claude Code and Copilot daily to move fast, but every architectural decision, debug, and production fix is mine.",
  "Self-taught through building real, used products, not courses — every skill was earned by shipping, breaking things, and fixing them.",
  "Frugal, assembly-minded builder: default instinct is to find what already solves a problem (libraries, managed services, AI) before building from scratch.",
  "Comfortable with ambiguity — every project here started as a vague idea I scoped, built, and deployed without a spec handed to me. Currently deepening Docker, CI/CD, and cloud deployment (AWS/GCP).",
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <h2 className="font-label-mono text-label-mono uppercase tracking-widest text-primary">
        {children}
      </h2>
      <span className="h-px flex-1 bg-outline-variant/60" />
    </div>
  );
}

type ContactItemProps =
  | {
      icon: React.ElementType;
      image?: never;
      href?: string;
      children: React.ReactNode;
    }
  | {
      icon?: never;
      image: typeof LinkedinLogo;
      href?: string;
      children: React.ReactNode;
    };

function ContactItem({ icon: Icon, image, href, children }: ContactItemProps) {
  const content = (
    <>
      {Icon && (
        <Icon className="size-3.5 shrink-0 text-primary" strokeWidth={2} />
      )}
      {image && (
        <Image
          src={image}
          alt=""
          className="size-3.5 shrink-0 rounded-[2px] object-contain"
        />
      )}
      <span>{children}</span>
    </>
  );

  const className =
    "inline-flex items-center gap-2 font-body-md text-[13px] text-on-surface-variant transition-colors hover:text-primary";

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={className}
      >
        {content}
      </a>
    );
  }

  return <span className={className}>{content}</span>;
}

export default function MyCV() {
  return (
    <div className="min-h-screen bg-surface pb-24 pt-28">
      <div className="mx-auto max-w-container-max px-gutter">
        <ScrollReveal>
          <article className="relative overflow-hidden rounded-xl border border-outline-variant/60 bg-surface-container-low shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            {/* Top accent line */}
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent" />

            {/* Header */}
            <header className="border-b border-outline-variant/60 bg-surface-container px-8 py-10 md:px-12">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <p className="mb-2 font-label-mono text-label-mono uppercase tracking-widest text-primary">
                    Curriculum Vitae
                  </p>
                  <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface md:font-headline-lg md:text-headline-lg">
                    {CONTACT.name}
                  </h1>
                  <p className="mt-2 font-body-lg text-body-lg text-primary">
                    {CONTACT.title}
                  </p>
                  <p className="mt-1 font-body-md text-body-md text-on-surface-variant">
                    {CONTACT.subtitle}
                    <span className="mx-2 text-outline">·</span>
                    {CONTACT.tagline}
                  </p>
                </div>

                <a
                  href="/resume.pdf"
                  download="Danish_Khan_Resume.pdf"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-3 font-label-mono text-label-mono font-bold text-on-primary shadow-[0_0_20px_rgba(87,241,219,0.35)] transition-colors hover:bg-primary-fixed-dim"
                >
                  <Download className="size-4" strokeWidth={2.25} />
                  Download PDF
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-outline-variant/60 pt-6">
                <ContactItem icon={MapPin}>{CONTACT.location}</ContactItem>
                <ContactItem icon={Phone} href={CONTACT.phoneHref}>
                  {CONTACT.phone}
                </ContactItem>
                <ContactItem icon={Mail} href={`mailto:${CONTACT.email}`}>
                  {CONTACT.email}
                </ContactItem>
                <ContactItem image={LinkedinLogo} href={CONTACT.linkedin}>
                  LinkedIn
                </ContactItem>
                <ContactItem icon={SiGithub} href={CONTACT.github}>
                  GitHub
                </ContactItem>
              </div>
            </header>

            {/* Body */}
            <div className="grid grid-cols-1 gap-12 px-8 py-10 md:px-12 lg:grid-cols-[1fr_320px]">
              {/* Main column */}
              <div className="space-y-12">
                <section>
                  <SectionTitle>Professional Summary</SectionTitle>
                  <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
                    Self-taught full-stack developer who ships production software
                    end-to-end, not tutorial clones. Builds with the MERN stack and
                    Next.js/TypeScript/Node.js as the core toolkit, and works daily
                    with AI coding tools (Claude Code, GitHub Copilot) as a force
                    multiplier — using them to accelerate development velocity by an
                    estimated 30–40%, while owning architecture, code quality, and
                    production debugging myself. Background includes real-money
                    payment integration (Razorpay), JWT/RBAC auth systems, and
                    systems built for scale (10,000+ concurrent users), all built
                    and deployed independently.
                  </p>
                </section>

                <section>
                  <SectionTitle>Projects — Shipped &amp; In Production</SectionTitle>
                  <div className="space-y-5">
                    {PROJECTS.map((project) => (
                      <div
                        key={project.title}
                        className="group rounded-lg border border-outline-variant/60 bg-surface-container p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_10px_30px_-10px_rgba(87,241,219,0.2)]"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <h3 className="font-headline-md text-[17px] font-bold text-on-surface transition-colors group-hover:text-primary">
                            {project.title}
                          </h3>
                          <div className="flex items-center gap-4">
                            {project.demo && (
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 font-label-mono text-[11px] uppercase text-primary hover:underline"
                              >
                                Live Demo
                                <ExternalLink className="size-3" />
                              </a>
                            )}
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-label-mono text-[11px] uppercase text-on-surface-variant hover:text-primary"
                              >
                                GitHub
                              </a>
                            )}
                          </div>
                        </div>
                        <ul className="mt-3 space-y-1.5">
                          {project.bullets.map((bullet) => (
                            <li
                              key={bullet.slice(0, 40)}
                              className="flex gap-2 font-body-md text-[14px] leading-relaxed text-on-surface-variant"
                            >
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <SectionTitle>Engineering Philosophy</SectionTitle>
                  <ul className="space-y-2.5">
                    {PHILOSOPHY.map((item) => (
                      <li
                        key={item.slice(0, 40)}
                        className="flex gap-2 font-body-md text-[14px] leading-relaxed text-on-surface-variant"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              {/* Sidebar */}
              <aside className="space-y-10 lg:border-l lg:border-outline-variant/60 lg:pl-10">
                <section>
                  <SectionTitle>Core Skills</SectionTitle>
                  <div className="space-y-4">
                    {SKILLS.map((skill) => (
                      <div
                        key={skill.label}
                        className="rounded-lg border border-outline-variant/60 bg-surface-container px-4 py-3"
                      >
                        <h3 className="font-label-mono text-[11px] uppercase tracking-widest text-primary">
                          {skill.label}
                        </h3>
                        <p className="mt-1.5 font-body-md text-[13px] leading-relaxed text-on-surface-variant">
                          {skill.items}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <SectionTitle>Education</SectionTitle>
                  <div className="rounded-lg border border-outline-variant/60 bg-surface-container px-4 py-4">
                    <h3 className="font-body-md text-[14px] font-bold text-on-surface">
                      Higher Secondary Certificate (12th Grade)
                    </h3>
                    <p className="mt-1 font-label-mono text-[11px] uppercase tracking-wide text-on-surface-variant">
                      JAC Board, India
                    </p>
                    <p className="mt-2 font-body-md text-[13px] leading-relaxed text-on-surface-variant">
                      Self-Directed Curriculum: Full-Stack Web Development,
                      TypeScript, REST API Design, Database Architecture,
                      Authentication &amp; Security, AI-assisted software
                      engineering practices
                    </p>
                  </div>
                </section>
              </aside>
            </div>
          </article>
        </ScrollReveal>

        <p className="mt-6 text-center font-body-md text-[13px] text-on-surface-variant/70">
          Optimized for recruiters — download the PDF for ATS-friendly formatting.
        </p>
      </div>
    </div>
  );
}