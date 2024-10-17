import { Metadata } from "@/app/shared/types";
import { Project } from "../../types";
import ProjectCard from "../ProjectCard";

export type ProjectsListingTypes = {
  projects: Project[];
  metadata: Metadata;
};

export default function ProjectsListing({
  metadata,
  projects,
}: ProjectsListingTypes) {
  return (
    <section className="container my-16">
      <div className="grid grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
