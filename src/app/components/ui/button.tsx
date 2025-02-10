import { ReactNode } from "react";

interface ButtonProps {
  children: string | ReactNode;
  className?: string;
  onClick: () => void;
}

export function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-full shadow-lg ${className}`}
    >
      {children}
    </button>
  );
}
