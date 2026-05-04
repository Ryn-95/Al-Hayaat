"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "white" | "whiteGhost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  type?: "button" | "submit";
  id?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  icon,
  iconPosition = "right",
  className = "",
  type = "button",
  id,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-inter font-medium transition-all duration-300 ease-smooth rounded-button whitespace-nowrap";

  const sizeStyles = {
    sm: "px-5 py-2 text-[13px] gap-2",
    md: "px-7 py-3 text-[14px] gap-2.5",
    lg: "px-9 py-4 text-[15px] gap-3",
  };

  const variantStyles = {
    primary:
      "bg-primary text-white btn-fill btn-primary-fill hover:bg-primary-dark",
    ghost:
      "bg-transparent text-primary border border-primary btn-fill btn-ghost-fill",
    white:
      "bg-white text-primary hover:bg-primary-light",
    whiteGhost:
      "bg-transparent text-white border border-white hover:bg-white hover:text-primary",
  };

  const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="flex-shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("https://wa.me");
    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          id={id}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} id={id}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} id={id}>
      {content}
    </button>
  );
}
