"use client";

import PrimaryButton from "@/app/design-system/buttons/PrimaryButton";
import { Project } from "@/app/modules/portfolio/types";
import { IconCalendarMonth } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProjectDetails({ project }: { project: Project }) {
  const date = new Date(project.createdAt);

  const options = { year: "numeric", month: "long", day: "numeric" };

  const router = useRouter();

  return (
    <div className="container">
      <div className="grid grid-cols-12 items-center gap-6">
        <div className="lg:col-span-4 col-span-full overflow-hidden rounded-2xl">
          <Image
            src={project.images[0].url}
            width={700}
            height={700}
            alt={project.name}
            className="h-full rounded-2xl object-cover transition duration-500"
          />
        </div>
        <div className="flex flex-col gap-4 lg:col-span-8 col-span-full">
          <h4 className="text-xl font-semibold text-white">{project.name}</h4>
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
            className="text-white text-sm"
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
          {project.behance && (
            <Link href={project.behance} className="w-fit" target="_blank">
              <PrimaryButton className="font-meidum capitalize py-2">
                Project On Behance
              </PrimaryButton>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
