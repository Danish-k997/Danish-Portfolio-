// components/sections/Services.tsx
import {
  Store,
  ShoppingCart,
  RefreshCw,
  Gauge,
  type LucideIcon,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  outcome: string;
  badge: string;
  cta: string;
  featured?: boolean;
}

const services: Service[] = [
  {
    icon: Store,
    title: "Business Website",
    description:
      "Turn a first impression into a clear next step with a polished site that feels credible, modern, and ready to convert interest into real opportunities.",
    outcome:
      "Better visibility, stronger trust, and a clearer path to inquiries.",
    badge: "Delivered in 2–3 weeks",
    cta: "Get a quote",
    featured: true,
  },
  {
    icon: ShoppingCart,
    title: "Online Store",
    description:
      "Turn browsing into purchases with a storefront that feels fast, trustworthy, and easy to buy from anywhere — on desktop or mobile.",
    outcome:
      "A smoother buying journey that supports more confident decisions.",
    badge: "Flexible scope, clear timeline",
    cta: "Learn more",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    description:
      "Turn a dated experience into a sharper one that keeps visitors engaged, reduces friction, and reflects the quality of your offer.",
    outcome:
      "A stronger first impression that helps more people stay and explore.",
    badge: "Most projects launched fast",
    cta: "See the approach",
  },
  {
    icon: Gauge,
    title: "Speed & SEO Optimization",
    description:
      "Turn slow, invisible pages into faster, better-positioned experiences that help the right audience find you more easily.",
    outcome:
      "Improved performance and visibility without sacrificing the experience.",
    badge: "Quick audit + roadmap",
    cta: "Book an audit",
  },
];

function ServiceCard({
  icon: Icon,
  title,
  description,
  outcome,
  badge,
  cta,
  featured = false,
}: Service) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-outline-variant bg-surface-container p-6 shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_0_20px_rgba(87,241,219,0.14)]">
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-outline-variant/70 bg-surface-container-high transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
          <Icon
            className="h-6 w-6 text-primary"
            strokeWidth={1.75}
            aria-hidden="true"
          />
        </div>
        {featured ? (
          <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-label-mono text-label-mono uppercase tracking-[0.2em] text-primary">
            Most Popular
          </span>
        ) : null}
      </div>

      <div className="flex-1">
        <h3 className="mb-2 font-body-lg text-body-lg font-semibold text-on-surface">
          {title}
        </h3>
        <p className="mb-4 font-body-md text-body-md text-on-surface-variant">
          {description}
        </p>
        <p className="mb-6 text-sm leading-6 text-on-surface-variant/90">
          {outcome}
        </p>
      </div>

      <div className="mt-auto space-y-4 border-t border-outline-variant/70 pt-4">
        <span className="inline-flex rounded-full border border-outline-variant/70 bg-surface-container-high px-3 py-1 font-label-mono text-label-mono uppercase tracking-[0.2em] text-on-surface-variant">
          {badge}
        </span>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 font-body-md text-body-md font-semibold text-primary transition-colors duration-200 hover:text-primary/80"
          aria-label={`Get a quote for ${title}`}
        >
          {cta}
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <ScrollReveal>
      <section
        id="services"
        className="mx-auto max-w-container-max bg-background px-gutter"
        aria-labelledby="services-heading"
      >
        <div className="mb-10 text-center">
          <h2
            id="services-heading"
            className="mb-4 font-headline-lg-mobile text-headline-lg-mobile text-on-surface md:font-headline-lg md:text-headline-lg"
          >
            Web solutions that help businesses and teams grow
          </h2>
          <p className="mx-auto max-w-3xl font-body-lg text-body-lg text-on-surface-variant">
            Whether you need a sharper online presence, a faster storefront, or
            a redesign that earns more trust, I build polished websites with
            clear communication and dependable delivery for clients across local
            markets and remote partnerships alike.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3 rounded-full border border-outline-variant/70 bg-surface-container/70 px-4 py-3 text-sm text-on-surface-variant">
          <span className="font-label-mono text-label-mono uppercase tracking-[0.2em] text-primary">
            Trusted by founders & teams
          </span>
          <span className="hidden sm:inline">•</span>
          <span>25+ projects delivered</span>
          <span className="hidden sm:inline">•</span>
          <span>97% satisfaction rate</span>
          <span className="hidden sm:inline">•</span>
          <span>Clients across 8+ countries</span>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm leading-7 text-on-surface-variant/80">
            Reliable delivery, clear communication, and websites that work hard
            for businesses and teams worldwide.
          </p>
        </div>
      </section>
    </ScrollReveal>
  );
}
