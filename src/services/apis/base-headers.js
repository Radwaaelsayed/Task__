import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const baseQuery = fetchBaseQuery({
  baseUrl: "https://myfakeapi.com/api/",
  prepareHeaders: (headers, { getState }) => {
    // If we have a token set in state, let's assume that we should be passing it.

    return headers;
  },
});
