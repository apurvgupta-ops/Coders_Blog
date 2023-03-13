import axios from "axios";
import { categoriesUrl } from "./endpoints";

const api = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    Authorization: `Bearer ${process.env.TOKEN}`,
  },
});

export const getCategories = async () => {
  api.get(categoriesUrl);
};
