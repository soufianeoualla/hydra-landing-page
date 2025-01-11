import * as React from "react";
import { cn } from "@utils/tailwindMerge";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[200px] w-full rounded-[40px] border border-slate-50/70 bg-transparent resize-y px-10 py-8 text-base placeholder:text-white/25 focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
