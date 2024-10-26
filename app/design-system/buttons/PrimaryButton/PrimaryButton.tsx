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
          "w-fit text-white font-semibold hover:bg-black-rose px-5 py-3 hover:bg-opacity-90 rounded-md bg-ebony-clay bg-opacity-70 duration-500 transition-all ease-linear",
          className
        )}
      >
        {children}
      </button>
    </>
  );
}
