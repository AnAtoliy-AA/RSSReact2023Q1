import { ICardValues } from '@services/card/card.service';
import FormService from './formService';

describe('FormService', () => {
  describe('convertNameToLabel', () => {
    it('should convert a PascalCase string to a label', () => {
      const mockTitle = 'ExampleCard';

      const result = FormService.convertNameToLabel(mockTitle);

      expect(result).toEqual('Example Card');
    });

    it('should convert a camelCase string to a label', () => {
      const mockTitle = 'exampleCard';

      const result = FormService.convertNameToLabel(mockTitle);

      expect(result).toEqual('example Card');
    });

    it('should convert a camelCase string to a label', () => {
      const mockTitle = 'exampleCard';

      const result = FormService.convertNameToLabel(mockTitle);

      expect(result).toEqual('example Card');
    });
  });

  describe('createCardItemDto', () => {
    it('should create a card item object from input options', () => {
      const mockOpts = {
        title: 'Example Card',
        description: 'This is an example card.',
        channelTitle: 'channelTitle',
        priority: '2',
        createdAt: '2023 - 03 - 25',
        isFavorites: false,
      };

      const result = FormService.createCardItemDto(mockOpts);

      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('imageUrl');
      expect(result.title).toEqual(mockOpts.title);
      expect(result.description).toEqual(mockOpts.description);
    });

    it('should set a default image URL if no image is provided', () => {
      const mockOpts = {
        title: 'Example Card',
        description: 'This is an example card.',
        channelTitle: 'channelTitle',
        priority: '2',
        createdAt: '2023 - 03 - 25',
        isFavorites: false,
      };

      const result = FormService.createCardItemDto(mockOpts);

      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('imageUrl', '');
      expect(result.title).toEqual(mockOpts.title);
      expect(result.description).toEqual(mockOpts.description);
      expect(result).not.toHaveProperty('image');
    });
  });

  describe('validateData', () => {
    const validFormValue: ICardValues = {
      id: '1',
      title: 'Example Title',
      channelTitle: 'Example Channel Title',
      imageUrl: 'https://example.com/image.jpg',
      description: 'Example Description',
      priority: 'high',
      publishedAt: '2022-01-01T00:00:00.000Z',
      markMeAsCreator: 'yes',
      confirmData: 'yes',
      send: 'yes',
      doNotSend: 'no',
    };

    it('returns empty object for valid form values', () => {
      const validationResult = FormService.validateData(validFormValue);
      expect(validationResult).toEqual({});
    });

    it('returns object with invalid field names as keys for invalid form values', () => {
      const invalidFormValue: ICardValues = {
        ...validFormValue,
        title: '', // title is a required field, but this value is empty
      };
      const validationResult = FormService.validateData(invalidFormValue);
      expect(validationResult).toEqual({ title: true, isDataInValid: true });
    });
  });
});
