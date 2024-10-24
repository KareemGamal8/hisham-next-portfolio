"use client";

import { useInView } from "react-intersection-observer";
import { servicesData } from "../../data";
import SectionTitle from "@/app/design-system/components/SectionTitle";
import Link from "next/link";

export default function Services() {
  const { ref: cardsRef, inView: cardsReview } = useInView({
    triggerOnce: true,
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
            subtitleClassName="lg:left-[18%] left-[25%] w-full"
            mainTitleClassName="text-5xl"
          />
        </div>
        <div
          ref={cardsRef}
          className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-16 mt-16"
        >
          {servicesData.map((service, index) => {
            const { Icon, description, text } = service;

            return (
              <div
                key={index}
                className="bg-ebony-clay rounded-lg relative p-4 hover:bg-violet-red duration-500 transition-all service-card ease-linear"
              >
                <div className="p-3 rounded-full left-[50%] -top-8 translate-x-[-50%] bg-ebony-clay transition-all duration-500 absolute border-[6px] service-icon ease-linear">
                  <Icon color="white" size={26} />
                </div>
                <div className="flex flex-col justify-between h-full items-center gap-2">
                  <div className="flex flex-col gap-2 text-center justify-center items-center mt-6">
                    <h3 className="text-white text-xl uppercase font-bold italic">
                      {text}
                    </h3>
                    <p className="text-white text-sm leading-6">
                      {description}
                    </p>
                  </div>
                  <Link
                    href=""
                    className="text-white border-b font mt-auto cursor-pointer font-semibold text-md border-white"
                  >
                    See more details →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
