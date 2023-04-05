import APP_PATHS from '@constants/appPath/appPath';
import color from '@utils/styles/stylesUtils';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const PageTitle = styled.h1`
  color: ${color('neutral.title')};
  text-align: center;
  flex-grow: 1;

  @media (min-width: 796px) {
    margin-left: 15rem;
  }
`;

function ShowLocation(): JSX.Element {
  const location = useLocation();
  const { pathname } = location;

  switch (pathname) {
    case APP_PATHS.HOME:
      return <PageTitle>MAIN PAGE</PageTitle>;

    case APP_PATHS.ABOUT:
      return <PageTitle>ABOUT PAGE</PageTitle>;

    case APP_PATHS.CREATE_CARDS:
      return <PageTitle>NEW CARD PAGE</PageTitle>;

    default:
      return <PageTitle>NOT FOUND PAGE</PageTitle>;
  }
}

export default ShowLocation;
