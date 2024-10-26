import { Metadata } from "next";
import React from "react";
import HomePage from "./modules/home/pages/HomePage";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return <HomePage />;
}
