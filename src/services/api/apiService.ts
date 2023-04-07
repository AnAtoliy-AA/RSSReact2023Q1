import getSearchResultsApi from '@api/getSearchResults';
import CardService from '@services/card/card.service';

export interface ISearchParams {
  searchValue?: string;
  page?: number;
  resultsPerPage?: number;
}

// TODO maybe will be removed after adding RTK and moving request to thunk
class ApiService {
  static async getSearchValues(searchParams: ISearchParams = this.defaultSearchParams) {
    const {
      searchValue = this.DEFAULT_SEARCH_VALUE,
      page = this.DEFAULT_SEARCH_PAGE,
      resultsPerPage = this.DEFAULT_SEARCH_RESULTS_PER_PAGE,
    } = searchParams;

    const values = await getSearchResultsApi({ searchValue, page, resultsPerPage });

    const { items } = values;

    if (Array.isArray(items)) {
      return CardService.formatCardsData(items);
    }

    return [];
  }

  private static DEFAULT_SEARCH_VALUE: Readonly<string> = '';

  private static DEFAULT_SEARCH_PAGE: Readonly<number> = 0;

  private static DEFAULT_SEARCH_RESULTS_PER_PAGE: Readonly<number> = 20;

  private static defaultSearchParams: Readonly<ISearchParams> = {
    searchValue: this.DEFAULT_SEARCH_VALUE,
    page: this.DEFAULT_SEARCH_PAGE,
    resultsPerPage: this.DEFAULT_SEARCH_RESULTS_PER_PAGE,
  };
}

export default ApiService;
