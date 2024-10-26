import Link from "next/link";
import { headerAtom } from "../../atoms";
import { cn } from "../../utils/cn";
import { headerSocialLinks, linksData } from "./data";

export default function HeaderDrawerLinks() {
  const opened = headerAtom.useOpened();

  return (
    <div
      className={cn(
        "absolute z-60 bg-cinder border-0 border-ebony-clay left-0 w-full grid grid-rows-[0fr] transition-all duration-500",
        opened && "grid-rows-[1fr] border-2 rounded-b-lg shadow-xl"
      )}
    >
      <div className="transition-all overflow-hidden">
        <div className="flex flex-col items-center text-white">
          {linksData.map((link, index) => (
            <Link
              key={index}
              onClick={headerAtom.close}
              href={link.route}
              className={`text-md py-4 hover:bg-black-rose transition-all duration-500 font-bold text-center w-full ${
                index > 0 &&
                "border-y-[0.5px] border-y-ebony-clay border-opacity-50"
              }`}
            >
              {link.text}
            </Link>
          ))}
          <div>
            <div className="flex gap-8 py-4 items-center">
              {headerSocialLinks.map((link, index) => {
                const { Icon, url } = link;
                return (
                  <Link key={index} href={url} target="_blank">
                    <Icon
                      className="transition-all hover:text-violet-red"
                      size={28}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
