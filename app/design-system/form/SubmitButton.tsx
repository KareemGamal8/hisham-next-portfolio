"use client";

import { useSubmitButton } from "@mongez/react-form";
import { ButtonHTMLAttributes } from "react";
import { cn } from "../utils/cn";

type SubmitButtonProps = {
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function SubmitButton({
  children,
  className,
  ...props
}: SubmitButtonProps) {
  const { isSubmitting } = useSubmitButton();

  return (
    <button
      {...props}
      type="submit"
      className={cn(
        "w-full uppercase rounded-md font-DinNextLt bg-violet-red px-6 py-4 text-[13px] font-bold text-white transition-colors disabled:cursor-not-allowed disabled:opacity-60",
        className
      )}
      disabled={isSubmitting}
    >
      {children}
    </button>
  );
}
