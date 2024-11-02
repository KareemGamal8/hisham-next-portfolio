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
  const pagination = searchParams.page
    ? `&pagination[page]=${searchParams.page}`
    : `&pagination[page]=${1}`;

  const categoryFilter = searchParams.category
    ? `&filters[categories][id][$in]=${searchParams.category}`
    : "";

  const url = `${BASE_API_URL}/projects?populate=*&pagination[pageSize]=12${pagination}${categoryFilter}`;

  const res = await fetch(url);
  if (!res.ok) {
    console.error("Failed to fetch data:", res.statusText);
    return { data: [], meta: {} };
  }
  return res.json();
}

export default async function PortfolioPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const projects = await getProjects(searchParams);

  if (!projects.data || !projects.data.length || !projects) return null;

  return (
    <>
      <Breadcrumb
        items={[{ text: "Portfolio", url: URLS.portfolio.list }]}
        title="My portfolio"
      />
      <ProjectsListing projects={projects.data} meta={projects.meta} />
    </>
  );
}
