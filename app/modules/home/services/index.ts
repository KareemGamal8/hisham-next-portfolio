import { FormSubmitOptions } from "@mongez/react-form";
import endpoint from "shared/endpoint";

export function sendMessage(data: FormSubmitOptions, publicKey) {
  return endpoint.post("https://api.emailjs.com/api/v1.0/email/send");
}
