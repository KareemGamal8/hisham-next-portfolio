import { IconBrandWhatsapp } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function WhatsappButton() {
  const [toTop, setToTop] = useState(true);

  useEffect(() => {
    const affixHandler = () => {
      setToTop(window.scrollY <= 250);
    };

    window.addEventListener("scroll", affixHandler);
    return () => window.removeEventListener("scroll", affixHandler);
  }, []);

  return (
    <a
      className={`border-[3px] animate-fade-right animate-duration-500 animate-ease-in-out border-[#51cf66] fixed pt-2 pb-[0.6rem] pe-2 ps-[0.6rem] cursor-pointer bottom-3 left-5 z-60 w-fit rounded-full ${toTop ? "hidden" : "block"}`}
      href={`https://wa.me/+201062352956`}
      target="_blank"
      rel="noopener noreferrer">
      <IconBrandWhatsapp color="#51cf66" stroke={2.5} size={28} />
    </a>
  );
}
