"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { useIsClient } from "@/hooks/use-is-client";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useIsClient();

  const isDark = !mounted || resolvedTheme === "dark";

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-lg"
      className={cn("shrink-0 rounded-full text-foreground", className)}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      disabled={!mounted}
    >
      {isDark ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
}
