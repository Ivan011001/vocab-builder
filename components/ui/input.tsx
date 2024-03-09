import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full rounded-[15px] border border-neutral-900 border-opacity-10 bg-transparent px-[18px] py-4 transition-colors file:border-0 file:bg-transparent file:text-sm text-neutral-900 text-base font-normal placeholder:text-neutral-900 placeholder:text-base placeholder:font-normal file:font-medium focus:border focus:border-gray-400 focus:border-opacity-100 hover:border hover:border-gray-400 hover:border-opacity-100 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-destructive",
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
