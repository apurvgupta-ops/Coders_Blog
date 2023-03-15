import { ICategory } from "@/Types";
import Link from "next/link";
import React from "react";

interface IPropType {
  categories: ICategory[];
}

const CategoriesTabs = ({ categories }: IPropType) => {
  return (
    <div className="border-b-2">
      <ul className="flex gap-5 text-gray-500 font-medium  ">
        <li>
          <Link href="#">Recent</Link>
        </li>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href="#">{category.attributes.Title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesTabs;
