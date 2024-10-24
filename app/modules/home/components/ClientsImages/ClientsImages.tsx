"use client";

import { Client } from "../../types";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function ClientsImages({ clients }: { clients: Client[] }) {
  const { ref: clientsRef, inView: clientsInView } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      className="grid lg:grid-cols-4 gap-8 grid-cols-3 w-full"
      ref={clientsRef}
    >
      {clients.map((client) => (
        <div
          key={client.id}
          className={`${
            clientsInView &&
            "animate-jump animate-twice animate-duration-[1500ms]"
          }`}
        >
          <Image
            alt="Client"
            src={client.image.url}
            width={1000}
            height={1000}
          />
        </div>
      ))}
    </div>
  );
}
