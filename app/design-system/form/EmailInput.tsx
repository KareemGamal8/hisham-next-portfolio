"use client";

import { FormControlProps, emailRule, requiredRule } from "@mongez/react-form";
import TextInput from "./TextInput";

export default function EmailInput(props: FormControlProps) {
  return (
    <TextInput
      name="email"
      type="email"
      rules={[emailRule, requiredRule]}
      {...props}
    />
  );
}
