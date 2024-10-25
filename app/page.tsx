import { Metadata } from "next";
import React from "react";
import Hero from "./modules/home/components/Hero";
import AboutUs from "./modules/home/components/AboutUs";
import Services from "./modules/home/components/Services";
import Features from "./modules/home/components/Features";
import Clients from "./modules/home/components/Clients";
import Testimonials from "./modules/home/components/Testimonials";
import HomePage from "./modules/home/pages/HomePage";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return <HomePage />;
}
