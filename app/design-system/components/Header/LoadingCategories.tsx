import { IconLoader2 } from "@tabler/icons-react";
import React from "react";

export default function LoadingCategories() {
  return (
    <div className="flex justify-center items-center my-4">
      <IconLoader2
        size={35}
        stroke={2.2}
        className="animate-spin animate-infinite animate-duration-[1500ms] animate-ease-linear text-violet-red"
      />
    </div>
  );
}
