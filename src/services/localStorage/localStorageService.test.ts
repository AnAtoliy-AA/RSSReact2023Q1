import LocalStorageService from './localStorage.service';

describe('LocalStorageService', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('Set / get value', () => {
    expect(LocalStorageService.getItem('key')).toBeUndefined();

    LocalStorageService.setItem('key', 'value');

    expect(LocalStorageService.getItem('key')).toBe('value');
  });

  test('Clear storage', () => {
    LocalStorageService.setItem('key', 'value');

    LocalStorageService.clear();

    expect(LocalStorageService.getItem('key')).toBeUndefined();
  });
});
