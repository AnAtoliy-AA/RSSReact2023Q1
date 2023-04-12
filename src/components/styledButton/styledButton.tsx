import color from '@utils/styles/stylesUtils';
import styled from 'styled-components';

const StyledButton = styled.button`
  max-height: 4rem;
  border-radius: 1.5rem;
  padding: 0.5rem 1rem;
  background-color: ${color('neutral.button_background')};
  white-space: nowrap;
  cursor: pointer;
`;

export default StyledButton;
