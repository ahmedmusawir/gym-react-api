import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const makeApiCall = (url) => ({
  url,
});

const baseUrl = 'https://dummyjson.com';

export const dummyJsonApi = createApi({
  reducerPath: 'dummyJsonApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => makeApiCall(`/products`),
    }),
    getSingleProduct: builder.query({
      query: (id) => makeApiCall(`/products/${id}`),
    }),
    getProductCategories: builder.query({
      query: (id) => makeApiCall(`/products/categories`),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useGetProductCategoriesQuery,
} = dummyJsonApi;

// RAPID API CODE SNIPPET FOR THE DUMMY JSON API
