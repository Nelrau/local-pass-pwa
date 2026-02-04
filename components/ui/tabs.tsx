import * as React from "react";
import { cn } from "@/lib/utils";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
};

export function Tabs({ className, ...props }: DivProps) {
  return <div className={cn("w-full", className)} {...props} />;
}

export function TabsList({ className, ...props }: DivProps) {
  return (
    <div
      className={cn(
        "inline-flex gap-2 rounded-lg bg-neutral-100 p-1",
        className
      )}
      {...props}
    />
  );
}

export function TabsTrigger({ className, active, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-md px-3 py-1.5 text-sm",
        active ? "bg-white shadow-sm" : "text-neutral-600",
        className
      )}
      {...props}
    />
  );
}

export function TabsContent({ className, ...props }: DivProps) {
  return <div className={cn("mt-4", className)} {...props} />;
}
