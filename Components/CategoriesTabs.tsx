import { ICategory } from "@/Types";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiSearchAlt } from "react-icons/bi";
import React from "react";

interface IPropType {
  categories: ICategory[];
}

const CategoriesTabs = ({ categories }: IPropType) => {
  const router = useRouter();

  const isActiveLink = (category: ICategory) => {
    return category.attributes.Slug === router.query.category;
  };

  return (
    <div className="border-b flex justify-between">
      <ul className="flex gap-5 text-gray-500 font-medium  ">
        <li
          className={`${
            router.pathname === "/"
              ? "border-b-2 border-primary text-primary"
              : "border-b-2 border-white text-gray-500"
          }`}
        >
          <Link href="/">Recent</Link>
        </li>
        {categories.map((category) => (
          <li
            key={category.id}
            className={`${
              isActiveLink(category)
                ? "border-b-2 border-primary text-primary"
                : "border-b-2 border-white text-gray-500"
            }`}
          >
            <Link href={`/category/${category.attributes.Slug}`}>
              {category.attributes.Title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex border gap-2 rounded-md px-1 py-1">
        <BiSearchAlt className="flex justify-center items-center" size={20} />
        <input
          placeholder="Search Article"
          className="border outline-none border-none"
        />
      </div>
    </div>
  );
};

export default CategoriesTabs;
