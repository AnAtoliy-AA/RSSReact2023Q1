import Card from '@components/card/card';
import { ICardValues } from '@services/card/card.service';
import color from '@utils/styles/stylesUtils';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: ${color('neutral.background')};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

interface CardListProps {
  formattedCards: Array<ICardValues>;
}

function CardsList(props: CardListProps) {
  const { formattedCards } = props;

  return (
    <CardContainer>
      {formattedCards?.map((cardValues) => {
        const {
          id,
          title,
          description,
          imageUrl,
          publishedAt,
          channelTitle,
          priority,
          markMeAsCreator,
          confirmData,
          send,
          doNotSend,
        } = cardValues;

        return (
          <Card
            key={id}
            title={title}
            description={description}
            imageUrl={imageUrl}
            publishedAt={publishedAt}
            channelTitle={channelTitle}
            priority={priority}
            markMeAsCreator={markMeAsCreator}
            confirmData={confirmData}
            send={send}
            doNotSend={doNotSend}
          />
        );
      })}
    </CardContainer>
  );
}

export default CardsList;
