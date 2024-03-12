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
  PaginationDoublePrevious,
  PaginationDoubleNext,
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
          <PaginationDoublePrevious
            href={createPageURL(currentPage - 3)}
            disabled={!hasPrevPage || currentPage - 3 <= 0}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationPrevious
            href={createPageURL(currentPage - 1)}
            disabled={!hasPrevPage || currentPage - 1 <= 0}
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href={createPageURL(currentPage)} isActive>
            {currentPage}
          </PaginationLink>
        </PaginationItem>

        {hasNextPage && (
          <PaginationItem>
            <PaginationLink href={createPageURL(currentPage + 1)}>
              {currentPage + 1}
            </PaginationLink>
          </PaginationItem>
        )}

        {currentPage + 1 < totalPages && (
          <PaginationItem className="hidden md:block">
            <PaginationLink href={createPageURL(currentPage + 2)}>
              {currentPage + 2}
            </PaginationLink>
          </PaginationItem>
        )}

        {currentPage + 2 < totalPages && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {currentPage + 3 < totalPages && (
          <PaginationItem>
            <PaginationLink href={createPageURL(totalPages)}>
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext
            href={createPageURL(currentPage + 1)}
            disabled={!hasNextPage || currentPage + 1 > totalPages}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationDoubleNext
            href={createPageURL(currentPage + 3)}
            disabled={!hasNextPage || currentPage + 3 > totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default WordsPagination;
