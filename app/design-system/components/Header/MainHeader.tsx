import logo from "@assets/icons/logo.svg";
import { headerSocialLinks, linksData } from "./data";
import "./styles.css";
import URLS from "../../utils/urls";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function MainHeader() {
  const pathname = usePathname();

  return (
    <div className="lg:block hidden bg-cinder sticky top-0 z-50 left-0 right-0 animate-fade-down animate-once animate-duration-700 delay-300 animate-ease-linear">
      <div className="container">
        <div className="flex justify-between py-2 items-center">
          <Link href={URLS.home}>
            <Image src={logo} alt="logo" width={130} className="w-24" />
          </Link>
          <div className="flex gap-4 items-center">
            {linksData.map((link, index) => (
              <Link
                key={index}
                href={link.route}
                className={`relative text-sm font-medium pb-1 after:h-[2px] text-white after:bg-violet-red after:absolute after:w-0  after:bottom-0 after:left-0 ${
                  pathname !== link.route
                    ? "hover:after:w-[70%] after:transition-all after:duration-300"
                    : "after:w-[70%]"
                }`}
              >
                {link.text}
              </Link>
            ))}
            <div className="bg-gray-400 h-8 w-[1px]"></div>
            <div className="flex gap-4 items-center">
              {headerSocialLinks.map((link, index) => {
                const { Icon, url } = link;
                return (
                  <Link key={index} href={url} target="_blank">
                    <Icon className="hover:text-violet-red text-white hover:transition-all hover:duration-300" />
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
