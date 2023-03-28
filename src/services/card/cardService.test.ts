import { ISearchItem } from '@api/types/searchResults';
import mockSearchItems from '@constants/mock/mockSearchResults';
import CardService from './card.service';

describe('CardService', () => {
  test('Format card Data', () => {
    const formattedCardData = CardService.formatCardsData(mockSearchItems);

    expect(formattedCardData.length).toBeGreaterThan(0);

    expect(formattedCardData.length).toBe(mockSearchItems.length);

    formattedCardData.forEach((_, ind) => {
      expect(formattedCardData[ind].title).toBe(mockSearchItems[ind].snippet.title);

      expect(formattedCardData[ind].description).toBe(mockSearchItems[ind].snippet.description);
    });
  });

  test('Format card Data with empty array', () => {
    const formattedCardData = CardService.formatCardsData([]);

    expect(formattedCardData.length).toBe(0);
  });

  test('Format card Data with empty item in array', () => {
    const formattedCardData = CardService.formatCardsData([{} as ISearchItem]);

    expect(formattedCardData.length).toBe(1);

    expect(formattedCardData[0].title).toBeUndefined();
    expect(formattedCardData[0].description).toBeUndefined();
    expect(formattedCardData[0].channelTitle).toBeUndefined();
  });
});
