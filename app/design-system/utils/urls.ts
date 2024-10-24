// append urls here, DO NOT remove this line

import { Project } from "@/app/modules/portfolio/types";

const URLS = {
  home: "/",
  aboutUs: "/about-us",
  notFound: "/404",
  services: "/services",
  portfolio: {
    list: "/portfolio",
    viewProject: (project: Project) => `/portfolio/${project.id}`,
  },
  contactMe: "/contact-me",
};

export default URLS;
