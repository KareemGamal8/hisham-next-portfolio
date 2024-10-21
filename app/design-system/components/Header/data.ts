import {
  IconBrandBehance,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import URLS from "../../utils/urls";

export const linksData = [
  {
    text: "Home",
    route: URLS.home,
  },
  {
    text: "Portfolio",
    route: URLS.portfolio.list,
  },
];

export const headerSocialLinks = [
  {
    Icon: IconBrandFacebook,
    url: "https://www.facebook.com/profile.php?id=100009526762239",
  },
  {
    Icon: IconBrandInstagram,
    url: "https://www.instagram.com/hisham_designer_0/",
  },
  {
    Icon: IconBrandLinkedin,
    url: "https://www.linkedin.com/in/hisham-ashraf-8894b0222/",
  },
  {
    Icon: IconBrandBehance,
    url: "https://www.behance.net/Hisham19",
  },
];
