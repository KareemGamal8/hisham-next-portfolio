import logo from "@assets/icons/logo.svg";
import { headerSocialLinks } from "./data";
import HeaderDrawer from "./HeaderDrawer";
import HeaderDrawerLinks from "./HeaderDrawerLinks";
import "./styles.css";
import Link from "next/link";
import URLS from "../../utils/urls";
import Image from "next/image";
export default function MobileHeader() {
  return (
    <div className="sticky lg:hidden bg-cinder border-ebony-clay border-b-2 block top-0 left-0 right-0 z-50 animate-fade-down animate-once animate-duration-500 animate-ease-linear">
      <div>
        <div>
          <div className="container">
            <div className="flex justify-between py-2 items-center text-white">
              <Link href={URLS.home}>
                <Image src={logo} alt="logo" width={120} height={120} />
              </Link>
              <HeaderDrawer />
            </div>
          </div>
        </div>
      </div>
      <HeaderDrawerLinks />
    </div>
  );
}