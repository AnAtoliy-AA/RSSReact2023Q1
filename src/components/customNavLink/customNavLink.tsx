import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactNode } from 'react';
import color from '@utils/styles/stylesUtils';
import StyledButton from '@components/styledButton/styledButton';

const StyledNavLink = styled(StyledButton)`
  .active {
    color: ${color('danger.text')};
    text-decoration: none;
    font-size: 1.5rem;
    text-transform: capitalize;

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
