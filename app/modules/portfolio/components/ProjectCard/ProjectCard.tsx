import Image from "next/image";
import { Project } from "../../types";
import Link from "next/link";
import { IconCalendarEvent, IconCalendarMonth } from "@tabler/icons-react";
import URLS from "@/app/design-system/utils/urls";

export default function ProjectCard({ project }: { project: Project }) {
  const date = new Date(project.createdAt);

  const options = { year: "numeric", month: "long", day: "numeric" };

  return (
    <div className="p-4 rounded-2xl flex flex-col gap-4 hover:bg-white hover:bg-opacity-5 transition-all duration-500">
      <Link
        href={URLS.portfolio.viewProject(project)}
        className="sm:h-72 h-64 overflow-hidden rounded-2xl"
      >
        <Image
          src={project.images[0].url}
          width={700}
          height={700}
          alt={project.name}
          className="h-full rounded-2xl object-cover hover:scale-[1.1] transition duration-500 hover:grayscale-[0.5]"
        />
      </Link>
      <div className="flex flex-col gap-2">
        <Link
          href={URLS.portfolio.viewProject(project)}
          className="text-md font-semibold text-white"
        >
          {project.name}
        </Link>
        <div className="flex gap-2 flex-wrap items-center">
          {project.categories.map((category) => (
            <span
              key={category.id}
              className="text-white text-[0.55rem] font-semibold !bg-opacity-50 uppercase py-1 px-2 rounded-lg"
              style={{
                background: `#${category.color}`,
              }}
            >
              {category.name}
            </span>
          ))}
        </div>
        <div
          className="text-white text-opacity-40 truncate text-xs"
          dangerouslySetInnerHTML={{
            __html: project.description.replace(
              /\*\*(.*?)\*\*/g,
              "<strong>$1</strong>"
            ),
          }}
        />
        <div className="flex items-end gap-1 mt-auto">
          <IconCalendarMonth color="#ffffffab" size={18} />
          <p className="text-[0.65rem] font-semibold text-white text-opacity-70">
            {date.toLocaleDateString("en-US", options as any)}
          </p>
        </div>
      </div>
    </div>
  );
}
