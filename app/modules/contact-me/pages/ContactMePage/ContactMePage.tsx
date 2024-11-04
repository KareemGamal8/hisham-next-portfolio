"use client";

import SectionTitle from "@/app/design-system/components/SectionTitle";
import { Form, HiddenInput } from "@mongez/react-form";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useContactMe } from "../../hooks";
import TextInput from "@/app/design-system/form/TextInput";
import EmailInput from "@/app/design-system/form/EmailInput";
import TextareaInput from "@/app/design-system/form/TextareaInput";
import SubmitButton from "@/app/design-system/form/SubmitButton";

export default function ContactMePage() {
  const formRef = useRef<any>();

  const { ref: contactRef, inView: contactInReview } = useInView({
    triggerOnce: true,
  });

  const { handleContactMeForm } = useContactMe();

  return (
    <div
      ref={contactRef}
      className={`py-16 ${
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
          onSubmit={handleContactMeForm}
        >
          <HiddenInput
            name="access_key"
            value="4c72ea5a-b831-4079-9ff8-b51e0d09cdc3"
          />
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
