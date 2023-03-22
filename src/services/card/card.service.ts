import { CardProps } from '@components/card/card';
import { ISearchItem } from '@api/types/searchResults';

export interface ICardValues extends CardProps {
  id: string;
}

class CardService {
  static formatCardsData(data: Array<ISearchItem> = []) {
    return data.map((item: ISearchItem) => this.formatCardData(item));
  }

  private static formatCardData(item: ISearchItem): ICardValues {
    const { snippet } = item;
    const { title, description, channelTitle, publishedAt, thumbnails } = snippet || {};
    const imageUrl = thumbnails?.medium?.url || '';
    const id = item?.id?.videoId || `${title}_${channelTitle}`;

    return {
      id,
      title,
      channelTitle,
      imageUrl,
      description,
      publishedAt,
    };
  }
}

export default CardService;
