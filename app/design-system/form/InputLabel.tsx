"use client";

export type InputLabelProps = {
  label: string;
  required?: boolean;
  onClick?: () => void;
  id?: string;
};

export default function InputLabel({
  onClick,
  label,
  required,
  id,
}: InputLabelProps) {
  return (
    <>
      <label
        htmlFor={id}
        onClick={onClick}
        className="text-thunder font-normal font-montserrat tracking-[0.04em] py-1"
      >
        {label}
        {required && <span className="text-violet-red">*</span>}
      </label>
    </>
  );
}
