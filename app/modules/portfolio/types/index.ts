import { Attachment, Category } from "@/app/shared/types";

export type Project = {
  id: number | string;
  images: Attachment[];
  video: Attachment[];
  name: string;
  description: string;
  categories: Category[];
  createdAt: string;
  behance: string;
};
