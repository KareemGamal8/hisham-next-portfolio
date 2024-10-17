import Image from "next/image";
import { Project } from "../../types";
import Link from "next/link";
import { IconCalendarEvent, IconCalendarMonth } from "@tabler/icons-react";

export default function ProjectCard({ project }: { project: Project }) {
  const date = new Date(project.createdAt);

  const options = { year: "numeric", month: "long", day: "numeric" };

  return (
    <div className="p-4 rounded-2xl flex flex-col gap-4 hover:bg-white hover:bg-opacity-5 transition-all duration-500">
      <Link href="" className="sm:h-72 h-64 overflow-hidden rounded-2xl">
        <Image
          src={project.images[0].url}
          width={1000}
          height={1000}
          alt={project.name}
          className="h-full rounded-2xl object-cover hover:scale-[1.1] transition duration-500 hover:grayscale-[0.5]"
        />
      </Link>
      <div className="flex flex-col gap-2">
        <Link href="" className="text-lg font-semibold text-white">
          {project.name}
        </Link>
        <div
          className="text-white text-opacity-40 truncate text-xs"
          dangerouslySetInnerHTML={{
            __html: project.description.replace(
              /\*\*(.*?)\*\*/g,
              "<strong>$1</strong>"
            ),
          }}
        />
        <div className="flex items-end gap-1">
          <IconCalendarMonth color="#ffffffab" size={18} />
          <p className="text-[0.65rem] font-semibold text-white text-opacity-70">
            {date.toLocaleDateString("en-US", options as any)}
          </p>
        </div>
      </div>
    </div>
  );
}
