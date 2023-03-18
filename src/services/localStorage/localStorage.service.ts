import BASE_URL from '@constants/baseUrl';

export const DEFAULT_LOCAL_STORAGE_KEY = 'searchValue';

class LocalStorageService {
  private static defaultLocalStorageKey = DEFAULT_LOCAL_STORAGE_KEY;

  private static appLocalStorageKey = BASE_URL.replace(/\//g, '');

  static setItem<T>(key = this.defaultLocalStorageKey, values: T = '' as T): void {
    const prevLocalStorageValue = this.getLocalStorageItem<T>();

    if (prevLocalStorageValue) {
      const newLocalStorageValue = Object.assign(prevLocalStorageValue, { [key]: values });

      this.setLocalStorageItem<object & { [x: string]: T }>(
        this.appLocalStorageKey,
        newLocalStorageValue
      );
    }
  }

  static getItem<T>(key = this.defaultLocalStorageKey): T {
    const localStorageValue = this.getLocalStorageItem<{ [x: string]: T }>();

    return localStorageValue[key];
  }

  static clear(): void {
    localStorage.clear();
  }

  private static getLocalStorageItem<T>(key = this.appLocalStorageKey): T {
    const items = localStorage.getItem(key);

    if (typeof items === 'string') {
      return JSON.parse(items);
    }

    return {} as T;
  }

  private static setLocalStorageItem<T>(key = this.appLocalStorageKey, values: T = {} as T): void {
    localStorage.setItem(key, JSON.stringify(values));
  }
}

export default LocalStorageService;
