"use client";

import { Pagination as PaginationTypes } from "@/app/shared/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getPaginationNumbers } from "../../utils/getPaginationNumbers";
import {
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
  IconDots,
} from "@tabler/icons-react";

export default function Pagination({
  pagination,
}: {
  pagination: PaginationTypes;
}) {
  const searchParams = useSearchParams();

  const router = useRouter();

  const pathname = usePathname();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", page.toString());

    router.push(`${pathname}?${params.toString()}`);
  };

  const totalPages = getPaginationNumbers(
    pagination.page,
    pagination.pageCount
  );

  if (pagination.total) return null;

  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      <button
        onClick={() => handlePageChange(pagination.page - 1)}
        className="border-[3px] border-ebony-clay flex justify-center items-center text-white min-w-10 font-semibold min-h-10 rounded-full disabled:opacity-50"
        disabled={pagination.page === 1}
      >
        <IconChevronsLeft color="#fff" size={20} />
      </button>
      {pagination.page > 3 && (
        <>
          <button
            onClick={() => handlePageChange(1)}
            className={`border-[3px] border-ebony-clay text-white min-w-10 font-semibold min-h-10 rounded-full ${
              pagination.page === 1 && "bg-ebony-clay border-0"
            }`}
          >
            1
          </button>
          <IconDots className="w-4" color="#fff" />
        </>
      )}
      {totalPages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`border-[3px] border-ebony-clay text-white min-w-10 font-semibold min-h-10 rounded-full ${
            pagination.page === page && "bg-ebony-clay border-0"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(pagination.page + 1)}
        className="border-[3px] border-ebony-clay flex justify-center items-center disabled:opacity-50 text-white min-w-10 font-semibold min-h-10 rounded-full"
        disabled={pagination.page === pagination.pageCount}
      >
        <IconChevronsRight color="#fff" size={20} />
      </button>
    </div>
  );
}
