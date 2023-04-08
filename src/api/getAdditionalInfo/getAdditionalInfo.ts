import { ISearchItem } from '@api/types/searchResults';
import ApiPath from '@constants/apiPath/apiPath';
import ky from 'ky';

export interface IAdditionalInfoResponse {
  items: Array<ISearchItem>;
}

const getAdditionalInfoApi = async (searchId: string): Promise<IAdditionalInfoResponse | null> => {
  try {
    const response = await ky.get(
      `${process.env.API_BASE_URL}${ApiPath.VIDEOS}?key=${process.env.API_KEY}&id=${searchId}&&part=snippet,statistics`
    );
    return await response.json();
  } catch (error) {
    return null;
  }
};

export default getAdditionalInfoApi;
