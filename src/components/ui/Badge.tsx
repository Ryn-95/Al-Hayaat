interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "highlighted";
  className?: string;
}

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const variants = {
    default:
      "bg-primary-light text-primary border border-primary/10",
    highlighted:
      "bg-primary text-white",
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.15em] font-medium font-inter ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
