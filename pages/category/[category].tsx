import { getCategories } from "@/Http";
import { GetServerSideProps } from "next";
import { AxiosResponse } from "axios";
import { ICategory, ICollectionResponse, IPagination } from "@/Types";
import Head from "next/head";
import React from "react";
import CategoriesTabs from "@/Components/CategoriesTabs";

interface IPropType {
  categories: {
    items: ICategory[];
    pagination: IPagination;
  };
}

const category = ({ categories }: IPropType) => {
  return (
    <div>
      <Head>
        <title>Coders Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* //Articles Based on category */}
      <CategoriesTabs categories={categories.items} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  //Categories
  const { data: categories }: AxiosResponse<ICollectionResponse<ICategory[]>> =
    await getCategories();

  // console.log(categories);
  return {
    props: {
      categories: {
        items: categories.data,
        pagination: categories.meta.pagination,
      },
    },
  };
};
export default category;
