import axios from "axios";

const unsplashAccessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const baseURL = import.meta.env.VITE_BASE_URL;

export const unsplash = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: `Client-ID ${unsplashAccessKey}`,
  },
});
