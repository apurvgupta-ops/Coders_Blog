import { IArticle } from "@/Types";
import { formatDate } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

interface IPropType {
  article: IArticle;
}

const Card = ({ article }: IPropType) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/article/${article.attributes.Slug}`);
  };
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.99 }}
      className=" hover:bg-gray-50 rounded-lg p-4 cursor-pointer"
      onClick={handleClick}
    >
      <Link href={`/article/${article.attributes.Slug}`}>
        <h1 className="font-semibold text-lg hover:decoration-2 hover:underline hover:decoration-primary hover:cursor-pointer ">
          {article.attributes.Title}
        </h1>
        <div className="flex justify-between">
          {/* <Image
            src={`${process.env.API_URL}${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`}
            height={40}
            width={40}
            alt="Avatar Image"
          /> */}
          <span className="text-sm text-gray-600">
            {article.attributes.author.data.attributes.firstname}
            &nbsp;
            {article.attributes.author.data.attributes.lastname}
          </span>
          <span className="text-gray-400 text-xs">
            {formatDate(article.attributes.createdAt)}
          </span>
        </div>

        <div>
          {article.attributes.shortDescription.slice(0, 250)}
          {article.attributes.shortDescription.length > 250 ? "..." : ""}
        </div>
      </Link>
    </motion.div>
  );
};

export default Card;
