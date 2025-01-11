import * as React from "react";
import { cn } from "@utils/tailwindMerge";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-14 w-full rounded-[30px] border border-slate-50/70 bg-transparent px-10 py-2 outline-none text-base file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-white/25 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
