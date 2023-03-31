import { ICardValues } from '@services/card/card.service';
import { useCallback, useState } from 'react';
import styled from 'styled-components';
import CardsList from '../../components/cardsList/cardsList';
import CustomForm from './customForm';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: calc(100vh - 15vh - 2px);
`;

const PageTitle = styled.h2``;

function NewCardPage(): JSX.Element {
  const [formattedCards, setFormattedCards] = useState<Array<ICardValues>>([]);

  const addCard = useCallback((card: ICardValues) => {
    setFormattedCards((prev) => [...prev, card]);
  }, []);

  return (
    <PageWrapper>
      <PageTitle>Create new card</PageTitle>
      <CustomForm addCard={addCard} />
      <CardsList formattedCards={formattedCards} />
    </PageWrapper>
  );
}

export default NewCardPage;
