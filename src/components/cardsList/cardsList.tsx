import Card from '@components/card/card';
import CardModal from '@components/card/cardModal';
import WaveAnimation from '@components/waveAnimation/waveAnimation';
import { useGetAdditionalInfoByIdQuery } from '@services/api/searchService';
import CardService, { ICardValues } from '@services/card/card.service';
import color from '@utils/styles/stylesUtils';
import { useState, useCallback } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: ${color('neutral.background')};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

interface CardListProps {
  formattedCards: Array<ICardValues>;
  isLoading?: boolean;
}

function CardsList({ formattedCards, isLoading }: CardListProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [skip, setSkip] = useState<boolean>(true);
  const [videoId, setVideoId] = useState<string>();
  const { data, isFetching } = useGetAdditionalInfoByIdQuery(videoId, {
    skip,
  });
  const additionalInfoArray = CardService.formatCardsData(data?.items);
  const additionalInfo = additionalInfoArray?.[0];

  const handleGetInfo = useCallback((id: string) => {
    setVideoId(id);
    setSkip(false);
    setIsModalOpen(true);
  }, []);

  const handleCLoseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <>
      {(isFetching || isLoading) && <WaveAnimation />}
      <CardContainer>
        {isModalOpen && (
          <CardModal
            title={additionalInfo?.title}
            channelTitle={additionalInfo?.channelTitle}
            description={additionalInfo?.description}
            imageUrl={additionalInfo?.imageUrl}
            publishedAt={additionalInfo?.publishedAt}
            viewCount={additionalInfo?.viewCount}
            likeCount={additionalInfo?.likeCount}
            favoriteCount={additionalInfo?.favoriteCount}
            commentCount={additionalInfo?.commentCount}
            tags={additionalInfo?.tags}
            onClose={handleCLoseModal}
          />
        )}
        {formattedCards?.map((cardValues) => {
          const {
            id,
            title,
            description,
            imageUrl,
            publishedAt,
            channelTitle,
            priority,
            markMeAsCreator,
            confirmData,
            notifications,
          } = cardValues;

          return (
            <Card
              key={id}
              videoId={id}
              title={title}
              description={description}
              imageUrl={imageUrl}
              publishedAt={publishedAt}
              channelTitle={channelTitle}
              priority={priority}
              markMeAsCreator={markMeAsCreator}
              confirmData={confirmData}
              notifications={notifications}
              onGetInfo={handleGetInfo}
            />
          );
        })}
      </CardContainer>
    </>
  );
}

CardsList.defaultProps = {
  isLoading: false,
};

export default CardsList;
