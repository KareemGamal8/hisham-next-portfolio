import React, { useEffect, useState } from "react";
import { BASE_API_URL } from "@/app/shared/flags";
import { Category } from "@/app/shared/types";
import { useRouter } from "next/navigation";
import LoadingCategories from "./LoadingCategories";
import URLS from "../../utils/urls";

export default function CategoriesList() {
  const router = useRouter();

  const [categories, setCategories] = useState<Category[]>([]);

  const [loading, setLoading] = useState(true);
  
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${BASE_API_URL}/categories?populate=*`);
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        setCategories(data.data || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <LoadingCategories />;
  }

  const handleCategoryClick = (categoryId: number) => {
    setActiveCategory(categoryId);
    router.push(`${URLS.portfolio.list}?category=${categoryId}`);
  };

  return (
    <div className="flex flex-col gap-1 text-white text-sm">
      {categories.map((category) => (
        <button
          onClick={() => handleCategoryClick(category.id as number)}
          key={category.id}
          className={`hover:bg-violet-red capitalize hover:bg-opacity-85 p-2 transition-all ${
            activeCategory === category.id &&
            "bg-violet-red bg-opacity-85 font-semibold"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
