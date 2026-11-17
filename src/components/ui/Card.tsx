import type { ReactNode } from "react";

interface CardProps {
  title: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ title, children, className, onClick }: CardProps) {
  return (
    <section className={`rounded-xl border border-[#ECEAE5] bg-white p-5 ${className || ""}`} onClick={onClick}>
      <h2 className="mb-4 font-semibold">{title}</h2>

      {children}
    </section>
  );
}