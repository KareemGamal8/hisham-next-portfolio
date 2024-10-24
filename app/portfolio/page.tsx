import { Metadata } from "next";
import React from "react";
import { BASE_API_URL } from "../shared/flags";
import ProjectsListing from "../modules/portfolio/components/ProjectsListing";
import Breadcrumb from "../design-system/components/Breadcrumb";
import URLS from "../design-system/utils/urls";

export const metadata: Metadata = {
  title: "Portfolio",
};

export type PostPageParams = {
  params: {
    id: number;
  };
};

async function getProjects(searchParams: {
  [key: string]: string | string[] | undefined;
}) {
  const res = await fetch(
    `${BASE_API_URL}/projects?populate=*&pagination[pageSize]=12&pagination[page]=${
      searchParams.page || 1
    }`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function PortfolioPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const projects = await getProjects(searchParams);

  return (
    <>
      <Breadcrumb
        items={[
          { text: "Portfolio", url: URLS.portfolio.list },
        ]}
        title="My portfolio"
      />
      <ProjectsListing projects={projects.data} meta={projects.meta} />
    </>
  );
}
