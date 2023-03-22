import { ICardValues } from '@services/card/card.service';
import { Component } from 'react';
import styled from 'styled-components';
import CardsList from '../../components/cardsList/cardsList';
import CreateCardForm from './createCardForm';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: calc(100vh - 15vh - 2px);
`;

const PageTitle = styled.h2``;
const PageSubTitle = styled.h3``;

type CreateCardPageProps = object;
type CreateCardPageState = {
  formattedCards: Array<ICardValues>;
};

class CreateCardPage extends Component<CreateCardPageProps, CreateCardPageState> {
  constructor(props: CreateCardPageProps | Readonly<CreateCardPageProps>) {
    super(props);

    this.state = { formattedCards: [] };
  }

  addCard = (card: ICardValues) => {
    this.setState((state: CreateCardPageState) => {
      const { formattedCards } = state;

      return { formattedCards: [...formattedCards, card] };
    });
  };

  render() {
    const { formattedCards } = this.state;

    return (
      <PageWrapper>
        <PageTitle>Create new card</PageTitle>
        <PageSubTitle>Please, fill all required fields</PageSubTitle>
        <CreateCardForm addCard={this.addCard} />
        <CardsList formattedCards={formattedCards} />
      </PageWrapper>
    );
  }
}

export default CreateCardPage;
