import { NOT_AVAILABLE_TEXT } from '@constants/common/common';
import styled from 'styled-components';
import { CardTitle, SideCardContainer } from './frontSide';

export interface CardProps {
  title?: string;
  description?: string;
  priority?: string;
  markMeAsCreator?: string;
  confirmData?: string;
  send?: string;
  doNotSend?: string;
}

const BackSideContainer = styled(SideCardContainer)`
  transform: rotateY(180deg);
`;

const CardDescription = styled.p`
  width: 100%;
`;

function BackCardSide(props: CardProps) {
  const { title, description, priority, markMeAsCreator, send, doNotSend, confirmData } = props;

  return (
    <BackSideContainer>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      {priority && <p>Priority: {priority}</p>}
      {send && <p>Send notifications to me</p>}
      {doNotSend && <p>Don&#39;t send to me notifications</p>}
      {markMeAsCreator && <p>I&#39;ve marked as creator</p>}
      {confirmData && <p>Data confirmed by me</p>}
    </BackSideContainer>
  );
}

BackCardSide.defaultProps = {
  title: NOT_AVAILABLE_TEXT,
  description: NOT_AVAILABLE_TEXT,
};

export default BackCardSide;
