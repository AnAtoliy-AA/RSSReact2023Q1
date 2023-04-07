import StyledButton from '@components/styledButton/styledButton';
import color from '@utils/styles/stylesUtils';
import React from 'react';
import styled from 'styled-components';

export interface ICardModalProps {
  videoId?: string;
  title?: string;
  channelTitle?: string;
  imageUrl?: string;
  description?: string;
  priority?: string;
  publishedAt?: string;
  markMeAsCreator?: string;
  confirmData?: string;
  notifications?: string;
  onClose?: VoidFunction;
}

const CardModalContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: ${color('neutral.card_background')};
  z-index: 20;
`;

function CardModal(props: ICardModalProps): JSX.Element {
  const { title, channelTitle, imageUrl, description, publishedAt, onClose } = props;

  return (
    <CardModalContainer>
      <p>TODO modal</p>
      <StyledButton type="button" onClick={onClose}>
        X
      </StyledButton>
      <p>{title}</p>
      <p>{channelTitle}</p>
      <img src={imageUrl} alt={title} />
      <p>{description}</p>
      <p>{publishedAt}</p>
    </CardModalContainer>
  );
}

export default CardModal;
