"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import prevArrow from "@/src/assets/images/long-prev.svg";
import nextArrow from "@/src/assets/images/long-next.svg";
import Image from "next/image";

const paginationData = [
  { page: 1, href: "#", isActive: false },
  { page: 2, href: "#", isActive: false },
  { page: 3, href: "#", isActive: true },
  { page: 4, href: "#", isActive: false },
  { page: 5, href: "#", isActive: false },
  { page: 6, href: "#", isActive: false },
  { page: 7, href: "#", isActive: false },
  { page: 8, href: "#", isActive: false },
  { page: 9, href: "#", isActive: false },
  { page: 10, href: "#", isActive: false },
];

function PaginationWithEllipsis() {
  const currentPage = paginationData.find((item) => item.isActive)?.page || 1;
  const totalPages = paginationData.length;

  const visiblePages = 3; // Number of visible pages around the current page
  const pageRange = calculatePageRange(currentPage, totalPages, visiblePages);
  return (
    <Pagination className="flex justify-between">
      {/* Previous Button */}
      <PaginationItem
        className={`list-none ${
          currentPage === 1 ? "pointer-events-none opacity-50" : ""
        }`}
      >
        <PaginationLink
          aria-label="Go to previous page"
          className={`${
            currentPage === 1
              ? "bg-[#E2E2E2] cursor-not-allowed 2xl:h-[26.67px] xl:h-[22.67px] h-[20px] flex item-center rounded-full 2xl:px-[18px] xl:px-[14px] lg:px-[13px] px-[11px] justify-center w-auto"
              : "bg-[#0066FF] 2xl:h-[26.67px] xl:h-[22.67px] h-[20px] flex item-center rounded-full 2xl:px-[18px] xl:px-[14px] lg:px-[13px] px-[11px] justify-center w-auto cursor-pointer"
          }`}
        >
          <Image
            className={`${
              currentPage === 1
                ? "filter grayscale brightness-50 2xl:w-[32px] xl:w-[24px] w-[21px]"
                : "2xl:w-[32px] xl:w-[24px] w-[21px]"
            }`}
            src={prevArrow}
            alt="Previous"
          />
        </PaginationLink>
      </PaginationItem>

      {/* Page Numbers */}
      <PaginationContent className="[&>li[aria-current='page']]:hidden">
        {pageRange.map((item, index) => {
          if (item === "...") {
            return (
              <PaginationItem key={`ellipsis-${index}`}>
                <span className="flex justify-center items-center">...</span>
              </PaginationItem>
            );
          }

          const pageData = paginationData.find((p) => p.page === item);

          return (
            <PaginationItem key={item}>
              <PaginationLink
                href={pageData?.href || "#"}
                aria-current={pageData?.isActive ? "page" : undefined}
                className={`flex justify-center items-center font-medium 2xl:text-base xl:text-[14px] text-[12px] border-0 2xl:rounded-[8px] xl:rounded-[6px] rounded-[5px] shadow-none right-0 2xl:w-[40px] xl:w-[32px] md:w-[28px] w-[25px] 2xl:h-[40px] xl:h-[32px] md:h-[28px] h-[25px] ${
                  pageData?.isActive ? "bg-[#0066FF] text-white" : ""
                }`}
              >
                {item}
              </PaginationLink>
            </PaginationItem>
          );
        })}
      </PaginationContent>

      {/* Next Button */}
      <PaginationItem
        className={`list-none ${
          currentPage === totalPages ? "pointer-events-none opacity-50" : ""
        }`}
      >
        <PaginationLink
          aria-label="Go to next page"
          className={`${
            currentPage === totalPages
              ? "bg-[#E2E2E2] cursor-not-allowed 2xl:h-[26.67px] xl:h-[22.67px] h-[20px] flex item-center rounded-full 2xl:px-[18px] xl:px-[14px] lg:px-[13px] px-[11px] justify-center w-auto"
              : "bg-[#0066FF] 2xl:h-[26.67px] xl:h-[22.67px] h-[20px] flex item-center rounded-full 2xl:px-[18px] xl:px-[14px] lg:px-[13px] px-[11px] justify-center w-auto cursor-pointer"
          }`}
        >
          <Image
            className={`${
              currentPage === totalPages
                ? "filter grayscale brightness-50 2xl:w-[32px] xl:w-[24px] w-[21px]"
                : "2xl:w-[32px] xl:w-[24px] w-[21px]"
            }`}
            src={nextArrow}
            alt="Next"
          />
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  );
}

function calculatePageRange(
  currentPage: number,
  totalPages: number,
  visiblePages: number
): (number | string)[] {
  const pages: (number | string)[] = [];
  const sidePages = Math.floor(visiblePages / 1);

  if (currentPage > 0) {
    pages.push(1);
  }

  if (currentPage > sidePages + 2) {
    pages.push("...");
  }

  for (
    let i = Math.max(2, currentPage - sidePages);
    i <= Math.min(totalPages - 1, currentPage + sidePages);
    i++
  ) {
    pages.push(i);
  }

  if (currentPage < totalPages - sidePages - 1) {
    pages.push("...");
  }

  if (currentPage < totalPages) {
    pages.push(totalPages);
  }

  return pages;
}

export default PaginationWithEllipsis;
