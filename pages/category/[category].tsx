import { IArticle } from "@/Types";
import React from "react";

interface IPropType {
  articles: IArticle[];
}
const category = ({ articles }: IPropType) => {
  return (
    <div>
      {articles.map((article) => (
        <div className="" key={article.id}>
          {article.attributes.body}
        </div>
      ))}
    </div>
  );
};

export default category;
