import color from '@utils/styles/stylesUtils';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import BackCardSide from './backSide';
import FrontCardSide from './frontSide';

export interface ICardProps {
  title?: string;
  channelTitle?: string;
  imageUrl?: string;
  description?: string;
  priority?: string;
  publishedAt?: string;
  markMeAsCreator?: string;
  confirmData?: string;
  send?: string;
  doNotSend?: string;
}

interface IContainerProps {
  isFrontShown: boolean;
}

const CardContainer = styled.div<IContainerProps>`
  position: relative;
  width: 20rem;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0.5rem;
  border: 0.2rem solid ${color('neutral.card_title')};
  border-radius: 1rem;
  user-select: none;
  transform-style: preserve-3d;
  transform: rotateY(${(props: IContainerProps) => (props.isFrontShown ? '0deg' : '180deg')});
  transition: 300ms;
  background-color: ${color('neutral.card_background')};
  box-shadow: 5px ${color('neutral.shadow')};
  cursor: pointer;
`;

function Card(props: ICardProps): JSX.Element {
  const {
    title,
    channelTitle,
    imageUrl,
    description,
    publishedAt,
    priority,
    markMeAsCreator,
    confirmData,
    send,
    doNotSend,
  } = props;
  const [isFrontShown, setIsFrontShown] = useState<boolean>(true);

  const handleRotate = useCallback(() => {
    setIsFrontShown((prev) => !prev);
  }, []);

  return (
    <CardContainer isFrontShown={isFrontShown} onClick={handleRotate}>
      <FrontCardSide
        title={title}
        description={description}
        imageUrl={imageUrl}
        publishedAt={publishedAt}
        channelTitle={channelTitle}
      />
      <BackCardSide
        title={title}
        description={description}
        priority={priority}
        markMeAsCreator={markMeAsCreator}
        confirmData={confirmData}
        send={send}
        doNotSend={doNotSend}
      />
    </CardContainer>
  );
}

export default Card;
