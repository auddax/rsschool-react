import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiKey = import.meta.env.VITE_API_KEY; // Place your API key here
const baseUrl = 'https://api.unsplash.com';

const getUnsplashData = async (endpoint: string, params: object) => {
  let url = `${baseUrl}${endpoint}?`;
  if (Object.keys(params).length > 0) {
    for (const [key, value] of Object.entries(params)) {
      url += `${key}=${value}&`;
    }
  }
  url += `client_id=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('getUnsplashData error: ', error);
    return null;
  }
};

export const getPhotosList = async (params = {}) => {
  const result = await getUnsplashData('/photos', params);
  return result;
};

export const searchPhotos = async (params = { query: '' }) => {
  const { results } = await getUnsplashData('/search/photos', params);
  return results;
};

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
  }),
});
