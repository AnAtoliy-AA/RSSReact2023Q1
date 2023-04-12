import ApiPath from '@constants/apiPath/apiPath';
import { ISearchParams } from '@services/api/apiService';
import ky from 'ky';
import { ISearchItem } from './types/searchResults';

export interface ISearchResponse {
  items: Array<ISearchItem>;
}

const getSearchResultsApi = async (
  searchParams: ISearchParams
): Promise<ISearchResponse | null> => {
  const { searchValue, resultsPerPage } = searchParams;

  try {
    const response = await ky.get(
      `${process.env.API_BASE_URL}${ApiPath.SEARCH}?key=${process.env.API_KEY}&type=video&part=snippet&maxResults=${resultsPerPage}&q=${searchValue}`
    );
    return await response.json();
  } catch (error) {
    return null;
  }
};

export default getSearchResultsApi;
