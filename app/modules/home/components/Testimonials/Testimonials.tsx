import SectionTitle from "@/app/design-system/components/SectionTitle";
import { BASE_API_URL } from "@/app/shared/flags";
import React from "react";
import TestimonialsList from "../TestimonialsList";
import { Testimonial } from "../../types";

async function getTestimonials() {
  const res = await fetch(`${BASE_API_URL}/testimonials?populate=*`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Testimonials() {
  const testimonials = await getTestimonials();

  if (!testimonials) return null;

  return (
    <div className="bg-haiti py-16">
      <div className="container">
        <div className="flex flex-col gap-8 items-center justify-center">
          <SectionTitle
            mainTitle="Our Clients Speak"
            subtitle="Hear from our happy customers"
            subtitleClassName="left-16"
            mainTitleClassName="lg:text-5xl"
          />
          <TestimonialsList testimonials={testimonials.data as Testimonial[]} />
        </div>
      </div>
    </div>
  );
}
