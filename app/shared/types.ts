export type Attachment = {
  id: string | number;
  extension: string;
  url: string;
  fileName: string;
  mimeType: string;
  relativePath: string;
  hash: string;
  size: number;
};

export type Category = {
  id: number | string;
  name: string;
  color: string;
};

export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type Metadata = {
  pagination: Pagination;
};
