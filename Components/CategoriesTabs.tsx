import { ICategory } from "@/Types";
import Link from "next/link";
import { useRouter } from "next/router";
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
    <div className="border-b">
      <ul className="flex gap-5 text-gray-500 font-medium  ">
        <li
          className={`${
            router.pathname === "/"
              ? "border-b-2 border-primary text-primary"
              : "border-b-2 border-white text-gray-500"
          }`}
        >
          <Link href="#">Recent</Link>
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
    </div>
  );
};

export default CategoriesTabs;
