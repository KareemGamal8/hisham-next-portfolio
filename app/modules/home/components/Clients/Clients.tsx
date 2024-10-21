import SectionTitle from "@/app/design-system/components/SectionTitle";
import { BASE_API_URL } from "@/app/shared/flags";
import { Client } from "../../types";
import Image from "next/image";

async function getClients() {
  const res = await fetch(`${BASE_API_URL}/clients?populate=*`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Clients() {
  const clientsList = await getClients();

  const clients: Client[] = clientsList.data;

  if (!clients) return null;

  return (
    <div className="py-16">
      <div className="container">
        <div className="flex flex-col gap-8 items-center justify-center">
          <SectionTitle
            mainTitle="Journey Partners"
            subtitle="Building success together"
            subtitleClassName="left-0 lg:translate-x-[45%] translate-x-[40%]"
            mainTitleClassName="lg:text-5xl"
          />
          <div className="grid lg:grid-cols-4 gap-8 grid-cols-3 w-full">
            {clients.map((client) => (
              <div key={client.id} className="w-full flex justify-center items-center">
                <Image
                  alt="Client"
                  src={client.image.url}
                  className="w-[80%]"
                  width={1000}
                  height={1000}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
