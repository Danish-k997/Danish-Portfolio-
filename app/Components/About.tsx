import ScrollReveal from "./ScrollReveal";
                     
const About = () => {
  return (
    <ScrollReveal>
      <section
        id="about"
        className="bg-background max-w-container-max mx-auto px-gutter py-6 md:py-10"
      >
        <div className="bg-background rounded-xl p-8 md:p-12 border border-surface-container-high grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
          {/* Left: text content */}
          <div>
            <h4 className="font-label-mono text-label-mono text-primary uppercase tracking-widest mb-4">
              About me
            </h4>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-6">
              Building Businesses, Not Just Websites.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              I believe every business deserves a digital presence that inspires
              trust and drives growth. I don&apos;t just build websites—I create
              digital experiences that help businesses connect with more
              customers, strengthen their brand, and unlock new opportunities.
              From local businesses to growing startups, every solution I build
              is designed to deliver real business value and long-term success.
            </p>
          </div>

          {/* Right: stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-surface-container-lowest rounded-lg border border-surface-container-high">
              <div className="font-display text-display text-primary text-glow mb-2">
                2+
              </div>
              <div className="font-label-mono text-label-mono text-on-surface-variant uppercase">
                Years Exp
              </div>
            </div>

            <div className="p-6 bg-surface-container-lowest rounded-lg border border-surface-container-high">
              <div className="font-display text-display text-primary text-glow mb-2">
                20+
              </div>
              <div className="font-label-mono text-label-mono text-on-surface-variant uppercase">
                Projects
              </div>
            </div>

            <div className="p-6 bg-surface-container-lowest rounded-lg border border-surface-container-high">
              <div className="font-display text-display text-primary text-glow mb-2">
                101%
              </div>
              <div className="font-label-mono text-label-mono text-on-surface-variant uppercase">
                Happy Clients
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default About;
