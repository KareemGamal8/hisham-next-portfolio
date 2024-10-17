"use client";

import {
  FormControlProps,
  integerRule,
  patternRule,
  requiredRule,
  useFormControl,
} from "@mongez/react-form";
import React from "react";
import InputError from "./InputError";
import InputLabel from "./InputLabel";
import { cn } from "../utils/cn";

type TextInputProps = {
  containerStyles?: string;
  icon?: JSX.Element;
  withAdLabel?: boolean;
  name?: string;
  iconStyle?: string;
  className?: string;
} & FormControlProps;

function _TextInput(
  { containerStyles, className, icon, ...props }: TextInputProps,
  ref: any
) {
  const { value, changeValue, id, name, type, otherProps, error, disabled } =
    useFormControl({
      rules: props.rules || [requiredRule, patternRule, integerRule],
      ...props,
    });

  return (
    <div className={cn("flex w-full flex-1 flex-col gap-1", containerStyles)}>
      {otherProps.label && (
        <>
          <InputLabel
            id={id}
            label={otherProps.label}
            required={props.required}
          />
        </>
      )}
      <div className="relative">
        <input
          {...otherProps}
          disabled={disabled}
          ref={ref}
          // id={id}
          type={type}
          name={name || props.name}
          value={value}
          id={id}
          onChange={(e) => {
            if (e.target.value.trim().length === 0 && value.length < 1)
              return null;
            changeValue(e.target.value.trimStart());
          }}
          className={cn(
            "w-full bg-cinder text-white font-semibold placeholder:text-white placeholder:text-opacity-90 text-[13px] rounded-md border-2 border-ebony-clay border-solid px-6 py-4 tracking-wide outline-none",
            className,
            icon && "ltr:pl-12 rtl:pr-12",
            !!error &&
              "border-black-rose focus-within:border-[3px] focus-within:border-black-rose"
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

const TextInput = React.forwardRef(_TextInput);

export default TextInput;
