"use client";

import PrimaryButton from "@/app/design-system/buttons/PrimaryButton";
import SectionTitle from "@/app/design-system/components/SectionTitle";
import Link from "next/link";
// import cv from "../../../../../public/hesham.pdf";
import { useInView } from "react-intersection-observer";

export default function AboutUs() {
  const { ref: aboutUsRef, inView: aboutUsReview } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="bg-[#180b218c] py-16">
      <div className="container">
        <div
          ref={aboutUsRef}
          className={`relative ${
            aboutUsReview && "animate-fade-right animate-duration-[1500ms]"
          }`}
        >
          <div className="flex flex-col gap-6">
            <SectionTitle mainTitle="About Me" subtitle="Who I am!" />
            <p className="text-white text-lg font-medium">
              I am a Graphic Designer From Egypt with experience +4 years and my
              goal is to share my art with people all over the world. I enjoy
              new and challenging projects that drive me to learn more about
              design in general. My passion for creating visually stunning and
              impactful designs, combined with my strong technical skills and
              attention to detail, allows me to bring unique and innovative
              solutions to every project.
            </p>
            <Link
              href="https://drive.google.com/file/d/1Xy1f7k1Ab86cLrDWNePu1Xglr_sM5Ta7/view"
              className="w-fit"
              target="_blank"
            >
              <PrimaryButton className="text-md font-semibold capitalize py-4">
                See my resume
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
