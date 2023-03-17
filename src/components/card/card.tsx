import color from '@utils/styles/stylesUtils';
import React from 'react';
import styled from 'styled-components';
import BackCardSide from './backSide';
import FrontCardSide from './frontSide';

export interface CardProps {
  title?: string;
  channelTitle?: string;
  imageUrl?: string;
  description?: string;
  publishedAt?: string;
}

interface ICardState {
  isFrontShown: boolean;
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
  cursor: pointer;
`;

class Card extends React.Component<CardProps, ICardState> {
  constructor(props: CardProps | Readonly<CardProps>) {
    super(props);
    this.state = { isFrontShown: true };
  }

  handleRotate = () => {
    const { isFrontShown } = this.state;

    this.setState({ isFrontShown: !isFrontShown });
  };

  render() {
    const { isFrontShown } = this.state;
    const { title, channelTitle, imageUrl, description, publishedAt } = this.props;

    return (
      <CardContainer isFrontShown={isFrontShown} onClick={this.handleRotate}>
        <FrontCardSide
          title={title}
          description={description}
          imageUrl={imageUrl}
          publishedAt={publishedAt}
          channelTitle={channelTitle}
        />
        <BackCardSide title={title} description={description} />
      </CardContainer>
    );
  }
}

export default Card;
