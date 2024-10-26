"use client";

import { IconChevronDown } from "@tabler/icons-react";
import React, { useEffect, useRef, useState } from "react";
import CategoriesList from "./CategoriesList";

export default function CategoriesMenu() {
  const [openMenu, setOpenMenu] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        className="flex relative pb-1 gap-2 items-center text-white text-sm font-medium"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <span>Categories</span>
        <IconChevronDown
          size={20}
          strokeWidth={2.5}
          className={`${openMenu ? "rotate-180" : ""} transition-transform`}
        />
      </button>
      <div
        ref={menuRef}
        className={`absolute max-h-44 overflow-y-auto rounded-md z-40 left-[50%] translate-x-[-50%] w-40 bg-cinder border-2 border-ebony-clay transition-all duration-300 ${
          openMenu
            ? "opacity-100 translate-y-2"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <CategoriesList />
      </div>
    </div>
  );
}
