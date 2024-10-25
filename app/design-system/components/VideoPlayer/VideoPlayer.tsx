"use client";

import React from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer({ video }: { video: string }) {
  return (
    <div>
      <ReactPlayer
        width="100%"
        url={video}
        controls={true}
        light={false}
        pip={true}
      />
      {/* <source src={video} type="video/mp4" /> */}
    </div>
  );
}
