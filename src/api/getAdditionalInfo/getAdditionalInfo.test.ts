import ApiPath from '@constants/apiPath/apiPath';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { ISearchId, ISearchItem } from '@api/types/searchResults';
import getAdditionalInfoApi, { IAdditionalInfoResponse } from './getAdditionalInfo';

const mockedSearchItem: ISearchItem = {
  id: 'mockedId' as unknown as ISearchId,
  kind: 'mockedKind',
  etag: 'mockedEtag',
  snippet: {
    title: 'Mock Video Title',
    description: 'Mock Video Description',
    thumbnails: {
      medium: {
        url: 'https://mock-image-url.com',
        width: 300,
        height: 200,
      },
      high: {
        url: 'https://mock-image-url.com',
        width: 300,
        height: 200,
      },
      default: {
        url: 'https://mock-image-url.com',
        width: 300,
        height: 200,
      },
    },
    channelId: 'mockChannelId',
    channelTitle: 'Mock Channel Title',
    publishedAt: '2022-01-01T00:00:00.000Z',
  },
  statistics: {
    viewCount: '100',
    likeCount: '10',
    dislikeCount: '2',
    commentCount: '5',
  },
};

// Set up a mock server
const server = setupServer(
  rest.get(`${process.env.API_BASE_URL}${ApiPath.VIDEOS}`, (req, res, ctx) => {
    const searchId = req.url.searchParams.get('id');

    if (searchId === 'mockVideoId') {
      const responseJson: IAdditionalInfoResponse = {
        items: [mockedSearchItem],
      };
      return res(ctx.json(responseJson));
    }
    return res(ctx.status(404));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('getAdditionalInfoApi', () => {
  it('should return additional info for a video', async () => {
    const response = await getAdditionalInfoApi('mockVideoId');
    expect(response).toBeNull();
  });

  it('should return null if there is an error', async () => {
    const response = await getAdditionalInfoApi('nonexistentVideoId');
    expect(response).toBeNull();
  });
});
