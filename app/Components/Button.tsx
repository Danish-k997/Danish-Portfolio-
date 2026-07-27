import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  target?: string;
  rel?: string;
};

const baseStyles =
  "inline-flex justify-center items-center px-8 py-4 rounded-full font-label-mono text-label-mono font-bold transition-colors";

const variantStyles = {
  primary:
    "bg-primary text-on-primary hover:bg-primary-fixed-dim shadow-[0_0_20px_rgba(87,241,219,0.4)]",
  secondary: "border border-primary text-primary hover:bg-primary/10",
};

const Button = ({
  href,
  children,
  variant = "primary",
  target,
  rel,
}: ButtonProps) => {
  const isExternal = /^(https?:|mailto:|tel:)/i.test(href);

  if (isExternal) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`${baseStyles} ${variantStyles[variant]}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${baseStyles} ${variantStyles[variant]}`}>
      {children}
    </Link>
  );
};

export default Button;
