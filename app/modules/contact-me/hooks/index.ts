import { FormSubmitOptions } from "@mongez/react-form";
import toast from "react-hot-toast";

export function useContactMe() {
  const handleContactMeForm = ({ values, form }: FormSubmitOptions) => {
    const { name, email, message, access_key } = values;
    const data = JSON.stringify({
      name,
      email,
      message,
      access_key,
    });

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        toast.success("The message has been sent successfully.");
      })

      .catch((error) => {
        toast.error(error.message);
        form.submitting(false);
      });
  };

  return {
    handleContactMeForm,
  };
}
