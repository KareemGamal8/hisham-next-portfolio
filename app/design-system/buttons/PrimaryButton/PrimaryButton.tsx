import React, { ButtonHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

type PrimaryButtonProps = {
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function PrimaryButton({
  children,
  className,
  ...props
}: PrimaryButtonProps) {
  return (
    <>
      <button
        {...props}
        className={cn(
          "w-fit uppercase text-white font-semibold bg-violet-red px-5 py-3 rounded-md",
          className
        )}
      >
        {children}
      </button>
    </>
  );
}
