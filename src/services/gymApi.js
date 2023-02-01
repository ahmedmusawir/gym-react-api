import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const gymApiHeaders = {
  'X-RapidAPI-Key': '7fe701ab34mshb5fbb7b29ae9accp1485a6jsna5fab91f7aed',
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
    getAllWorkouts: builder.query({
      query: () => makeApiCall(`/exercises`),
    }),
    getSingleWorkout: builder.query({
      query: (id) => makeApiCall(`/exercises/exercise/${id}`),
    }),
    getTargetWorkout: builder.query({
      query: (target) => makeApiCall(`/exercises/target/${target}`),
    }),
    getEquipmentWorkout: builder.query({
      query: (equipment) => makeApiCall(`/exercises/equipment/${equipment}`),
    }),
    getGymCategories: builder.query({
      query: () => makeApiCall(`/exercises/bodyPartList`),
    }),
  }),
});

export const {
  useGetGymCategoriesQuery,
  useGetAllWorkoutsQuery,
  useGetSingleWorkoutQuery,
  useGetTargetWorkoutQuery,
  useGetEquipmentWorkoutQuery,
} = gymApi;

// RAPID API CODE SNIPPET FOR THE EXERCISEDB

// htmlfivedev@gmail.com

// const options = {
//     method: 'GET',
//     url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
//     headers: {
//       'X-RapidAPI-Key': '7f4a47cd41msh94196ed5b449e80p161bf6jsnc0b28eef2ddd',
//       'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//     }
//   };

// moose@cyberizegroup.com
// CYBERIZE API FROM RAPID API

// 'X-RapidAPI-Key': '7fe701ab34mshb5fbb7b29ae9accp1485a6jsna5fab91f7aed',
//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
