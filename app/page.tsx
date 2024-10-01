import { Metadata } from "next";
import React from "react";
import Hero from "./modules/home/components/Hero";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
