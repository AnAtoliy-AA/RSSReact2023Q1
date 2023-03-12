import * as React from 'react';
import styled from 'styled-components';
import APP_PATHS from '@constants/appPath/appPath';
import CustomNavLink from '@components/customNavLink/customNavLink';

const HeaderStyles = styled.header`
  display: flex;
  align-items: center;
  min-height: 8vh;
`;

function Header() {
  return (
    <HeaderStyles>
      <CustomNavLink to={APP_PATHS.HOME}>Home</CustomNavLink>
      <CustomNavLink to={APP_PATHS.ABOUT}>About</CustomNavLink>
    </HeaderStyles>
  );
}

export default Header;
