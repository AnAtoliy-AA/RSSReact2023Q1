import { NOT_AVAILABLE_TEXT } from '@constants/common/common';
import styled from 'styled-components';
import { CardTitle, SideCardContainer } from './frontSide';

export interface CardProps {
  title?: string;
  description?: string;
  priority?: string;
}

const BackSideContainer = styled(SideCardContainer)`
  transform: rotateY(180deg);
`;

const CardDescription = styled.p`
  width: 100%;
`;

function BackCardSide(props: CardProps) {
  const { title, description, priority } = props;

  return (
    <BackSideContainer>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      {priority && <p>Priority: {priority}</p>}
    </BackSideContainer>
  );
}

BackCardSide.defaultProps = {
  title: NOT_AVAILABLE_TEXT,
  description: NOT_AVAILABLE_TEXT,
};

export default BackCardSide;
