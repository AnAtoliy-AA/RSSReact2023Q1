import React, { useEffect, useRef, useState } from 'react';
import StyledButton from '@components/styledButton/styledButton';
import styled from 'styled-components';
import { ICardValues } from '@services/card/card.service';
import FormService, { ICardDataOpts } from '@services/form/formService';
import color from '@utils/styles/stylesUtils';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import CustomFormControl from './formControl';

const CreteForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 450px;
`;

const CreateMessage = styled.p`
  font-size: 2rem;
  color: ${color('success.text')};
`;

const SubmitForm = styled(StyledButton)``;

interface CreateCardProps {
  addCard: (card: ICardValues) => void;
}

const DEFAULT_MESSAGE_TIME = 2 * 1000;

function CustomForm(props: CreateCardProps): JSX.Element {
  const { addCard } = props;

  const [isCardCreated, setIsCardCreated] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const timerRef = useRef<NodeJS.Timer>();

  useEffect(() => {
    return () => {
      if (timerRef?.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = (formData) => {
    const newCardData = FormService.createCardItemDto(formData as ICardDataOpts);
    addCard(newCardData as ICardValues);
    setIsCardCreated(true);

    timerRef.current = setTimeout(() => {
      setIsCardCreated(false);
      reset();
    }, DEFAULT_MESSAGE_TIME);
  };

  return (
    <CreteForm onSubmit={handleSubmit(onSubmit)}>
      {FormService.inputsArrayVocabulary.map((inputProps) => {
        const { id, name } = inputProps;
        return (
          <CustomFormControl
            key={id}
            inputProps={inputProps}
            register={register}
            isError={errors[name]}
          />
        );
      })}
      {isCardCreated ? <CreateMessage>Created!</CreateMessage> : <SubmitForm>Submit</SubmitForm>}
    </CreteForm>
  );
}

export default CustomForm;
