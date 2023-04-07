import { IArticle } from "@/Types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

interface IPropType {
  article: IArticle;
}

const CardWithImage = ({ article }: IPropType) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/article/${article.attributes.Slug}`);
  };
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.99 }}
      className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-cyan-500 h-36 rounded-lg cursor-pointer"
      onClick={handleClick}
    >
      <Link href={`/article/${article.attributes.Slug}`}>
        <span className=" w-2/3 items-center p-2 text-xl font-semibold after:content-[''] after:bg-primary after:block after:w-16 after:h-1 after-rounded-md after:mt-2 after:ml-2 ">
          {article.attributes.Title}
        </span>
      </Link>
      <Image
        src="/pie.png"
        height={100}
        width={100}
        alt="image"
        className="mx-4"
      />
    </motion.div>
  );
};

export default CardWithImage;
``;
