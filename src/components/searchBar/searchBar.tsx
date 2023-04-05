import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
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

function SearchBar(): JSX.Element {
  const [searchValue, setSearchValue] = useState<string>(
    LocalStorageService.getItem<string>(DEFAULT_LOCAL_STORAGE_KEY) || ''
  );

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setSearchValue(value);
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
