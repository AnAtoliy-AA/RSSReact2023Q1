import Card from '@components/card/card';
import mockSearchItems from '@constants/mock/mockSearchResults';
import CardService from '@services/card/card.service';
import color from '@utils/styles/stylesUtils';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: ${color('neutral.button_background')};
`;

function MainPage() {
  const formattedCards = CardService.formatCardsData(mockSearchItems);

  return (
    <div>
      <h2>CUSTOM MAIN PAGE</h2>
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
