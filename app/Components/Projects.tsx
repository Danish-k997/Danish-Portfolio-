import React from "react";
import ecommerceImage from "../../public/e-comm.png";
import docImage from "../../public/newdoc.png";
import Image from "next/image";
import Button from "./Button";
import ScrollReveal from "./ScrollReveal";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: ecommerceImage,
      badge: "LIVE",
      title: "SI-FI Store — Full-stack E‑commerce",
      description:
        "Full-stack MERN store with a production-grade admin dashboard, JWT auth, Razorpay payments and Cloudinary image management. Reduced order-processing time and automated inventory sync.",
      tech: [
        "React.js",
        "Express",
        "Node.js",
        "MongoDB",
        "Razorpay",
        "Cloudinary",
      ],
      link: "https://si-fi-store-07.vercel.app/",
      about:
        "https://github.com/Danish-k997/E-Commers-Web-apps-07/blob/main/README.md",
    },
    {
      id: 2,
      image: docImage,
      badge: "LIVE",
      title: "Clinic Patient Portal & Scheduling System",
      description:
        "Full-stack patient portal for a dermatology clinic — patients log in (OTP + JWT) to view medical reports, while doctors manage schedules and uploads from an admin dashboard. Built with React, Node.js, MongoDB, and Cloudinary.",
      tech: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Tailwind",
        "Pagination",
        "Multer",
      ],
      link: "https://web-for-docter.vercel.app/",
      about:
        "https://github.com/Danish-k997/web-for-Docter/blob/main/README.md",
    },
    {
      id: 3,
      image: "",
      badge: "OPEN",
      title: "Headless CMS Portfolio — Content First",
      description:
        "Headless CMS with MDX authoring and image optimization for fast SSR pages. Enables non-technical content updates and improved SEO performance across collection pages.",
      tech: ["Next.js", "MDX", "Vercel", "Image Optimization"],
      link: "https://example.com/portfolio-cms",
      about: "https://github.com/example/portfolio-cms",
    },
  ];

  return (
    <ScrollReveal>
      <div
        id="projects"
        className="bg-background max-w-container-max mx-auto px-gutter py-10 md:py-16"
      >
        <p className="text-label-mono font-label-mono text-primary uppercase tracking-widest mb-4">
          Featured Work
        </p>

        <h1 className="text-headline-lg font-headline-lg text-on-surface">
          Selected Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-surface backdrop-blur-sm border border-surface-container p-6 rounded-lg overflow-hidden flex flex-col h-full transition hover:shadow-[0_10px_30px_rgba(0,0,0,0.45)] hover:border-primary/40"
            >
              <div className="relative group rounded-md overflow-hidden mb-4">
                <div className="aspect-video h-56 bg-linear-to-br from-primary/10 to-surface-container flex items-center justify-center relative">
                  {project.image ? (
                    <div className="absolute inset-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="w-full h-full object-cover object-top transform transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-on-surface-variant opacity-60"
                      >
                        <path
                          d="M4 6h16v12H4z"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 9h8M8 12h8M8 15h5"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="absolute top-3 right-3 z-10 px-2 py-1 rounded-full bg-surface-container-lowest/90 border border-primary/30 text-xs font-label-mono text-primary uppercase">
                    {project.badge}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-label-mono uppercase text-[12px] bg-surface-container-low px-2 py-1 rounded text-on-surface-variant"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h2 className="text-headline-md font-headline-md text-on-surface mb-2">
                {project.title}
              </h2>

              <p className="text-body-md font-body-md text-on-surface/70 flex-1">
                {project.description}
              </p>

              <div className="pt-4 mt-4 flex gap-3">
                <Button
                  href={project.link}
                  variant="primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="inline-flex items-center gap-2">
                    <span>View Project</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M5 12h14M12 5l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Button>

                <Button
                  href={project.about}
                  variant="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="inline-flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM11 10h2v6h-2v-6zm0-4h2v2h-2V6z"
                        stroke="currentColor"
                        strokeWidth="0"
                      />
                    </svg>
                    <span>About Project</span>
                  </span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
};

export default Projects;
