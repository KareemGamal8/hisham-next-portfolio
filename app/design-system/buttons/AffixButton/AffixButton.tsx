import { IconArrowUp } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function AffixButton() {
  const [toTop, setToTop] = useState(true);

  useEffect(() => {
    const affixHandler = () => {
      setToTop(window.scrollY <= 250);
    };

    window.addEventListener("scroll", affixHandler);
    return () => window.removeEventListener("scroll", affixHandler);
  }, []);

  const affixScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`border-4 animate-fade-left animate-duration-500 animate-ease-in-out border-violet-red fixed p-2 cursor-pointer bottom-3 right-5 z-60 w-fit rounded-full ${toTop ? "hidden" : "block"}`}
      onClick={affixScroll}>
      <IconArrowUp color="#CB1E68" />
    </button>
  );
}
