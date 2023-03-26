import { NOT_AVAILABLE_TEXT } from '@constants/common/common';
import color from '@utils/styles/stylesUtils';
import styled from 'styled-components';

export interface CardProps {
  title?: string;
  channelTitle?: string;
  imageUrl?: string;
  description?: string;
  publishedAt?: string;
}

export const SideCardContainer = styled.div`
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 15rem;
`;

const FrontSideContainer = styled(SideCardContainer)`
  transform: rotateY(0deg);
`;

export const CardTitle = styled.h2`
  width: 100%;
  color: ${color('neutral.card_title')};
`;

export const FrontCardTitle = styled(CardTitle)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const CardSubtitle = styled.h4`
  color: ${color('neutral.card_title')};
`;

const ImageWrapper = styled.div`
  width: 100%;

  img {
    width: 100%;
    max-width: 320px;
    max-height: 180px;

    filter: grayscale();
  }
`;

const CardContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardDescription = styled.p`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const CardDate = styled.div``;

function FrontCardSide(props: CardProps) {
  const { title, channelTitle, imageUrl, description, publishedAt } = props;

  return (
    <FrontSideContainer>
      <FrontCardTitle title={title}>{title}</FrontCardTitle>
      <CardSubtitle title={channelTitle}>by: {channelTitle}</CardSubtitle>
      <ImageWrapper>
        <img src={imageUrl} alt={title} />
      </ImageWrapper>
      <CardContent>
        <CardDescription title={description}>{description}</CardDescription>
        <CardDate>{publishedAt}</CardDate>
      </CardContent>
    </FrontSideContainer>
  );
}

FrontCardSide.defaultProps = {
  title: NOT_AVAILABLE_TEXT,
  channelTitle: NOT_AVAILABLE_TEXT,
  imageUrl: NOT_AVAILABLE_TEXT,
  description: NOT_AVAILABLE_TEXT,
  publishedAt: NOT_AVAILABLE_TEXT,
};

export default FrontCardSide;
