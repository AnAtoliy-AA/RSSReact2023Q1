import { ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import color from '@utils/styles/stylesUtils';
import StyledButton from '@components/styledButton/styledButton';
import { RootState } from '@store/store';
import { changeValue } from '@store/slices/searchSlice/searchSlice';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';

const SearchContainer = styled.form`
  flex-grow: 3;
  text-align: center;
`;

const SearchBarInput = styled.input`
  font-size: 1.5rem;
  margin: 0.5rem;
`;

const SearchBarButton = styled(StyledButton)`
  color: ${color('neutral.button_text')};
`;

interface ISearchBarProps {
  onInputSubmit: (searchValue: string) => void;
}

function SearchBar(props: ISearchBarProps): JSX.Element {
  const { onInputSubmit } = props;
  const { searchValue } = useAppSelector((state: RootState) => state.search);
  const dispatch = useAppDispatch();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    dispatch(changeValue(value));
  };

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const searchText = (event?.currentTarget?.[0] as HTMLInputElement)?.value;

    onInputSubmit(searchText);
  };

  return (
    <SearchContainer onSubmit={handleOnSubmit}>
      <SearchBarInput value={searchValue} name="searchInput" onChange={handleInputChange} />
      <SearchBarButton type="submit">Search</SearchBarButton>
    </SearchContainer>
  );
}

export default SearchBar;
