"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "./Button";

const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "AI Associate Developer",
  "Next.js Developer",
  "React Developer",
];

const taglines = [
  "Building Products People Love.",
  "Helping Businesses Grow Online.",
  "Turning Business Ideas Into Digital Success.",
  "From Local Business to Global Presence.",
  "Your Digital Growth Partner.",
];

const TypewriterPair = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedCount, setTypedCount] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pause" | "deleting">("typing");
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === "undefined") return false;

    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => setReducedMotion(mediaQuery.matches);

    syncMotionPreference();
    mediaQuery.addEventListener("change", syncMotionPreference);

    return () => mediaQuery.removeEventListener("change", syncMotionPreference);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const currentRole = roles[currentIndex];
    const currentTagline = taglines[currentIndex];
    const targetLength = Math.max(currentRole.length, currentTagline.length);
    const typingSpeed = 58;
    const deletingSpeed = 34;
    const pauseDuration = 2400;

    const timer = window.setTimeout(
      () => {
        if (phase === "typing") {
          setTypedCount((prev) => {
            const next = prev + 1;

            if (next >= targetLength) {
              setPhase("pause");
              return targetLength;
            }

            return next;
          });

          return;
        }

        if (phase === "pause") {
          setPhase("deleting");
          return;
        }

        setTypedCount((prev) => {
          const next = prev - 1;

          if (next <= 0) {
            setPhase("typing");
            setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
            setTypedCount(0);
            return 0;
          }

          return next;
        });
      },
      phase === "typing"
        ? typingSpeed
        : phase === "pause"
          ? pauseDuration
          : deletingSpeed,
    );

    return () => window.clearTimeout(timer);
  }, [currentIndex, phase, reducedMotion, typedCount]);

  const currentRole = roles[currentIndex];
  const currentTagline = taglines[currentIndex];
  const roleText = reducedMotion
    ? currentRole
    : currentRole.slice(0, Math.min(typedCount, currentRole.length));
  const taglineText = reducedMotion
    ? currentTagline
    : currentTagline.slice(0, Math.min(typedCount, currentTagline.length));

  return (
    <div className="space-y-3">
      <div className="min-h-13 md:min-h-18">
        <span className="block font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary text-glow">
          {roleText}
          {!reducedMotion && (
            <span className="ml-0.5 inline-block align-baseline text-primary animate-pulse">
              |
            </span>
          )}
        </span>
      </div>

      <div className="min-h-13 md:min-h-18">
        <span className="block max-w-2xl font-body-lg text-body-lg text-on-surface-variant leading-relaxed text-glow">
          {taglineText}
          {!reducedMotion && (
            <span className="ml-0.5 inline-block align-baseline text-primary animate-pulse">
              |
            </span>
          )}
        </span>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-between bg-background gap-stack-lg max-w-container-max mx-auto px-gutter min-h-[80vh]"
    >
      <div className="flex-1 space-y-6 md:pr-12">
        <h1 className="font-display text-display text-on-surface tracking-tight text-glow">
          DANISH KHAN
        </h1>

        <TypewriterPair />

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button href="#contact" variant="primary">
            Contact to Develop Your Idea
          </Button>
          <Button href="#contact" variant="secondary">
            Contact to Grow Your Business
          </Button>
        </div>
      </div>

      <div className="flex-1 flex justify-center md:justify-end w-full max-w-md md:max-w-none relative">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] -z-10 animate-pulse" />
        <Image
          src="/hero.png"
          alt="Danish Khan - Full Stack Developer"
          width={500}
          height={500}
          priority
          className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-full border-4 border-surface-container-high shadow-[0_0_30px_rgba(87,241,219,0.2)]"
        />
      </div>
    </section>
  );
};

export default Hero;
