import * as React from "react";
import { cn } from "@/lib/utils";

interface MenuToggleIconProps extends React.ComponentProps<"svg"> {
  open: boolean;
  duration?: number;
}

export function MenuToggleIcon({
  open,
  duration = 300,
  className,
  ...props
}: MenuToggleIconProps) {
  const transitionStyle: React.CSSProperties = {
    transition: `transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
    transformOrigin: "center",
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-5", className)}
      {...props}
    >
      {/* Top line */}
      <line
        x1="4"
        y1="6"
        x2="20"
        y2="6"
        style={{
          ...transitionStyle,
          transform: open ? "translateY(6px) rotate(45deg)" : "none",
        }}
      />
      {/* Middle line */}
      <line
        x1="4"
        y1="12"
        x2="20"
        y2="12"
        style={{
          ...transitionStyle,
          opacity: open ? 0 : 1,
          transform: open ? "scale(0)" : "none",
        }}
      />
      {/* Bottom line */}
      <line
        x1="4"
        y1="18"
        x2="20"
        y2="18"
        style={{
          ...transitionStyle,
          transform: open ? "translateY(-6px) rotate(-45deg)" : "none",
        }}
      />
    </svg>
  );
}
