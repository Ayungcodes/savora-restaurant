import axios from "axios";

const UNSPLASH_ACCESS_KEY = "EmcI8h3vUaTxVKMf9_T_QRDnp_cBpCrtmMPJafC2wRI";

export const unsplash = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
  },
});
