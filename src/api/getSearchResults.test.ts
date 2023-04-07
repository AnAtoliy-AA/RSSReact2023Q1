import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { renderHook } from '@testing-library/react-hooks';
import ApiPath from '@constants/apiPath/apiPath';
import getSearchResultsApi, { ISearchResponse } from './getSearchResults';

const mockSearchParams = {
  searchValue: 'test',
  resultsPerPage: 10,
};

const mockSearchResponse: ISearchResponse = {
  items: [],
};

interface SearchRequestParams {
  key: string;
  type: string;
  part: string;
  maxResults: string;
  q: string;
}

const server = setupServer(
  rest.get(`${process.env.API_BASE_URL}${ApiPath.SEARCH}`, (req, res, ctx) => {
    const { key, type, part, maxResults, q } = req.url
      .searchParams as unknown as SearchRequestParams;
    expect(key).toBe(process.env.API_KEY);
    expect(type).toBe('video');
    expect(part).toBe('snippet');
    expect(maxResults).toBe(mockSearchParams.resultsPerPage.toString());
    expect(q).toBe(mockSearchParams.searchValue);
    return res(ctx.json(mockSearchResponse));
  })
);

describe('getSearchResultsApi', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('should return search results', async () => {
    const { result, waitFor } = renderHook(() => getSearchResultsApi(mockSearchParams));

    await waitFor(() => result.current !== undefined);

    expect(result.current).toEqual(mockSearchResponse);
  });
});
