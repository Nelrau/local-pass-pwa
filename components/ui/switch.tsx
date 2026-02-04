import * as React from "react";
import { cn } from "@/lib/utils";

type SwitchProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Switch({ className, ...props }: SwitchProps) {
  return (
    <label className={cn("relative inline-flex items-center", className)}>
      <input type="checkbox" className="peer sr-only" {...props} />
      <span className="h-6 w-10 rounded-full bg-neutral-300 peer-checked:bg-black transition" />
      <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white peer-checked:translate-x-4 transition" />
    </label>
  );
}
