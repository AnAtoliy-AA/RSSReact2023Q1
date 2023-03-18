import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactNode } from 'react';
import color from '@utils/styles/stylesUtils';

const StyledNavLink = styled.button`
  max-height: 4rem;
  border-radius: 1.5rem;
  padding: 0.5rem 1rem;
  background-color: ${color('neutral.button_background')};

  .active {
    color: ${color('danger.text')};
    text-decoration: none;
    font-size: 1.5rem;

    &::before {
      content: '• ';
    }
  }

  .unselected {
    color: ${color('info.text')};

    &:hover {
      font-size: 1.2rem;
    }
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
