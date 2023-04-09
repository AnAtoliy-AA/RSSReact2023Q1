import { rest } from 'msw';
import { setupServer } from 'msw/node';
import getSearchResultsApi from './getSearchResults';

const server = setupServer(
  rest.get('https://example.com/search', (req, res, ctx) => {
    return res(
      ctx.json({
        items: [
          {
            id: 'video1',
            title: 'Video 1',
            description: 'Description of Video 1',
          },
          {
            id: 'video2',
            title: 'Video 2',
            description: 'Description of Video 2',
          },
        ],
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('getSearchResultsApi', () => {
  it('returns search results when the request is successful', async () => {
    const searchParams = { searchValue: 'test', resultsPerPage: 10 };
    const response = await getSearchResultsApi(searchParams);
    expect(response).toBeNull();
  });

  it('returns null when the request fails', async () => {
    server.use(
      rest.get('https://example.com/search', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    const searchParams = { searchValue: 'test', resultsPerPage: 10 };
    const response = await getSearchResultsApi(searchParams);
    expect(response).toBeNull();
  });
});
