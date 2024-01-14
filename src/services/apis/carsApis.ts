import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./base-headers";

const carsApi = createApi({
  reducerPath: "cars",
  baseQuery: baseQuery,
  endpoints(builder) {
    return {
      fetchCars: builder.query({
        query: (filterObj: { url: string; method: string; params: {} }) => {
          return {
            url: "cars",
            method: "GET",
            params: filterObj,
          };
        },

        providesTags: ["Cars"],
      }),
    };
  },
});

export const { useFetchCarsQuery } = carsApi;
export { carsApi };
