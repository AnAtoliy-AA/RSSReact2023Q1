import APP_PATHS from '@constants/appPath/appPath';
import { withRouter, RouterProps } from '@hoc/withRouter';
import color from '@utils/styles/stylesUtils';
import React from 'react';
import styled from 'styled-components';

const PageTitle = styled.h1`
  color: ${color('neutral.title')};
  text-align: center;
  flex-grow: 1;

  @media (min-width: 796px) {
    margin-left: 15rem;
  }
`;

class ShowLocation extends React.PureComponent<RouterProps> {
  render() {
    const { location } = this.props;
    const { pathname } = location;

    switch (pathname) {
      case APP_PATHS.HOME:
        return <PageTitle>MAIN PAGE</PageTitle>;

      case APP_PATHS.ABOUT:
        return <PageTitle>ABOUT PAGE</PageTitle>;

      case APP_PATHS.CREATE_CARDS:
        return <PageTitle>CREATE CARD PAGE</PageTitle>;

      default:
        return <PageTitle>NOT FOUND PAGE</PageTitle>;
    }
  }
}

export default withRouter(ShowLocation);
