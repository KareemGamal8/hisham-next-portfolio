import { Metadata } from "next";
import React from "react";
import { BASE_API_URL } from "../shared/flags";
import ProjectsListing from "../modules/portfolio/components/ProjectsListing";

export const metadata: Metadata = {
  title: "Portfolio",
};

async function getProjects() {
  const res = await fetch(`${BASE_API_URL}/projects?populate=*`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <ProjectsListing projects={projects.data} metadata={projects.metadata} />
  );
}
