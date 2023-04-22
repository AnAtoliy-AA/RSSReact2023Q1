import styled from 'styled-components';
import { RootState } from '@store/store';
import { useAppSelector } from '@hooks/reduxHooks';
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
  const { formattedCards } = useAppSelector((state: RootState) => state.form);

  return (
    <PageWrapper>
      <PageTitle>Create new card</PageTitle>
      <CustomForm />
      <CardsList formattedCards={formattedCards} />
    </PageWrapper>
  );
}

export default NewCardPage;
