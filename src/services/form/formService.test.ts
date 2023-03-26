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
        todoName: '2',
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
        todoName: '2',
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
});
