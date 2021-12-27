import axios from "axios";
import { STORE_API } from "./constants";
import { QueryClient } from "react-query";

export const PRODUCT_AXIOS = axios.create({
  baseURL: STORE_API,
});
// Create a client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
