import { TDirection } from "@/Types";
import React from "react";

interface IPropType {
  page: number;
  pageCount: number;
}

const Pagination = ({ page, pageCount }: IPropType) => {
  const isNextDisabled = (): boolean => {
    return page >= pageCount;
  };

  const isPrevDisabled = (): boolean => {
    return page <= 1;
  };

  const handlePaginate = async (direction: TDirection) => {
    if (direction === 1 && isNextDisabled()) return;
    if (direction === -1 && isPrevDisabled()) return;
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
