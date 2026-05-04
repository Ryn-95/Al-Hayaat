interface SectionEyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionEyebrow({ children, className = "" }: SectionEyebrowProps) {
  return (
    <span
      className={`eyebrow block mb-4 ${className}`}
    >
      {children}
    </span>
  );
}
