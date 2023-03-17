import Card from '@components/card/card';
import SearchBar from '@components/searchBar/searchBar';
import mockSearchItems from '@constants/mock/mockSearchResults';
import CardService from '@services/card/card.service';
import color from '@utils/styles/stylesUtils';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: ${color('neutral.background')};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

function MainPage() {
  const formattedCards = CardService.formatCardsData(mockSearchItems);

  return (
    <div>
      <SearchBar />
      <CardContainer>
        {formattedCards?.map((cardValues) => {
          const { id, title, description, imageUrl, publishedAt, channelTitle } = cardValues;

          return (
            <Card
              key={id}
              title={title}
              description={description}
              imageUrl={imageUrl}
              publishedAt={publishedAt}
              channelTitle={channelTitle}
            />
          );
        })}
      </CardContainer>
    </div>
  );
}

export default MainPage;
