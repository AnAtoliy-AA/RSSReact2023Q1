import { ChangeEvent, FormEvent, useEffect } from 'react';
import styled from 'styled-components';
import LocalStorageService, {
  DEFAULT_LOCAL_STORAGE_KEY,
} from '@services/localStorage/localStorage.service';
import color from '@utils/styles/stylesUtils';
import StyledButton from '@components/styledButton/styledButton';

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
  searchValue: string;
  onInputChange: (searchValue: string) => void;
}

function SearchBar(props: ISearchBarProps): JSX.Element {
  const { searchValue, onInputChange } = props;

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    onInputChange(value);
  };

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  useEffect(() => {
    return () => {
      LocalStorageService.setItem<string>(DEFAULT_LOCAL_STORAGE_KEY, searchValue);
    };
  }, [searchValue]);

  return (
    <SearchContainer onSubmit={handleOnSubmit}>
      <SearchBarInput value={searchValue} onChange={handleInputChange} />
      <SearchBarButton type="submit">Search</SearchBarButton>
    </SearchContainer>
  );
}

export default SearchBar;
