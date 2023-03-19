import { IArticle } from "@/Types";
import React from "react";
import Card from "./Card";
import CardWithImage from "./CardWithImage";
interface IPropType {
  articles: IArticle[];
}
const Articles = ({ articles }: IPropType) => {
  return (
    <div className="grid lg:grid-cols-2 grid-gap gap-16 mt-8">
      {articles.map((article, index) =>
        index == 1 ? (
          <CardWithImage article={article} key={article.id} />
        ) : (
          <Card article={article} key={article.id} />
        )
      )}
    </div>
  );
};

export default Articles;
