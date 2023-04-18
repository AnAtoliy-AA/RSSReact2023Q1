import { Outlet } from 'react-router-dom';
import Header from '@components/header/header';
import styled from 'styled-components';

const StyledLayout = styled.div`
  text-align: center;
`;

function Layout() {
  return (
    <StyledLayout>
      <Header />
      <Outlet />
    </StyledLayout>
  );
}

export default Layout;
