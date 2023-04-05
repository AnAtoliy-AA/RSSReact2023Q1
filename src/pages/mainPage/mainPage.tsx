import SearchBar from '@components/searchBar/searchBar';
import mockSearchItems from '@constants/mock/mockSearchResults';
import CardsList from '@components/cardsList/cardsList';
import CardService from '@services/card/card.service';

function MainPage() {
  const formattedCards = CardService.formatCardsData(mockSearchItems);

  return (
    <>
      <SearchBar />
      <CardsList formattedCards={formattedCards} />
    </>
  );
}

export default MainPage;
