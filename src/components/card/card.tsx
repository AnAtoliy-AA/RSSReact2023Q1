import color from '@utils/styles/stylesUtils';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import BackCardSide from './backSide';
import FrontCardSide from './frontSide';

export interface ICardProps {
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
  viewCount?: string | number;
  likeCount?: string | number;
  favoriteCount?: string | number;
  commentCount?: string | number;
  tags?: Array<string>;
  onGetInfo?: (videoId: string) => void;
}

interface IContainerProps {
  isFrontShown: boolean;
}

const CardContainer = styled.div<IContainerProps>`
  position: relative;
  width: 20rem;
  height: 450px;
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
`;

function Card(props: ICardProps): JSX.Element {
  const {
    videoId,
    title,
    channelTitle,
    imageUrl,
    description,
    publishedAt,
    priority,
    markMeAsCreator,
    confirmData,
    notifications,
    onGetInfo,
  } = props;
  const [isFrontShown, setIsFrontShown] = useState<boolean>(true);

  const handleRotate = useCallback(() => {
    setIsFrontShown((prev) => !prev);
  }, []);

  const handleGetInfo = useCallback(() => {
    if (onGetInfo && videoId) {
      onGetInfo(videoId);
    }
  }, [onGetInfo, videoId]);

  return (
    <CardContainer isFrontShown={isFrontShown}>
      <FrontCardSide
        videoId={videoId}
        title={title}
        description={description}
        imageUrl={imageUrl}
        publishedAt={publishedAt}
        channelTitle={channelTitle}
        onRotate={handleRotate}
        onGetInfo={handleGetInfo}
      />
      <BackCardSide
        title={title}
        description={description}
        priority={priority}
        markMeAsCreator={markMeAsCreator}
        confirmData={confirmData}
        notifications={notifications}
        onRotate={handleRotate}
      />
    </CardContainer>
  );
}

export default Card;
