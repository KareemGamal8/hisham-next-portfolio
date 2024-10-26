
import { BASE_API_URL } from "@/app/shared/flags";

async function getCategories() {
  const res = await fetch(`${BASE_API_URL}/categories?populate=*`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default getCategories;
