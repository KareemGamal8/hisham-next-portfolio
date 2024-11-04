"use client";

import { IconBrandWhatsapp } from "@tabler/icons-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function WhatsappButton() {
  return (
    <Link
      className="border-4 animate-fade-right animate-duration-500 animate-ease-in-out bg-white border-[#51cf66] fixed pt-2 pb-[0.6rem] pe-2 ps-[0.6rem] cursor-pointer bottom-8 lg:left-5 left-2 z-50 w-fit rounded-full"
      href={`https://wa.me/+201062352956`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconBrandWhatsapp color="#51cf66"  stroke={2} size={33} />
    </Link>
  );
}
