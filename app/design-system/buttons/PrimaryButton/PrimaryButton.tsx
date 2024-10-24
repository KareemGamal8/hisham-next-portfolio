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
          "w-fit text-white font-semibold hover:bg-violet-red px-5 py-3 rounded-md bg-ebony-clay duration-500 transition-all",
          className
        )}
      >
        {children}
      </button>
    </>
  );
}
