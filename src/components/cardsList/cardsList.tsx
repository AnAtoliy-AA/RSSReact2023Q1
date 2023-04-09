import Card from '@components/card/card';
import CardModal from '@components/card/cardModal';
import WaveAnimation from '@components/waveAnimation/waveAnimation';
import ApiService from '@services/api/apiService';
import { ICardValues } from '@services/card/card.service';
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
  const [isInfoLoading, setIsInfoLoading] = useState<boolean>(!!isLoading);

  const [additionalInfo, setAdditionalInfo] = useState<ICardValues>();

  const handleGetInfo = useCallback(async (videoId: string) => {
    setIsInfoLoading(true);
    const additionalInfoArray = await ApiService.getAdditionalInfo(videoId);
    setIsInfoLoading(false);
    if (Array.isArray(additionalInfoArray) && additionalInfoArray.length) {
      setIsModalOpen(true);
      setAdditionalInfo(additionalInfoArray?.[0]);
    }
  }, []);

  const handleCLoseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <>
      {(isInfoLoading || isLoading) && <WaveAnimation />}
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
