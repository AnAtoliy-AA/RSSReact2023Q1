import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import ApiPath from '@constants/apiPath/apiPath';
import { ISearchResponse } from '@api/getSearchResults';
import fetch from 'isomorphic-fetch';

export const searchValueApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_BASE_URL,
    fetchFn: fetch,
  }),
  endpoints: (builder) => ({
    getSearchResults: builder.query<ISearchResponse, string>({
      query: (searchValue) =>
        `${ApiPath.SEARCH}?key=${process.env.API_KEY}&type=video&part=snippet&maxResults=20&q=${searchValue}`,
    }),
    getAdditionalInfoById: builder.query<ISearchResponse, string | undefined>({
      query: (searchId) =>
        `${ApiPath.VIDEOS}?key=${process.env.API_KEY}&id=${searchId}&&part=snippet,statistics`,
    }),
  }),
});

export const { useGetSearchResultsQuery, useGetAdditionalInfoByIdQuery } = searchValueApi;
