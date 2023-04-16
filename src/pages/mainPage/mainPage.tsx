import SearchBar from '@components/searchBar/searchBar';
import CardsList from '@components/cardsList/cardsList';
import CardService from '@services/card/card.service';
import { useCallback, useState } from 'react';
import { useGetSearchResultsQuery } from '@services/api/searchService';

function MainPage() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { data, isError, isFetching } = useGetSearchResultsQuery(searchTerm);
  const formattedCards = CardService.formatCardsData(data?.items);

  const handleOnInputSubmit = useCallback((searchValue: string) => {
    setSearchTerm(searchValue);
  }, []);

  return (
    <>
      <SearchBar onInputSubmit={handleOnInputSubmit} />
      {isError && (
        <h2>Please, wait few hours before free api key search request qouta will be updated</h2>
      )}
      <CardsList formattedCards={formattedCards} isLoading={isFetching} />
    </>
  );
}

export default MainPage;
