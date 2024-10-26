import { Metadata } from "@/app/shared/types";
import { Project } from "../../types";
import ProjectCard from "../ProjectCard";
import Pagination from "@/app/design-system/components/Pagination";
import Skelton from "@/app/design-system/components/Skelton";

export type ProjectsListingTypes = {
  projects: Project[];
  meta: Metadata;
};

export default function ProjectsListing({
  meta,
  projects,
}: ProjectsListingTypes) {
  if (!projects || !projects.length) return <Skelton />;

  return (
    <section className="container my-16">
      <div className="grid grid-cols-1 overflow-hidden lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Pagination pagination={meta.pagination} />
    </section>
  );
}
