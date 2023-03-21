import { TDirection } from "@/Types";
import { useRouter } from "next/router";
import QueryString from "qs";
import React from "react";

interface IPropType {
  page: number;
  pageCount: number;
  redirectUrl?: string;
}

const Pagination = ({ page, pageCount, redirectUrl = "/" }: IPropType) => {
  const router = useRouter();

  const isNextDisabled = (): boolean => {
    return page >= pageCount;
  };

  const isPrevDisabled = (): boolean => {
    return page <= 1;
  };

  const handlePaginate = async (direction: TDirection) => {
    if (direction === 1 && isNextDisabled()) return;
    if (direction === -1 && isPrevDisabled()) return;

    const queryString = QueryString.stringify({
      ...router.query,
      page: page + direction,
    });

    router.push(`${redirectUrl}?${queryString}`);
  };

  return (
    <div className="mt-32 text-white flex items-center justify-center ">
      <button
        onClick={() => handlePaginate(-1)}
        className={`${"bg-primary px-2 py-1 rounded-md hover:bg-primary-dark mr-4"}  ${
          isPrevDisabled() ? "disabled" : ""
        }`}
      >
        Previous
      </button>
      <button
        onClick={() => handlePaginate(1)}
        className={`${"bg-primary px-5 py-1 rounded-md hover:bg-primary-dark"}  ${
          isNextDisabled() ? "disabled" : ""
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
