"use client";

import { useSearchParams, usePathname } from "next/navigation";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { IMetaPagination } from "@/types";

interface IWordsPaginationProps {
  meta: IMetaPagination;
}

const WordsPagination = ({ meta }: IWordsPaginationProps) => {
  const { currentPage, totalPages, hasNextPage, hasPrevPage } = meta;

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber: number | null) => {
    if (!pageNumber || pageNumber <= 0) {
      return pathname;
    }

    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={createPageURL(currentPage - 1)} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={createPageURL(currentPage)}>
            {currentPage}
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={createPageURL(totalPages)}>
            {totalPages}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href={createPageURL(currentPage + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default WordsPagination;
