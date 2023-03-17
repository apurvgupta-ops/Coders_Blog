import { getArticles, getCategories } from "@/Http";
import { AxiosResponse } from "axios";
import { IArticle, ICategory, ICollectionResponse } from "@/Types";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import CategoriesTabs from "@/Components/CategoriesTabs";
import Category from "./category/[category]";

interface IPropTypes {
  categories: {
    items: ICategory[];
  };
  articles: {
    items: IArticle[];
  };
}

const Home: NextPage<IPropTypes> = ({ categories, articles }) => {
  console.log(articles.items);
  return (
    <>
      <Head>
        <title>Coders Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Categories */}
      <CategoriesTabs categories={categories.items} />

      {/* Articles */}
      <Category articles={articles.items} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  //Article
  const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> =
    await getArticles();

  //Categories
  const { data: categories }: AxiosResponse<ICollectionResponse<ICategory[]>> =
    await getCategories();

  console.log(categories);
  return {
    props: {
      categories: {
        items: categories.data,
      },

      articles: {
        items: articles.data,
        pagination: articles.meta.pagination,
      },
    },
  };
};

export default Home;
