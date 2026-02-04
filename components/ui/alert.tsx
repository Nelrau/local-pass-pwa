import * as React from "react";
import { cn } from "@/lib/utils";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;

export function Alert({ className, ...props }: DivProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-sm",
        className
      )}
      {...props}
    />
  );
}

export function AlertTitle({ className, ...props }: HeadingProps) {
  return <h5 className={cn("mb-1 font-semibold", className)} {...props} />;
}

export function AlertDescription({ className, ...props }: ParagraphProps) {
  return <p className={cn("text-neutral-700", className)} {...props} />;
}
