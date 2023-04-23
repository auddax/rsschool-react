import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiKey = 'ojhrSFiXBcnUUJ5_HczHHDi66RxThDJoA9p7RQCfj38';
const baseUrl = 'https://api.unsplash.com';

export const unsplashAPI = createApi({
  reducerPath: 'unspashAPI',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPhotosList: builder.query({
      query: (page = 10, client_id = apiKey) => ({
        url: '/photos',
        params: {
          page,
          client_id,
        },
      }),
    }),
    searchPhotos: builder.query({
      query: (query = '', client_id = apiKey) => ({
        url: '/search/photos',
        params: {
          query,
          client_id,
        },
      }),
    }),
  }),
});
