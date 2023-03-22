import { ChangeEvent, Component, FormEvent } from 'react';
import styled from 'styled-components';
import LocalStorageService, {
  DEFAULT_LOCAL_STORAGE_KEY,
} from '@services/localStorage/localStorage.service';
import color from '@utils/styles/stylesUtils';
import StyledButton from '@components/styledButton/styledButton';

type SearchBarProps = object;
type SearchBarState = {
  searchValue: string;
};

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

// TODO move this method into class when it'll do something
const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
};

class SearchBar extends Component<SearchBarProps, SearchBarState> {
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
      <SearchContainer onSubmit={handleOnSubmit}>
        <SearchBarInput value={searchValue} onChange={this.handleInputChange} />
        <SearchBarButton type="submit">Search</SearchBarButton>
      </SearchContainer>
    );
  }
}

export default SearchBar;
