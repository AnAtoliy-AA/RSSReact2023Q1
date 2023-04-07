import Card from '@components/card/card';
import CardModal from '@components/card/cardModal';
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
}

function CardsList(props: CardListProps) {
  const { formattedCards } = props;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [additionalInfo, setAdditionalInfo] = useState<ICardValues>();

  const handleGetInfo = useCallback(async (videoId: string) => {
    const additionalInfoArray = await ApiService.getAdditionalInfo(videoId);

    if (Array.isArray(additionalInfoArray) && additionalInfoArray.length) {
      setIsModalOpen(true);
      setAdditionalInfo(additionalInfoArray?.[0]);
    }
  }, []);

  const handleCLoseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <CardContainer>
      {isModalOpen && (
        <CardModal description={additionalInfo?.description} onClose={handleCLoseModal} />
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
  );
}

export default CardsList;
