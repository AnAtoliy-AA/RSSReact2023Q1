import LocalStorageService, {
  DEFAULT_LOCAL_STORAGE_KEY,
} from '@services/localStorage/localStorage.service';
import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

type SearchBarProps = object;
type SearchBarState = {
  searchValue: string;
};

const SearchContainer = styled.div`
  flex-grow: 3;
  text-align: center;
`;

const SearchBarInput = styled.input`
  font-size: 1.5rem;
  margin: 0.5rem;
`;

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps | Readonly<SearchBarProps>) {
    super(props);
    this.state = { searchValue: LocalStorageService.getItem(DEFAULT_LOCAL_STORAGE_KEY) || '' };
    this.componentCleanup = this.componentCleanup.bind(this);
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.componentCleanup);
  }

  componentWillUnmount() {
    this.componentCleanup();
    window.removeEventListener('beforeunload', this.componentCleanup);
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    this.setState({ searchValue: value });
  };

  componentCleanup(): void {
    const { searchValue } = this.state;

    LocalStorageService.setItem<string>(DEFAULT_LOCAL_STORAGE_KEY, searchValue);
  }

  render() {
    const { searchValue } = this.state;

    return (
      <SearchContainer>
        <SearchBarInput value={searchValue} onChange={this.handleInputChange} />
      </SearchContainer>
    );
  }
}

export default SearchBar;
