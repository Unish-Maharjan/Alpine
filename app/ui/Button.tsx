import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  variant?: "dark" | "light" | "gold" | "solid-gold";
  size?: "sm" | "md" | "lg";
  className?: string;
};

type LinkButtonProps = BaseProps & {
  href: string;
  onClick?: never;
};

type ClickButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: never;
  };

type ButtonProps = LinkButtonProps | ClickButtonProps;

const sizeStyles = {
  sm: "px-6 py-2.5 text-[11px]",
  md: "px-9 py-3.5 text-xs sm:text-xs",
  lg: "px-11 py-4 text-xs sm:text-sm",
};

const variantStyles = {
  gold: "border-[#eadab2] text-[#eadab2] hover:bg-[#eadab2] hover:text-[#0c3b3c] hover:shadow-[0_0_20px_rgba(234,218,178,0.35)]",
  "solid-gold": "bg-[#eadab2] border-[#eadab2] text-[#0c3b3c] font-semibold hover:bg-[#fbf5e6] hover:shadow-[0_0_25px_rgba(234,218,178,0.45)]",
  light: "border-[#f8f6f0] text-[#f8f6f0] hover:border-[#eadab2] hover:bg-[#eadab2] hover:text-[#0c3b3c]",
  dark: "border-[#0c3b3c] text-[#0c3b3c] hover:bg-[#0c3b3c] hover:text-[#f8f6f0]",
};

export default function Button({
  children,
  href,
  variant = "gold",
  size = "md",
  className = "",
  ...rest
}: ButtonProps) {
  const baseClasses = `group relative inline-flex items-center justify-center border font-saldo uppercase transition-all duration-300 ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = <span className="relative z-10 font-medium">{children}</span>;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}