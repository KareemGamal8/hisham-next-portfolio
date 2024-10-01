import { Form, FormSubmitOptions } from "@mongez/react-form";
import SectionTitle from "apps/front-office/design-system/components/SectionTitle";
import EmailInput from "apps/front-office/design-system/form/EmailInput";
import SubmitButton from "apps/front-office/design-system/form/SubmitButton";
import TextareaInput from "apps/front-office/design-system/form/TextareaInput";
import TextInput from "apps/front-office/design-system/form/TextInput";
import { useRef } from "react";
import toast from "react-hot-toast";
import { useInView } from "react-intersection-observer";
import endpoint from "shared/endpoint";

export default function ContactUs() {
  const formRef = useRef<any>();

  const { ref: contactRef, inView: contactInReview } = useInView({
    triggerOnce: false,
  });

  return (
    <div
      ref={contactRef}
      className={`pb-16 ${contactInReview && "animate-pulse animate-twice animate-duration-1000 animate-ease-out"}`}>
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
            endpoint
              .post("https://api.emailjs.com/api/v1.0/email/send", {
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
              })
              .then(() => {
                toast.success("The message has been sent successfully.");
              })
              .catch(error => {
                toast.error(error.message);
                form.submitting(false);
              });
          }}>
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
