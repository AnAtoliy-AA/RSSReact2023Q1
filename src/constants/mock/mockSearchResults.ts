// 20230316003207
// https://www.googleapis.com/youtube/v3/search?key=AIzaSyDBMymEL2W4MJ4nTUnndC76eId3XB7OpwU&type=video&part=snippet&maxResults=5&q=sunrise

import { ISearchItem } from '@api/types/searchResults';

export const EMPTY_ITEM: ISearchItem = {
  kind: '',
  etag: '',
  id: {
    kind: '',
    videoId: '',
  },
  snippet: {
    publishedAt: '',
    channelId: '',
    title: '',
    description: '',
    thumbnails: {
      default: {
        url: '',
        width: 0,
        height: 0,
      },
      medium: {
        url: '',
        width: 0,
        height: 0,
      },
      high: {
        url: '',
        width: 0,
        height: 0,
      },
    },
    channelTitle: '',
    tags: [''],
    categoryId: '',
    liveBroadcastContent: '',
    localized: {
      title: '',
      description: '',
    },
    defaultAudioLanguage: '',
  },
  statistics: {
    viewCount: '',
    likeCount: '',
    dislikeCount: '',
    favoriteCount: '',
    commentCount: '',
  },
};

const mockSearchItems: Array<ISearchItem> = [
  {
    kind: 'youtube#searchResult',
    etag: 'w36tZgNTic1VrNIZb01SN8pMNZ8',
    id: {
      kind: 'youtube#video',
      videoId: 'MfguBo0jDD4',
    },
    snippet: {
      publishedAt: '2022-07-07T22:03:44Z',
      channelId: 'UCRvgE1OPtVHBYULm7AEDMnA',
      title: 'Xantesha - SUNRISE',
      description:
        'Follow Playlist https://lnk.to/phonk Xantesha - SUNRISE https://xantesha.lnk.to/sunrise.',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/MfguBo0jDD4/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/MfguBo0jDD4/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/MfguBo0jDD4/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'EUPHXRIA',
      liveBroadcastContent: 'none',
      publishTime: '2022-07-07T22:03:44Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'vGWtZOJT1wsA-aBjc3gz851D1lI',
    id: {
      kind: 'youtube#video',
      videoId: 'daBovdGJCEg',
    },
    snippet: {
      publishedAt: '2022-07-07T22:09:21Z',
      channelId: 'UCRvgE1OPtVHBYULm7AEDMnA',
      title: 'Xantesha - SUNRISE (Slowed + Reverb)',
      description:
        'Follow Playlist https://lnk.to/phonk Xantesha - SUNRISE https://xantesha.lnk.to/sunrise.',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/daBovdGJCEg/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/daBovdGJCEg/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/daBovdGJCEg/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'EUPHXRIA',
      liveBroadcastContent: 'none',
      publishTime: '2022-07-07T22:09:21Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'KxCVtjw8pDvTilsa9-RT6HlQu1g',
    id: {
      kind: 'youtube#video',
      videoId: 'fd02pGJx0s0',
    },
    snippet: {
      publishedAt: '2009-02-25T00:12:48Z',
      channelId: 'UCM11Z1jQPm07ImX4lqYmwqA',
      title: 'Norah Jones - Sunrise',
      description:
        'REMASTERED IN HD! Official Music Video for Sunrise performed by Norah Jones. See Norah live: ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/fd02pGJx0s0/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/fd02pGJx0s0/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/fd02pGJx0s0/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'norahjonesVEVO',
      liveBroadcastContent: 'none',
      publishTime: '2009-02-25T00:12:48Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'UkQ2DqhaGyFEcV-REdEThkqKWWM',
    id: {
      kind: 'youtube#video',
      videoId: 'hw0avcjGVrE',
    },
    snippet: {
      publishedAt: '2022-07-18T10:37:44Z',
      channelId: 'UClNJJ-c2FtFvRtXFRwItVxg',
      title: 'SUNRISE (SLOWED+REVERB)',
      description: 'music #slowed #reverb.',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/hw0avcjGVrE/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/hw0avcjGVrE/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/hw0avcjGVrE/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Skamazinツ',
      liveBroadcastContent: 'none',
      publishTime: '2022-07-18T10:37:44Z',
    },
  },
  {
    kind: 'youtube#searchResult',
    etag: 'crDJMMCxmBPRyyGRvXQhY62K6hc',
    id: {
      kind: 'youtube#video',
      videoId: 'PE3g2zeBVQQ',
    },
    snippet: {
      publishedAt: '2007-06-12T21:45:56Z',
      channelId: 'UCwtvFWbWkLr8ra51W-pLstQ',
      title: 'Simply Red - Sunrise (Official Video)',
      description:
        "Official video for 'Sunrise' by Simply Red. This song is featured on the double platinum album 'Home'. Home is the eighth studio ...",
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/PE3g2zeBVQQ/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/PE3g2zeBVQQ/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/PE3g2zeBVQQ/hqdefault.jpg',
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Simply Red',
      liveBroadcastContent: 'none',
      publishTime: '2007-06-12T21:45:56Z',
    },
  },
];

export default mockSearchItems;
