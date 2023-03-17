import styled from 'styled-components';
import APP_PATHS from '@constants/appPath/appPath';
import CustomNavLink from '@components/customNavLink/customNavLink';
import ShowTheLocationWithRouter from '@components/showLocation/showLocation';

const HeaderStyles = styled.header`
  display: flex;
  align-items: center;
  min-height: 8vh;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

const NavContainer = styled.div`
  width: 15rem;
  display: flex;
  justify-content: space-around;
`;

function Header() {
  return (
    <HeaderStyles>
      <ShowTheLocationWithRouter />
      <NavContainer>
        <CustomNavLink to={APP_PATHS.HOME}>Home</CustomNavLink>
        <CustomNavLink to={APP_PATHS.ABOUT}>About</CustomNavLink>
      </NavContainer>
    </HeaderStyles>
  );
}

export default Header;
