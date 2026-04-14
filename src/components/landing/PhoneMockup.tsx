import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface PhoneMockupProps {
  children: ReactNode;
  className?: string;
}

const PhoneMockup = ({ children, className }: PhoneMockupProps) => (
  <div
    className={cn(
      "relative w-[280px] rounded-[44px] border-[6px] border-foreground/15 bg-background shadow-2xl shadow-primary/10 overflow-hidden",
      className
    )}
  >
    {/* Notch */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[26px] bg-background rounded-b-2xl z-10" />
    {/* Screen */}
    <div className="relative aspect-[9/19.5] overflow-hidden bg-muted">
      {children}
    </div>
    {/* Home indicator */}
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-foreground/20 rounded-full z-10" />
  </div>
);

export default PhoneMockup;
