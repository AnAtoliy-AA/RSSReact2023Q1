import SearchBar from '@components/searchBar/searchBar';
import CardsList from '@components/cardsList/cardsList';
import { ICardValues } from '@services/card/card.service';
import ApiService from '@services/api/apiService';
import { useCallback, useEffect, useState } from 'react';
import LocalStorageService, {
  DEFAULT_LOCAL_STORAGE_KEY,
} from '@services/localStorage/localStorage.service';

function MainPage() {
  const [searchValue, setSearchValue] = useState<string>(
    LocalStorageService.getItem<string>(DEFAULT_LOCAL_STORAGE_KEY) || ''
  );
  const [formattedCards, setFormattedCards] = useState<Array<ICardValues>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getSearchValueData = useCallback((searchTerm: string) => {
    async function getData() {
      setIsLoading(true);
      const cards = await ApiService.getSearchValues({ searchValue: searchTerm });
      setIsLoading(false);
      if (Array.isArray(cards)) {
        setFormattedCards(cards);
      }
    }

    getData();
  }, []);

  const handleOnInputSubmit = useCallback(
    (searchTerm: string) => {
      LocalStorageService.setItem<string>(DEFAULT_LOCAL_STORAGE_KEY, searchTerm);
      getSearchValueData(searchTerm);
    },
    [getSearchValueData]
  );

  useEffect(() => {
    getSearchValueData(LocalStorageService.getItem<string>(DEFAULT_LOCAL_STORAGE_KEY) || '');
  }, [getSearchValueData]);

  const handleOnSearchBarChange = useCallback((_searchValue: string) => {
    setSearchValue(_searchValue);
  }, []);

  return (
    <>
      <SearchBar
        searchValue={searchValue}
        onInputChange={handleOnSearchBarChange}
        onInputSubmit={handleOnInputSubmit}
      />
      <CardsList formattedCards={formattedCards} isLoading={isLoading} />
    </>
  );
}

export default MainPage;
