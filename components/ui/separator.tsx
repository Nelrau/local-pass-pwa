import * as React from "react";
import { cn } from "@/lib/utils";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export function Separator({ className, ...props }: DivProps) {
  return <div className={cn("h-px w-full bg-neutral-200", className)} {...props} />;
}
