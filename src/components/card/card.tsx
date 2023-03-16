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
  background-color: ${color('neutral.button_background')};
`;

const CardTitle = styled.h3``;

const CardContent = styled.div``;

const CardSubtitle = styled.h4``;

const CardDescription = styled.p``;

const CardDate = styled.div``;

function Card(props: CardProps) {
  const { title, channelTitle, imageUrl, description, publishedAt } = props;

  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>by: {channelTitle}</CardSubtitle>
      <img src={imageUrl} alt={title} />
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
