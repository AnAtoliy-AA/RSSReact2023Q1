export interface ISearchAttributes {
  kind: string;
  etag: string;
}

export interface ISearchId {
  kind: string;
  videoId: string;
}

interface IThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface IBaseCard {
  title: string;
  description: string;
}

enum ThumbnailVariant {
  DEFAULT = 'default',
  MEDIUM = 'medium',
  HEIGH = 'high',
}

interface ISnippet extends IBaseCard {
  publishedAt: string;
  channelId: string;
  thumbnails: Record<ThumbnailVariant, IThumbnail>;
  channelTitle: string;
  tags?: Array<string>;
  categoryId?: string | number;
  liveBroadcastContent?: string;
  localized?: IBaseCard;
  defaultAudioLanguage?: string;
  defaultLanguage?: string;
  publishTime?: string;
}

interface IStatistic {
  viewCount?: string | number;
  likeCount?: string | number;
  dislikeCount?: string | number;
  favoriteCount?: string | number;
  commentCount?: string | number;
}

export interface ISearchItem extends ISearchAttributes {
  id: ISearchId;
  snippet: ISnippet;
  statistics?: IStatistic;
}
