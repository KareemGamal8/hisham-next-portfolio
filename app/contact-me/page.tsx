import { Metadata } from "next";
import Breadcrumb from "../design-system/components/Breadcrumb";
import URLS from "../design-system/utils/urls";
import ContactMePage from "../modules/contact-me/pages/ContactMePage";

export const metadata: Metadata = {
  title: "Contact me",
};

export default function ContactUs() {
  return (
    <>
      <Breadcrumb
        items={[{ text: "Contact me", url: URLS.contactMe }]}
        title="Contact me"
      />
      <ContactMePage />
    </>
  );
}
