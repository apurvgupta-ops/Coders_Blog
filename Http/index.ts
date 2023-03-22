import axios from "axios";
import { articleUrl, categoriesUrl } from "./Endpoints";

const api = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    Authorization: `Bearer ${process.env.TOKEN}`,
  },
});

export const getCategories = async () => api.get(categoriesUrl);
export const getArticles = async (queryString: string) =>
  api.get(`${articleUrl}?${queryString}`);

export const fetchArticleBySlug = async (queryString: string) =>
  api.get(`${articleUrl}?${queryString}`);
