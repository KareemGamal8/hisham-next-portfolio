"use client";

import SectionTitle from "@/app/design-system/components/SectionTitle";
import EmailInput from "@/app/design-system/form/EmailInput";
import SubmitButton from "@/app/design-system/form/SubmitButton";
import TextareaInput from "@/app/design-system/form/TextareaInput";
import TextInput from "@/app/design-system/form/TextInput";
import { Form, FormSubmitOptions } from "@mongez/react-form";
import { useRef } from "react";
import toast from "react-hot-toast";
import { useInView } from "react-intersection-observer";

export default function ContactUs() {
  const formRef = useRef<any>();

  const { ref: contactRef, inView: contactInReview } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={contactRef}
      className={`pb-16 ${
        contactInReview &&
        "animate-pulse py-8 animate-twice animate-duration-1000 animate-ease-out"
      }`}
    >
      <div className="container">
        <SectionTitle
          mainTitle="Contact Me"
          subtitle="Have you made your decision?"
          mainTitleClassName="text-5xl"
          className="my-4"
        />

        <Form
          ref={formRef}
          className="flex flex-col gap-4 text-white"
          onSubmit={({ values, form }: FormSubmitOptions) => {
            const { name, email, message } = values;
            const data = JSON.stringify({
              service_id: "service_qwjw2li",
              template_id: "template_lq5ee1s",
              user_id: "AG_b76F_1x0ScUgac",
              template_params: {
                user_name: name,
                user_email: email,
                from_name: name,
                from_email: email,
                message,
                to_name: "Hisham Ashraf",
              },
            });

            fetch("https://api.emailjs.com/api/v1.0/email/send", {
              method: "POST",
              body: data,
            })
              .then(() => {
                toast.success("The message has been sent successfully.");
              })
              .catch((error) => {
                toast.error(error.message);
                form.submitting(false);
              });
          }}
        >
          <TextInput
            name="name"
            placeholder="Enter Your Name"
            required
            label="Name"
          />
          <EmailInput placeholder="Enter Your E-mail" required label="E-mail" />
          <TextareaInput
            name="message"
            rows={6}
            placeholder="Enter your message"
            label="Message"
            required
          />
          <SubmitButton>Send Message</SubmitButton>
        </Form>
      </div>
    </div>
  );
}
