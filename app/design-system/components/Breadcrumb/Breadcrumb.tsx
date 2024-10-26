"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { Items } from "../../types";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import URLS from "../../utils/urls";

type AboutUsTypes = {
  items: Items[];
  title: string;
};

export default function Breadcrumb({ items, title }: AboutUsTypes) {
  const searchParams = useSearchParams();

  const theTitle = searchParams.get("q")
    ? `Search Results: "${searchParams.get("q")}"`
    : title;

  return (
    <div className="mb-4 flex-col  text-center w-full bg-breadcrumb-background flex gap-4 justify-center items-center relative overflow-hidden py-12">
      <div className="absolute inset-0 h-full -z-10 w-full bg-breadcrumb-background"></div>
      <div className="container">
        <div className="flex flex-col gap-4 items-center justify-center">
          <h3 className="text-white uppercase text-2xl md:text-4xl font-semibold truncate">
            {theTitle}
          </h3>
          <div className="flex items-center flex-wrap gap-2 text-silver text-[0.9rem] text-white">
            <Link href={URLS.home} className="pointer">
              Home
            </Link>
            <span>{<IconArrowRight width={12} height={12} />}</span>
            {items?.map((item, index) => (
              <React.Fragment key={index}>
                <Link href={item.url} className="pointer">
                  {item.text}
                </Link>
                {index < items.length - 1 && (
                  <span>{<IconArrowRight width={12} height={12} />}</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
