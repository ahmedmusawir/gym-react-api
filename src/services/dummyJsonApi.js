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
      query: () => makeApiCall(`/products?limit=100`),
    }),
    getSingleProduct: builder.query({
      query: (id) => makeApiCall(`/products/${id}`),
    }),
    getProductCategories: builder.query({
      query: () => makeApiCall(`/products/categories`),
    }),
    getProductByCategory: builder.query({
      query: (catName) => {
        // console.log('catName in RTK api', catName);
        return makeApiCall(`/products/category/${catName}`);
      },
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useGetProductCategoriesQuery,
  useGetProductByCategoryQuery,
} = dummyJsonApi;

// RAPID API CODE SNIPPET FOR THE DUMMY JSON API
