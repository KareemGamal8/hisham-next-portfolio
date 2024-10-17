"use client";

import { useInView } from "react-intersection-observer";
import { servicesData } from "../../data";
import SectionTitle from "@/app/design-system/components/SectionTitle";
import Link from "next/link";

export default function Services() {
  const { ref: cardsRef, inView: cardsReview } = useInView({
    triggerOnce: false,
  });

  return (
    <div
      className={`bg-haiti py-16 ${
        cardsReview && "animate-fade-down animate-duration-[1500ms]"
      }`}
    >
      <div className="container">
        <div className="flex justify-center items-center">
          <SectionTitle
            mainTitle="Services"
            subtitle="What do i offer?"
            subtitleClassName="left-5"
            mainTitleClassName="text-5xl"
          />
        </div>
        <div
          ref={cardsRef}
          className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 gap-16 mt-16"
        >
          {servicesData.map((service, index) => {
            const { Icon, description, text } = service;

            return (
              <div
                key={index}
                className="bg-violet-red rounded-lg text-center flex justify-center flex-col gap-4 items-center p-8"
              >
                <div className="p-3 rounded-full -mt-16 bg-violet-red border-[6px] outline-haiti">
                  <Icon color="white" size={26} />
                </div>
                <h3 className="text-white text-2xl uppercase font-bold">
                  {text}
                </h3>
                <p className="text-white font-semibold leading-8">
                  {description}
                </p>
                <Link
                  href=""
                  className="text-white border-b cursor-pointer font-medium text-sm border-white"
                >
                  See more details →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
