"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  ArrowRight,
  Briefcase,
  Clock,
  Code2,
  Gauge,
  HeartHandshake,
  Layers,
  Layout,
  Mail,
  MapPin,
  MessageCircle,
  MessagesSquare,
  Search,
  Shield,
  Smartphone,
  Star,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Status = "idle" | "sending" | "sent" | "error";

const initialFormState: FormState = {
  name: "",
  email: "",
  message: "",
};

const getWhatsAppNumber = () => {
  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919801285586";
  return rawNumber.replace(/\D/g, "") || "919801285586";
};

const CONTACT = {
  email: "danishkha8321@gmail.com",
  github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/Danish-k997",
  linkedin:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ??
    "https://www.linkedin.com/in/danish-khan-65a61b38b/                      ",
  location: process.env.NEXT_PUBLIC_LOCATION ?? "India",
};

const socialProof = [
  "Trusted by local businesses",
  "Medical & e-commerce clients",
  "25+ projects delivered",
];

const trustSignals: { icon: LucideIcon; label: string }[] = [
  { icon: Briefcase, label: "25+ Projects Delivered" },
  { icon: Clock, label: "2+ Years Freelancing" },
  { icon: MessageCircle, label: "Reply Within 24 Hours" },
  { icon: Code2, label: "Clean & Scalable Code" },
  { icon: Search, label: "SEO-Friendly Development" },
  { icon: Smartphone, label: "Mobile Optimized" },
  { icon: HeartHandshake, label: "Long-Term Support" },
  { icon: MessagesSquare, label: "Transparent Communication" },
];

const whyWorkWithMe: { icon: LucideIcon; title: string; description: string }[] =
  [
    {
      icon: Target,
      title: "Business-first mindset",
      description:
        "Every decision is weighed against your goals — leads, credibility, and revenue.",
    },
    {
      icon: Gauge,
      title: "Performance optimized",
      description:
        "Fast-loading pages that keep visitors engaged and search engines happy.",
    },
    {
      icon: Layout,
      title: "Responsive design",
      description:
        "Flawless experience on phones, tablets, and desktops — where your customers are.",
    },
    {
      icon: Layers,
      title: "Clean architecture",
      description:
        "Structured, maintainable code that grows with your business.",
    },
    {
      icon: Search,
      title: "SEO-friendly code",
      description:
        "Built to be found — semantic markup, speed, and discoverability from day one.",
    },
    {
      icon: TrendingUp,
      title: "Scalable development",
      description:
        "Start lean, expand confidently — no rebuilds when you outgrow v1.",
    },
    {
      icon: Shield,
      title: "Long-term support",
      description:
        "I stay available after launch for updates, fixes, and new features.",
    },
  ];

const processSteps = [
  { step: "01", title: "Tell me about your project", description: "Share your goals, timeline, and what success looks like." },
  { step: "02", title: "We discuss requirements", description: "A focused call to align scope, budget, and next steps." },
  { step: "03", title: "Development begins", description: "Clear milestones, regular updates, and a polished delivery." },
];

const inputBaseClass =
  "contact-input w-full rounded-xl border border-surface-container-high bg-surface-container-lowest px-4 py-3.5 text-on-surface placeholder:text-on-surface-variant/50 transition-all duration-300 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20";

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: "New portfolio contact request",
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to send your message right now.",
        );
      }

      const whatsappNumber = getWhatsAppNumber();
      const whatsappText = encodeURIComponent(
        `Hi Danish, I just filled out your contact form.\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
      );
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      setFormData(initialFormState);
      setStatus("sent");
      setFeedback("");
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong while sending your message.";
      setStatus("error");
      setFeedback(message);
    }
  };

  const whatsappHref = `https://wa.me/${getWhatsAppNumber()}`;

  return (
    <ScrollReveal>
      <section
        id="contact"
        className="bg-background mx-auto max-w-container-max px-gutter py-16 md:py-24"
        aria-labelledby="contact-heading"
      >
        {/* Section header */}
        <div className="mb-10 max-w-3xl md:mb-14">
          <p className="mb-4 font-label-mono text-label-mono uppercase tracking-[0.25em] text-primary">
            Start a Project
          </p>
          <h2
            id="contact-heading"
            className="mb-5 font-headline-lg-mobile text-headline-lg-mobile text-on-surface md:font-headline-lg md:text-headline-lg"
          >
            Ready to turn your online presence into a growth engine?
          </h2>
          <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
            Whether you need a website that earns trust, an online store that
            converts, or a platform built to scale — tell me about your business
            and I&apos;ll respond with a clear path forward within 24 hours.
          </p>
        </div>

        {/* Social proof strip */}
        <div
          className="contact-social-proof mb-12 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-2xl border border-outline-variant/50 bg-surface-container/40 px-5 py-4 md:px-6"
          aria-label="Client trust indicators"
        >
          {socialProof.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 text-sm text-on-surface-variant"
            >
              <Star
                className="h-4 w-4 shrink-0 fill-primary/20 text-primary"
                aria-hidden="true"
              />
              {item}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* Left column — trust, process, authority */}
          <div className="order-2 space-y-8 lg:order-1 lg:col-span-5">
            {/* Why Work With Me */}
            <article className="contact-card rounded-2xl border border-surface-container-high bg-surface-container-lowest/60 p-6 md:p-8">
              <h3 className="mb-2 font-body-lg text-body-lg font-semibold text-on-surface">
                Why work with me?
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-on-surface-variant">
                I build for business outcomes — not just pixels. Every project
                is scoped around your customers, your market, and your growth.
              </p>
              <ul className="space-y-4">
                {whyWorkWithMe.map(({ icon: Icon, title, description }) => (
                  <li key={title} className="group flex gap-3.5">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-outline-variant/60 bg-surface-container-high transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-[0_0_16px_rgba(87,241,219,0.12)]">
                      <Icon
                        className="h-4 w-4 text-primary"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-on-surface">
                        {title}
                      </p>
                      <p className="mt-0.5 text-sm leading-relaxed text-on-surface-variant/90">
                        {description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>

            {/* 3-step process */}
            <article className="contact-card rounded-2xl border border-surface-container-high bg-surface-container-lowest/60 p-6 md:p-8">
              <h3 className="mb-6 font-body-lg text-body-lg font-semibold text-on-surface">
                How we&apos;ll work together
              </h3>
              <ol className="space-y-0">
                {processSteps.map(({ step, title, description }, index) => (
                  <li key={step} className="relative flex gap-4 pb-8 last:pb-0">
                    {index < processSteps.length - 1 ? (
                      <span
                        className="absolute left-[1.125rem] top-10 h-[calc(100%-2rem)] w-px bg-linear-to-b from-primary/40 to-transparent"
                        aria-hidden="true"
                      />
                    ) : null}
                    <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 font-label-mono text-xs text-primary">
                      {step}
                    </span>
                    <div className="pt-1">
                      <p className="text-sm font-medium text-on-surface">
                        {title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-on-surface-variant">
                        {description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </article>

            {/* Trust signals grid */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
              {trustSignals.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="contact-trust-item group flex items-center gap-3 rounded-xl border border-surface-container-high bg-surface-container-lowest/40 px-4 py-3.5 transition-all duration-300 hover:border-primary/30 hover:bg-surface-container-low/80"
                >
                  <Icon
                    className="h-4 w-4 shrink-0 text-primary transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <span className="text-xs leading-snug text-on-surface-variant sm:text-sm">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — form & contact channels */}
          {/*
            FIX: left column (cards) is naturally taller than this column (form).
            With items-start on the grid, each column keeps its own height, so once
            this shorter column finished rendering, the page kept scrolling through
            the taller left column with empty space on this side.
            lg:sticky + lg:top-24 + lg:self-start pins this column in the viewport
            while the left column scrolls past it — standard pattern for
            contact/checkout layouts, and it removes the empty-space problem entirely.
          */}
          <div className="order-1 lg:order-2 lg:col-span-7 lg:sticky lg:top-24 lg:self-start">
            <div className="contact-form-card glass-panel rounded-2xl border border-surface-container-high p-6 md:p-10">
              {status === "sent" ? (
                <div
                  className="contact-success flex flex-col items-center py-8 text-center md:py-12"
                  role="status"
                  aria-live="polite"
                >
                  <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                    <MessageCircle
                      className="h-7 w-7 text-primary"
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="mb-3 font-headline-md text-headline-md text-on-surface">
                    Thanks — I&apos;ve received your inquiry.
                  </h3>
                  <p className="mb-8 max-w-md text-sm leading-relaxed text-on-surface-variant md:text-base">
                    I&apos;ll review your project details and get back to you
                    within 24 hours. If it&apos;s urgent, WhatsApp is the
                    fastest way to reach me.
                  </p>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-cta inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-label-mono text-label-mono font-bold text-on-primary transition-all duration-300 hover:bg-primary-fixed-dim hover:shadow-[0_0_28px_rgba(87,241,219,0.45)]"
                  >
                    Continue on WhatsApp
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-5 text-sm text-on-surface-variant underline-offset-4 transition-colors hover:text-primary hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="mb-2 font-body-lg text-body-lg font-semibold text-on-surface">
                      Get a free consultation
                    </h3>
                    <p className="text-sm leading-relaxed text-on-surface-variant">
                      Share a few details below. No commitment — just a
                      conversation about what your business needs.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="contact-name"
                          className="block text-sm font-medium text-on-surface"
                        >
                          Name
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          autoComplete="name"
                          className={inputBaseClass}
                          placeholder="Your full name"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="contact-email"
                          className="block text-sm font-medium text-on-surface"
                        >
                          Email
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          autoComplete="email"
                          className={inputBaseClass}
                          placeholder="Where should I reply?"
                        />
                        <p className="text-xs text-on-surface-variant/70">
                          I&apos;ll use this to send your project estimate.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="contact-message"
                        className="block text-sm font-medium text-on-surface"
                      >
                        Project details
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className={`${inputBaseClass} resize-none`}
                        placeholder="What are you trying to build? e.g. a business website, online store, or app redesign..."
                      />
                      <p className="text-xs text-on-surface-variant/70">
                        Include your industry, timeline, and any reference links
                        if you have them.
                      </p>
                    </div>

                    <div className="space-y-3 pt-1">
                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="contact-cta group flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-label-mono text-label-mono font-bold uppercase tracking-[0.15em] text-on-primary transition-all duration-300 hover:bg-primary-fixed-dim hover:shadow-[0_0_28px_rgba(87,241,219,0.45)] disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {status === "sending" ? (
                          "Sending..."
                        ) : (
                          <>
                            Discuss Your Project
                            <ArrowRight
                              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </button>
                      <p className="text-center text-xs leading-relaxed text-on-surface-variant/80">
                        No spam. I&apos;ll personally reply within 24 hours.
                        Your project details stay completely private.
                      </p>
                    </div>

                    {feedback && status === "error" ? (
                      <p
                        role="alert"
                        aria-live="assertive"
                        className="rounded-lg border border-error/30 bg-error/5 px-4 py-3 text-sm text-error"
                      >
                        {feedback}
                      </p>
                    ) : null}
                  </form>
                </>
              )}
            </div>

            {/* Contact channels */}
            <div className="mt-8 space-y-5">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel group flex flex-col items-center gap-2 rounded-xl border border-surface-container-high bg-surface-container-lowest/40 px-4 py-4 text-center transition-all duration-300 hover:border-primary/40 hover:bg-surface-container-low/80 hover:shadow-[0_0_20px_rgba(87,241,219,0.08)]"
                >
                  <MessageCircle
                    className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-medium text-on-surface-variant group-hover:text-on-surface">
                    WhatsApp
                  </span>
                </a>

                <a
                  href={`mailto:${CONTACT.email}`}
                  className="contact-channel group flex flex-col items-center gap-2 rounded-xl border border-surface-container-high bg-surface-container-lowest/40 px-4 py-4 text-center transition-all duration-300 hover:border-primary/40 hover:bg-surface-container-low/80 hover:shadow-[0_0_20px_rgba(87,241,219,0.08)]"
                >
                  <Mail
                    className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-medium text-on-surface-variant group-hover:text-on-surface">
                    Email
                  </span>
                </a>

                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel group flex flex-col items-center gap-2 rounded-xl border border-surface-container-high bg-surface-container-lowest/40 px-4 py-4 text-center transition-all duration-300 hover:border-primary/40 hover:bg-surface-container-low/80 hover:shadow-[0_0_20px_rgba(87,241,219,0.08)]"
                >
                  <LinkedInIcon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-xs font-medium text-on-surface-variant group-hover:text-on-surface">
                    LinkedIn
                  </span>
                </a>

                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel group flex flex-col items-center gap-2 rounded-xl border border-surface-container-high bg-surface-container-lowest/40 px-4 py-4 text-center transition-all duration-300 hover:border-primary/40 hover:bg-surface-container-low/80 hover:shadow-[0_0_20px_rgba(87,241,219,0.08)]"
                >
                  <GitHubIcon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-xs font-medium text-on-surface-variant group-hover:text-on-surface">
                    GitHub
                  </span>
                </a>
              </div>

              <div className="flex flex-col gap-3 rounded-xl border border-surface-container-high bg-surface-container-lowest/30 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="inline-flex items-center gap-2 text-sm text-on-surface-variant">
                  <MapPin
                    className="h-4 w-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  Based in {CONTACT.location}
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-on-surface">
                  <span
                    className="relative flex h-2.5 w-2.5"
                    aria-hidden="true"
                  >
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/40 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                  </span>
                  Currently accepting freelance projects
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default Contact;