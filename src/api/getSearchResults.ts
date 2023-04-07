import ApiPath from '@constants/apiPath/apiPath';
import { ISearchParams } from '@services/api/apiService';
import ky from 'ky';
import { ISearchItem } from './types/searchResults';

export interface ISearchResponse {
  items: Array<ISearchItem>;
}

const getSearchResultsApi = async (searchParams: ISearchParams): Promise<ISearchResponse> => {
  const { searchValue, resultsPerPage } = searchParams;

  const response = await ky.get(
    `${process.env.API_BASE_URL}${ApiPath.SEARCH}?key=${process.env.API_KEY}&type=video&part=snippet&maxResults=${resultsPerPage}&q=${searchValue}`
  );

  return response?.json();
};

export default getSearchResultsApi;
