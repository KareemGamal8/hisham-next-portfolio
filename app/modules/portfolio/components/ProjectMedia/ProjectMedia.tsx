"use client";

import React from "react";
import { Project } from "../../types";
import Image from "next/image";
import Player from "next-video/player";

export default function ProjectMedia({ project }: { project: Project }) {
  return (
    <div className="my-12">
      <div className="container">
        <div className="flex flex-col lg:w-[45%] m-auto items-center justify-center gap-4">
          {project.images.map((image) => (
            <Image
              key={image.id}
              loading="lazy"
              src={image.url}
              alt={project.images[0].url}
              width={1000}
              height={1000}
              className="rounded-2xl"
            />
          ))}
          {project.video &&
            project.video.map((video) => (
              <div
                className="h-[70vh] rounded-2xl overflow-hidden w-full"
                key={video.id}
                onContextMenu={(event) => event.preventDefault()}
              >
                <Player src={video.url} className="w-full h-full" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
