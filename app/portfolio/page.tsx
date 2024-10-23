import { Metadata } from "next";
import React from "react";
import { BASE_API_URL } from "../shared/flags";
import ProjectsListing from "../modules/portfolio/components/ProjectsListing";

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
    }`,
    {
      cache: "no-store",
    }
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

  return <ProjectsListing projects={projects.data} meta={projects.meta} />;
}
