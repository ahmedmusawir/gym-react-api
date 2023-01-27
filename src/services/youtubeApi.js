import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const gymApiHeaders = {
  'X-RapidAPI-Key': '7f4a47cd41msh94196ed5b449e80p161bf6jsnc0b28eef2ddd',
  'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
};

const makeApiCall = (url) => ({
  url,
  headers: gymApiHeaders,
});

const baseUrl = 'https://youtube-search-and-download.p.rapidapi.com';

export const youtubeApi = createApi({
  reducerPath: 'youtubeApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getYoutube: builder.query({
      query: (qry) => makeApiCall(`/search?query=${qry}`),
    }),
  }),
});

export const { useGetYoutubeQuery } = youtubeApi;

// RAPID API CODE SNIPPET FOR THE YOUTUBE SEARCH & DOWNLOAD

// const options = {
//     method: 'GET',
//     url: 'https://youtube-search-and-download.p.rapidapi.com/search',
//     params: {
//       query: 'back exercise',
//       next: 'EogDEgVoZWxsbxr-AlNCU0NBUXRaVVVoeldFMW5iRU01UVlJQkMyMUlUMDVPWTFwaWQwUlpnZ0VMWW1VeE1rSkROWEJSVEVXQ0FRdFZNMEZUYWpGTU5sOXpXWUlCQzJaaGVrMVRRMXBuTFcxM2dnRUxaV3hrWldGSlFYWmZkMFdDQVExU1JGbFJTSE5ZVFdkc1F6bEJnZ0VMT0hwRVUybHJRMmc1Tm1PQ0FRc3pOMFU1VjNORWJVUmxaNElCQzJGaFNXcHpPRXN6YjFsdmdnRUxaMmRvUkZKS1ZuaEdlRldDQVF0clN6UXlURnB4VHpCM1FZSUJDME42VHpOaFNXVXdVbkJ6Z2dFTFNVNHdUMk5WZGtkaU5qQ0NBUXRSYTJWbGFGRTRSRjlXVFlJQkMyWk9NVU41Y2pCYVN6bE5nZ0VMZEZac1kwdHdNMkpYU0RpQ0FRdGZSQzFGT1Rsa01XSk1TWUlCQzJoQlUwNVRSSFZOY2pGUmdnRUxkREEzTVZkdE5EVnhWMDAlM0QYgeDoGCILc2VhcmNoLWZlZWQ%3D',
//       hl: 'en',
//       gl: 'US',
//       upload_date: 't',
//       type: 'v',
//       duration: 's',
//       features: 'li;hd',
//       sort: 'v'
//     },
//     headers: {
//       'X-RapidAPI-Key': '7f4a47cd41msh94196ed5b449e80p161bf6jsnc0b28eef2ddd',
//       'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
//     }
//   };
