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

  useEffect(() => {
    async function getData() {
      const cards = await ApiService.getSearchValues({ searchValue });

      if (Array.isArray(cards)) {
        setFormattedCards(cards);
      }
    }

    getData();
  }, [searchValue]);

  const handleOnSearchBarChange = useCallback((_searchValue: string) => {
    setSearchValue(_searchValue);
  }, []);

  return (
    <>
      <SearchBar searchValue={searchValue} onInputChange={handleOnSearchBarChange} />
      <CardsList formattedCards={formattedCards} />
    </>
  );
}

export default MainPage;
