import { IArticle } from "@/Types";
import React from "react";
import Card from "./Card";

interface IPropType {
  articles: IArticle[];
}
const Articles = ({ articles }: IPropType) => {
  return (
    <div className="grid lg:grid-cols-2 grid-gap gap-16 mt-8">
      {articles.map((article) => (
        <Card article={article} key={article.id} />
      ))}
    </div>
  );
};

export default Articles;
