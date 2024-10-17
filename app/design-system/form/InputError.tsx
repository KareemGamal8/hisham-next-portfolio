"use client";
import React from "react";

export type InputErrorProps = {
  // props go here
  error?: React.ReactNode;
};
export default function InputError({ error }: InputErrorProps) {
  if (!error) return null;

  return (
    <div className="font-semibold text-[13px] text-black-rose">{error}</div>
  );
}
