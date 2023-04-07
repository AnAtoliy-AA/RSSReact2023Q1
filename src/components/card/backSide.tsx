import { NOT_AVAILABLE_TEXT } from '@constants/common/common';
import styled from 'styled-components';
import { FormFields } from '@services/form/formService';
import rotateIcon from '@assets/icons/rotate.svg';
import StyledButton from '@components/styledButton/styledButton';
import { CardTitle, SideCardContainer } from './frontSide';

export interface CardProps {
  title?: string;
  description?: string;
  priority?: string;
  markMeAsCreator?: string;
  confirmData?: string;
  notifications?: string;
  onRotate?: VoidFunction;
}

const BackSideContainer = styled(SideCardContainer)`
  transform: rotateY(180deg);
`;

const CardDescription = styled.p`
  width: 100%;
`;

function BackCardSide(props: CardProps) {
  const { title, description, priority, markMeAsCreator, notifications, confirmData, onRotate } =
    props;

  return (
    <BackSideContainer>
      <StyledButton onClick={onRotate}>
        <img src={rotateIcon} alt="rotate" />
      </StyledButton>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      {priority && <p>Priority: {priority}</p>}
      {notifications === FormFields.SEND && <p>Send notifications to me</p>}
      {notifications === FormFields.DO_NOT_SEND && <p>Don&#39;t send to me notifications</p>}
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
