import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface PhoneMockupProps {
  children: ReactNode;
  className?: string;
}

const PhoneMockup = ({ children, className }: PhoneMockupProps) => (
  <div
    className={cn(
      "relative rounded-[40px] border-[3px] border-foreground/10 bg-card shadow-2xl shadow-primary/10 overflow-hidden",
      className
    )}
  >
    {/* Notch */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[22px] bg-card rounded-b-xl z-10" />
    {/* Screen */}
    <div className="relative aspect-[9/19.5] overflow-hidden">
      {children}
    </div>
    {/* Home indicator */}
    <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-[80px] h-[3px] bg-foreground/20 rounded-full z-10" />
  </div>
);

export default PhoneMockup;
