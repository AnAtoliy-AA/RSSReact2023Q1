import StyledButton from '@components/styledButton/styledButton';
import color from '@utils/styles/stylesUtils';
import styled from 'styled-components';
import { ICardProps } from './card';

export interface ICardModalProps extends ICardProps {
  onClose?: VoidFunction;
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color('neutral.overlay')};
  opacity: 0.5;
  z-index: 10;
`;

const CardModalContainer = styled.div`
  position: fixed;
  width: 80vw;
  height: 90vh;
  top: 5vh;
  background-color: ${color('neutral.card_background')};
  border-radius: 1rem;
  overflow: hidden;
  padding: 2vh;
  z-index: 20;
`;

const CountContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const TagsContainer = styled.div`
  display: flex;
  width: 80vw;
`;

function CardModal(props: ICardModalProps): JSX.Element {
  const {
    title,
    channelTitle,
    imageUrl,
    description,
    publishedAt,
    viewCount,
    likeCount,
    favoriteCount,
    commentCount,
    tags,
    onClose,
  } = props;

  return (
    <>
      <Overlay onClick={onClose} />
      <CardModalContainer>
        <StyledButton type="button" onClick={onClose}>
          X
        </StyledButton>
        <p>{title}</p>
        <p>{channelTitle}</p>
        <img src={imageUrl} alt={title} />
        <p>{description}</p>
        <p>{publishedAt}</p>
        <CountContainer>
          <p>Wievs: {viewCount}</p>
          <p>Likes: {likeCount}</p>
          <p>Favorites: {favoriteCount}</p>
          <p>Comments: {commentCount}</p>
        </CountContainer>
        <TagsContainer>
          {Array.isArray(tags) &&
            tags.length > 0 &&
            tags.map((tag) => <span key={tag}>#{tag}</span>)}
        </TagsContainer>
      </CardModalContainer>
    </>
  );
}

export default CardModal;
