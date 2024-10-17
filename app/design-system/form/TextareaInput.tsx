"use client";

import {
  FormControlProps,
  integerRule,
  patternRule,
  requiredRule,
  useFormControl,
} from "@mongez/react-form";
import InputError from "./InputError";
import InputLabel from "./InputLabel";
import { cn } from "../utils/cn";

type TextInputProps = {
  containerStyles?: string;
  icon?: JSX.Element;
  labelStyles?: string;
  withAdLabel?: boolean;
  iconStyle?: string;
} & FormControlProps;

export default function TextareaInput({
  containerStyles,
  labelStyles,
  icon,
  ...props
}: TextInputProps) {
  const { value, changeValue, type, otherProps, name, error } = useFormControl({
    rules: props.rules || [requiredRule, patternRule, integerRule],
    ...props,
  });

  return (
    <div className={cn("flex w-full flex-1 flex-col gap-1", containerStyles)}>
      {otherProps.label && (
        <>
          <InputLabel label={otherProps.label} required={props.required} />
        </>
      )}
      <div className="relative">
        <textarea
          {...otherProps}
          // id={id}
          type={type}
          name={name}
          value={value}
          onChange={(e) => {
            changeValue(e.target.value.trimStart());
          }}
          className={cn(
            "w-full bg-cinder text-white font-semibold placeholder:text-white placeholder:text-opacity-90 text-[13px] rounded-md border-2 border-ebony-clay border-solid px-6 py-4 tracking-wide outline-none",
            icon && "ltr:pl-12 rtl:pr-12",
            !!error && "border-red-500 focus-within:border-red-500",
            otherProps.className
            // make the border black on focus with transition
          )}
        />
        {icon && (
          <div className="absolute top-1/2 -translate-y-1/2 ltr:left-4 rtl:right-4">
            {icon}
          </div>
        )}
      </div>

      <InputError error={error} />
    </div>
  );
}
