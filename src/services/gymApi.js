import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const gymApiHeaders = {
  'X-RapidAPI-Key': '7f4a47cd41msh94196ed5b449e80p161bf6jsnc0b28eef2ddd',
  'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
};

const makeApiCall = (url) => ({
  url,
  headers: gymApiHeaders,
});

const baseUrl = 'https://exercisedb.p.rapidapi.com';

export const gymApi = createApi({
  reducerPath: 'gymApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getGymCategories: builder.query({
      query: () => makeApiCall(`/exercises/bodyPartList`),
    }),
  }),
});

export const { useGetGymCategoriesQuery } = gymApi;

// RAPID API CODE SNIPPET FOR THE EXERCISEDB

// const options = {
//     method: 'GET',
//     url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
//     headers: {
//       'X-RapidAPI-Key': '7f4a47cd41msh94196ed5b449e80p161bf6jsnc0b28eef2ddd',
//       'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//     }
//   };
