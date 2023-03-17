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

const CardContainer = styled.div`
  max-width: 25vw;
  height: 400px;
  margin: 10px;
  text-align: center;
  border-radius: 1rem;
  padding: 0.5rem;
  background-color: ${color('neutral.card_background')};
`;

const CardTitle = styled.h2`
  color: ${color('neutral.card_title')};
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

function Card(props: CardProps) {
  const { title, channelTitle, imageUrl, description, publishedAt } = props;

  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>by: {channelTitle}</CardSubtitle>
      <ImageWrapper>
        <img src={imageUrl} alt={title} />
      </ImageWrapper>
      <CardContent>
        <CardDescription>{description}</CardDescription>
        <CardDate>{publishedAt}</CardDate>
      </CardContent>
    </CardContainer>
  );
}

Card.defaultProps = {
  title: NOT_AVAILABLE_TEXT,
  channelTitle: NOT_AVAILABLE_TEXT,
  imageUrl: NOT_AVAILABLE_TEXT,
  description: NOT_AVAILABLE_TEXT,
  publishedAt: NOT_AVAILABLE_TEXT,
};

export default Card;
