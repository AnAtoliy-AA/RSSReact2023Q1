import * as React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactNode } from 'react';
import color from '@utils/styles/stylesUtils';

const StyledNavLink = styled.button`
  max-height: 2rem;
  background-color: ${color('neutral.button_background')};

  .active {
    color: ${color('danger.text')};
  }

  .unselected {
    color: ${color('info.text')};
  }
`;

interface CustomNavLinkProps {
  to: string;
  children: ReactNode;
}

function CustomNavLink(props: CustomNavLinkProps) {
  const { to, children } = props;

  return (
    <StyledNavLink>
      <NavLink
        to={to}
        className={({ isActive }) => `nav-link ${isActive ? 'active' : 'unselected'}`}
      >
        {children}
      </NavLink>
    </StyledNavLink>
  );
}

export default CustomNavLink;
