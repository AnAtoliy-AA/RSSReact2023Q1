import SearchBar from '@components/searchBar/searchBar';
import CardsList from '@components/cardsList/cardsList';
import { ICardValues } from '@services/card/card.service';
import ApiService from '@services/api/apiService';
import { useCallback, useEffect, useState } from 'react';
import LocalStorageService, {
  DEFAULT_LOCAL_STORAGE_KEY,
} from '@services/localStorage/localStorage.service';
import useDebounce from '@hooks/useDebounce';

function MainPage() {
  const [searchValue, setSearchValue] = useState<string>(
    LocalStorageService.getItem<string>(DEFAULT_LOCAL_STORAGE_KEY) || ''
  );
  const [formattedCards, setFormattedCards] = useState<Array<ICardValues>>([]);

  const getSearchValueData = useCallback((searchTerm: string) => {
    async function getData() {
      const cards = await ApiService.getSearchValues({ searchValue: searchTerm });

      if (Array.isArray(cards)) {
        setFormattedCards(cards);
      }
    }

    getData();
  }, []);

  const debouncedSearchTerm = useDebounce<string>(searchValue);

  useEffect(() => {
    getSearchValueData(debouncedSearchTerm);
  }, [debouncedSearchTerm, getSearchValueData]);

  const handleOnInputSubmit = useCallback(
    (searchTerm: string) => {
      getSearchValueData(searchTerm);
    },
    [getSearchValueData]
  );

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
      <CardsList formattedCards={formattedCards} />
    </>
  );
}

export default MainPage;
