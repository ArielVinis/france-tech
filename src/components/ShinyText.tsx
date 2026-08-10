"use client";

import { useCallback, useState } from "react";

import { cn } from "@/lib/utils";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
  color?: string;
  shineColor?: string;
  spread?: number;
  pauseOnHover?: boolean;
}

/** Shine metálico via CSS — sem Motion */
const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 2,
  className = "",
  color = "#b5b5b5",
  shineColor = "#ffffff",
  spread = 120,
  pauseOnHover = false,
}) => {
  const [paused, setPaused] = useState(false);

  const onEnter = useCallback(() => {
    if (pauseOnHover) setPaused(true);
  }, [pauseOnHover]);

  const onLeave = useCallback(() => {
    if (pauseOnHover) setPaused(false);
  }, [pauseOnHover]);

  return (
    <span
      className={cn(
        "inline-block bg-clip-text text-transparent",
        !disabled && !paused && "animate-shiny-text",
        className,
      )}
      style={{
        backgroundImage: `linear-gradient(${spread}deg, ${color} 0%, ${color} 35%, ${shineColor} 50%, ${color} 65%, ${color} 100%)`,
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        ["--shiny-duration" as string]: `${speed * 2.4}s`,
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {text}
    </span>
  );
};

export default ShinyText;
