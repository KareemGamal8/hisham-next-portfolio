import { Attachment } from "@/app/shared/types";

export type Client = {
  id: number | string;
  image: Attachment;
};

export type Testimonial = {
  id: number | string;
  review: string;
  name: string;
  job: string;
};
