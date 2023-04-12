import { ICardProps } from '@components/card/card';
import { ISearchItem } from '@api/types/searchResults';

export interface ICardValues extends ICardProps {
  id: string;
}

class CardService {
  static formatCardsData(data: Array<ISearchItem> = []) {
    return data.map((item: ISearchItem) => this.formatCardData(item));
  }

  private static formatCardData(item: ISearchItem): ICardValues {
    const { snippet, statistics } = item;
    const { title, description, channelTitle, publishedAt, thumbnails, tags } = snippet || {};
    const imageUrl = thumbnails?.medium?.url || '';
    const id = item?.id?.videoId || `${title}_${channelTitle}`;

    const { viewCount, likeCount, favoriteCount, commentCount } = statistics || {};

    return {
      id,
      title,
      channelTitle,
      imageUrl,
      description,
      publishedAt,
      viewCount,
      likeCount,
      favoriteCount,
      commentCount,
      tags,
    };
  }
}

export default CardService;
