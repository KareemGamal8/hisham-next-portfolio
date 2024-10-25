import Breadcrumb from "@/app/design-system/components/Breadcrumb";
import URLS from "@/app/design-system/utils/urls";
import ProjectDetails from "@/app/modules/portfolio/components/ProjectDetails";
import ProjectMedia from "@/app/modules/portfolio/components/ProjectMedia";
import ProjectImages from "@/app/modules/portfolio/components/ProjectMedia";
import { Project } from "@/app/modules/portfolio/types";
import { BASE_API_URL } from "@/app/shared/flags";
import React from "react";

async function getProject(id: string | number) {
  const res = await fetch(
    `${BASE_API_URL}/projects?filters[id][$eq]=${id}&populate=*`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: { id: string | number };
}) {
  const data = await getProject(params.id);
  const project: Project = data.data[0];

  return {
    title: project ? project.name.split(" | ")[0] : "Project",
  };
}

export default async function SingleProjectPage({
  params,
}: {
  params: { id: string | number };
}) {
  const data = await getProject(params.id);

  const project: Project = data.data[0];

  if (!project) return null;

  const projectName = project.name.split(" | ")[0];

  return (
    <>
      <Breadcrumb
        items={[
          { text: "Portfolio", url: URLS.portfolio.list },
          { text: projectName, url: URLS.portfolio.viewProject(project) },
        ]}
        title={projectName}
      />
      <ProjectDetails project={project} />
      <ProjectMedia project={project} />
    </>
  );
}
