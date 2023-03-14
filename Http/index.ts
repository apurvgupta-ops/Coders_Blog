import axios from "axios";
import { categoriesUrl } from "./Endpoints";

const api = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    Authorization: `Bearer ${process.env.TOKEN}`,
  },
});

export const getCategories = async () => api.get(categoriesUrl);

