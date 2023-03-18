import { IArticle } from "@/Types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IPropType {
  article: IArticle;
}

const Card = ({ article }: IPropType) => {
  return (
    <div className="">
      <Link href={"#"}>
        <h1 className="font-semibold text-lg hover:decoration-2 hover:underline hover:decoration-primary hover:cursor-pointer ">
          {article.attributes.Title}
        </h1>
        <div>
          {/* <Image
            src={`${process.env.API_URL}${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`}
            height={40}
            width={40}
            alt="Avatar Image"
          /> */}
          <span>
            {article.attributes.author.data.attributes.firstname}
            {""}
            {article.attributes.author.data.attributes.lastname} on
          </span>
          <span>{article.attributes.createdAt}</span>
        </div>
      </Link>
    </div>
  );
};

export default Card;
